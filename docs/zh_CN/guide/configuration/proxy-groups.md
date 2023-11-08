# Proxy Groups
除了 `🚀 节点选择` 组为硬编码以外，其他 proxy-groups 都可以通过配置文件 `config.py` 进行自定义。proxy-groups根据 `config.py` 中的 `custom_proxy_group` 和 `region_dict` 生成。其中 `region_dict` 是一个包含地区分组信息和正则表达式的字典。  

## 自定义 proxy-groups
下面是一个有效的 `region_dict` 和 `custom_proxy_group` 的例子：  
```Python
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
1. `region_dict` 为一个字典，其中每个键值对的键为地区分组的名称，值为一个列表，列表的第一个元素为正则表达式，第二个元素为地区分组的名称。这个字典中的正则表达式会被用于匹配节点名称，如果匹配成功，则会将节点加入到对应的地区分组中。  
2. `custom_proxy_group` 为一个列表，其中每个元素都是一个字典，代表一个 proxy-group。  
   每个字典的基本格式为：
   ```python
   {
       "name": <名称>,
       "type": <类型>,
       # 其他字段
   }
   ```
   其他字段包括：
    - `"rule"`: 表示这是否是一个规则组（规则组指的是类似 `📲 电报消息` 这样用于分流的组，而非 `♻️ 自动选择` 等用于选择节点的组。**默认值为`True`**  
    - `"prior"`: **仅当`"rule"`字段为`False`时有效，且必填**。可选值：`"DIRECT"`、`"PROXY"`、`"REJECT"`。表示这个 proxy-group 的默认选择。其中`"PROXY"`表示默认选择`"🚀 节点选择"  
    - `"regex"`: **仅当`"rule"`字段为`False`时有效**。一个正则表达式，用于匹配节点名称。如果匹配成功，则将节点加入到这个 proxy-group 中。如果不指定这个字段，则所有节点都会被加入到这个 proxy-group 中。  
    - `"region"`: **仅当`"rule"`字段为`False`时且未指定`"regex"`字段时有效**（就是说`"regex"`的优先级高于`"region"`）。可用值为`region_dict`中的键。如果指定了这个字段，则只有匹配到`region_dict`中对应的正则表达式的节点才会被加入到这个 proxy-group 中。用于指定某个 proxy-group 只包含某个地区的节点。  
    - `"manual"`: **仅当`"rule"`字段为`False`时有效**。可选值为`True`或`False`。当值为`True`时，这个 proxy-group 会包含备用节点。当值为`False`时，这个 proxy-group 不会包含备用节点。**默认值为`False`**。  
