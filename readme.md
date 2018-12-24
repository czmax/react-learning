# 共享单车项目练习

## 1 声明式实现
编程时实现和声明式实现的区别，where,what,how
- 编程时实现：需要以具体代码表达在哪里，做什么，如何实现。比如传统的基于dom的实现。
- 声明式实现：只需要声明在哪里做什么，而无需关心如何实现。比如只需要定义个变量，变量值怎么绑定到组件中的，是框架去做的。

## 2 脚手架和yarn工具使用
```sh

npm install -g create-react-app
create-react-app my-app
cd my-app
npm start

yarn add react-router-dom axios less less-loader
yarn remove react-router-dom
yarn start


yarn eject //注意不可逆
yarn add antd
yarn add less@^2.7.3  babel-plugin-import jsonp --dev

```

## 3 react的生命周期
- getDefaultProps：初始化props属性，来自于父组件或其他组件传过来的东西。
- getInitialState：state变量。
- componentWillMount：组件加载之前。用得较多。
- render：渲染核心。
- componentDidMount：组件插入完以后调用。
- componentWillReceiveProps：来自父组件属性传递时调用的方法。
- shouldComponentUpdate：组件的更新。调用了setState方法就会调用他。
- componentWillUpdate：组件要更新之前。
- componentDidUpdate：组件要更新之后。
- componentWillUnmount：组件要更新之后。

![image](https://github.com/czmax/react-learning/blob/master/images/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.jpg)

this传递的
```
export default class Lift extends React.Component {
    handleAdd=()=>{
        //这里this是当前组件实例
        this.setState({count:this.state.count+1})
    }
    handleClick(){
        //这里this就不是当前组件实例,需要bind(this)传递后才会变成组件实例
        this.setState({count:this.state.count+1})
    }
    render(){
        let style={padding:50}
        return <div style={style}>
            <p>React生命周期介绍</p>
            <button onClick={this.handleAdd}>点击一下</button>
            <button onClick={this.handleClick.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>

    }
}
```
child.js

## 4 项目主页工程搭建
1. 基础插件安装，less文件加载配置

```
yarn eject
yarn add less less-loader
yarn add babel-plugin-import -dev
```
按需加载插件，babel-plugin-import，作用是不加载整个antd，而是加载需要的组件

如果要按照教程就得降级less,`yarn add less@2.7.3`

如果是4.x的webpack解决办法参考：

https://blog.csdn.net/qq_37860930/article/details/85162024

http://www.cnblogs.com/wuqun/p/10131483.html

antd官网参照：      
https://ant.design/docs/react/use-with-create-react-app-cn#安装和初始化     

```
yarn add antd --save
yarn add  react-app-rewired --save
yarn add babel-plugin-import --save
yarn add react-app-rewire-less --save
```

修改package.json    
```
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```

根目录添加config-overrides.js   
```
const {
    injectBabelPlugin
} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');


module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
        config,
    );
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#1890ff" },
        javascriptEnabled: true,
    })(config, env);
    return config;
};
```

2. 项目主页结构开发


3. 菜单组件开发
4. 头部组件开发
5. 底部组件开发
