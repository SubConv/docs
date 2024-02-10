# Why SubConv

There are many subscription converters for Clash, but why should you choose SubConv? In other words, what are the advantages of SubConv?  

## Easy to Deploy for free
subconverter is developed in C++, which is not easy to deploy as serverless functions. SubConv is written in Python. Thus, it's easy to deploy it on Vercel. As long as you have a domain (can be got for free), you can deploy it for free.  

## Safe
It's deployed on your own Vercel or VPS, so nobody else can see your data.  

## Support Various Protocols and Formats of Original Subscriptions
The subscription and node parsing are based on [mihomo](https://github.com/MetaCubeX/mihomo/tree/Alpha/common/convert), so it theoretically supports all protocols and formats supported by Mihomo (Clash Meta).

## Automatically Update with proxy-provider and rule-provider
It uses proxy-provider and rule-provider to automatically update the node information and rules. It also supports using this service to proxy the ruleset, so users can get the rules even if they can't access GitHub (the server needs to be able to access GitHub).

## Easy to Customize
You can customize the rule sets by modifying the config file.  
It's also easy to do some further modifications by modifying the source code because it's written in Python which is like natural language.  
