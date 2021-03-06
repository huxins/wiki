
const nav = require('./config/nav')

const application = require('./config/application')
const linux = require('./config/linux')
const database = require('./config/database')
const devops = require('./config/devops')
const software = require('./config/software')
const editor = require('./config/editor')
const programming = require('./config/programming')
const framework = require('./config/framework')

module.exports = {
  title: '偷影子的人',
  description: '你在，春华秋实夏蝉冬雪。',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  base: '/',
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    nav: nav.nav,
    sidebar:{
      '/Application/': [
        {
          title: '应用',
          children: application.app
        },
        {
          title: 'System',
          children: application.system
        },
        {
          title: 'Network',
          children: application.network
        },
        {
          title: 'Device',
          children: application.dev
        },
        {
          title: 'Editor',
          children: application.editor
        },
        {
          title: 'Download',
          children: application.download
        }
      ],
      '/Software/Chrome/': software.Chrome,
      '/Software/Nginx/': software.Nginx,
      '/Software/Traffic Server/': software.Traffic_Server,
      '/Software/Git/': software.Git,
      '/Software/Subversion/': software.Subversion,
      '/Software/Jenkins/': software.Jenkins,
      '/Software/Tomcat/': software.Tomcat,
      '/Software/Push/': software.Push,
      '/Software/Files/': software.Files,
      '/Editor/IntelliJ IDEA/': editor.IntelliJ_IDEA,
      '/Editor/Visual Studio Code/': editor.Visual_Studio_Code,
      '/System/Proxmox VE/': [
        'Install',
        '镜像格式',
        '磁盘',
        'QEMU Guest Agent'
      ],
      '/System/OpenWrt/': [
        'eSir'
      ],
      '/System/Debian/': [
      ],
      '/System/Windows/': [
        '启动方式',
        '进程',
        '网络',
        'KMS'
      ],
      '/Linux/': [
        {
          title: 'Shell',
          children: linux.shell
        },
        {
          title: 'Kernel',
          children: linux.kernel
        },
        {
          title: 'Debian',
          children: linux.debian
        },
        {
          title: 'CentOS',
          children: linux.centos
        },
        {
          title: 'Network',
          children: linux.network
        },
        {
          title: 'Disk',
          children: linux.disk
        },
        {
          title: 'Tool',
          children: linux.tool
        }
      ],
      '/Database/': [
        {
          title: 'SQL',
          children: database.sql
        },
        {
          title: 'PostgreSQL',
          children: database.postgresql
        },
        {
          title: 'Redis',
          children: database.redis
        }
      ],
      '/DevOps/': [
        {
          title: 'Tool',
          children: devops.tool
        }
      ],
      '/Programming/Android/': [
      ],
      '/Programming/Java/': programming.Java,
      '/Programming/Go/': programming.Go,
      '/Programming/Python/': programming.Python,
      '/Programming/Node/': programming.Node,
      '/Programming/JavaScript/': programming.JavaScript,
      '/Programming/Skill/': [
        'RoadMap'
      ],
      '/Programming/HTML/': [
        '表单',
        '表格',
        'Script'
      ],
      '/Programming/CSS/': [
        '盒模型',
        'Float',
        'Fonts',
        'Text'
      ],
      '/Framework/Bootstrap/': framework.Bootstrap,
      '/Framework/jQuery/': framework.jQuery,
      '/Framework/Select2/': framework.Select2,
      '/Framework/Spring/': framework.Spring,
      '/Life/': [
        '怎样成为更好的人',
        '医疗'
      ],
      '/房产/': [
        '上海',
        '苏州',
        '成都'
      ]
    }
  }
};
