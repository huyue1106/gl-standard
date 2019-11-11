<template>
  <div class="">
    <h3>缩进</h3>
    <p>统一两个空格缩进</p>
    <h3>一律使用小写字母</h3>
    <pre><code><span class="hljs-comment">&lt;!-- Recommended  --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"google.png"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Google"</span>&gt;</span>

<span class="hljs-comment">&lt;!-- Not recommended --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">A</span> <span class="hljs-attr">HREF</span>=<span class="hljs-string">"/"</span>&gt;Home&lt;/<span class="hljs-name">A</span>&gt;</span></code></pre>
    <pre><code><span class="hljs-comment">/* Recommended */</span>
<span class="hljs-attribute">color</span>: #e5e5e5;

<span class="hljs-comment">/* Not Recommended */</span>
<span class="hljs-attribute">color</span>: #E5E5E5;
</code></pre>
  </div>
</template>

<script>
// 目录
export default {
  name: 'General',
}
</script>
