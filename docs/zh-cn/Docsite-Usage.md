# Docsite Usage

## 一、安装

- [Docsite官网](https://docsite.js.org)
- [Docsite Github](https://github.com/txd-team/docsite)
- [Docsify官网](https://docsify.js.org)
- [Valine官网](https://valine.js.org)

```shell
# node版本需要 > 6.x
node -v
npm -v

# 全局安装Docsite
npm install docsite -g
```

## 二、运行
```shell
# 初始化项目
docsite init <project_name>

# 示例
cd /home/lorchr/ && docsite init light-docs
mkdirdir ./light-docs && cd ./light-docs && docsite init

# 预览
docsite start

# 打包
docsite build
```

## 三、配置

### 1. 修改网站标题等信息`docsite.config.yml`

```yaml
pages:
 # key is the dirname of pages in src/pages
 home:
  # 首页配置
  zh-cn:
   title: 'Light Docs'
   keywords: '关键词1，关键词2'
   description: '页面内容简介'
  # home config
  en-us:
   title: 'Light Docs'
   keywords: 'keyword1,keyword2'
   description: 'page description'
 docs:
  # 社区页配置
  zh-cn:
   title: 'Light Documentation'
   keywords: '关键词1，关键词2'
   description: '页面内容简介'
  # community page config
  en-us:
   title: 'Light Documentation'
   keywords: 'keyword1,keyword2'
   description: 'page description'
 blog:
  # 博客列表页配置
  zh-cn:
   title: 'Light Blog'
   keywords: '关键词1，关键词2'
   description: '页面内容简介'
  en-us:
   # blog list page config
   title: 'Light Blog'
   keywords: 'keyword1,keyword2'
   description: 'page description'
 community:
  # 社区页配置
  zh-cn:
   title: 'Light Community'
   keywords: '关键词1，关键词2'
   description: '页面内容简介'
  # community page config
  en-us:
   title: 'Light Community'
   keywords: 'keyword1,keyword2'
   description: 'page description'
```

## 四、使用-文档
1. 在`docs/zh-cn`目录下新建一个文件`Docsite-Usage.md`，并书写内容
2. 将该文件复制到`docs/en-us`目录下
3. 配置该文档到待生成的网页中`site_config/docs.js`
```shell
{
  'en-us': {
    sidemenu: [
      {
        title: 'Light Docs',
        children: [
          {
            # 当前文档显示的大纲标题
            title: 'Docsite Usage',
            # 文档的路径
            link: '/en-us/docs/Docsite-Usage.html',
          }
        ]
      }
    ]
  },
  'zh-cn': {
    sidemenu: [
      {
        title: 'Light Docs',
        children: [
          {
            # 当前文档显示的大纲标题
            title: 'Docsite Usage',
            # 文档的路径
            link: '/zh-cn/docs/Docsite-Usage.html',
          }
        ]
      }
    ]
  }
}
```
4. 再次运行`docsite start`

## 五、使用-博客

## 六、使用-社区

## 七、部署
1. 打包文件
> docsite build

2. 将生成的文档推送到新分支上
```shell
# 创建新分支
git branch site

# 切换分支
git checkout site

# 推送到远程仓库
git push origin site
```

3. 提取生成的文件

| 序号 | 文件或文件夹 | 作用       |
| ---- | ------------ | ---------- |
| 1    | build        | js css依赖 |
| 2    | en-us        | 英文文档   |
| 3    | zh-cn        | 中文文档   |
| 4    | img          | 图片       |
| 5    | index.html   | 首页       |
| 6    | 404.html     | 404页      |

4. 将文档上传到Gitee,在`服务-GiteePages`中选择要部署的分支
5. 将文档上传到Github,在`Settings-GitHuo Pages`中选择要部署的分支
6. 将文档上传到Nginx并配置访问路径

```conf
location /light-docs/ {
  root /home/lorchr/light-docs;
  index index.html;
}

error_page  404  /home/lorchr/light-docs/404.html;
```