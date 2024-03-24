# 使用 Docker 部署

首先请确保你已经安装了 Docker 和 Docker Compose。

## 步骤

1. 在服务器上创建一个目录，比如 `~/subconv`。
2. 在该目录下创建一个 `docker-compose.yml` 文件，内容如下：

    ```yaml
    version: '3'
    services:
      subconv:
        image: ghcr.io/subconv/subconv:latest
        container_name: subconv
        restart: unless-stopped
        ports:
          - "8080:8080"
        volumes:
          - ./config.yml:/app/config.yml
    ```

    > ***注意***：这里的第一个 `8080` 是你想要映射到的端口，可以根据需要修改。

3. 在该目录下运行 `docker compose run --rm -v ./config.yml:/app/config.yml subconv -G default` 生成默认配置文件。可以根据需要修改。如果需要使用 ZJU 的配置文件，可以使用 `docker compose run --rm -v ./config.yml:/app/config.yml subconv -G zju` 生成 ZJU 的配置文件。详细的配置项可以参考 [配置](../configuration/overview)
4. 运行 `docker compose up -d` 来启动服务。
5. 尽情享受吧
