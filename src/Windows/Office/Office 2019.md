---
title: Office 2019
---

- [ospp.vbs 指令码](https://learn.microsoft.com/zh-tw/office/volume-license-activation/tools-to-manage-volume-activation-of-office#the-osppvbs-script)
- [Office GVLK](https://docs.microsoft.com/zh-cn/DeployOffice/vlactivation/gvlks)

## Retail

- [Office 2019 ISO images](https://gist.github.com/Issykul/6ac3395ded8d7869bca31a4a2de23adc)

微软零售版下载链接格式：

```
https://officecdn.microsoft.com/db/492350F6-3A01-4F97-B9C0-C7C6DDF67D60/media/zh-cn/{Product name}.img
```

产品名称：

- **Office 2019 Professional Plus**：ProPlus2019Retail

更新信息：

```
updated 2025-12-03
Version 2508 (Build 19127.20302)
```

KMS 许可：

```powershell
# 64位版本
cd "C:\Program Files\Microsoft Office\Office16"

# 安装KMS许可证
foreach ($x in Get-ChildItem ..\root\Licenses16\*_KMS*.xrm-ms -name) {cscript ospp.vbs /inslic:"..\root\Licenses16\$x"}

cscript "ospp.vbs" /inpkey:[GVLK]
cscript "ospp.vbs" /sethst:kms.03k.org
cscript "ospp.vbs" /act
cscript "ospp.vbs" /dstatus

# 要卸载的密钥后5位
cscript "ospp.vbs" /unpkey:XXXXX
```

