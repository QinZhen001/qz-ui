# qz-ui


[https://juejin.im/post/5df062da6fb9a0162a0b6e58](https://juejin.im/post/5df062da6fb9a0162a0b6e58)


尝试搭建一个组件库


----



* 编写发布一个可用的组件库
* 能以import { demoComponent } from 'xxxUI'方式引入
* 也能以import demoComponent from xxxUI/component/demoComponent方式引入
* 各个组件打包相对独立，互不干扰
* 组件库能根据用户的配置实现Tree Shaking
* 输出的组件能够简单易用和具有良好的兼容性
* 组件库能根据用户的配置实现按需加载
* 组件通过单元测试



## 组件库按需加载


根据以上目录结构和引入方式我们可以知道，通过import { demoComponent } from 'xxxUI'这种形式去引入会使得整个组件库都引入到开发项目中，有时只需要用到其中的两三个组件，这种情况是我们不想看到的。而通过import demoComponent from xxxUI/component/demoComponent这种形式去引用，就能做到只引入某个需要用到的组件，这刚好能解决这个问题。但是每次引入都要写这么长的一串，很不方便。这个时候就需要用到babel-plugin-import这个插件了。

```
import { demoComponent, demoComponent1, demoComponent2 } from 'xxxUI'


// 使用babel-plugin-import插件能自动将以上这种调用形式在AST(抽象语法树)中改写成以下形式。
// 这样就能方便地引入相关组件，又不用担心一次全部引入导致包过大的问题

import demoComponent from xxxUI/component/demoComponent
import demoComponent1 from xxxUI/component/demoComponent
import demoComponent2 from xxxUI/component/demoComponent


复制代码最后在.babelrc中配置需要转换的路径

// .babelrc
{
    ...
    "plugins":[
        "import", {
            "libraryName": "xxxUI",
            "libraryDirectory": "component",
        }
    ]
}
```


需要注意的是，这里需要组件库的使用者去配置，而不是写在组件库的.babelrc中。如果组件库支持按需加载，这个配置应该写在README.md中交由组件库的使用者去选择。按需加载的好坏处是由具体的项目环境而定，需要具体情况具体分析。



