#!/bin/bash
# Simple Debian Update Script
echo "Updating system..."
sudo apt update && sudo apt upgrade -y
echo "Update completed!"
