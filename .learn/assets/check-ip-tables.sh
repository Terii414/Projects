#!/bin/bash

function generar_arreglo_json() {
  # Verificar si se proporcionó un comando
  if [ $# -eq 0 ]; then
    echo "Error: Se debe especificar un comando."
    return 1
  fi

  # Ejecutar el comando y capturar la salida
  comando="$1"
  salida=$(eval "$comando")

  # Inicializar el arreglo JSON
  array=()

  # Convertir cada línea de salida en un objeto JSON y agregarlo al arreglo
  while read -r line; do
    array+=("\"$line\"")
  done <<< "$salida"

  # Imprimir el arreglo JSON
  echo "[$(IFS=','; echo "${array[*]}")]"
}

comando="iptables -L INPUT | grep icmp"
iptables_output=$(generar_arreglo_json "$comando")

data='{"iptables":'$iptables_output'}'

if [ ! -z "$2" ]; then
  echo "Data:"
  echo "$data"
fi

# Guardar los datos en el archivo report.json
echo "$data" > report.json

echo "Data saved to report.json"
