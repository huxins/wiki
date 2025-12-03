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

## ODT

- [Office Deployment Tool](https://docs.microsoft.com/deployoffice/overview-office-deployment-tool)
- [Office Customization Tool](https://config.office.com/deploymentsettings)
- [Office 部署工具的配置选项](https://docs.microsoft.com/zh-cn/deployoffice/office-deployment-tool-configuration-options)

KMS 许可：

```powershell
cd "C:\Program Files\Microsoft Office\Office16"

cscript ospp.vbs /sethst:s1.kms.cx
cscript ospp.vbs /act
```

下载所需文件：

```powershell
setup.exe /download Configuration.xml
setup.exe /configure Configuration.xml
```

配置示例：

```xml
<!--  文件末尾的三个配置依次为：
      移除之前以 MSI 方式安装的 Office
      静默安装
      开启更新  -->

<Configuration>

  <Add OfficeClientEdition="64"
	   Channel="PerpetualVL2019">
	   
    <Product ID="ProPlus2019Volume" PIDKEY="NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP">
      <Language ID="zh-cn" />        
      <ExcludeApp ID="Access" />
      <ExcludeApp ID="Groove" />
      <ExcludeApp ID="Lync" />
      <ExcludeApp ID="OneDrive" />
      <ExcludeApp ID="OneNote" />
      <ExcludeApp ID="Outlook" />
      <ExcludeApp ID="Publisher" />
    </Product>

  </Add>

  <RemoveMSI All="True" /> 
  <Display Level="Full" AcceptEULA="TRUE" /> 
  <Updates Enabled="TRUE"
           Channel="PerpetualVL2019" />

</Configuration>
```

