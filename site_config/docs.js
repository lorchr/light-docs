export default {
  'en-us': {
    sidemenu: [
      {
        title: 'Light Docs',
        children: [
          {
            title: 'demo1',
            link: '/en-us/docs/demo1.html',
          },
          {
            title: 'demo2',
            link: '/en-us/docs/demo2.html',
          },
          {
            title: 'CI/CD',
            opened: false,
            children: [
              {
                title: 'Install JDK',
                link: '/en-us/docs/CI-CD/01-Install JDK.html',
              },
              {
                title: 'Install NodeJS',
                link: '/en-us/docs/CI-CD/02-Install NodeJS.html',
              },
              {
                title: 'Install Maven',
                link: '/en-us/docs/CI-CD/03-Install Maven.html',
              },
              {
                title: 'Install Gitea',
                link: '/en-us/docs/CI-CD/04-Install Gitea.html',
              },
              {
                title: 'Install Nexus3',
                link: '/en-us/docs/CI-CD/05-Install Nexus3.html',
              },
              {
                title: 'Install Jenkins',
                link: '/en-us/docs/CI-CD/06-Install Jenkins.html',
              },
              {
                title: 'Install Docker Registry',
                link: '/en-us/docs/CI-CD/07-Install Docker Registry.html',
              },
              {
                title: 'Install Harbor',
                link: '/en-us/docs/CI-CD/08-Install Harbor.html',
              },
            ],
          },
          {
            title: 'K8s',
            opened: false,
            children: [
              {
                title: 'K8s Single Master Cluster',
                link: '/en-us/docs/dir/K8s-Single-Master-Cluster.html',
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
            title: '示例1',
            link: '/zh-cn/docs/demo1.html',
          },
          {
            title: '示例2',
            link: '/zh-cn/docs/demo2.html',
          },
          {
            title: 'CI/CD',
            opened: false,
            children: [
              {
                title: 'Install JDK',
                link: '/zh-cn/docs/CI-CD/01-Install JDK.html',
              },
              {
                title: 'Install NodeJS',
                link: '/zh-cn/docs/CI-CD/02-Install NodeJS.html',
              },
              {
                title: 'Install Maven',
                link: '/zh-cn/docs/CI-CD/03-Install Maven.html',
              },
              {
                title: 'Install Gitea',
                link: '/zh-cn/docs/CI-CD/04-Install Gitea.html',
              },
              {
                title: 'Install Nexus3',
                link: '/zh-cn/docs/CI-CD/05-Install Nexus3.html',
              },
              {
                title: 'Install Jenkins',
                link: '/zh-cn/docs/CI-CD/06-Install Jenkins.html',
              },
              {
                title: 'Install Docker Registry',
                link: '/zh-cn/docs/CI-CD/07-Install Docker Registry.html',
              },
              {
                title: 'Install Harbor',
                link: '/zh-cn/docs/CI-CD/08-Install Harbor.html',
              },
            ],
          },
          {
            title: 'K8s',
            opened: false,
            children: [
              {
                title: 'K8s 单Master集群',
                link: '/zh-cn/docs/dir/K8s-Single-Master-Cluster.html',
              },
            ],
          },
        ],
      },
    ],
    barText: '文档',
  },
};
