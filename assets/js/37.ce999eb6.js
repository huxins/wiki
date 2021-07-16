(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{395:function(a,e,s){"use strict";s.r(e);var t=s(44),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"acme-sh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acme-sh"}},[a._v("#")]),a._v(" Acme.sh")]),a._v(" "),s("p",[s("code",[a._v("acme.sh")]),a._v(" 是一个实现了 acme 协议的脚本，可以从 Let's Encrypt 生成免费的SSL证书")]),a._v(" "),s("h2",{attrs:{id:"配合解析商-api-申请泛域名证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配合解析商-api-申请泛域名证书"}},[a._v("#")]),a._v(" 配合解析商 API 申请泛域名证书")]),a._v(" "),s("h3",{attrs:{id:"_1、部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、部署"}},[a._v("#")]),a._v(" 1、部署")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" https://get.acme.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v("\n")])])]),s("h3",{attrs:{id:"_2、获取-dnspod-的-api-信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、获取-dnspod-的-api-信息"}},[a._v("#")]),a._v(" 2、获取 DNSPod 的 API 信息")]),a._v(" "),s("p",[s("code",[a._v("acme.sh")]),a._v(" 支持数种解析商的 API，可以自动添加 TXT 记录来验证，不需要人工操作，十分便捷")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/acmesh-official/acme.sh/blob/master/dnsapi/README.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("支持详情"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("设置临时环境变量，这个临时环境变量只需配置这一次，当成功申请证书后，API 信息会被自动保存在 "),s("code",[a._v("~/.acme.sh/account.conf")]),a._v(" ，下次你使用 "),s("code",[a._v("acme.sh")]),a._v(" 的时候会被自动使用")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DP_Id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"id"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DP_Key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"key"')]),a._v("\n")])])]),s("h3",{attrs:{id:"_3、开始申请证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、开始申请证书"}},[a._v("#")]),a._v(" 3、开始申请证书")]),a._v(" "),s("p",[a._v("`--dns dns_dp 参数表示使用 DNSPod 的 API，如果是其他解析商，同样的，从上面那个链接可以看到对应参数")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 申请泛域名证书")]),a._v("\n~/.acme.sh/acme.sh --issue --dns dns_dp -d example.com -d "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'*.example.com'")]),a._v("\n")])])]),s("h3",{attrs:{id:"_4、得到证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、得到证书"}},[a._v("#")]),a._v(" 4、得到证书")]),a._v(" "),s("p",[a._v("申请完成后屏显会输出证书路径")]),a._v(" "),s("p",[a._v("证书是 "),s("code",[a._v("fullchain.cer")]),a._v("\n密匙是 "),s("code",[a._v("example.com.key")])]),a._v(" "),s("p",[a._v("证书默认是在 "),s("code",[a._v("~/.acme.sh/")]),a._v(" 中生成，不建议直接使用该路径填写至 nginx 等配置中，而是使用 "),s("code",[a._v("--installcert")]),a._v(" 命令，具体请参考 "),s("a",{attrs:{href:"https://github.com/acmesh-official/acme.sh/wiki/%E8%AF%B4%E6%98%8E#3-copy%E5%AE%89%E8%A3%85-%E8%AF%81%E4%B9%A6",target:"_blank",rel:"noopener noreferrer"}},[a._v("copy/安装 证书"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[a._v("#")]),a._v(" Reference")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/acmesh-official/acme.sh/wiki/%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"}},[a._v("acme.sh"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://moe.best/tutorial/acme-le-wc.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("acme.sh 教程"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);