/*
输入url页面发生了什么
浏览器检查是否有缓存，并比较是否过期
DNS解析获取ip：会查找浏览器缓存，系统缓存，路由dns缓存，服务商缓存，

tcp三次握手，
客户端发出SYN包，处于SYN_SEND状态
服务端解析SYN包，发送SYN+ACK，处于SYN_RECV
客服端获取SYN+ACK，并发送ACK到服务器，连接成功
客户端发起http请求，服务端接受并返回响应信息（预请求）

TLS加密
客户端向服务端请求数字证书
服务端将证书公钥传输给客户端
客户端验证证书的合法性，如果证书受信（或用户选择信任不受信的证书），浏览器会生成一串随机key，并用公钥加密后发送给服务端（非对称加密）
服务端接收到加密的key后，通过私钥解密获取key
服务端使用key加密传输内容（对称加密）发送给客户端，客户端通过key解密内容


（load加载和DOMContentLoaded，前者所有渲染完，后者仅有dom渲染完就触发）
(浏览器GUI线程和JS引擎线程互斥)
（图层可以通过硬件加速，声明一个新图层，单独分配资源，这个图层改变也不会引起其他图层重绘回流
translateZ translate3d opacity）
浏览器解析html，创建dom树，深度优先遍历，先生成子节点，遇到script标签会先加载js，暂停dom构建
解析css生成渲染树
渲染树生成完，结合dom树生成render树
布局render树（重绘和回流）元素尺寸位置
绘制render树(paint)
GPU将各层合成，显示在屏幕


tcp四次挥手
客户端发送FIN标记报文，进入FIN_WAIT_1状态
服务端接受后发送ACK，进入close_wait状态
服务端发送FIN，进入last_ack状态
客户端接受FIN，客户端TIME_WAIT状态，发送ACK给服务端，服务端进入closed
*/