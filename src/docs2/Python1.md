---
title: 手动安装
icon: fa-solid fa-heart
editLink: false
order: 2
article: false
tag:
  - 教程
---

# ZeroTwo
<!-- more -->
## 更新包

```bash
#刷新软件包目录
sudo apt update
# 列出当前可用的更新
sudo apt list --upgradable
# 如上一步提示有可以更新的项目，则执行更新
sudo apt  upgrade -y
# 安装 GCC 编译器
sudo apt install gcc -y
# 刷新软件包目录
sudo apt update
```

## 安装依赖

```bash
sudo apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libbz2-dev liblzma-dev sqlite3 libsqlite3-dev tk-dev uuid-dev libgdbm-compat-dev -y
```

## 下载Python

```bash
#下载
wget https://x.ylove.love/Python/Python-3.9.16.tgz
#解压
tar -xf Python-3.9.16.tgz
# 进入该目录
cd Python-3.9.16/
# 编译
sudo make -j 2
#安装
make altinstall
#链接
sudo ln -s /usr/local/lib/libpython3.9.so.1.0 /usr/lib/
```

## 验证安装

::: code-tabs

@tab Python

```bash
python3.9 --version
```

@tab pip

```bash
pip3.9 --version
```