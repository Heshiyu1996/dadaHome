import App from './../App'

export default [
	{
		path: '/',
		name: 'app',
		component: App,
	},
	{//重定向到首页
		path: '*', redirect: '/'
	},
]
