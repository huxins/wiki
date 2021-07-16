(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{380:function(t,s,e){"use strict";e.r(s);var a=e(44),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"dns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),e("h2",{attrs:{id:"smartdns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#smartdns"}},[t._v("#")]),t._v(" SmartDNS")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/pymumu/smartdns",target:"_blank",rel:"noopener noreferrer"}},[t._v("SmartDNS"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.rinvay.cc/archives/719/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Debian9使用Clash做透明网关配合Smartdns最快DNS解析"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("增加配置")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /usr/lib/systemd/system/smartdns.service\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("754")]),t._v(" /usr/lib/systemd/system/smartdns.service\n$ systemctl daemon-reload\n")])])]),e("p",[t._v("systemd")]),t._v(" "),e("div",{staticClass:"language-ini extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token header"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("Unit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Description")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("smart dns server")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("After")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("network.target")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("StartLimitBurst")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("StartLimitIntervalSec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("60")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token header"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("Service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("forking")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("PIDFile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/var/run/smartdns.pid")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#EnvironmentFile=/etc/default/smartdns")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("ExecStart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/home/software/smartdns/smartdns -p /var/run/smartdns.pid -c /home/software/smartdns/smartdns.conf")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("KillMode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("process")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Restart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("always")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("RestartSec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("2")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token header"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("Install")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("WantedBy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("multi-user.target")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Alias")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("smartdns.service")]),t._v("\n")])])]),e("p",[t._v("smartdns.conf")]),t._v(" "),e("div",{staticClass:"language-ini extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[t._v("server-name smartdns\nbind :20053 -group cn -no-rule-addr -no-rule-nameserver -no-rule-ipset -no-rule-soa -no-dualstack-selection\nbind-tcp :20053 -group cn -no-rule-addr -no-rule-nameserver -no-rule-ipset -no-rule-soa -no-dualstack-selection\nbind :20054 -group us -no-rule-addr -no-rule-nameserver -no-rule-ipset -no-rule-soa -no-dualstack-selection\nbind-tcp :20054 -group us -no-rule-addr -no-rule-nameserver -no-rule-ipset -no-rule-soa -no-dualstack-selection\ncache-size 512\ntcp-idle-time 120\nrr-ttl 600\nrr-ttl-min 60\nrr-ttl-max 600\nlog-level fatal\nlog-file /home/software/smartdns/smartdns.log\nlog-size 128K\nlog-num 2\nspeed-check-mode tcp:443,tcp:80,ping\nprefetch-domain yes\nserve-expired yes\nserve-expired-ttl 0\nserver 119.29.29.29:53 -group cn\nserver 223.5.5.5:53 -group cn\nserver 202.141.162.123:5353 -group cn\nserver-tcp 101.6.6.6:5353 -group cn\nserver-tcp 8.8.8.8:53 -group us\nserver-tcp 80.80.80.80:53 -group us \nserver-tcp 208.67.222.222:5353 -group us\nserver-tcp 208.67.222.222:443 -group us\nserver-tcp 1.1.1.1:53 -group us\nserver-tls 8.8.8.8:853 -group us\nserver-tls 1.1.1.1:853 -group us\nserver-https https://cloudflare-dns.com/dns-query -group us\nserver-https https://dns.google/dns-query -group us\n")])])]),e("h2",{attrs:{id:"dnsmasq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dnsmasq"}},[t._v("#")]),t._v(" Dnsmasq")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.hi-linux.com/posts/30947.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("利用 Dnsmasq 部署 DNS 服务"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"dhcp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dhcp"}},[t._v("#")]),t._v(" DHCP")]),t._v(" "),e("p",[t._v("第一行是给特定的MAC打上标签 "),e("code",[t._v("v")]),t._v(" 并且指定IP地址\n第二行作用是给打了这个 "),e("code",[t._v("v")]),t._v(" 标机的主机定制网关地址,\n当然按第二行的格式还可以指定其他很多参数，比如dns")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dhcp-host=set:v,06:D8:F5:C9:36:0E,192.168.9.2,pixel_3\ndhcp-option=tag:v,3,192.168.9.60\ndhcp-option=tag:v,6,192.168.9.60\n")])])]),e("p",[t._v("Openwrt")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://my.oschina.net/kblack/blog/3019722",target:"_blank",rel:"noopener noreferrer"}},[t._v("openwrt DHCP 指定不同的网关"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("config host\n        option ip       '192.168.1.3'\n        option mac      '11:22:33:44:55:66'\n        option tag      'need_outernet'\n\nconfig tag 'need_outernet'\n        list dhcp_option '3, 192.168.1.2'\n        option force '1'\n")])])]),e("h2",{attrs:{id:"overture"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overture"}},[t._v("#")]),t._v(" Overture")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/shawn1m/overture",target:"_blank",rel:"noopener noreferrer"}},[t._v("Overture"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);