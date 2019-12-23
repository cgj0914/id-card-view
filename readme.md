# id-card-view

基于vue的身份证卡片组件

## 使用

安装
``` bash
npm install id-card-view -S
```

全局应用组件
``` javascript
import IdCardView from 'id-card-view'
Vue.use(IdCardView)
```

使用组件
``` html
<div>
    <id-card-view :person="person"/>
</div>
```

组件属性
```
person: 身份证展示数据，数据传入格式展示如下：
    person:{
        name:'陈贵杰',
        nation:'汉',
        address:'河北省嘿嘿了额还哈哈哈鹅湖陈英村65号',
        photo:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577077627271&di=258fe9bd561b499e45456fb7b225c16e&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Forj360%2F4cfce1actw1ei6xkweojbj21kw1kw1kx.jpg',
        id:'13092319951214261X'
    ）
```

## 效果
![image](https://raw.githubusercontent.com/cgj0914/id-card-view/master/sampleDisplay.jpg)
