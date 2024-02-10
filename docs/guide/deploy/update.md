# How to Update

## If deployed on Vercel
When your forked repository is out of date, you can sync it with the original repository according to the picture below:  
![image](/assets/deploy/update.png)  
After that, vercel will redeploy automatically.  

## If deployed with Docker
1. Assuming the directory on your server is `~/subconv`. Enter the directory.
2. Stop the service with `docker compose down`.
3. Pull the latest image with `docker compose pull`.
4. Check the Release page to see if there are any configuration items that need to be updated. If not, skip steps 5-6.
5. Backup the `config.yaml` file, then delete the original `config.yaml` file.
6. Run `docker compose run --rm subconv -G default > config.yaml` to generate the default configuration file. Then modify the new `config.yaml` file according to the backup `config.yaml` file.
7. Start the service with `docker compose up -d`.

## If deployed on your VPS (binary file)
1. Stop the subconv process.
2. Download the latest binary file from [Releases](https://github.como/SubConv/SubConv/releases). Delete the original `api` file and `static` folder, then unzip the new file into it. Grant the `api` file executable permission.
3. Check the Release page to see if there are any configuration items that need to be updated. If not, skip steps 4-6.
4. Backup the `config.yaml` file, then delete the original `config.yaml` file.
5. Run `./api -G default > config.yaml` to generate the default configuration file.
6. Modify the new `config.yaml` file according to the backup `config.yaml` file.
7. Run the program again.
