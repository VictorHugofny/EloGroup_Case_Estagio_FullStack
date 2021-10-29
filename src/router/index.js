import { createRouter, createWebHistory } from 'vue-router'
import Registro from '../views/Registro.vue'
import PainelLeads from '../views/PainelLeads.vue'

const routes = [
  {
    path: '/',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/leads',
    name: 'PainelLeads',
    component: PainelLeads
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
