(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{463:function(a,t,s){"use strict";s.r(t);var r=s(44),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"fio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fio"}},[a._v("#")]),a._v(" fio")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://wsgzao.github.io/post/fio/",target:"_blank",rel:"noopener noreferrer"}},[a._v("使用 fio 测试磁盘 I/O 性能"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("安装")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" libaio-devel fio\n")])])]),s("p",[a._v("性能测试")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 顺序读 顺序写 随机读 随机写 混合随机读写")]),a._v("\nfio -loops"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" -size"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("500m -filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/dev/sda -stonewall -ioengine"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("libaio -direct"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" -runtime"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SeqRead -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1m -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("read "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SeqWrite -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1m -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("write "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("512kRead -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("512k -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randread "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("512kWrite -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("512k -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randwrite "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4kQD32Read -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4k -iodepth"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("32")]),a._v(" -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randread "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4kQD32Write -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4k -iodepth"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("32")]),a._v(" -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randwrite "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4kRead -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4k -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randread "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4kWrite -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4k -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randwrite "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randrw -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("16k -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randrw -rwmixread"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("70")]),a._v("\n  \nfio -loops"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" -size"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("500m -filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/dev/sda -stonewall -ioengine"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("libaio -direct"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" -runtime"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SEQ1MQ8T1_Read -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1m -iodepth"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("read "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SEQ1MQ8T1_Write -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1m -iodepth"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("write "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SEQ128KQ32T1_Read -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("128k -iodepth"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("32")]),a._v(" -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("read "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SEQ128KQ32T1_Write -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("128k -iodepth"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("32")]),a._v(" -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("write "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("RND4KQD32T16_Read -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4k -iodepth"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("32")]),a._v(" -threads"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v(" -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randread "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("RND4KQD32T16_Write -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4k -iodepth"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("32")]),a._v(" -threads"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16")]),a._v(" -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randwrite "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("RND4KQ1T1_Read -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4k -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randread "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("RND4KQ1T1_Write -bs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("4k -rw"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("randwrite\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);