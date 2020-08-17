import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import person from '@/components/person'
import person1 from '@/components/person1'
import person2 from '@/components/person2'
import abc from '@/components/index-ui'
import update from '@/components/update'
import registry from '@/components/registry'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: abc
    },{
      path:'/hellos',
      name:'hello',
      component:HelloWorld
    },{
      path:'/person',
      name:'person',
      component:person,
      children:[
        {
          path:'/person/person1/:id/:username',
          name:'person1',
          component: person1
        },{
          path:'/person/person2',
          name:'person2',
          component: person2
        }
      ]
    },{
      path:'/update/:id',
      name:'update',
      component:update
    },{
      path:'/registry',
      name:'registry',
      component:registry
    }
  ]
})
