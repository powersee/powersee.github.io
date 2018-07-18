---
title: 搭建一个聊天室——rocket.chat
date: 2018-07-18 14:30:45
tags:
---
Rocket.Chat 是一款开源软件。
项目地址：https://github.com/RocketChat/Rocket.Chat
<!--more-->
#### 安装
我是在 Ubuntu 18.04 纯净系统下使用的
用 snap 安装
<pre>snap install rocketchat-server</pre>

#### 联结 caddy

```
sudo rocketchat-server.initcaddy
```

编辑 Caddyfile 文件

```
nano /var/snap/rocketchat-server/current/Caddyfile
```

将  http://:8080 为你的网站,如 powersee.tk

```
http://powersee.tk
proxy / localhost:3000 {
  websocket
  transparent
}
```

再重启

```
sudo systemctl restart snap.rocketchat-server.rocketchat-caddy
```

那么此时访问网址就能进入聊天室了
 因为此处用 SSL 的话，我试了好多次，只能搞自签证书，而这样在手机客户端又没办法连接，因此不演示。

#### 配置
第一次进入注册的账号会成为管理账号。
进入后是英文的，可以设置为中文。
点击导航栏的三个点，进入管理界面

然后在里面可以找到设置语言的地方


#### 手机端登录
第一次进入会出现这个界面
(让你输入网址)
因为我没有使用 SSL，因此得点那个倒三角，选择 http:// 然后再输入网址，如我的 powersee.tk
再用账号密码登录即可。同个账号在多平台是可以同时在线的。

#### 手机客户端下载
去 play 商店 下载
GitHub下载:下载 armv7 版本的到手机安装，x86版本的则到平板。https://github.com/RocketChat/Rocket.Chat.Cordova/releases/
总体而言，还是挺有趣的。
