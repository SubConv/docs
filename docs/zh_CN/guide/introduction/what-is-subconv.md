# 什么是 SubConv

欢迎来到 SubConv 的知识库。

[SubConv](https://github.com/SubConv/SubConv) 是一个 Clash 配置生成器，也是一个订阅转换器。它可以将各种格式的订阅转换为 Clash 配置文件。  

它易于使用。  

它易于部署，可以免费使用 [Vercel](https://vercel.com) 部署。  

我们提供了一般用户的配置文件和ZJU配置文件

## 截图

![screenshot](/assets/screenshot.png)

## 特性

- 支持Clash配置和V2ray格式的base64链接（即原始订阅不一定是Clash）
- 自带 Web-UI (感谢 [@Musanico](https://github.com/musanico))
- 大体基于 ACL 的规则
- 基于 proxy-provider 的节点自动更新
- 基于 rule-provider 的规则自动更新
- 支持代理 rule-provider 防止无法从 GitHub 获取规则集
- 多机场用户提供了支持
- 剩余流量和总流量的显示（单机场的时候才有用，需要你的机场和你用的Clash同时支持，已知Clash for Windows, Clash Verge, Stash, Clash Meta for Android等已支持）
- 实现了订阅转换成 proxy-provider 的 api, (一般人也不会去用吧)
- 支持配置文件
