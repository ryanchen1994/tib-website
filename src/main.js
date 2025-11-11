import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入路由
import './style.css'         // 引入 Tailwind
// 動態設定 favicon，使用 Vite 的 ?url 取得打包後的資源 URL
import logoUrl from '@/assets/images/Logos/純LOGO.png?url'

const app = createApp(App)

app.use(router) // 啟用路由

// 在 document head 中設定或更新 rel="icon" 的 link
try {
	const setFavicon = (url) => {
		let link = document.querySelector('link[rel="icon"]')
		if (!link) {
			link = document.createElement('link')
			link.setAttribute('rel', 'icon')
			document.head.appendChild(link)
		}
		link.setAttribute('href', url)
	}
	setFavicon(logoUrl)
} catch (e) {
	// 若在 SSR 或非瀏覽器環境，忽略
	/* noop */
}

app.mount('#app')

