---
title: 搭建一个论坛————discuz
date: 2018-06-19 18:21:39
tags:
---
<h3>一  安装lnmp(Nginx/MySQL/PHP)环境</h3>
wget http://soft2.vpser.net/lnmp/lnmp1.5-full.tar.gz
<!--more-->
tar -zxvf lnmp1.5-full.tar.gz

cd lnmp1.5-full

<span class="s1">./install.sh   </span>

一路默认，虚拟机一个小时内应该能安装好 之后就可以访问IP了

默认的访问目录为这个

<code>/home/wwwroot/default</code>

<hr />

<h3>二  安装 discuz</h3>
此时进入默认的访问目录的上一级：cd /home/wwwroot/

下载链接
<pre class="">wget http://download.comsenz.com/DiscuzX/3.3/Discuz_X3.3_SC_UTF8.zip</pre>
备用：
<pre class="">wget https://jungui.tk/wp-content/uploads/dlm_uploads/2018/06/Discuz_X3.3_SC_UTF8.zip</pre>
解压
<pre class="">unzip Discuz_X3.3_SC_UTF8.zip</pre>
<pre class="">mv default old
mv upload default</pre>

<hr />

<h3>三 给权限</h3>
<pre>chown -R 755 /home/wwwroot/
chown -R www:www /home/wwwroot/</pre>

<hr />
<p style="text-align: center;"><strong>此时输入IP或者域名即可访问配置论坛了</strong></p>
<audio style="display: none;" controls="controls"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></audio>

<audio style="display: none;" controls="controls"></audio>

<audio style="display: none;" controls="controls"></audio>

<audio style="display: none;" controls="controls"></audio>
