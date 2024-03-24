# Deploy with Docker

First make sure you have installed Docker and Docker Compose.

## Steps

1. Create a directory on your server, for example `~/subconv`.
2. Create a `docker-compose.yml` file in that directory with the following content:

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

    > ***Note***: Here the first `8080` is the port you want to map to, you can modify it as needed.

3. Run `docker compose run --rm -v ./config.yml:/app/config.yml subconv -G default` to generate the default configuration file in the directory. You can modify it as needed. If you need to use ZJU's configuration file, you can use `docker compose run --rm -v ./config.yml:/app/config.yml subconv -G zju` to generate ZJU's configuration file. For detailed configuration items, please refer to [Configuration](../configuration/overview )
4. Run `docker compose up -d` to start the service.
5. Enjoy