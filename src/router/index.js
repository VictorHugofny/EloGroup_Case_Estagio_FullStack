import { createRouter, createWebHistory } from 'vue-router'
import Registry from '../views/Registry.vue'
import PanelLeads from '../views/PanelLeads.vue'
import Registrysucces from '../views/Registrysucces.vue'
import NewLead from '../views/NewLead.vue'
import LeadCreate from '../views/LeadCreate.vue'
import Login from '../views/Login.vue'
import Loginsucces from '../views/Loginsucces.vue'

const routes = [
  {
    path: '/',
    name: 'Registry',
    component: Registry
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/LeadCreate',
    name: 'LeadCreate',
    component: LeadCreate
  },
  {
    path: '/leads',
    name: 'PanelLeads',
    component: PanelLeads
  },
  {
    path: '/Registrysucces',
    name: 'Registrysucces',
    component: Registrysucces
  },
  {
    path: '/Loginsucces',
    name: 'Loginsucces',
    component: Loginsucces
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
