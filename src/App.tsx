import React from 'react'
import { BrowserRouter, Route, Routes,Navigate, Outlet } from 'react-router-dom'

import routes from './router'




export default function App() {



  const routerMap = (list:any)=>{
    return list.map((el:any)=>{
      return el.children?routerList(el):<Route path={el.path} element={<el.element/>} key={el.path}></Route>
    })
  }


  const routerList=(list:any)=>{

    return (
      <Route path={list.path} element={<list.element/>} key={list.path}>
        {
          list.children.map((childEl:any)=>{
            return  (
              childEl.children?routerList(childEl):<Route path={childEl.path} element={<childEl.element/>} key={childEl.path}></Route>
              )
           })
          
        }
      </Route>
    )

    // return list.map((el:any)=>{
      
    //   // return el.children?routerList(el):<Route path={el.path} element={<el.element/>} key={el.path}></Route>
    // })
  }

  return (
    <React.Fragment>
      <Routes>
        {/* <Route path='/' element={<Navigate to="/admin"></Navigate>}></Route> */}
        
        {/* {
          routes.map((el:any)=>{

            return (
              el.children?
              <Route path='/' element={<Navigate to="/admin"></Navigate>}></Route>
              : routerList(el.children)
            )
          })
        } */}

        {
          //console.log(routerList(routes))
          routerMap(routes)
        }
      </Routes>
    </React.Fragment>
  )
}
