# Deploy on VPS or PC (Binary)
Here I suppose you're using Linux server (Windows is similar).  

## Steps
1. Download the latest version from [Release](https://github.com/SubConv/SubConv/releases) page and extract it to your machine, let's say `/opt/subconv`. It should contain `api` file and `static` folder.
2. `cd /opt/subconv` to enter the directory
3. `chmod +x api.py` to give it execution permission
4. Run `./api -G default > config.yaml` to generate the default configuration file. Then modify it as needed. If you need to use ZJU's configuration file, you can use `./api -G zju > config.yaml` to generate ZJU's configuration file. For detailed configuration items, please refer to [Configuration](../configuration/overview)
5. `./api -h` to see the help message.  
   For example, you can use `./api -H 127.0.0.1 -P 2534' or './api -H 127.0.0.1 -P 2534` to specify the host and port to listen. If all parameters are omitted, the host will be `0.0.0.0` and the port will be `8080`  
   > ***Note***: If you're not using a privileged user, you usually can't bind to a port below 1024. It's recommended to use a high port or you can use `setcap` to give python the permission to bind to a low port.
6. Use reverse proxy (optional)

## Enjoy
