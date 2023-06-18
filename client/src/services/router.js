import { createRouter, createWebHistory } from 'vue-router'
import { Dashboard, Create } from '../views'

const routes = [
    { path: '/', component: Dashboard },
    { path: '/create', component: Create }
]

const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router