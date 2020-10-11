#!/usr/bin/env sh


rm -rf dist &&
# 构建
yarn build &&

# cd 到构建输出的目录下
cd dist &&

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init &&
git add . &&
git commit -m 'update' &&
git remote add origin git@gitee.com:chenxiangpy/screw-ui-website.git &&
git push -f -u origin master
# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
cd -
# 部署到 https://<USERNAME>.github.io/<REPO>
echo https://chenxiangblog.com/screw-ui-website/index.html

