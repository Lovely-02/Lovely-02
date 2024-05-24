import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as u,c as d,d as r,b as l,w as e,a,e as p,f as s}from"./app-C3iPtlp0.js";const m={},v=a("h1",{id:"zerotwo",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#zerotwo"},[a("span",null,"ZeroTwo")])],-1),h=a("h2",{id:"环境安装",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#环境安装"},[a("span",null,"环境安装")])],-1),b=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"sudo"),s(),a("span",{class:"token function"},"apt"),s(" update "),a("span",{class:"token operator"},"&&"),s(),a("span",{class:"token function"},"sudo"),s(),a("span",{class:"token function"},"sudo"),s(),a("span",{class:"token function"},"apt"),s(` upgrade
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),g=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"sudo"),s(),a("span",{class:"token function"},"apt-get"),s(),a("span",{class:"token function"},"install"),s(),a("span",{class:"token function"},"screen"),s(),a("span",{class:"token function"},"unzip"),s(),a("span",{class:"token function"},"curl"),s(),a("span",{class:"token function"},"git"),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),k=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"sudo"),s(),a("span",{class:"token function"},"apt"),s(),a("span",{class:"token function"},"install"),s(` fonts-wqy-zenhei
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),_=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token comment"},"# Debian"),s(`
`),a("span",{class:"token function"},"sudo"),s(),a("span",{class:"token function"},"apt"),s(),a("span",{class:"token function"},"install"),s(` FFmpeg
`),a("span",{class:"token comment"},"# Ubuntu"),s(`
`),a("span",{class:"token function"},"sudo"),s(),a("span",{class:"token function"},"apt-get"),s(),a("span",{class:"token function"},"install"),s(` ffmpeg
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),f=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token comment"},"# Debian"),s(`
`),a("span",{class:"token function"},"sudo"),s(),a("span",{class:"token function"},"apt"),s(),a("span",{class:"token function"},"install"),s(` chromium
`),a("span",{class:"token comment"},"# Ubuntu"),s(`
`),a("span",{class:"token function"},"sudo"),s(),a("span",{class:"token function"},"apt"),s(),a("span",{class:"token function"},"install"),s(` chromium-browser
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),A=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"sudo"),s(),a("span",{class:"token function"},"apt"),s(),a("span",{class:"token function"},"install"),s(" lsb-release "),a("span",{class:"token function"},"curl"),s(` gpg
`),a("span",{class:"token function"},"curl"),s(),a("span",{class:"token parameter variable"},"-fsSL"),s(" https://packages.redis.io/gpg "),a("span",{class:"token operator"},"|"),s(),a("span",{class:"token function"},"sudo"),s(" gpg "),a("span",{class:"token parameter variable"},"--dearmor"),s(),a("span",{class:"token parameter variable"},"-o"),s(` /usr/share/keyrings/redis-archive-keyring.gpg
`),a("span",{class:"token builtin class-name"},"echo"),s(),a("span",{class:"token string"},[s('"deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb '),a("span",{class:"token variable"},[a("span",{class:"token variable"},"$("),s("lsb_release "),a("span",{class:"token parameter variable"},"-cs"),a("span",{class:"token variable"},")")]),s(' main"')]),s(),a("span",{class:"token operator"},"|"),s(),a("span",{class:"token function"},"sudo"),s(),a("span",{class:"token function"},"tee"),s(` /etc/apt/sources.list.d/redis.list
`),a("span",{class:"token function"},"sudo"),s(),a("span",{class:"token function"},"apt-get"),s(` update
`),a("span",{class:"token function"},"sudo"),s(),a("span",{class:"token function"},"apt-get"),s(),a("span",{class:"token function"},"install"),s(` redis
systemctl `),a("span",{class:"token builtin class-name"},"enable"),s(` redis-server
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),x=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"sudo"),s(),a("span",{class:"token function"},"curl"),s(),a("span",{class:"token parameter variable"},"-fsSL"),s(" https://deb.nodesource.com/setup_20.x "),a("span",{class:"token operator"},"|"),s(),a("span",{class:"token function"},"sudo"),s(),a("span",{class:"token function"},"bash"),s(` - 
`),a("span",{class:"token function"},"sudo"),s(),a("span",{class:"token function"},"apt-get"),s(),a("span",{class:"token function"},"install"),s(),a("span",{class:"token parameter variable"},"-y"),s(` nodejs
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),y=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s("ffmpeg "),a("span",{class:"token parameter variable"},"-version"),s(`
`),a("span",{class:"token function"},"node"),s(),a("span",{class:"token parameter variable"},"--version"),s(`
chromium `),a("span",{class:"token parameter variable"},"--version"),s(`
systemctl status redis-server
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),z=a("h2",{id:"qsign",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#qsign"},[a("span",null,"Qsign")])],-1),Y=a("ul",null,[a("li",null,"Qsign8.9.78")],-1),S=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token comment"},"# 下载"),s(`
`),a("span",{class:"token function"},"bash"),s(),a("span",{class:"token operator"},"<"),a("span",{class:"token punctuation"},"("),a("span",{class:"token function"},"curl"),s(),a("span",{class:"token parameter variable"},"-L"),s(" x.ylove.love/Qsign/Qsign.sh"),a("span",{class:"token punctuation"},")"),s(`
`),a("span",{class:"token comment"},"# 进入目录"),s(`
`),a("span",{class:"token builtin class-name"},"cd"),s(` Qsign
`),a("span",{class:"token comment"},"# 守护进程"),s(`
`),a("span",{class:"token function"},"screen"),s(),a("span",{class:"token parameter variable"},"-R"),s(` qsign
`),a("span",{class:"token comment"},"# 启动"),s(`
`),a("span",{class:"token function"},"bash"),s(` X
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),w=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token comment"},"# 下载"),s(`
https://x.ylove.love/Qsign/QsignWindows.zip
`),a("span",{class:"token comment"},"# 双击"),s(`
unidbg-fetch-qsign-gui-xiaoqian.exe
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),T=a("h2",{id:"yunzai手动安装",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#yunzai手动安装"},[a("span",null,"Yunzai手动安装")])],-1),R=a("ul",null,[a("li",null,"Yunzai 本体安装")],-1),Q=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"git"),s(" clone "),a("span",{class:"token parameter variable"},"--depth"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1"),s(` https://gitee.com/yoimiya-kokomi/Miao-Yunzai.git
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),F=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"git"),s(" clone "),a("span",{class:"token parameter variable"},"--depth"),s(),a("span",{class:"token number"},"1"),s(` https://gitee.com/TimeRainStarSky/Yunzai
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),q=a("ul",null,[a("li",null,"进入根目录")],-1),M=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token builtin class-name"},"cd"),s(` Miao-Yunzai
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),N=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token builtin class-name"},"cd"),s(` Yunzai
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),C=a("ul",null,[a("li",null,"安装插件 (必装)")],-1),L=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"git"),s(" clone "),a("span",{class:"token parameter variable"},"--depth"),s(),a("span",{class:"token number"},"1"),s(` https://gitee.com/yoimiya-kokomi/miao-plugin plugins/miao-plugin
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),P=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token comment"},"# Miao-Yunzai 请跳过"),s(`
`),a("span",{class:"token function"},"git"),s(" clone "),a("span",{class:"token parameter variable"},"--depth"),s(),a("span",{class:"token number"},"1"),s(` https://gitee.com/TimeRainStarSky/Yunzai-genshin plugins/genshin
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),V=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"git"),s(" clone "),a("span",{class:"token parameter variable"},"--depth"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1"),s(` https://gitee.com/Ctrlcvs/xiaoyao-cvs-plugin.git ./plugins/xiaoyao-cvs-plugin/
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),Z=a("ul",null,[a("li",null,"安装插件 (可选)")],-1),j=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"git"),s(" clone "),a("span",{class:"token parameter variable"},"--depth"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1"),s(` https://gitee.com/guoba-yunzai/guoba-plugin.git ./plugins/Guoba-Plugin/
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),W=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"git"),s(" clone "),a("span",{class:"token parameter variable"},"--depth"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1"),s(` https://gitee.com/Nwflower/atlas ./plugins/Atlas/
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),B=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"git"),s(" clone "),a("span",{class:"token parameter variable"},"--depth"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1"),s(` https://gitee.com/xiaoye12123/ws-plugin.git ./plugins/ws-plugin/
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),D=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"git"),s(" clone "),a("span",{class:"token parameter variable"},"--depth"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1"),s(` https://gitee.com/hewang1an/StarRail-plugin.git ./plugins/StarRail-plugin
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),G=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"git"),s(" clone "),a("span",{class:"token parameter variable"},"--depth"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1"),s(` https://gitee.com/FanSky_Qs/FanSky_Qs.git ./plugins/FanSky_Qs/
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),E=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"git"),s(" clone "),a("span",{class:"token parameter variable"},"--depth"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1"),s(` https://gitee.com/xfdown/xiaofei-plugin.git ./plugins/xiaofei-plugin/
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),H=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"git"),s(" clone "),a("span",{class:"token parameter variable"},"--depth"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1"),s(` https://gitee.com/SmallK111407/earth-k-plugin.git ./plugins/earth-k-plugin/
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),I=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"git"),s(" clone "),a("span",{class:"token parameter variable"},"--depth"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1"),s(` https://gitee.com/liangshi233/liangshi-calc.git ./plugins/liangshi-calc/
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),K=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"git"),s(" clone "),a("span",{class:"token parameter variable"},"--depth"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1"),s(` https://gitee.com/SHIKEAIXY/yenai-plugin.git ./plugins/yenai-plugin
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),U=a("ul",null,[a("li",null,"安装pnpm")],-1),X=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token builtin class-name"},"cd"),s(` Miao-Yunzai
`),a("span",{class:"token function"},"npm"),s(" i "),a("span",{class:"token parameter variable"},"-g"),s(),a("span",{class:"token function"},"pnpm"),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),J=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token builtin class-name"},"cd"),s(` Yunzai
`),a("span",{class:"token function"},"npm"),s(" i "),a("span",{class:"token parameter variable"},"-g"),s(),a("span",{class:"token function"},"pnpm"),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),O=a("ul",null,[a("li",null,"安装依赖")],-1),$=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"pnpm"),s(),a("span",{class:"token function"},"install"),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),aa=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"pnpm"),s(),a("span",{class:"token function"},"add"),s(" systeminformation "),a("span",{class:"token parameter variable"},"-w"),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),sa=p(`<ul><li>安装pm2守护进程</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> pm2 <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Yunzai 启动！</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">node</span> app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行"><span>运行</span></a></h2>`,5),ea=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"pnpm"),s(` start
`),a("span",{class:"token function"},"pnpm"),s(` pm2 save
`),a("span",{class:"token function"},"pnpm"),s(` pm2 startup
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),na=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"pnpm"),s(` log
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),ia=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"pnpm"),s(` start
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),ta=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"pnpm"),s(` restart
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),la=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"pnpm"),s(` stop
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1);function ca(oa,ua){const t=o("CodeTabs");return u(),d("div",null,[v,r(" more "),h,l(t,{id:"7",data:[{id:"软件包更新"},{id:"软件包下载"},{id:"中文字体"},{id:"FFmpeg"},{id:"chromium"},{id:"redis"},{id:"nodejs"},{id:"验证安装结果"}]},{title0:e(({value:n,isActive:i})=>[s("软件包更新")]),title1:e(({value:n,isActive:i})=>[s("软件包下载")]),title2:e(({value:n,isActive:i})=>[s("中文字体")]),title3:e(({value:n,isActive:i})=>[s("FFmpeg")]),title4:e(({value:n,isActive:i})=>[s("chromium")]),title5:e(({value:n,isActive:i})=>[s("redis")]),title6:e(({value:n,isActive:i})=>[s("nodejs")]),title7:e(({value:n,isActive:i})=>[s("验证安装结果")]),tab0:e(({value:n,isActive:i})=>[b]),tab1:e(({value:n,isActive:i})=>[g]),tab2:e(({value:n,isActive:i})=>[k]),tab3:e(({value:n,isActive:i})=>[_]),tab4:e(({value:n,isActive:i})=>[f]),tab5:e(({value:n,isActive:i})=>[A]),tab6:e(({value:n,isActive:i})=>[x]),tab7:e(({value:n,isActive:i})=>[y]),_:1}),z,Y,l(t,{id:"43",data:[{id:"Linux"},{id:"Windows"}]},{title0:e(({value:n,isActive:i})=>[s("Linux")]),title1:e(({value:n,isActive:i})=>[s("Windows")]),tab0:e(({value:n,isActive:i})=>[S]),tab1:e(({value:n,isActive:i})=>[w]),_:1}),T,R,l(t,{id:"61",data:[{id:"Miao-Yunzai"},{id:"TRSS-Yunzai"}]},{title0:e(({value:n,isActive:i})=>[s("Miao-Yunzai")]),title1:e(({value:n,isActive:i})=>[s("TRSS-Yunzai")]),tab0:e(({value:n,isActive:i})=>[Q]),tab1:e(({value:n,isActive:i})=>[F]),_:1}),q,l(t,{id:"76",data:[{id:"Miao-Yunzai"},{id:"TRSS-Yunzai"}]},{title0:e(({value:n,isActive:i})=>[s("Miao-Yunzai")]),title1:e(({value:n,isActive:i})=>[s("TRSS-Yunzai")]),tab0:e(({value:n,isActive:i})=>[M]),tab1:e(({value:n,isActive:i})=>[N]),_:1}),C,l(t,{id:"91",data:[{id:"miao-plugin"},{id:"genshin"},{id:"xiaoyao-cvs-plugin"}]},{title0:e(({value:n,isActive:i})=>[s("miao-plugin")]),title1:e(({value:n,isActive:i})=>[s("genshin")]),title2:e(({value:n,isActive:i})=>[s("xiaoyao-cvs-plugin")]),tab0:e(({value:n,isActive:i})=>[L]),tab1:e(({value:n,isActive:i})=>[P]),tab2:e(({value:n,isActive:i})=>[V]),_:1}),Z,l(t,{id:"109",data:[{id:"Guoba-Plugin"},{id:"Atlas"},{id:"ws-plugin"},{id:"StarRail-plugin"},{id:"FanSky_Qs"},{id:"xiaofei-plugin"},{id:"earth-k-plugin"},{id:"liangshi-calc/"},{id:"yenai-plugin"}]},{title0:e(({value:n,isActive:i})=>[s("Guoba-Plugin")]),title1:e(({value:n,isActive:i})=>[s("Atlas")]),title2:e(({value:n,isActive:i})=>[s("ws-plugin")]),title3:e(({value:n,isActive:i})=>[s("StarRail-plugin")]),title4:e(({value:n,isActive:i})=>[s("FanSky_Qs")]),title5:e(({value:n,isActive:i})=>[s("xiaofei-plugin")]),title6:e(({value:n,isActive:i})=>[s("earth-k-plugin")]),title7:e(({value:n,isActive:i})=>[s("liangshi-calc/")]),title8:e(({value:n,isActive:i})=>[s("yenai-plugin")]),tab0:e(({value:n,isActive:i})=>[j]),tab1:e(({value:n,isActive:i})=>[W]),tab2:e(({value:n,isActive:i})=>[B]),tab3:e(({value:n,isActive:i})=>[D]),tab4:e(({value:n,isActive:i})=>[G]),tab5:e(({value:n,isActive:i})=>[E]),tab6:e(({value:n,isActive:i})=>[H]),tab7:e(({value:n,isActive:i})=>[I]),tab8:e(({value:n,isActive:i})=>[K]),_:1}),U,l(t,{id:"145",data:[{id:"Miao-Yunzai"},{id:"TRSS-Yunzai"}]},{title0:e(({value:n,isActive:i})=>[s("Miao-Yunzai")]),title1:e(({value:n,isActive:i})=>[s("TRSS-Yunzai")]),tab0:e(({value:n,isActive:i})=>[X]),tab1:e(({value:n,isActive:i})=>[J]),_:1}),O,l(t,{id:"160",data:[{id:"Yunzai"},{id:"椰奶状态"}]},{title0:e(({value:n,isActive:i})=>[s("Yunzai")]),title1:e(({value:n,isActive:i})=>[s("椰奶状态")]),tab0:e(({value:n,isActive:i})=>[$]),tab1:e(({value:n,isActive:i})=>[aa]),_:1}),sa,l(t,{id:"187",data:[{id:"保护"},{id:"日志"},{id:"启动"},{id:"重启"},{id:"停止"}]},{title0:e(({value:n,isActive:i})=>[s("保护")]),title1:e(({value:n,isActive:i})=>[s("日志")]),title2:e(({value:n,isActive:i})=>[s("启动")]),title3:e(({value:n,isActive:i})=>[s("重启")]),title4:e(({value:n,isActive:i})=>[s("停止")]),tab0:e(({value:n,isActive:i})=>[ea]),tab1:e(({value:n,isActive:i})=>[na]),tab2:e(({value:n,isActive:i})=>[ia]),tab3:e(({value:n,isActive:i})=>[ta]),tab4:e(({value:n,isActive:i})=>[la]),_:1})])}const pa=c(m,[["render",ca],["__file","Yunzai1.html.vue"]]),ma=JSON.parse('{"path":"/docs1/Yunzai1.html","title":"手动安装","lang":"zh-CN","frontmatter":{"title":"手动安装","icon":"fa-solid fa-heart","editLink":false,"order":2,"article":false,"tag":["教程"],"head":[["meta",{"property":"og:url","content":"https://x.ylove.love/docs1/Yunzai1.html"}],["meta",{"property":"og:site_name","content":"ZeroTwo"}],["meta",{"property":"og:title","content":"手动安装"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-17T01:11:36.000Z"}],["meta",{"property":"article:author","content":"ZeroTwo"}],["meta",{"property":"article:tag","content":"教程"}],["meta",{"property":"article:modified_time","content":"2024-05-17T01:11:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"手动安装\\"}"]]},"headers":[{"level":2,"title":"环境安装","slug":"环境安装","link":"#环境安装","children":[]},{"level":2,"title":"Qsign","slug":"qsign","link":"#qsign","children":[]},{"level":2,"title":"Yunzai手动安装","slug":"yunzai手动安装","link":"#yunzai手动安装","children":[]},{"level":2,"title":"运行","slug":"运行","link":"#运行","children":[]}],"git":{"createdTime":1715908296000,"updatedTime":1715908296000,"contributors":[{"name":"HenTai-02","email":"84227871@qq.com","commits":1}]},"readingTime":{"minutes":1.86,"words":559},"filePathRelative":"docs1/Yunzai1.md","localizedDate":"2024年5月17日","excerpt":"\\n"}');export{pa as comp,ma as data};