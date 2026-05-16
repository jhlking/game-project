import { createRouter, createWebHistory } from 'vue-router'
import MainMenu from '@/pages/MainMenu.vue'
import ModeSelect from '@/pages/ModeSelect.vue'
import CharacterSelect from '@/pages/CharacterSelect.vue'

const routes = [
  {
    path: '/',
    name: 'mainMenu',
    component: MainMenu,
  },
  {
    path: '/mode-select',
    name: 'modeSelect',
    component: ModeSelect,
  },
  {
    path: '/character-select',
    name: 'characterSelect',
    component: CharacterSelect,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router