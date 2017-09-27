import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/home'
import MyPage from '@/pages/my'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
		  path: '/',
		  name: 'HomePage',
		  component: HomePage
		},
		{
		  path: '/my',
		  name: 'MyPage',
		  component: MyPage
		}
	]
})
