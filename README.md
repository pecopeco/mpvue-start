# mpvue-start

> 小程序模板，使用 mpvue 框架搭建，包含 pug、stylus、fly、vuex 等组件

mpvue框架已知bug：
1、对象或数组深层嵌套，修改对象或者数组属性值，视图层不会更新，暂时解决办法：data中新增一个tempdata，数据发生变动需要更新视图时将tempdata赋值为随机数触发data更新；
2、无法使用filters

## 安装
```
npm install
```

### 运行
```
npm start
```

### 打包
```
npm run build
```
