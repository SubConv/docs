# 如何更新

## 如果部署在 Vercel 上
当你的 forked 仓库不是最新时，你可以按照下面的图片来将其与原始仓库同步：
![image](/assets/deploy/update.png)  
之后，Vercel 将自动重新部署。

## 如果使用 Docker 部署
1. 假设你的服务器上的目录是 `~/subconv`。进入该目录。
2. 使用 `docker compose down` 停止服务。
3. 使用 `docker compose pull` 来拉取最新的镜像。
4. 查看 Release 页面，看看有没有需要更新的配置项。若无，跳过 5~6 步。
5. 备份 `config.yaml` 文件，然后删除原来的 `config.yaml` 文件。
6. 使用 `docker compose run --rm subconv -G default > config.yaml` 生成默认配置文件。然后根据备份的 `config.yaml` 文件修改新的 `config.yaml` 文件。
7. 使用 `docker compose up -d` 来启动服务。

## 如果部署在你的 VPS 上（二进制文件）
1. 停止 subconv 的进程。
2. 从 [Releases](https://github.com/SubConv/SubConv/releases) 下载最新的二进制文件。删除原来的 `api` 文件和 `static` 文件夹，然后把新的文件解压进去。授予 `api` 文件可执行权限。
3. 查看 Release 页面，看看有没有需要更新的配置项。若无，跳过 4~6 步。
4. 备份 `config.yaml` 文件，然后删除原来的 `config.yaml` 文件。
5. 运行 `./api -G default > config.yaml` 生成默认配置文件。
6. 根据备份的 `config.yaml` 文件修改新的 `config.yaml` 文件。
7. 重新运行程序。
