#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

hexo clean

hexo g

# cd 到构建输出的目录下
cd public

# 部署到自定义域名，没有自定义域名可注释掉
#echo 'lee.js.org' > CNAME

git init
git add -A
git commit -m 'deploy'


# 部署到 https://<USERNAME>.github.io
git push -f https://gitee.com/LeeAaron6/LeeAaron6.git master

cd -
