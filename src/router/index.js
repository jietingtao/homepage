import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import timeline from '@/components/timeline.vue'
import assignment from '@/components/assignment.vue'
import insight from '@/components/insight.vue'
import calendar from '@/components/calendar.vue'
import course from '@/components/course.vue'


const routes = [
  {
    path: '/',
    component: HomeView,
    redirect: '/course',
    children: [
      {
        path: '/course',
        component: course
      },
      {
        path: '/calendar',
        component: calendar
      },
      {
        path: '/timeline',
        component: timeline
      },
      {
        path: '/assignment',
        component: assignment
      },
      {
        path: '/insight',
        component: insight
      }
    ]
  }]   

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
