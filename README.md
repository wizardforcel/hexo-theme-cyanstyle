# Hexo Theme: CyanStyle

CyanStyle 是 Wordpress 的 Twentytwelve 主题在 Hexo 上的迁移。

## 安装

```
git clone https://github.com/wizardforcel/hexo-theme-cyanstyle.git themes/cyanstyle
```

修改 Hexo 的 `_config.yml` 中的 `theme` 为 `cyanstyle`。

## 升级

```
cd themes/cyanstyle
git pull
```

## 配置

默认的`_config.yml`文件：

``` yaml
# Header
menu:
  Home: /
  Archives: /archives

# Content
excerpt_link: More
prev: Prev
next: Next
reply: Reply
share: Share
fancybox: true

# Sidebar
widgets:
- search
- music
- category
- recent_posts
- tag
- tagcloud

# Miscellaneous
google_analytics:
duoshuo_shortname: 
rss: 
google_site_verification: 
baidu_site_verification: 
favicon: 
music: 
```

+ `menu` - 导航栏的菜单，键值对形式，键为文字，值为连接
+ `widgets` - 侧栏上的小工具，一行一个
+ `duoshuo_shortname` - 站点的多说ID，可选
+ `fancybox` - 是否开启 jQuery 弹出层效果
+ `google_analytics` - Google Analytics ID ，可选
+ `rss` - rss 订阅链接，可选
+ `google_site_verification` - 用于谷歌站长工具验证所有权的ID，可选
+ `baidu_site_verification` - 用于百度站长工具验证所有权的ID，可选
+ `favicon` - 用于在浏览器标签上显示的图标，可选，如果不指定则会加载默认图标
+ `music` - 侧栏上的播放器音乐，如果不指定音乐组件将不会显示

## 协议

[GPL v3+](LICENSE)