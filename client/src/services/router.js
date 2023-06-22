import { createRouter, createWebHistory } from 'vue-router'
import { Dashboard, Create, CubeView, CubeEdit } from '../views'
import { setCube, setCubes, getCubes, getCube } from './consumer'

const routes = [
    { path: '/', component: Dashboard },
    { path: '/create', component: Create },
    { 
        path: '/cube/:id',
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

router.afterEach(async (to, from) => {
    
    if(to.params.id) setCube(await getCube(to.params.id))

    if(to.fullPath === "/") setCubes(await getCubes())
})

export default router