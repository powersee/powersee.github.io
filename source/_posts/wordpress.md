---
title: 利用lnmp搭建wordpress
date: 2018-06-19 18:52:14
tags:
---
#发现1.5正式版更新了，我自己也试了，所以现在把原来命令行里的 1.4 全部都换成 1.5 了

### 一，安装lnmp(Nginx/MySQL/PHP)环境
wget http://soft2.vpser.net/lnmp/lnmp1.5-full.tar.gz
<!--more-->
tar -zxvf lnmp1.5-full.tar.gz

cd lnmp1.5-full

./install.sh   

一路默认，虚拟机一个小时应该能安装好 之后就可以访问IP了

默认的访问目录为这个

/home/wwwroot/default

### 二，安装wordpress
此时进入默认的访问目录的上一级：cd /home/wwwroot/

wget https://cn.wordpress.org/wordpress-4.9.4-zh_CN.tar.gz

tar -zxvf wordpress-4.9.4-zh_CN.tar.gz

mv default old

mv wordpress default

此时应该就可以访问wordpress了

### 三，创建数据库
mysql -u root -p
输入密码，默认的话就是root
create database wordpress;
exit
### 四，给权限
chown -R 755 /home/wwwroot/
chown -R www:www /home/wwwroot/


此时输入IP即可访问配置wordpress
