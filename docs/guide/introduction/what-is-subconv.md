# What is SubConv?

Welcome to the knowledge base of SubConv.  

[SubConv](https://github.com/SubConv/SubConv) is a Clash config generator which also serves as a subscription converter. It can convert subscription of various format into Clash config file.  

It's user-friendly and easy to use.  

It's easy to deploy free of charge using [Vercel](https://vercel.com).  

We provide configuration files for general users and ZJU users.

## Screenshots

![screenshot](/assets/screenshot.png)

## Features

- Support Clash config and V2ray format base64 links (i.e. the original subscription does not have to be Clash)
- A Web-UI (thanks to [@Musanico](https://github.com/musanico))
- Rules based on ACL
- Nodes auto update based on proxy-provider
- Rules auto update based on rule-provider
- Support proxy rule-provider to prevent failure to get rules from GitHub
- Support multiple airpots
- Display remaining traffic and total traffic (only useful when you use a single airport, requires your airport and Clash to support it at the same time, Clash for Windows, Clash Verge, Stash, Clash Meta for Android, etc. are known to support it)
- Implement the api of subscription conversion to proxy-provider (normal people won't use it)
- Support configuration file
