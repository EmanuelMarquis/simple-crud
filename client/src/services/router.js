import { createRouter, createWebHistory } from 'vue-router'
import { Dashboard, Create, CubeView, CubeEdit } from '../views'

const routes = [
    { path: '/', component: Dashboard },
    { path: '/create', component: Create },
    { path: '/cube/:id',
        template: '<div><router-view></router-view></di>',
        children: [
            { path: '', component: CubeView },
            { path: 'edit', component: CubeEdit }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router