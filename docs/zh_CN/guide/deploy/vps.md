# 在 VPS 或 PC 上部署（二进制文件）
这里我假设你使用的是 Linux 服务器（Windows类似）。  

## 步骤
1. 从 [Release](https://github.com/SubConv/SubConv/releases) 页面下载对应系统的最新版本，然后解压到机器上，假设解压到了 `/opt/subconv`。这里面应该包含了 `api` 文件和 `static` 文件夹。
2. `cd /opt/subconv` 进入目录
3. `chmod +x api.py` 来给予执行权限
4. 运行 `./api -G default` 来生成默认配置文件。然后根据需要修改。如果需要使用 ZJU 的配置文件，可以使用 `./api -G zju` 生成 ZJU 的配置文件。详细的配置项可以参考 [配置](../configuration/overview)
5. `./api -h` 来查看帮助信息。  
   例如，你可以使用 `./api -H 127.0.0.1 -P 2534' 或 './api -H 127.0.0.1 -P 2534` 来指定监听的主机和端口。如果所有参数都被省略，host 将会是 `0.0.0.0`，端口将会是 `8080`  
    > ***注意***：如果你不是使用特权用户，通常你是不能绑定 1024 以下的端口的。推荐使用高端口或者你可以使用 `setcap` 来给 python 绑定低端口的权限。
6. 使用反向代理（可选）

## 尽情享受吧
