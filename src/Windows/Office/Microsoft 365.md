---
title: Microsoft 365
---

- [How to manage Office 365 ProPlus Channels for IT Pros](https://techcommunity.microsoft.com/t5/office-365-blog/how-to-manage-office-365-proplus-channels-for-it-pros/ba-p/795813)
- [Microsoft 365 和 Office 2024 之间的区别是什么](https://support.microsoft.com/zh-cn/office/microsoft-365-%E5%92%8C-office-2024-%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88-ed447ebf-6060-46f9-9e90-a239bd27eb96)
- [Microsoft 365 应用版的更新历史记录](https://learn.microsoft.com/zh-cn/officeupdates/update-history-microsoft365-apps-by-date)

## Excel

[焦点单元格](https://learn.microsoft.com/zh-cn/answers/questions/2122338/o365-excel)：

```
Version 2410 (Build 18118.20000) 或更高版本
```

## Retail

产品名称：

- **Microsoft 365 Professional Plus**：O365ProPlusRetail

## ODT

- [计划从旧版 Office 升级到 Microsoft 365 应用版](https://learn.microsoft.com/zh-cn/microsoft-365-apps/end-of-support/plan-upgrade-older-versions-office)

配置示例：

```xml
<Configuration>
  <Add OfficeClientEdition="64" Channel="Current">
    <Product ID="O365ProPlusRetail">
      <Language ID="zh-cn" />
      <ExcludeApp ID="Access" />
      <ExcludeApp ID="Groove" />
      <ExcludeApp ID="Lync" />
      <ExcludeApp ID="OneDrive" />
      <ExcludeApp ID="OneNote" />
      <ExcludeApp ID="Outlook" />
      <ExcludeApp ID="OutlookForWindows" />
      <ExcludeApp ID="Publisher" />
      <ExcludeApp ID="Teams" />
    </Product>
  </Add>
  <RemoveMSI />
  <Display Level="Full" AcceptEULA="True" />
</Configuration>
```

## KMS

- [如何利用 KMS 方法，启用 Microsoft Office 365](https://itkb.ddns.net/%E5%A6%82%E4%BD%95%E5%88%A9%E7%94%A8kms%E6%96%B9%E6%B3%95%E2%80%A7%E5%95%9F%E7%94%A8microsoft-office-365/)

```powershell
# 64位版本
cd "C:\Program Files\Microsoft Office\root\Office16"

# 安装KMS许可证
foreach ($x in Get-ChildItem ..\Licenses16\ProPlus2021VL_KMS*.xrm-ms -name) {cscript ospp.vbs /inslic:"..\Licenses16\$x"}

cscript "ospp.vbs" /inpkey:FXYTK-NJJ8C-GB6DW-3DYQT-6F7TH
cscript "ospp.vbs" /sethst:kms.03k.org
cscript "ospp.vbs" /act
cscript "ospp.vbs" /dstatus
```

### Office Tool Plus

- [手把手教你安装激活 Office 365](https://www.bilibili.com/opus/504834076636320183)

在许可证管理中，卸载所有许可证。之后，在许可证管理中，选择「Office Mondo 2016 - 批量许可证」进行安装。

## PowerShell

- [用一种全新的方式打开 Office Tool Plus](https://www.coolhub.top/archives/267)
- [一行代码实现 Office/Visio/Project 的下载+安装+激活](https://www.11zhang.com/1260.html)

