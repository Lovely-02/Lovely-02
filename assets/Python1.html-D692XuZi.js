import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as d,d as r,b as p,w as a,a as e,e as m,f as n}from"./app-CLsaCAa6.js";const u={},v=e("h1",{id:"zerotwo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#zerotwo"},[e("span",null,"ZeroTwo")])],-1),h=m(`<h2 id="更新包" tabindex="-1"><a class="header-anchor" href="#更新包"><span>更新包</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#刷新软件包目录</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token comment"># 列出当前可用的更新</span>
<span class="token function">sudo</span> <span class="token function">apt</span> list <span class="token parameter variable">--upgradable</span>
<span class="token comment"># 如上一步提示有可以更新的项目，则执行更新</span>
<span class="token function">sudo</span> <span class="token function">apt</span>  upgrade <span class="token parameter variable">-y</span>
<span class="token comment"># 安装 GCC 编译器</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gcc <span class="token parameter variable">-y</span>
<span class="token comment"># 刷新软件包目录</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libbz2-dev liblzma-dev sqlite3 libsqlite3-dev tk-dev uuid-dev libgdbm-compat-dev <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="下载python" tabindex="-1"><a class="header-anchor" href="#下载python"><span>下载Python</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#下载</span>
<span class="token function">wget</span> https://x.ylove.love/Python/Python-3.9.16.tgz
<span class="token comment">#解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> Python-3.9.16.tgz
<span class="token comment"># 进入该目录</span>
<span class="token builtin class-name">cd</span> Python-3.9.16/
<span class="token comment"># 编译</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token parameter variable">-j</span> <span class="token number">2</span>
<span class="token comment">#安装</span>
<span class="token function">make</span> altinstall
<span class="token comment">#链接</span>
<span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/lib/libpython3.9.so.1.0 /usr/lib/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证安装" tabindex="-1"><a class="header-anchor" href="#验证安装"><span>验证安装</span></a></h2>`,7),b=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[n("python3.9 "),e("span",{class:"token parameter variable"},"--version"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),k=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[n("pip3.9 "),e("span",{class:"token parameter variable"},"--version"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1);function g(f,y){const i=o("CodeTabs");return c(),d("div",null,[v,r(" more "),h,p(i,{id:"19",data:[{id:"Python"},{id:"pip"}]},{title0:a(({value:s,isActive:t})=>[n("Python")]),title1:a(({value:s,isActive:t})=>[n("pip")]),tab0:a(({value:s,isActive:t})=>[b]),tab1:a(({value:s,isActive:t})=>[k]),_:1})])}const P=l(u,[["render",g],["__file","Python1.html.vue"]]),T=JSON.parse('{"path":"/docs2/Python1.html","title":"手动安装","lang":"zh-CN","frontmatter":{"title":"手动安装","icon":"fa-solid fa-heart","editLink":false,"order":2,"article":false,"tag":["教程"],"head":[["meta",{"property":"og:url","content":"https://x.ylove.love/docs2/Python1.html"}],["meta",{"property":"og:site_name","content":"ZeroTwo"}],["meta",{"property":"og:title","content":"手动安装"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-17T01:11:36.000Z"}],["meta",{"property":"article:author","content":"ZeroTwo"}],["meta",{"property":"article:tag","content":"教程"}],["meta",{"property":"article:modified_time","content":"2024-05-17T01:11:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"手动安装\\"}"]]},"headers":[{"level":2,"title":"更新包","slug":"更新包","link":"#更新包","children":[]},{"level":2,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":2,"title":"下载Python","slug":"下载python","link":"#下载python","children":[]},{"level":2,"title":"验证安装","slug":"验证安装","link":"#验证安装","children":[]}],"git":{"createdTime":1715908296000,"updatedTime":1715908296000,"contributors":[{"name":"HenTai-02","email":"84227871@qq.com","commits":1}]},"readingTime":{"minutes":0.63,"words":188},"filePathRelative":"docs2/Python1.md","localizedDate":"2024年5月17日","excerpt":"\\n"}');export{P as comp,T as data};