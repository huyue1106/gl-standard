<template>
	<div class="">
		<h2>页面头部</h2>
		<p>本章将介绍页面的
			<code>&lt;head&gt;</code>
			标签含有的内容。包含页面的基本信息、SEO优化、双端页面跳转等。</p>
		<h2>DOCTYPE设置</h2>
		<p>文档类型统一使用html5的doctype：</p>
		<pre><code><span class="hljs-tag">&lt;!DOCTYPE html&gt;</span></code></pre>
		<h3>页面编码</h3>
		<p>编码默认使用GBK，特定情况下有指定要求也可以是UTF-8</p>
		<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset=</span><span class="hljs-string">"GBK"</span>&gt;</span></code></pre>
		<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset=</span><span class="hljs-string">"UTF-8"</span>&gt;</span></code></pre>
		<h2>页面Meta</h2>
		<p>PC端Meta：</p>
		<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"Description"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"页面的描述内容"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"Keywords"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"页面关键字"</span> /&gt;</span></code></pre>
		<p>移动端Meta：</p>
		<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">http-equiv</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"Content-Type"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"text/html; charset=utf-8"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"apple-mobile-web-app-capable"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"yes"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"apple-mobile-web-app-status-bar-style"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"black"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"format-detection"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"telephone=no"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"Description"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"页面的描述内容"</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"Keywords"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"页面关键字"</span> /&gt;</span></code></pre>
		<h2>页面跳转</h2>
		<p>如为双端页面，需要自动判断跳转，PC访问移动端页面，跳转到对应的PC专题上，反之亦然。</p>
		<p>PC端添加：</p>
		<pre><code>(<span class="hljs-function">function</span>() {
  if(<span class="hljs-regexp">/Android|webOS|iPhone|iPad|iPod|BlackBerry/i</span>).test(navigator.userAgent)){<span class="hljs-keyword">var</span> a=<span class="hljs-built_in">document</span>.referrer,b={<span class="hljs-string">"baidu.com"</span>: <span class="hljs-string">"seo_baidu"</span>,<span class="hljs-string">"sogou.com"</span>: <span class="hljs-string">"seo_sogou"</span>,<span class="hljs-string">"sm.cn"</span>: <span class="hljs-string">"seo_sm"</span>,<span class="hljs-string">"so.com"</span>: <span class="hljs-string">"seo_360"</span>,<span class="hljs-string">"bing.com"</span>: <span class="hljs-string">"seo_bing"</span>,<span class="hljs-string">"google.com"</span>: <span class="hljs-string">"seo_google"</span>},c;<span class="hljs-keyword">for</span>(c <span class="hljs-keyword">in</span> b){<span class="hljs-keyword">if(</span><span class="hljs-number">-1</span>!=a.indexOf(c)){a=b[c];<span class="hljs-keyword">if</span>(<span class="hljs-built_in">window</span>.sessionStorage){sessionStorage.setItem(<span class="hljs-string">"channel"</span>,a)}<span class="hljs-keyword">else</span>{<span class="hljs-keyword">var</span> d=d||<span class="hljs-number">0</span>,b="";<span class="hljs-number">0</span>!=d&&(b=<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>,b.sertTime(b.getTime()+<span class="hljs-number">1000</span>*d),b=<span class="hljs-string">";expires="</span>+b.toGMTString());<span class="hljs-built_in">document</span>.cookie=<span class="hljs-string">"channel="</span>+<span class="hljs-built_in">escape</span>(a)+b+<span class="hljs-string">";path=/"</span>}<span class="hljs-keyword">break</span>}}<span class="hljs-built_in">window</span>.location.href=<span class="hljs-string">"/m/"</span>+location.search};
})();
</code></pre>
		<p>移动端添加：</p>
		<pre><code><span class="hljs-function">if</span>(!<span class="hljs-regexp">/Android|webOS|iPhone|iPad|iPod|BlackBerry/i</span>.test(naviator.userAgent)) {
  <span class="hljs-built_in">window</span>.location.href=<span class="hljs-string">"PC端专题地址"</span>+location.search;
}</code></pre>
	
	</div>
</template>

<script>
// 目录
export default {
	name: 'PageHeader'
}
</script>
