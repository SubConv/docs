# How to Update

## If deployed on Vercel
When your forked repository is out of date, you can sync it with the original repository according to the picture below:  
![image](/assets/deploy/update.png)  
After that, vercel will redeploy automatically.  

## If deployed on your VPS
1. sync your forked repository with the original repository according to the picture above.  
2. Stop the process of `SubConv`  
3. run `git pull` in the folder of the `SubConv` folder in your VPS.  
4. Restart `SubConv`  
