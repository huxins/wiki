(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{457:function(a,t,s){"use strict";s.r(t);var e=s(44),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"centos-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-7"}},[a._v("#")]),a._v(" centos 7")]),a._v(" "),s("h2",{attrs:{id:"语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语言"}},[a._v("#")]),a._v(" 语言")]),a._v(" "),s("p",[a._v("查看系统当前语言包")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("locale\n")])])]),s("p",[a._v("查看系统拥有语言包")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("locale -a\n")])])]),s("p",[s("em",[a._v("（zh_CN.UTF-8是简体中文，如果没有zh_CN.UTF-8,就安装语言包，如果存在可以直接设置)")])]),a._v(" "),s("p",[a._v("安装简体中文语言包")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" kde-l10n-Chinese\n")])])]),s("p",[a._v("设置为中文")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 临时修改")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("LANG")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zh_CN.UTF-8"')]),a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#修改为中文")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("LANG")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en_US.UTF-8"')]),a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#修改为英文")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 永久修改(方法一)")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vi /etc/locale.conf")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("LANG")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("zh_CN.UTF8\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 永久修改(方法二)")]),a._v("\nlocalectl set-locale "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("LANG")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("zh_CN.UTF8\n")])])]),s("h2",{attrs:{id:"时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间"}},[a._v("#")]),a._v(" 时间")]),a._v(" "),s("p",[a._v("修改时区为亚洲上海")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\ntimedatectl\ntimedatectl list-timezones\ntimedatectl set-timezone Asia/Shanghai\n")])])]),s("h2",{attrs:{id:"网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络"}},[a._v("#")]),a._v(" 网络")]),a._v(" "),s("p",[a._v("设置 IP")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -ltr /etc/sysconfig/network-scripts/ifcfg-*\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/sysconfig/network-scripts/ifcfg-p4p1\n")])])]),s("p",[a._v("静态配置文件")]),a._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("TYPE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("Ethernet")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("PROXY_METHOD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("none")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("BROWSER_ONLY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("no")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# dhcp static")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("BOOTPROTO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("static")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("DEFROUTE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("yes")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("IPV4_FAILURE_FATAL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("no")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("IPV6INIT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("yes")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("IPV6_AUTOCONF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("yes")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("IPV6_DEFROUTE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("yes")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("IPV6_FAILURE_FATAL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("no")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("IPV6_ADDR_GEN_MODE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("stable-privacy")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("enp3s0")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("UUID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("4f54a45c-1eb9-4ce5-a1c2-9956f340921e")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("DEVICE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("enp3s0")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("ONBOOT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("yes")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("IPADDR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("192.168.1.15")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# NETMASK=255.255.255.0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("PREFIX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("24")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("GATEWAY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("192.168.1.1")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("DNS1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("119.29.29.29")]),a._v('"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("IPV6_PRIVACY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v('"'),s("span",{pre:!0,attrs:{class:"token inner-value"}},[a._v("no")]),a._v('"')]),a._v("\n")])])]),s("p",[a._v("新增网卡需要手动增加配置文件")]),a._v(" "),s("p",[a._v("查看新加网卡的UUID信息，记录UUID值")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("nmcli con show\n")])])]),s("p",[a._v("重启网络")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl restart network\n")])])]),s("h2",{attrs:{id:"主机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主机"}},[a._v("#")]),a._v(" 主机")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cat /etc/hostname")]),a._v("\nhostnamectl set-hostname name --static\nhostnamectl status\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);