import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home"
import Report from "../components/Report";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/report",
    name: "Report",
    component: Report,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;





// import { createRouter,createWebHistory } from 'vue-router';
// // import Home from '../components/Home.vue'
// // import SideBar from '../components/SideBar.vue'
// import Report from '../components/Report.vue'

// const routes = [
//     { path: '/report',name: "Report", component: Report, }
//     // { path: '/', component: Home,
//     //   children: [
//     //     {
//     //       path: '/', component: SideBar,
//     //         children: [
//     //           {
//     //             path: '/report', component: Report,
//     //               // children: [
//     //               //   {
//     //               //     path: 'details', component: Details,
//     //               //   }
//     //               // ]
//     //           }
//     //        ]
//     //     }
//     //   ]
//     // },
//   ];
//   const router = createRouter({
//     history: createWebHistory(),
//     routes

// });
//   export default router;