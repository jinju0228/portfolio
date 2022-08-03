//연결하는애만 여기에 넣기 
import intro from '../views/intro_page.vue'

const about_page = () =>{ return import('../views/about_page.vue') }
const webclone_page = () =>{ return import('../views/webclone_page.vue') }
const project_page = () =>{ return import('../views/project_page.vue') }
const contact_page = () =>{ return import('../views/contact_page.vue') }
const routes = [
    {path: '/', redirect:'/intro'},
    {path: '/intro', name: 'introPage', component: intro},
    {path: '/about', name: 'aboutPage', component: about_page},
    {path: '/webclone', name: 'webclonePpage', component: webclone_page},
    {path: '/project', name: 'projectPage', component: project_page},
    {path: '/contact', name: 'contactPage', component: contact_page}

]

export default routes 


