## How to use
```bash
$ git clone https://github.com/gittanglin/util.git
$ npm install
```
方法注释应写清楚，编写方法后应该执行单元测试,示例见test/index.test.js 
```bash
$ npm run test
```
测试通过以后修改package.json文件中的版本号,然后执行以下命令推送到npm仓库中
```bash
$ npm publish
```
更新当前目录下node_modules子目录里边的对应模块更新至最新版本。
```bash
$ npm update <package>
```
清空npm本地缓存
```bash
$ npm cache clear
```

```bash
$ 
```

对应的方法
<code>
{
	TimeUtil: {
		timestampToFormat: '时间戳格式化时间:(时间戳,格式化类型:(1、2、3、4) ) 1:2018年01月01日 2:2018-01-01 12:12:12   3:2018-01-01   4:2018-01-01 12:12) '
	},
	CommonUtil: {
		setCookie: '设置cookie:参数(name,value）',
		getCookie: '获取cookie:参数(cookieName)',
		getQueryStringByName: '获取浏览器地址栏指定参数:参数(name)',
		utf16toEntities: '替换emoji表情:参数(str)',
		uniqueArray: '数组去重:参数（array）'
	}
}
</code>