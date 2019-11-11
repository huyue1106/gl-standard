<template>
  <div class="">
    <h1>注释与命名</h1>
    <p>本章包含页面的注释规范与文件命名、样式表类名命名规范。</p>
    <h2>注释</h2>
    <ul>
      <li>注释单独一行，不要在代码后的同一行内加注释，<code>//</code>后要空一格</li>
      <li>避免使用<code>/*...*/</code>这样的多行注释。有多行注释内容时，使用多个单行注释</li>
      <li>较长的的HTML文件，请在板块之间加入注释，使得结构更清晰</li>
      <pre><code><span class="hljs-comment">&lt;!-- 活动板块 开始 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class=</span><span class="hljs-string">"part-act"</span>&gt;</span>
...
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-comment">&lt;!-- 活动板块 结束 --&gt;</span></code></pre>
      <li>函数/方法注释必须包含函数说明，有参数和返回值时必须使用注释标识，参数和返回值注释必须包含类型信息和说明</li>
      <pre><code><span class="hljs-comment">/** </span>
<span class="hljs-comment">* 函数描述</span>
<span class="hljs-comment">* </span>
<span class="hljs-comment">* @param { string } p1 参数1的说明</span>
<span class="hljs-comment">* @param { string } p2 参数2的说明</span>
<span class="hljs-comment">* @param { number } p3 参数3的说明（可选）</span>
<span class="hljs-comment">* @return { Object } 返回值描述</span>
<span class="hljs-comment">* /</span>
<span class="hljs-function">function</span> <span class="hljs-title">foo</span>(p1, p2, p3) {
  <span class="hljs-keyword">var</span> p3 = p3 || <span class="hljs-number">10</span>
  <span class="keyword">return</span> {
    p1: p1,
    p2: p2,
    p3: p3
  }
}</code></pre>
      <li>对于公共组件，需要在文件头部添加注释说明用途、作者、依赖关系和兼容信息等</li>
      <pre><code><span class="comment">/** </span>
<span class="comment">* @fileoverview Description of file, its uses and information</span>
<span class="comment">* about its dependencies.</span>
<span class="comment">* @author ...</span>
*/</code></pre>
    </ul>
    <h1>命名</h1>
    <h2>样式命名</h2>
    <ul>
      <li>class、id都需小写</li>
      <li>命名使用英文，禁止使用特殊字符</li>
      <li>名称间隔使用<code>-</code>符号，不要驼峰命名法和下划线</li>
      <li>设计数据、交互等需要联调的部分，禁止通过id选择器定义样式，以免开发过程中id名变化，引起页面错乱</li>
      <li>类名命名需要语义化</li>
    </ul>
    <h2>图片命名</h2>
    <ul>
      <li>图片名称必须小写，禁止使用特殊字符、中文</li>
      <li>使用英文或拼音缩写，禁止特殊字符</li>
      <li>名称间隔使用<code>-</code>符号</li>
      <li>命名需要能体现图片的大概用途</li>
      <p>常用示例：</p>
      <pre><code><span>bg.jpg</span>           <span class="hljs-comment">// 背景图片</span>
<span>mod-bg.jpg</span>       <span class="hljs-comment">// 模块背景</span>
<span>sprites.png</span>      <span class="hljs-comment">// 精灵图</span>
<span>btn-start.png</span>    <span class="hljs-comment">// 开始按钮</span>
<span>ico-play.png</span>     <span class="hljs-comment">// 修饰性图片</span></code></pre>
      <li>禁止文件名和实际图片内容不符</li>
    </ul>
    <h2>JS命名</h2>
    <ul>
      <li><strong>变量</strong>，使用驼峰命名（字符串类型使用单引号<code>''</code>）</li>
      <pre><code><span class="hljs-keyword">var</span> firstName = ''</code></pre>
      <li><strong>私有属性、变量和方法</strong>以下划线<code>_</code>开头</li>
      <pre><code><span class="hljs-keyword">var</span> _privateMethod = {}</code></pre>
      <li><strong>常量</strong>，使用全部字母大写，单词间下划线分隔的命名方式</li>
      <pre><code><span class="hljs-keyword">var</span> HTML_ENTITY = {}</code></pre>
      <li><strong>函数</strong>、<strong>函数的参数</strong>使用驼峰命名</li>
      <pre><code><span class="hljs-keyword">function</span> <span class="hljs-title">stringFormat</span>(source) {}

<span class="hljs-function">function</span> <span class="hljs-title">hear</span>(theBells) {}</code></pre>
      <li><strong>类</strong>使用首字母大写命名，类的<strong>方法/属性</strong>使用驼峰命名</li>
      <pre><code><span class="hljs-function">function</span> <span class="hljs-title">TextNode</span>(value, engine) {
  <span class="hljs-keyword">this</span>.value = value;
  <span class="hljs-keyword">this</span>.engine = engine;
}

TextNode.prototype.clone = <span class="hljs-keyword">function</span>() {
  <span class="hljs-keyword">return this</span>;
};</code></pre>
      <li><strong>枚举变量</strong>使用驼峰命名，<strong>枚举的属性</strong>，使用全部字母大写，单词间下划线分隔的命名方式</li>
      <pre><code><span class="hljs-keyword">var</span> TargetState = {
  READING: <span class="hljs-number">1</span>,
  READED: <span class="hljs-number">2</span>,
  APPLIED: <span class="hljs-number">3</span>,
  READY: <span class="hljs-number">4</span>
};</code></pre>
    </ul>
  </div>
</template>

<script>
// 目录
export default {
  name: 'Comment',
}
</script>
