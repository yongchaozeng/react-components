
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

React VUE diff区别
都忽略了跨级的dom比较，On级别
React diff从左到右，className不同依然会当作同一个节点 
vue diff从左右到中，className不同不会当作同一个节点 

vue和react的diff算法，都是忽略跨级比较，只做同级比较。vue diff时调动patch函数，参数是vnode和oldVnode，分别代表新旧节点。

1. vue比对节点，当节点元素类型相同，但是className不同，认为是不同类型元素，删除重建，而react会认为是同类型节点，只是修改节点属性

2. vue的列表比对，采用从两端到中间的比对方式，而react则采用从左到右依次比对的方式。当一个集合，只是把最后一个节点移动到了第一个，react会把前面的节点依次移动，而vue只会把最后一个节点移动到第一个。总体上，vue的对比方式更高效。