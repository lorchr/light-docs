export default {
  'en-us': {
    sidemenu: [
      {
        title: 'Light Docs',
        children: [
          {
            title: 'Overview',
            link: '/en-us/docs/site/Overview.html',
          },
          {
            title: 'Quick Start',
            link: '/en-us/docs/site/Quick-Start.html',
          },
          {
            title: 'Developer Guide',
            link: '/en-us/docs/site/Developer-Guide.html',
          },
          {
            title: 'Docsite Usage',
            link: '/en-us/docs/single/Docsite-Usage.html',
          },
          {
            title: 'Spring Boot',
            opened: false,
            children: [
              {
                title: 'Spring Boot',
                link: '/en-us/docs/Spring-Boot/Spring-Boot.html',
              },
            ],
          },
          {
            title: 'Spring Cloud',
            opened: false,
            children: [
              {
                title: 'Spring Cloud',
                link: '/en-us/docs/Spring-Cloud/Spring-Cloud.html',
              },
            ],
          }, 
          {
            title: 'Spring Security',
            opened: false,
            children: [
              {
                title: 'Spring Security',
                link: '/en-us/docs/Spring-Security/Spring-Security.html',
              },
            ],
          },
          {
            title: 'CI/CD',
            opened: false,
            children: [
              {
                title: 'Install JDK',
                link: '/en-us/docs/CI-CD/01-Install-JDK.html',
              },
              {
                title: 'Install NodeJS',
                link: '/en-us/docs/CI-CD/02-Install-NodeJS.html',
              },
              {
                title: 'Install Maven',
                link: '/en-us/docs/CI-CD/03-Install-Maven.html',
              },
              {
                title: 'Install Gitea',
                link: '/en-us/docs/CI-CD/04-Install-Gitea.html',
              },
              {
                title: 'Install Nexus3',
                link: '/en-us/docs/CI-CD/05-Install-Nexus3.html',
              },
              {
                title: 'Install Jenkins',
                link: '/en-us/docs/CI-CD/06-Install-Jenkins.html',
              },
              {
                title: 'Install Docker Registry',
                link: '/en-us/docs/CI-CD/07-Install-Docker-Registry.html',
              },
              {
                title: 'Install Harbor',
                link: '/en-us/docs/CI-CD/08-Install-Harbor.html',
              },
            ],
          },
          {
            title: 'K8s',
            opened: false,
            children: [
              {
                title: 'K8s Single Master Cluster',
                link: '/en-us/docs/K8s/K8s-Single-Master-Cluster.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: 'Light Docs',
        children: [
          {
            title: '概览',
            link: '/zh-cn/docs/site/Overview.html',
          },
          {
            title: '快速开始',
            link: '/zh-cn/docs/site/Quick-Start.html',
          },
          {
            title: '开发指南',
            link: '/zh-cn/docs/site/Developer-Guide.html',
          },
          {
            title: 'Docsite 使用',
            link: '/zh-cn/docs/single/00-Docsite-Usage.html',
          },
          {
            title: '开发环境',
            opened: false,
            children: [
              {
                title: '总览',
                link: '/zh-cn/docs/devenv/DevEnv.html',
              },
              {
                title: 'Mysql',
                link: '/zh-cn/docs/devenv/Docker-Mysql.html',
              },
              {
                title: 'Pgsql',
                link: '/zh-cn/docs/devenv/Docker-Pgsql.html',
              },
              {
                title: 'Redis',
                link: '/zh-cn/docs/devenv/Docker-Redis.html',
              },
              {
                title: 'InfluxDB',
                link: '/zh-cn/docs/devenv/Docker-InfluxDB.html',
              },
              {
                title: 'EMQX',
                link: '/zh-cn/docs/devenv/Docker-EMQX.html',
              },
            ],
          },
          {
            title: 'Spring Boot',
            opened: false,
            children: [
              {
                title: 'Spring Boot',
                link: '/zh-cn/docs/Spring-Boot/Spring-Boot.html',
              },
            ],
          },
          {
            title: 'Spring Cloud',
            opened: false,
            children: [
              {
                title: 'Spring Cloud',
                link: '/zh-cn/docs/Spring-Cloud/Spring-Cloud.html',
              },
            ],
          },
          {
            title: 'Spring Security',
            opened: false,
            children: [
              {
                title: 'Spring Security',
                link: '/zh-cn/docs/Spring-Security/Spring-Security.html',
              },
            ],
          },
          {
            title: 'CI/CD',
            opened: false,
            children: [
              {
                title: 'Install JDK',
                link: '/zh-cn/docs/CI-CD/01-Install-JDK.html',
              },
              {
                title: 'Install NodeJS',
                link: '/zh-cn/docs/CI-CD/02-Install-NodeJS.html',
              },
              {
                title: 'Install Maven',
                link: '/zh-cn/docs/CI-CD/03-Install-Maven.html',
              },
              {
                title: 'Install Gitea',
                link: '/zh-cn/docs/CI-CD/04-Install-Gitea.html',
              },
              {
                title: 'Install Nexus3',
                link: '/zh-cn/docs/CI-CD/05-Install-Nexus3.html',
              },
              {
                title: 'Install Jenkins',
                link: '/zh-cn/docs/CI-CD/06-Install-Jenkins.html',
              },
              {
                title: 'Install Docker Registry',
                link: '/zh-cn/docs/CI-CD/07-Install-Docker Registry.html',
              },
              {
                title: 'Install Harbor',
                link: '/zh-cn/docs/CI-CD/08-Install-Harbor.html',
              },
            ],
          },
          {
            title: 'K8s',
            opened: false,
            children: [
              {
                title: 'K8s单Master集群',
                link: '/zh-cn/docs/K8s/K8s-Single-Master-Cluster.html',
              },
              {
                title: '使用Rancher搭建K8s集群',
                link: '/zh-cn/docs/K8s/Use-Rancher-build-K8s-Cluster.html',
              },
            ],
          },
        ],
      },
    ],
    barText: '文档',
  },
};
