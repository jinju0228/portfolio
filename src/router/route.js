//연결하는애만 여기에 넣기 
import intro from '../views/intro_page.vue'

const about_page = () =>{ return import('../views/about_page.vue') }
const webclone_page = () =>{ return import('../views/webclone_page.vue') }
const project_page = () =>{ return import('../views/project_page.vue') }
const contact_page = () =>{ return import('../views/contact_page.vue') }
// const AppRouter = ({ Reload }) => {
//     return(
//         <Router>
//             {Reload && <Navigation />}
//             {Reload ?
//                 <>
//                     <Route exact path='/' component={intro}></Route>
//                     <Route path='/about' component={about_page}></Route>
//                     <Redirect from="*" to="/"></Redirect>
//                 </> 
//                 : <>
//                     <Route path='/project' component={project_page}></Route>
//                     <Redirect from="*" to="/"></Redirect>
//                 </> 
//                 : <>
//                 <Route path='/webclone' component={webclone_page}></Route>
//                 <Redirect from="*" to="/"></Redirect>
//                 </>
//                 : <>
//                 <Route path='/contact' component={contact_page}></Route>
//                 <Redirect from="*" to="/"></Redirect>
//                 </>   }
//         </Router>
//     )
// }
const routes = [
    {path: '/', redirect:'/intro'},
    {path: '/intro', name: 'introPage', component: intro},
    {path: '/about', name: 'aboutPage', component: about_page},
    {path: '/webclone', name: 'webclonePpage',component: webclone_page},
    {path: '/project', name: 'projectPage',component: project_page},
    {path: '/contact', name: 'contactPage',component: contact_page}

]
// const appRouter = ({ isReload }) => {
//     return (
//     <Router>
//         {isReload && <Navigation />}
//         {isReload ?
//             <>
//                 <Route exact path ="/" component ={intro}/>
//                 <Route path='/about' component ={about_page}/>
//                 <Route from='*' to='/' />
//             </>  
//             :
//             <>
//                 <Route path='/webclone' component ={webclone_page}/>
//                 <Route from='*' to='/' />  
//             </>

//             }
//     </Router>

// );
// }
export default routes 

