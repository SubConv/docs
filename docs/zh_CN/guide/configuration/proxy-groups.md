# Proxy Groups
除了 `🚀 节点选择` 组为硬编码以外，其他 proxy-groups 都可以通过配置文件 `config.yaml` 进行自定义。proxy-groups根据 `config.yaml` 中的 `CUSTOM_PROXY_GROUP` 生成。

## 自定义 proxy-groups
下面是一个有效的 `CUSTOM_PROXY_GROUP` 的例子：  
```yaml
CUSTOM_PROXY_GROUP:
- name: ♻️ 自动选择
  type: url-test
  regex: ^(?!.*(ZJU|浙大|内网|✉️)).*
  rule: false
- name: 🚀 手动切换1
  type: select
  manual: true
  rule: false
- name: 🚀 手动切换2
  type: select
  manual: true
  rule: false
- name: 🔯 故障转移
  type: fallback
  regex: ^(?!.*(ZJU|浙大|内网|✉️)).*
  rule: false
- name: 🔮 负载均衡
  type: load-balance
  regex: ^(?!.*(ZJU|浙大|内网|✉️)).*
  rule: false
- name: 🔮 香港负载均衡
  type: load-balance
  rule: false
  regex: 🇭🇰|HK|Hong|Kong|HGC|WTT|CMI|港
- name: ✔ ZJU-INTL
  type: select
  prior: DIRECT
- name: ✔ ZJU
  type: select
  prior: DIRECT
- name: 📃 ZJU More Scholar
  type: select
  prior: DIRECT
- name: 🤖 ChatBot
  type: select
  prior: PROXY
- name: 📲 电报消息
  type: select
  prior: PROXY
- name: 📹 油管视频
  type: select
  prior: PROXY
- name: 🎥 奈飞视频
  type: select
  prior: PROXY
- name: 📺 巴哈姆特
  type: select
  prior: PROXY
- name: 📺 哔哩哔哩
  type: select
  prior: DIRECT
- name: 🌍 国外媒体
  type: select
  prior: PROXY
- name: 🌏 国内媒体
  type: select
  prior: DIRECT
- name: 📢 谷歌FCM
  type: select
  prior: DIRECT
- name: 📢 谷歌服务
  type: select
  prior: PROXY
- name: Ⓜ️ 微软Bing
  type: select
  prior: PROXY
- name: Ⓜ️ 微软云盘
  type: select
  prior: DIRECT
- name: Ⓜ️ 微软服务
  type: select
  prior: DIRECT
- name: 🍎 苹果服务
  type: select
  prior: DIRECT
- name: 🎮 游戏平台
  type: select
  prior: DIRECT
- name: 🎶 网易音乐
  type: select
  prior: DIRECT
- name: 🎶 Spotify
  type: select
  prior: DIRECT
- name: 🛸 PT站
  type: select
  prior: DIRECT
- name: 🎯 全球直连
  type: select
  prior: DIRECT
- name: 🛑 广告拦截
  type: select
  prior: REJECT
- name: 🍃 应用净化
  type: select
  prior: REJECT
- name: 🛡️ 隐私防护
  type: select
  prior: REJECT
- name: 🐟 漏网之鱼
  type: select
  prior: PROXY
- name: 🇨🇳 ZJU节点
  type: select
  rule: false
  regex: ZJU|浙大
- name: 🇭🇰 香港节点
  type: url-test
  rule: false
  regex: 🇭🇰|HK|Hong|Kong|HGC|WTT|CMI|港
- name: 🇨🇳 台湾节点
  type: url-test
  rule: false
  regex: 🇹🇼|TW|Taiwan|新北|彰化|CHT|台|HINET
- name: 🇸🇬 狮城节点
  type: url-test
  rule: false
  regex: 🇸🇬|SG|Singapore|狮城|^新[^节北]|[^刷更]新[^节北]
- name: 🇯🇵 日本节点
  type: url-test
  rule: false
  regex: 🇯🇵|JP|Japan|Tokyo|Osaka|Saitama|东京|大阪|埼玉|日
- name: 🇰🇷 韩国节点
  type: url-test
  rule: false
  regex: 🇰🇷|KO?R|Korea|首尔|韩|韓
- name: 🇺🇸 美国节点
  type: url-test
  rule: false
  regex: 🇺🇸|US|America|United.*?States|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥
```
1. `CUSTOM_PROXY_GROUP` 为一个列表，其中每个元素都是一个字典，代表一个 proxy-group。  
   每个字典的基本格式为：
    ```yaml
    name: <名称>
    type: <类型>
    # 其他字段
    ```
   其他字段包括：
    - `"rule"`: 表示这是否是一个规则组（规则组指的是类似 `📲 电报消息` 这样用于分流的组，而非 `♻️ 自动选择` 等用于选择节点的组。**默认值为`true`**  
    - `"prior"`: **仅当`"rule"`字段为`false`时有效，且必填**。可选值：`"DIRECT"`、`"PROXY"`、`"REJECT"`。表示这个 proxy-group 的默认选择。其中`"PROXY"`表示默认选择`"🚀 节点选择"  
    - `"regex"`: **仅当`"rule"`字段为`false`时有效**。一个正则表达式，用于匹配节点名称。如果匹配成功，则将节点加入到这个 proxy-group 中。如果不指定这个字段，则所有节点都会被加入到这个 proxy-group 中。  
    - `"manual"`: **仅当`"rule"`字段为`false`时有效**。可选值为`true`或`false`。当值为`true`时，这个 proxy-group 会包含备用节点。当值为`false`时，这个 proxy-group 不会包含备用节点。**默认值为`false`**。  
