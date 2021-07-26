import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ConteudoBase from './components/layout/ConteudoBase.vue'
import SideBar from './components/layout/SideBar.vue'
import Spinner from './components/modals/Spinner.vue'
import SpinnerButton from './components/ui/SpinnerButton.vue'
import BaseButton from './components/ui/BaseButton.vue'
import './assets/style/bootstrap-grid.css'
import "./assets/style/_colors.scss";



const app = createApp(App)

app.use(store)
app.use(router)

app.component('conteudo-base', ConteudoBase)
app.component('sidebar', SideBar)
app.component('spinner', Spinner)
app.component('spinner-btn', SpinnerButton)
app.component('base-button', BaseButton)
app.mount('#app')
