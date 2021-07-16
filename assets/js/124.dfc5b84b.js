(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{480:function(l,e,s){"use strict";s.r(e);var v=s(44),_=Object(v.a)({},(function(){var l=this,e=l.$createElement,s=l._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[s("h1",{attrs:{id:"env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[l._v("#")]),l._v(" env")]),l._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://einverne.github.io/post/2019/01/login-shell-vs-non-login-shell.html",target:"_blank",rel:"noopener noreferrer"}},[l._v("登录式 shell 和非登录式 shell 区别"),s("OutboundLink")],1)])]),l._v(" "),s("li",[s("p",[l._v("登录式 shell 是"),s("strong",[l._v("用户使用自己的 user ID 登录交互式 shell 的第一个进程")]),l._v("。")])]),l._v(" "),s("li",[s("p",[l._v("交互式 shell 指的是"),s("strong",[l._v("在终端有交互的模式，用户输入命令，并在回车后立即执行的 shell")]),l._v("，这种模式也是大部分情况下用户执行的一种方式，比如 ssh 登录")])]),l._v(" "),s("li",[s("p",[l._v("非交互式 shell 指的是 "),s("strong",[l._v("bash shell 以命令脚本的形式执行")]),l._v("，这种模式下，shell 不会和用户有交互，而是读取脚本文件并执行，直到读取到文件 EOF 时结束")])])]),l._v(" "),s("p",[l._v("有一种判断 login shell vs non-login shell 的非常快速的方法，使用命令 "),s("code",[l._v("echo $0")])]),l._v(" "),s("ul",[s("li",[s("code",[l._v("-bash")]),l._v(" 中 "),s("code",[l._v("-")]),l._v(" 表示当前是一个 login shell")]),l._v(" "),s("li",[s("code",[l._v("bash")]),l._v(" 表示不是 login shell")])]),l._v(" "),s("p",[l._v("配置读取 login shell vs non-login shell")]),l._v(" "),s("ul",[s("li",[l._v("当你在已经存在的终端 session 中开启一个 shell，比如在 screen, Tmux, X terminal 等中，会得到一个交互式，非登录 shell，这时 shell 会"),s("strong",[l._v("读取")]),l._v("对应的配置（"),s("code",[l._v("~/.bashrc")]),l._v(" for bash, "),s("code",[l._v("/etc/bashrc")]),l._v(")")]),l._v(" "),s("li",[l._v("当 shell 执行一个脚本，或者通过命令行将命令传送过去执行，这时就是非交互，非登录的 shell。这种 shell 无处不在，在程序调用另外一个程序时非常常见")]),l._v(" "),s("li",[l._v("login shell 会读取不同的配置文件，比如 bash 会读取 "),s("code",[l._v("/etc/profile")]),l._v(" ， "),s("code",[l._v("~/.profile")]),l._v("，"),s("code",[l._v("~/.bash_profile")]),l._v(" 等配置文件。")]),l._v(" "),s("li",[l._v("non-login shell 只会读取 "),s("code",[l._v("~/.bashrc")]),l._v(" 配置。")])])])}),[],!1,null,null,null);e.default=_.exports}}]);