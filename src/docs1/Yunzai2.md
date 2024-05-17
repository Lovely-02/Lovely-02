---
title: 自动安装
icon: fa-solid fa-heart
editLink: false
order: 2
article: false
tag:
  - 教程
---

# ZeroTwo
<!-- more -->
## 一键安装

::: code-tabs

@tab Yunzai环境

```bash
bash <(curl -L x.ylove.love/Yunzai/Yunzai.sh)
```

@tab Miao-Yunzai

```bash
bash <(curl -L x.ylove.love/Yunzai/Miao-Yunzai.sh)
```

@tab TRSS-Yunzai

```bash
bash <(curl -L x.ylove.love/Yunzai/TRSS-Yunzai.sh)
```

:::

## Qsign

- Qsign8.9.78
::: code-tabs

@tab Linux

```bash
# 下载
bash <(curl -L x.ylove.love/Qsign/Qsign.sh)
# 进入目录
cd Qsign
# 守护进程
screen -R qsign
# 启动
bash X
```

@tab Windows

```bash
# 下载
https://x.ylove.love/Qsign/QsignWindows.zip
# 双击
unidbg-fetch-qsign-gui-xiaoqian.exe
```
:::

## 运行
::: code-tabs

@tab 保护

```bash
pnpm start
pnpm pm2 save
pnpm pm2 startup
```

@tab 日志

```bash
pnpm log
```

@tab 启动

```bash
pnpm start
```

@tab 重启

```bash
pnpm restart
```

@tab 停止

```bash
pnpm stop
```
:::