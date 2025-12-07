---
title: QEMU Guest Agent
---

- [Qemu-guest-agent - *Proxmox VE*](https://pve.proxmox.com/wiki/Qemu-guest-agent)
- [Qemu Guest Agent 原理简介](https://qkxu.github.io/2019/03/24/Qemu-Guest-Agent-(QGA)%E5%8E%9F%E7%90%86%E7%AE%80%E4%BB%8B.html)

## OpenWrt

```bash
# 需添加串行设备
opkg update
opkg install qemu-ga
```

## CentOS

```bash
# 需添加串行设备
yum install qemu-guest-agent
systemctl enable qemu-guest-agent
```

## Windows

- [VirtIO](https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/)
- [Guest Agent not running - *Proxmox VE*](https://forum.proxmox.com/threads/guest-agent-not-running.74587/)

分别安装 VirtIO 网卡驱动、virtio-win-gt-x64、qemu-ga-x86_64。

