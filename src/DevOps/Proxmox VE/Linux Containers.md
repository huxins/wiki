---
title: Linux Containers
---

## Control Group

- [old systemd (< v232) detected, container won't run in a pure cgroupv2 environment - *Proxmox*](https://forum.proxmox.com/threads/solved-warn-old-systemd-v232-detected-container-wont-run-in-a-pure-cgroupv2-environment.114736/)
- [Unified cgroup v2 layout Upgrade warning PVE 6.4 to 7.0 - *Proxmox*](https://forum.proxmox.com/threads/unified-cgroup-v2-layout-upgrade-warning-pve-6-4-to-7-0.92459/)
- [CGroup Version Compatibility - *Proxmox*](https://pve.proxmox.com/pve-docs/chapter-pct.html#pct_cgroup_compat)
- [Editing the Kernel Commandline - *Proxmox*](https://pve.proxmox.com/pve-docs/chapter-sysadmin.html#sysboot_edit_kernel_cmdline)

CentOS 7 和 Ubuntu 16.10 的 `systemd` 版本太旧，无法在 `cgroupv2` 环境中运行。

```
WARN: old systemd (< v232) detected, container won't run in a pure cgroupv2 environment! Please see documentation -> container -> cgroup version.
```

**解决方法**：切换回 `legacy cgroup`

> 从 Proxmox VE 9.0 开始，将不再支持 `legacy controller`。

编辑 `/etc/default/grub`：

```
GRUB_CMDLINE_LINUX_DEFAULT="systemd.unified_cgroup_hierarchy=0 quiet"
```

运行以下命令，会将其内容附加到 `/boot/grub/grub.cfg` 中的所有 Linux 条目：

```sh
update-grub
```

