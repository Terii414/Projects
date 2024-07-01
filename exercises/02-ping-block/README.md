# `02` Block Ping Requests

Although they may seem harmless, ping requests can pose a security vulnerability if left allowed on your server. An external person can easily identify the server's IP address handling a certain domain through a ping request.

For example, if you ping google.com, you can see the IP address that processes the request.

## 📝 Instructions:

1. Verify that you have the iptables package installed; if not, [install iptables](https://4geeks.com/es/lesson/intro-a-seguridad-de-linux#instalacion-de-iptables).

2. Create a rule to block incoming ping requests.

## 💡 Hint:

- `iptables` is a root command. Even if you have it installed, it is only available from the root console.
- You can use another virtual machine in NAT network or host-only connection to test ping and verify the rule's functionality.