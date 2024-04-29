# `02` Bloquea las peticiones de ping

Aunque parezcan inofensivas, las peticiones de ping pueden representar una vulnerabilidad de seguridad si se dejan permitidas en tu servidor. Una persona externa puede identificar muy fácilmente la ip del servidor que maneja cierto dominio mediante una petición de ping.

Por ejemplo, si haces ping a google.com puedes ver la dirección IP que procesa la petición.

## 📝 Instrucciones:

1. Verifica que tengas instalado el paquete iptables, de no ser asi instalalo.

2. Crea un regla para bloquear las peticiones de ping entrantes.

## 💡 Pista:

> - 'iptables' es un comando de root. Aun si lo tienes instalado, solo esta disponible desde la consola de root.
>
> - Puedes utilizar otra máquina virtual en red NAT o una conexion solo-anfitrion para hacer pruebas de ping y verificar el funcionamiento de la regla.
