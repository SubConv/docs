# Proxy Groups
Except for the `🚀 节点选择` group, all proxy-groups can be customized through the configuration file `config.yaml`. proxy-groups are generated based on `CUSTOM_PROXY_GROUP` in `config.yaml`.  

## customize proxy-groups
Here is an example of `custom_proxy_group`:
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
1. `custom_proxy_group` is a list, where each element is a dictionary representing a proxy-group.  
   The basic structure of each dictionary is as follows:
    ```yaml
    name: <name of the proxy-group>
    type: <type of the proxy-group>
    # other fields
    ```
   Here are other possible fields:
   - `"rule"`: whether this is a rule group (a rule group is a group used for routing, such as `📲 电报消息`, rather than `♻️ 自动选择` which is used for node selection. **Default value is `true`**  
   - `"prior": **works only if `"rule"` is `false`, and is required**. Possible values: `"DIRECT"`, `"PROXY"`, `"REJECT"`. Indicates the default selection of this proxy-group. `"PROXY"` means the default selection is `"🚀 节点选择"  
   - `"regex"`: **works only if `"rule"` is `false`**. A regular expression used to match the node name. If a match is found, the node will be added to this proxy-group. If this field is not specified, all nodes will be added to this proxy-group.  
    - `"manual"`: **works only if `"rule"` is `false`**. Possible values are `true` or `false`. If `true`, this proxy-group will contain standby nodes. If `false`, this proxy-group will not contain backup nodes. **Default value is `false`**.  
