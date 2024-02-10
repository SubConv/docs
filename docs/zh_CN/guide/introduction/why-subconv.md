# 为什么使用 SubConv

现在已经有很多 Clash 的订阅转换器了，为什么还要使用 SubConv 呢？换句话说，SubConv 有什么优点呢？  

## 易于免费部署
subconverter 是用 C++ 开发的，因此难以部署在 Serverless 平台上。而 SubConv 是用 Python 开发的，因此可以轻松部署在 Vercel 上。只要您有一个域名（可以免费获得），您就可以免费部署它。  

## 安全
它部署在您自己的 Vercel 或 VPS 上，因此没有其他人可以看到您的数据。  

## 支持各种协议和格式的原始订阅
订阅和节点解析参考 [mihomo](https://github.com/MetaCubeX/mihomo/tree/Alpha/common/convert)，因此理论上支持所有 Mihomo (Clash Meta) 支持的协议和格式。

## 使用 proxy-provider 和 rule-provider 实现自动更新
使用了 proxy-provider 和 rule-provider，自动更新节点信息和规则。同时支持使用本服务代理获取 ruleset，用户即使无法访问 GitHub 也能正常获取规则（服务端需要能访问 GitHub）。

## 易于定制
您可以通过修改配置文件来自定义规则集。同时，您也可以通过修改源代码来进行更深度的自定义。因为使用的语言 Python 非常接近自然语言。 
