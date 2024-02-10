# 配置

本程序的配置使用 YAML 文件格式。配置文件的为 `config.yaml`，位于程序的根目录下。例子可参考 [config.yaml](https://github.com/SubConv/SubConv/blob/main/config.yaml)。也可用运行 `./api -G default > config.yaml` 来生成默认配置文件。如果需要使用 ZJU 的配置文件，可以使用 `./api -G zju > config.yaml` 生成 ZJU 的配置文件。

## 配置项

- `HEAD`: 节点信息之前的配置，如
    ```yaml
    HEAD:
      mixed-port: 7890
      allow-lan: true
      mode: rule
      log-level: info
      external-controller: :9090
      dns:
        enable: true
        listen: 0.0.0.0:1053
        default-nameserver:
        - 223.5.5.5
        - 8.8.8.8
        - 1.1.1.1
        nameserver-policy:
          geosite:gfw,geolocation-!cn:
          - https://1.1.1.1/dns-query
          - https://1.0.0.1/dns-query
          - https://8.8.8.8/dns-query
        nameserver:
        - https://223.5.5.5/dns-query
        - https://1.12.12.12/dns-query
        - https://8.8.8.8/dns-query
        fallback:
        - https://1.1.1.1/dns-query
        - https://8.8.8.8/dns-query
        fallback-filter:
          geoip: false
          geoip-code: CN
          ipcidr:
          - 240.0.0.0/4
        fake-ip-filter:
        - +.lan
        - +.microsoft*.com
        - localhost.ptlogin2.qq.com
    ```
- `TEST_URL`: 测试节点的 URL，如
    ```yaml
    TEST_URL: https://www.gstatic.com/generate_204
    ```
- `RULESET`: 规则集，参考 [规则集](./rule-set)
- `CUSTOM_PROXY_GROUP` 自定义代理组，参考 [Proxy Groups](./proxy-groups)
