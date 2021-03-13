常用属性
entry
output
module
resolve
plugins
  mode: 'development', // 环境区分："production" | "development" | "none"
  devtool: 'inline-source-map'
  devServer


4.补充知识点 Chunk理解
Chunk是指webpack里的一个代码块。对于module，Webpack可以看做是模块打包机，我们编写的任何文件，对于Webpack来说，都是一个个模块。而Chunk是webpack打包过程中，一堆Module的集合。Chunk和Bundle，Bundle就是我们最终输出的一个或多个打包文件。产生Chunk的三种途径： entry入口、异步加载模块、代码分割。
————————————————
 

  5.webpack编译原理

初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
确定入口：根据配置中的 entry 找出所有的入口文件；
编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。
———————————————— 