
、、、
React架构
、、、
schedule调度器，根据任务优先级送给Reconciler
Reconciler协调器，diff出dom变化并标记，协调完后统一Renderer
Renderer渲染器，把变化渲染到页面


schedule：
当浏览器有空闲时间就提醒我们
浏览器自带api：requestIdlecallback 兼容性不好，并且有情况不稳定

Reconciler：
使用Filber每次判断是否有时间执行，Reconciler和Renderer不在交替执行，标记完Dom统一renderer

Renderer  
把标记的变化渲染到页面上

filber
一套状态管理，可中断可恢复