<template>
  <div class="">
    <h1>CSS规范</h1>
    <h2>选择器</h2>
    <ul>
      <li>CSS类名命名参考注释与命名</li>
      <li>禁止使用层级过审的选择器，最多3级</li>
      <li>除非有特定的功能、组件要求等，禁止随意使用id来定义元素样式</li>
      <li>除非是样式reset需要，禁止对纯元素选择器设置特定样式，避免样式污染</li>
    </ul>
    <h2>声明块格式</h2>
    <ul>
      <li>选择器分组时，保持独立的选择器占用一行</li>
      <li>声明块的左括号<code>{</code>前添加一个空格</li>
      <li>声明块的右括号<code>}</code>应单独成行</li>
      <li>声明语句中的<code>:</code>后应添加一个空格</li>
      <li>声明语句应以分号<code>;</code>结尾</li>
      <li>一般以逗号分隔的属性值，每个逗号后应添加一个空格</li>
      <li><code>rgb()</code>、<code>rgba()</code>、<code>hsl()</code>、<code>hsla()</code>或<code>rect()</code>括号内的值，逗号分隔，但逗号后不添加一个空格</li>
      <li>对于属性值或颜色参数，省略小于1的小数前面的0（例如，<code>.5</code>代替<code>0.5</code>；<code>-.5px</code>代替<code>-0.5px</code>）</li>
      <li>十六进制值应该全部小写或尽量简写，例如，<code>#fff</code>代替<code>#ffffff</code></li>
      <li>避免为0值指定单位，例如，用<code>margin: 0;</code>代替<code>margin: 0px;</code></li>
    </ul>
    <h2>声明顺序</h2>
    <p>相关属性应为一组，推荐的样式编写顺序</p>
    <ul>
      <li>Positioning（定位）</li>
      <li>Box model（盒模型）</li>
      <li>Typographic（版式）</li>
      <li>Visual（视觉）</li>
    </ul>
    <p>由于定位（position）可以从正常的文档流中移除元素，并且还能覆盖盒模型（box model）相关的样式，因此排在首位。盒模型决定了组件的尺寸和位置，因此排在第二位。其他属性只是影响组件的内部（inside）或者是不影响前两组的属性，因此排在后面。</p>
    <pre><code><span class="hljs-selector-class">.declaration-order</span> {
    <span class="hljs-comment">/* Positioning */</span>
    <span class="hljs-attribute">postion</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">right</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">bottom</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">z-index</span>: <span class="hljs-number">100</span>;

    <span class="hljs-comment">/* Box model */</span>
    <span class="hljs-attribute">display</span>: block;
    <span class="hljs-attribute">box-sizing</span>: border-box;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#e5e5e5</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">3px</span>;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">float</span>: right;
    <span class="hljs-attribute">overflow</span>: hidden;

    <span class="hljs-comment">/* Typographic */</span>
    <span class="hljs-attribute">border</span>: normal<span class="hljs-number">13px</span> <span class="hljs-string">"Helvetica Neue"</span>, sans-serif;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">1.5</span>;
    <span class="hljs-attribute">text-align</span>: center;

    <span class="hljs-comment">/* Visual  */</span>
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#f5f5f5</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">8</span>;

    <span class="hljs-comment">/* Other  */</span>
    <span class="hljs-attribute">cursor</span>: pointer;
  }
    </code></pre>
    <h2>引号使用</h2>
    <p><code>url()</code>、属性选择符、属性值使用双引号</p>
    <h2>媒体查询位置</h2>
    <p>将媒体查询放在尽可能相关规则的附近。不要将他们打包放在一个单一样式文件中或者放在文档底部。</p>
    <h2>不要使用<code>@import</code></h2>
    <p>与<code>&lt;link&gt;</code>相比，<code>@import</code>要慢很多，不光增加额外的请求数，还会导致不可预料的问题。可通过Sass或Less类似的CSS预处理器将多个CSS文件编译为一个文件。</p>
    <h2>链接的样式顺序</h2>
    <p><code>a:link -> a:visited -> a:hover -> a:active</code></p>
  </div>
</template>

<script>
// 目录
export default {
  name: 'CSS',
}
</script>
