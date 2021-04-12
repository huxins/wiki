
const application = require('./config/application')
const linux = require('./config/linux')
const database = require('./config/database')
const devops = require('./config/devops')

const java = require('./config/Language/java')
const go = require('./config/Language/go')
const python = require('./config/Language/python')
const node = require('./config/Language/node')
const javascript = require('./config/Language/javascript')

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
    nav:[
          { text: 'Application', link: '/Application/' },
          {
            text: 'Software',
            items: [
              {
                text: 'Nginx',
                link: '/Software/Nginx/'
              },
              {
                text: 'Traffic Server',
                link: '/Software/Traffic Server/'
              }
            ]
          },
          { text: 'Linux', link: '/Linux/' },
          { text: 'Windows', link: '/Windows/' },
          { text: 'Database', link: '/Database/' },
          { text: 'DevOps', link: '/DevOps/' },
          {
            text: 'Language',
            items: [
              {
                text: 'Android',
                link: '/Language/Android/'
              },
              {
                text: 'Java',
                link: '/Language/Java/'
              },
              {
                text: 'Go',
                link: '/Language/Go/'
              },
              {
                text: 'Python',
                link: '/Language/Python/'
              },
              {
                text: 'Node',
                link: '/Language/Node/'
              },
              {
                text: 'JavaScript',
                link: '/Language/JavaScript/'
              },
              {
                text: 'CSS',
                link: '/Language/CSS/'
              },
              {
                text: 'HTML',
                link: '/Language/HTML/'
              }
            ]
          },
          { text: 'Life', link: '/Life/' },
          { text: '导航', link: 'https://inxiny.cn/' }
        ],
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
          title: 'CICD',
          children: application.cicd
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
      '/Software/Nginx/': [
        'Install',
        'Modules',
        'ngx_http_core_module',
        'ngx_http_autoindex_module',
        'ngx_http_auth_basic_module',
        'ngx_http_limit_conn_module',
        'ngx_http_limit_req_module',
        'ngx_http_log_module',
        'ngx_http_ssl_module',
        'ngx_http_rewrite_module',
        'ngx_http_referer_module',
        'ngx_http_proxy_module',
        'headers-more-nginx-module',
        'nginx-dav-ext-module',
        'ngx-fancyindex',
        'ngx_stream_core_module'
      ],
      '/Software/Traffic Server/': [
        'Install',
        'Configure'
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
      '/Windows/': [
        'start',
        'network',
        'KMS'
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
      '/Language/Android/': [
      ],
      '/Language/Java/': [
        {
          title: 'JDK',
          children: java.jdk
        },
        {
          title: 'JVM',
          children: java.jvm
        },
        {
          title: 'Web',
          children: java.web
        },
        {
          title: 'Spring',
          children: java.spring
        },
        {
          title: 'Log',
          children: java.log
        },
        {
          title: 'Tool',
          children: java.tool
        }
      ],
      '/Language/Go/': [
        {
          title: 'Modules',
          children: go.modules
        },
        {
          title: 'Go',
          children: go.go
        }
      ],
      '/Language/Python/': [
        {
          title: 'Modules',
          children: python.modules
        },
        {
          title: 'Base',
          children: python.base
        }
      ],
      '/Language/Node/': [
        {
          title: 'Base',
          children: node.base
        }
      ],
      '/Language/JavaScript/': [
        {
          title: 'Base',
          children: javascript.base
        },
        {
          title: 'BOM',
          children: javascript.bom
        },
        {
          title: 'jQuery',
          children: javascript.jquery
        },
        {
          title: 'DataTables',
          children: javascript.datatables
        },
        {
          title: 'Select2',
          children: javascript.select2
        },
      ],
      '/Language/HTML/': [
        '表单'
      ],
      '/Language/CSS/': [
        '盒模型'
      ],
      '/Life/': [
        '怎样成为更好的人'
      ]
    }
  }
};
