(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{388:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vpn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vpn"}},[t._v("#")]),t._v(" VPN")]),t._v(" "),a("h2",{attrs:{id:"pptp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pptp"}},[t._v("#")]),t._v(" PPTP")]),t._v(" "),a("p",[t._v("TCP: 1723")]),t._v(" "),a("h3",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),a("p",[t._v("修改windows系统PPTP连接使用的MTU值")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("netsh interface ipv4 show interfaces\nnetsh interface ipv4 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" subinterface "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"31"')]),t._v(" mtu=1396 store=persistent\n")])])]),a("p",[t._v("路由表解释")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("route print "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("4\n")])])]),a("p",[t._v("删除默认设置")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("route delete 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0\n")])])]),a("p",[t._v("内网路由，192.168.10.245为VPN网关")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("route add 192"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("168"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0 mask 255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0 192"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("168"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("245 –p\n")])])]),a("p",[a("a",{attrs:{href:"http://www.jswh.me/%E5%85%B6%E4%BB%96/windows-auto-pptp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows登录自动化 PPTP"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bat extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ipconfig | findstr /n 172\\.17\\.0\\.[0-9]*\nIF NOT ERRORLEVEL 1 ( \n    ipconfig | findstr /n 192\\.168\\.10\\.[0-9]*\n    IF ERRORLEVEL 1 ( \n        echo AT COMPANY AND NO PPTP.\n        rasdial <VPN NAME> <USERNAME> <PASSWORD>\n        route ADD 10.0.0.0 MASK 255.0.0.0 10.4.90.1\n    )\n)\n")])])]),a("h3",{attrs:{id:"centos-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-7"}},[t._v("#")]),t._v(" CentOS 7")]),t._v(" "),a("p",[t._v("检查是否支持PPTP，满足一条即可")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("modprobe ppp-compress-18 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" ok "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#返回OK")]),t._v("\nzgrep MPPE /proc/config.gz "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#返回CONFIG_PPP_MPPE=y 或 =m")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /dev/net/tun "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#返回cat: /dev/net/tun: File descriptor in bad state")]),t._v("\n")])])]),a("p",[t._v("安装 PPP，pptpd")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y ppp\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y epel-release\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y pptpd\n")])])]),a("p",[t._v("修改dns信息")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/ppp/options.pptpd\nms-dns "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("119.29")]),t._v(".29.29\nms-dns "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("114.114")]),t._v(".114.114\nnologfd\nlogfile /var/log/pptpd.log\n")])])]),a("p",[t._v("vpn 账户密码")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/ppp/chap-secrets\nadmin pptpd password * "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# VPN账号 + 服务类型 + VPN密码 + IP")]),t._v("\n")])])]),a("p",[t._v("设置VPN内网IP段")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/pptpd.conf\nlocalip "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务器的内部网关地址")]),t._v("\nremoteip "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.16")]),t._v(".1.100-110 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分配给客户端的地址,一般是内网网段地址")]),t._v("\n")])])]),a("p",[t._v("修改内核参数支持内核转发")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/sysctl.conf\nnet.ipv4.ip_forward"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n$ sysctl -p\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /proc/sys/net/ipv4/ip_forward\n")])])]),a("p",[t._v("日志")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1、上线日志")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/ppp/ip-up\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PEERNAME")]),t._v(" 分配IP: "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$5")]),t._v(" 登录IP: "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$6")]),t._v(" 登录时间: "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),t._v(" -d today +%F_%T"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /var/log/pptpd.log\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2、下线日志")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/ppp/ip-down\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PEERNAME")]),t._v(" 下线IP: "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$6")]),t._v(" 下线时间: "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),t._v(" -d today +%F_%T"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /var/log/pptpd.log\n")])])]),a("p",[t._v("设置最大传输单元")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/ppp/ip-up\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# exit 0 行前添加")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1450")]),t._v("\n\niptables -A FORWARD -p tcp --syn -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.0/24 -j TCPMSS --set-mss "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1396")]),t._v("\niptables -A FORWARD -p tcp -m tcp --tcp-flags SYN,RST SYN -j TCPMSS --clamp-mss-to-pmtu\n")])])]),a("p",[t._v("NAT 转发")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 192.168.9.0/24,取决于你 /etc/pptpd.conf 里的 local IP,表示的是你 VPN 客户端分配的 IP 段.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" iptables -A INPUT -p gre -j ACCEPT \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" iptables -A INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1723")]),t._v(" -j ACCEPT\niptables -t nat -A POSTROUTING -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/24 -o eth0 -j MASQUERADE\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# iptables -t nat -A POSTROUTING -s 192.168.0.0/255.255.255.0 -o eth0 -j SNAT --to-source 172.27.0.15")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -tunlp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1723")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /etc/rc.d/rc.local 自启")]),t._v("\n")])])]),a("h2",{attrs:{id:"openconnect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openconnect"}},[t._v("#")]),t._v(" openconnect")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://beijing2b.com/splitting-network-traffic-based-on-destinations/",target:"_blank",rel:"noopener noreferrer"}},[t._v("野生思科分离隧道"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"nebula"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nebula"}},[t._v("#")]),t._v(" nebula")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/slackhq/nebula",target:"_blank",rel:"noopener noreferrer"}},[t._v("nebula"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://v2ex.com/t/636088",target:"_blank",rel:"noopener noreferrer"}},[t._v("让 Nebula 可以在 Windows 下作为服务自启动"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://runtime.pw/nebula-tutorials/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nebula 简单教程"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://beijing2b.com/nebula/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nebula初探"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("下载 nebula")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/slackhq/nebula/releases/download/v1.2.0/nebula-linux-amd64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf nebula-linux-amd64.tar.gz\n")])])]),a("p",[t._v("生成主证书 "),a("code",[t._v("CA")]),t._v("，后面所有节点证书都是这个主证书签名的，这个命令将生成 "),a("code",[t._v("ca.crt")]),t._v(" 与 "),a("code",[t._v("ca.key")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./nebula-cert ca -name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"home-sh"')]),t._v("\n")])])]),a("p",[t._v("为各节点签发证书，分别为lighthouse、buf、win10")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./nebula-cert sign -name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lighthouse"')]),t._v(" -ip "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.250.1/24"')]),t._v("\n./nebula-cert sign -name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"win10"')]),t._v(" -ip "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.250.3/24"')]),t._v(" -groups "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"g1, g2"')]),t._v("\n./nebula-cert sign -name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"buf"')]),t._v(" -ip "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.250.100/24"')]),t._v(" -groups "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"g1, g2"')]),t._v("\n")])])]),a("p",[t._v("配置文件集中管理")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /etc/nebula\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" ca.crt /etc/nebula\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" lighthouse.* /etc/nebula/\n")])])]),a("p",[t._v("生成一个配置文件")]),t._v(" "),a("blockquote",[a("p",[t._v("https://github.com/slackhq/nebula/blob/master/examples/config.yml")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/nebula/lighthouse-config.yaml\n")])])]),a("p",[t._v("内容如下")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pki")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ca")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /etc/nebula/ca.crt\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /etc/nebula/lighthouse.crt\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /etc/nebula/lighthouse.key\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("static_host_map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"192.168.250.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lighthouse1.example.com:4242"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lighthouse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("am_lighthouse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这行只有“灯塔”才有")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以下两行一定要注释掉")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#hosts:")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#  - "192.168.250.1"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.0.0.0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4242")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("punchy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("punch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("respond")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 网卡名字")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nbl\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("drop_local_broadcast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("drop_multicast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tx_queue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mtu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1300")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#- mtu: 8800")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  route: 10.0.0.0/16 #这里可以分发路由表，一行聚合不了的可以写多行，下面的覆盖上面的")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" info\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" text\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("firewall")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conntrack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tcp_timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 120h\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("udp_timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3m\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default_timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10m\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max_connections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("outbound")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 放开所有出站")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inbound")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 放开各节点所有流量，这里可以有不同的粒度，甚至有类似云主机那种安全组的概念")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any\n")])])]),a("p",[t._v("运行")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("./nebula -config /etc/nebula/lighthouse-config.yaml\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);