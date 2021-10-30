import { createRouter, createWebHistory } from 'vue-router'
import Registro from '../views/Registro.vue'
import PainelLeads from '../views/PainelLeads.vue'
import Registrysucces from '../views/Registrysucces.vue'
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
  {
    path: '/Registrysucces',
    name: 'Registrysucces',
    component: Registrysucces
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
