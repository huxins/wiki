(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{605:function(t,s,a){"use strict";a.r(s);var e=a(44),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ngx-http-log-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ngx-http-log-module"}},[t._v("#")]),t._v(" ngx_http_log_module")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_log_module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Module ngx_http_log_module"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"access-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#access-log"}},[t._v("#")]),t._v(" access_log")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("access_log")]),t._v(" /var/log/nginx/access.log combined buffer=32k gzip flush=1m")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"log-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-format"}},[t._v("#")]),t._v(" log_format")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("log_format")]),t._v(" combined "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_user")]),t._v(" ["),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$time_local]")]),t._v(" '")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\""),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),t._v('" '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$body_bytes_sent")]),t._v(" '")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\""),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_referer")]),t._v('" "'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_user_agent")]),t._v("\"'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" variables")]),t._v(" "),a("p",[t._v("日志格式可以包含公共变量，以及仅在写入日志时才存在的变量：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("变量")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("$bytes_sent")]),t._v(" "),a("td",[t._v("发送给客户端的总字节数")])]),t._v(" "),a("tr",[a("td",[t._v("$body_bytes_sent")]),t._v(" "),a("td",[t._v("发送给客户端的字节数，不包括响应头的大小")])]),t._v(" "),a("tr",[a("td",[t._v("$connection")]),t._v(" "),a("td",[t._v("连接序列号")])]),t._v(" "),a("tr",[a("td",[t._v("$connection_requests")]),t._v(" "),a("td",[t._v("当前通过连接发出的请求数量")])]),t._v(" "),a("tr",[a("td",[t._v("$msec")]),t._v(" "),a("td",[t._v("日志写入时间，单位为秒，精度是毫秒")])]),t._v(" "),a("tr",[a("td",[t._v("$pipe")]),t._v(" "),a("td",[t._v('如果请求是通过 http 流水线发送，则其值为 "p"，否则为 “."')])]),t._v(" "),a("tr",[a("td",[t._v("$request_length")]),t._v(" "),a("td",[t._v("请求长度（包括请求行，请求头和请求体）")])]),t._v(" "),a("tr",[a("td",[t._v("$request_time")]),t._v(" "),a("td",[t._v("请求处理时长，单位为秒，精度为毫秒，从读入客户端的第一个字节开始，直到把最后一个字符发送张客户端进行日志写入为止")])]),t._v(" "),a("tr",[a("td",[t._v("$status")]),t._v(" "),a("td",[t._v("响应状态码")])]),t._v(" "),a("tr",[a("td",[t._v("$time_iso8601")]),t._v(" "),a("td",[t._v('标准格式的本地时间，形如 "2017-05-24T18:31:27+08:00"')])]),t._v(" "),a("tr",[a("td",[t._v("$time_local")]),t._v(" "),a("td",[t._v('通用日志格式下的本地时间，形如 "24/May/2017:18:31:27 +0800"')])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);