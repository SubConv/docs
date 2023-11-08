# Proxy Groups
Except for the `🚀 节点选择` group, all proxy-groups can be customized through the configuration file `config.py`. proxy-groups are generated based on `custom_proxy_group` and `region_dict` in `config.py`.  

## customize proxy-groups
Here is an example of `region_dict` and `custom_proxy_group` in `config.py`:
```python
region_dict = {
    "ZJU": [r"ZJU", "🇨🇳 ZJU节点"],
    "HK": [r"🇭🇰|HK|Hong|Kong|HGC|WTT|CMI|港", "🇭🇰 香港节点"],
    "TW": [r"🇹🇼|TW|Taiwan|新北|彰化|CHT|台|HINET", "🇨🇳 台湾节点"],
    "SG": [r"🇸🇬|SG|Singapore|狮城|^新[^节北]|[^刷更]新[^节北]", "🇸🇬 狮城节点"],
    "JP": [r"🇯🇵|JP|Japan|Tokyo|Osaka|Saitama|东京|大阪|埼玉|日", "🇯🇵 日本节点"],
    "KR": [r"🇰🇷|KO?R|Korea|首尔|韩|韓", "🇰🇷 韩国节点"],
    "US": [r"🇺🇸|US|America|United.*?States|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥", "🇺🇸 美国节点"]
}

custom_proxy_group = [
    {
        "name": "♻️ 自动选择",
        "type": "url-test",
        "regex": "^(?!.*(ZJU|浙大|内网|✉️)).*",
        "rule": False
    },
    {
        "name": "🚀 手动切换",
        "type": "select",
        "manual": True,
        "rule": False
    },
    {
        "name": "🔯 故障转移",
        "type": "fallback",
        "regex": "^(?!.*(ZJU|浙大|内网|✉️)).*",
        "rule": False
    },
    {
        "name": "🔮 负载均衡",
        "type": "load-balance",
        "regex": "^(?!.*(ZJU|浙大|内网|✉️)).*",
        "rule": False
    },
    {
        "name": "🔮 香港负载均衡",
        "type": "load-balance",
        "rule": False,
        "region": ["HK"]
    },
    {
        "name": "✔ ZJU-INTL",
        "type": "select",
        "prior": "DIRECT"
    },
    {
        "name": "✔ ZJU",
        "type": "select",
        "prior": "DIRECT"
    },
    {
        "name": "📃 ZJU More Scholar",
        "type": "select",
        "prior": "DIRECT"
    },
    {
        "name": "🤖 ChatBot",
        "type": "select",
        "prior": "PROXY"
    },
    {
        "name": "📲 电报消息",
        "type": "select",
        "prior": "PROXY"
    },
    {
        "name": "📹 油管视频",
        "type": "select",
        "prior": "PROXY"
    },
    {
        "name": "🎥 奈飞视频",
        "type": "select",
        "prior": "PROXY"
    },
    {
        "name": "📺 巴哈姆特",
        "type": "select",
        "prior": "PROXY"
    },
    {
        "name": "📺 哔哩哔哩",
        "type": "select",
        "prior": "DIRECT"
    },
    {
        "name": "🌍 国外媒体",
        "type": "select",
        "prior": "PROXY"
    },
    {
        "name": "🌏 国内媒体",
        "type": "select",
        "prior": "DIRECT"
    },
    {
        "name": "📢 谷歌FCM",
        "type": "select",
        "prior": "DIRECT"
    },
    {
        "name": "Ⓜ️ 微软云盘",
        "type": "select",
        "prior": "DIRECT"
    },
    {
        "name": "Ⓜ️ 微软服务",
        "type": "select",
        "prior": "DIRECT"
    },
    {
        "name": "🍎 苹果服务",
        "type": "select",
        "prior": "DIRECT"
    },
    {
        "name": "🎮 游戏平台",
        "type": "select",
        "prior": "DIRECT"
    },
    {
        "name": "🎶 网易音乐",
        "type": "select",
        "prior": "DIRECT"
    },
    {
        "name": "🎶 Spotify",
        "type": "select",
        "prior": "DIRECT"
    },
    {
        "name": "🛸 PT站",
        "type": "select",
        "prior": "DIRECT"
    },
    {
        "name": "🎯 全球直连",
        "type": "select",
        "prior": "DIRECT"
    },
    {
        "name": "🛑 广告拦截",
        "type": "select",
        "prior": "REJECT"
    },
    {
        "name": "🍃 应用净化",
        "type": "select",
        "prior": "REJECT"
    },
    {
        "name": "🛡️ 隐私防护",
        "type": "select",
        "prior": "REJECT"
    },
    {
        "name": "🐟 漏网之鱼",
        "type": "select",
        "prior": "PROXY"
    }
]
```
1. `region_dict` is a dictionary, where each key-value pair has the key as the name of the region group and the value as a list, where the first element of the list is a regular expression and the second element is the name of the region group. The regular expressions in this dictionary will be used to match the node name, and if a match is found, the node will be added to the corresponding region group.  
2. `custom_proxy_group` is a list, where each element is a dictionary representing a proxy-group.  
   The basic structure of each dictionary is as follows:
   ```python
   {
       "name": <name>,
       "type": <type>,
       # other fields
   }
   ```
   Here are other possible fields:
   - `"rule"`: whether this is a rule group (a rule group is a group used for routing, such as `📲 电报消息`, rather than `♻️ 自动选择` which is used for node selection. **Default value is `True`**  
   - `"prior": **works only if `"rule"` is `False`, and is required**. Possible values: `"DIRECT"`, `"PROXY"`, `"REJECT"`. Indicates the default selection of this proxy-group. `"PROXY"` means the default selection is `"🚀 节点选择"  
   - `"regex"`: **works only if `"rule"` is `False`**. A regular expression used to match the node name. If a match is found, the node will be added to this proxy-group. If this field is not specified, all nodes will be added to this proxy-group.  
   - `"region"`: **works only if `"rule"` is `False` and `"regex"` is not specified** (which means that `"regex"` has a higher priority than `"region"`). Possible values are the keys in `region_dict`. If this field is specified, only the nodes that match the regular expression corresponding to the key in `region_dict` will be added to this proxy-group. Used to specify that a proxy-group only contains nodes from a certain region.  
    - `"manual"`: **works only if `"rule"` is `False`**. Possible values are `True` or `False`. If `True`, this proxy-group will contain standby nodes. If `False`, this proxy-group will not contain backup nodes. **Default value is `False`**.  
