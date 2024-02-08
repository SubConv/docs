# Deploy on VPS or PC
Here I suppose you're using Linux server (Windows is similar).  

## Steps
1. Clone this repo to your VPS and `cd` into it. (If you like, you can create virtual environment using `env`)
2. `pip3 install -r requirements.txt` to install dependencies.
3. `chmod +x api.py` to give permission for execution
4. `./api.py -h` or `python3 api.py -h` to see usage
   for example, you can use `./api.py -H 127.0.0.1 -P 2534` or `python3 api.py -H 127.0.0.1 -P 2534` to specify the host and port listened. If all parameters are omitted, the host will be 0.0.0.0 and port will be 443
   > ***Attention***: If you're not using privileged user, normally you are not able to bind ports under 1024. It's recommended to use high ports or you can use `setcap` to give python permission to bind lower ports.
5. Use reverse proxy (optional)

## Enjoy
