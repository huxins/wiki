---
title: KMS
---

- [KMS 主机列表](https://www.coolhub.top/tech-articles/kms_list.html)

KMS 许可服务器：

- kms.03k.org
- s1.kms.cx
- kms.loli.beer
- kms-default.cangshui.net

## Windows

- [KMS 客户端激活和产品密钥](https://docs.microsoft.com/zh-cn/windows-server/get-started/kmsclientkeys)
- [slmgr.vbs 指令码](https://learn.microsoft.com/zh-tw/office/volume-license-activation/tools-to-manage-volume-activation-of-office#the-slmgrvbs-script)

```powershell
wmic os get caption
slmgr.vbs /upk
slmgr.vbs /ipk [GVLK]

slmgr.vbs /skms kms.loli.beer
slmgr.vbs /ato
slmgr.vbs /xpr
slmgr.vbs /dli
```

## KMS Emulator

- [Wind4/vlmcsd](https://github.com/Wind4/vlmcsd)
- [kkkgo/vlmcsd](https://github.com/kkkgo/vlmcsd)

