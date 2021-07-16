(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{474:function(t,a,e){"use strict";e.r(a);var s=e(44),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"wireguard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wireguard"}},[t._v("#")]),t._v(" wireguard")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/atrandys/wireguard/tree/master",target:"_blank",rel:"noopener noreferrer"}},[t._v("WireGuard 安装脚本"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/pirate/wireguard-docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("wireguard-docs"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.v2ex.com/t/687449",target:"_blank",rel:"noopener noreferrer"}},[t._v("只有 4000 行代码的 WireGuard 不权威指南：理论篇"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.v2ex.com/t/624344",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenWRT 搭建 WireGuard 服务器"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"openwrt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#openwrt"}},[t._v("#")]),t._v(" OpenWrt")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("opkg update\nopkg "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" kmod-wireguard luci-app-wireguard luci-proto-wireguard wireguard wireguard-tools\n")])])]),e("p",[t._v("生成密钥")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /etc/wireguard\nwg genkey "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" server-privatekey "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" wg pubkey "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" server-publickey\nwg genkey "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" client0-privatekey "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" wg pubkey "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" client0-publickey\n")])])]),e("p",[t._v("配置文件")]),t._v(" "),e("div",{staticClass:"language-ini extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token header"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("Interface")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("PrivateKey")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("6CJpj1CE2kqmfhJWu9UlzvCKqfm6g9yP8xCM+ggHCU4=")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ListenPort = 51820")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DNS = 8.8.8.8")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# BlockDNS = true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Address")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("192.168.9.2/24")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MTU = 1420")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token header"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("Peer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("PublicKey")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("EI0o2k+BKTPoVP6e0hbJQSgn3gerwntlsebxLXt1Q3w=")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("PresharedKey")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("Ys1gDMulGlZAfW6HVWru5hpxmcQ3BHtWcwYV/pXeW3k=")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("AllowedIPs")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("192.168.9.0/24, 192.168.234.0/24")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Endpoint")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("ddns.example.com:51820")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("PersistentKeepalive")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("25")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# AllowMulticast = false")]),t._v("\n")])])]),e("p",[t._v("防火墙")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("iptables -A FORWARD -i wg -j ACCEPT\niptables -t nat -A POSTROUTING -o br-lan -j MASQUERADE\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);