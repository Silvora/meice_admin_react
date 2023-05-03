import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Tooltip from "@mui/material/Tooltip"
import Collapse from "@mui/material/Collapse"
import List from "@mui/material/List"
import StarBorder from '@mui/icons-material/StarBorder';
import React from 'react'
import Main from '@/router/admin';
import { observer } from 'mobx-react';
import {useStore} from "@/store/index"


function ListItems() {
  const {appStore} = useStore()

  const menuItem = (item:any)=>{
    return (
      <Tooltip title={item.meta.title} placement="right" arrow key={item.path}>
        <ListItemButton >
      <ListItemIcon>
        {<item.meta.icon />}
      </ListItemIcon>
      <ListItemText primary={item.meta.title} />
    </ListItemButton>
    </Tooltip>
    )
  }

  const menuList=(list:any)=>{
    return (
      <List
      key={list.path}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        appStore.collapse ?<ListSubheader component="div" id="nested-list-subheader" >
          {appStore.collapse?list.meta.title:'文档'}
        </ListSubheader>
        :<ListSubheader component="div" id="nested-list-subheader" sx={{
          padding:0,
          textAlign:"center"
        }}>
          {appStore.collapse?list.meta.title:'文档'}
        </ListSubheader>
      }
    >
      {
        list.children.map((item:any)=>{
          return menuItem(item)
        })
      }
     
      </List>
    )
  }

  const routerMenu = (list:any)=>{
   // console.log(list);
    const map = list.children.map((el:any)=>{
      if(el.path == '*')return
      return (
        el.children?menuList(el):menuItem(el)
      )
    })


    return map
  }


  return (
    <React.Fragment>

      {
        //console.log(Main.children.pop())
        routerMenu(Main)
      }
   </React.Fragment>

  )
}

export default observer(ListItems)

