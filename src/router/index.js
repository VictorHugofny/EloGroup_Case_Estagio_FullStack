import { createRouter, createWebHistory } from 'vue-router'
import Registro from '../views/Registro.vue'
import PainelLeads from '../views/PainelLeads.vue'
import Registrysucces from '../views/Registrysucces.vue'
import NewLead from '../views/NewLead.vue'
import LeadCreate from '../views/LeadCreate.vue'

const routes = [
  {
    path: '/',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/LeadCreate',
    name: 'LeadCreate',
    component: LeadCreate
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
  {
    path: '/NewLead',
    name: 'NewLead',
    component: NewLead
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
