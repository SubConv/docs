# Deploy on VPS or PC
Here I suppose you're using Linux server (Windows is similar).  
Below are two methods, the first one is to fork this repo and use GitHub Actions to cache rules, the second one is to cache rules directly on VPS without forking the repo.

## Method 1
### Steps
1. Fork this repo to your own account.  
2. switch into "Actions" menu and enable it. Then manually trigger the action for the first time to cache the rules. (Normally you don't need to do this later anymore)
   <img src="/assets/deploy/vercel_mkcache.png" width=600rem>
3. Use you package manager to install `python3`, `python3-pip` and `git` on your VPS. And it's ***recommended to use a reverse proxy*** to provide https. I won't talk about this here.  
4. Clone your forked repo to your VPS and `cd` into it. (If you like, you can create virtual environment using `env`)  
5. `pip3 install -r requirements.txt` to install dependencies.  
6. `chmod +x api.py` to give permission for execution  
7. `./api.py -h` or `python3 api.py -h` to see usage  
   for example, you can use `./api.py -H 127.0.0.1 -P 2534` or `python3 api.py -H 127.0.0.1 -P 2534` to specify the host and port listened. If all parameters are omitted, the host will be 0.0.0.0 and port will be 443  
   > ***Attention***: If you're not using privileged user, normally you are not able to bind ports under 1024. It's recommended to use high ports or you can use `setcap` to give python permission to bind lower ports.  
8. Use reverse proxy (optional)

### After Deployment
The GitHub Actions will cache rules to your repo regularly, but it won't be synchronized into your VPS automatically. So you may need to execute `git pull` manually or you can use script to finish this automatically  

## Method 2
### Steps
1. Clone this repo to your VPS and `cd` into it. (If you like, you can create virtual environment using `env`)
2. `pip3 install -r requirements.txt` to install dependencies.
3. `chmod +x api.py` to give permission for execution
4. `python3 mkcache.py` to cache rules
5. `./api.py -h` or `python3 api.py -h` to see usage
   for example, you can use `./api.py -H 127.0.0.1 -P 2534` or `python3 api.py -H 127.0.0.1 -P 2534` to specify the host and port listened. If all parameters are omitted, the host will be 0.0.0.0 and port will be 443
   > ***Attention***: If you're not using privileged user, normally you are not able to bind ports under 1024. It's recommended to use high ports or you can use `setcap` to give python permission to bind lower ports.
6. Use reverse proxy (optional)

### After Deployment
To update rules, you can use `python3 mkcache.py` to update cache and then restart the server.

## Enjoy
