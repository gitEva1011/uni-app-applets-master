
### 一、注册
网址： [微信注册](https://mp.weixin.qq.com)，根据指引填写信息

### 二、登录设置
登录后找到设置模块，在这里你可以设置一些小程序的主题信息，比较重要的就是这个`AppID(小程序ID)`，唯一的，相当于微信小程序的敲门砖

### 三、选框架，安装开发工具

工具安装：

[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

[HBuilderX](https://www.dcloud.io/hbuilderx.html)

工具安装好开始进入正式开发。

### 四、项目开发

1、新建一个`uni-app`项目
![](https://img-blog.csdnimg.cn/img_convert/0197a6e940cc5a3e6908e9ef12c550dd.png![在这里插入图片描述](https://img-blog.csdnimg.cn/20201010192356442.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQ0NDU1MTc=,size_16,color_FFFFFF,t_70#pic_center)

![](https://img-blog.csdnimg.cn/img_convert/6227b963be1bc0b1c608825ae2e15266.png![在这里插入图片描述](https://img-blog.csdnimg.cn/20201010192547485.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQ0NDU1MTc=,size_16,color_FFFFFF,t_70#pic_center)
2、项目结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201010192722478.png#pic_center)
.
├─ common/              # 公用工具库文件
├─ components/          # uni-app组件目录
│  ├─ common/        # 公共组件
├─ models/              # 接口调取目录
├─ hybrid/              # 存放本地网页的目录
├─ pages/               # 业务页面文件存放的目录
│  ├─ index/            
│  │  ├─ index.vue      # 首页面
│  ├─ functions/            
│  │  ├─ functions.vue      # 组件列表页面
│  ├─ mine/            
│  │  ├─ index.vue      # 个人中心页面
├─ platforms/           # 存放各平台专用页面的目录
├─ static               # 存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─ unpackage/           # 打包目录
├─ utils/           # 工具目录
├─ wxcomponents/        # 存放小程序组件的目录
├─ App.vue              #  应用配置，用来配置App全局样式以及监听
├─ main.js              # Vue初始化入口文件
├─ manifest.json        # 配置应用名称、appid、logo、版本等打包信息
├─ package.json         # 增加uni-app扩展节点，可实现自定义条件编译平台
├─ pages.json         # 全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等。

Tips:

`static` 目录下的 `js` 文件不会被编译，如果里面有 es6 的代码，不经过转换直接运行，在手机设备上会报错。

`css`、`less/scss` 等资源同样不要放在 static 目录下，建议这些公用的资源放在 `common` 目录下。

3、项目运行
小程序项目运行前需要配置微信开发者工具的默认路径，以及配置小程序的AppID。
微信开发者工具的默认路径配置，在HBuilder的工具设置中找到运行设置
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020101019472527.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQ0NDU1MTc=,size_16,color_FFFFFF,t_70#pic_center)
将微信开发者工具安装的目录复制到这里

小程序的AppID的配置需要登陆小程序管理后台，在开发开发设置中找到AppID
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201010200154850.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQ0NDU1MTc=,size_16,color_FFFFFF,t_70#pic_center)

将复制的AppID粘贴到项目目录下的manifest.json文件中的小程序配置中。

接下来就可以运行项目了
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201010200451449.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTQ0NDU1MTc=,size_16,color_FFFFFF,t_70#pic_center)

接下来就可以正式开发项目了。
