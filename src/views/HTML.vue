<template>
  <div class="">
    <h1>HTML规范</h1>
    <h2>HTML标签</h2>
    <ul>
      <li>
        自闭合（self-closing）标签，无需闭合 ( 例如：<code>img</code> <code>input</code> <code>br</code> <code>hr</code> 等 )
      </li>
      <li>
        可选的闭合标签（closing tag），需闭合 ( 例如：<code>&lt;/li&gt;</code> 或 <code>&lt;/body&gt;</code> )
      </li>
      <li>
        标签名需小写
      </li>
      <li>
        标签的自定义属性以<code>data-</code>开头，如：<code>&lt;a href="#" data-num="18"&gt;&lt;/a&gt;</code>
      </li>
      <li>
        除非有特定的功能、组件要求等，禁止随意使用id来定义元素样式
      </li>
    </ul>
    <h2>链接</h2>
    <ul>
      <li>给<code>&lt;a&gt;</code>标签加上title属性</li>
      <li><code>&lt;a*&gt;</code>标签的<code>href</code>属性必须写上链接地址，暂无的加上<code>javascript: ;</code></li>
      <li>非本专题的页面间跳转，采用打开新窗口模式：<code>target="_blank"</code></li>
    </ul>
    <!-- <h2>Class与ID</h2>
    <ul>
      <li>
        class应以功能或内容命名，不以表现形式命名
      </li>
      <li>
        class与id单词字母小写，多个单词组成时，采用中划线 <code>-</code>分隔
      </li>
      <li>
        使用唯一的id作为JavaScript hook，同时避免创建无样式信息的class
      </li>
    </ul> -->
    <h2>属性顺序</h2>
    <p>HTML属性应该按照特定的顺序出现以保证易读性</p>
    <ul>
      <li>id</li>
      <li>class</li>
      <li>name</li>
      <li>data-xxx</li>
      <li>src, for, type, href</li>
      <li>title, alt</li>
      <li>aria-xxx, role</li>
    </ul>
    <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">id</span>=<span class="hljs-string">".."</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"..."</span> <span class="hljs-attr">data-modal</span>=<span class="hljs-string">"toggle"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"###"</span>&gt;&lt;/<span class="hljs-name">a</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-name">src</span>=<span class="hljs-string">"..."</span> <span class="hljs-name">alt</span>=<span class="hljs-string">"..."</span>&gt;</span></code></pre>
    <h2>引号</h2>
    <p>属性的定义，统一使用双引号</p>
    <h2>布尔值属性</h2>
    <p>HTML5规范中<code>disabled</code>、<code>checked</code>、<code>selected</code>等属性不用设置值</p>
    <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">desabled</span>&gt;</span></code></pre>
    <h2>https协议自适应</h2>
    <p>将调用静态域名<code>oss-config.test.glsx.com.cn</code>的外部请求，写法上一律去掉协议<code>http:</code>部分，采用自适应的写法。具体方法如下：</p>
    <pre><code><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"//www.glsx.com.cn"</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"//cdn.bootcss.com/jquery/1.8.3/jquery.min.js"</span>&gt;&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
  </div>
</template>

<script>
// 目录
export default {
  name: 'HTML',
}
</script>
