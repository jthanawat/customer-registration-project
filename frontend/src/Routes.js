import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard/Dashboard'
import LandingPage from './views/Form/LandingPage'
import One from './views/Form/One'
import Two from './views/Form/Two'
import Three from './views/Form/Three'

// ============= test ================
import MainTopbar from './layout/Dashboard/Topbar'
import Profile from './layout/Dashboard/components/Profile'
import Main from './layout/Dashboard/Main'
import SidebarNav from './layout/Dashboard/components/SidebarNav'
import Sidebar from './layout/Dashboard/Sidebar'

// ===================================
const Routes = () => {
  return (
    <Switch>
      <Route
      exact path="/test/profile"
      component={Profile} />

      <Route
      exact path="/test/main"
      component={Main} />

      <Route
      exact path="/test/SidebarNav"
      component={SidebarNav} />

      <Route
      exact path="/test/Sidebar"
      component={Sidebar} />

      <Redirect 
      exact 
      from="/" 
      to="/dashbaord" 
      />
      <Route
        exact path="/dashboard"
        component={Dashboard} />
      <Route
      exact path="/landingpage1"
      component={LandingPage} />
      <Route
      exact path="/form/one"
      component={One} />
      <Route
      exact path="/form/two"
      component={Two} />
      <Route
      exact path="/form/two"
      component={Three} />
    </Switch>
  )
}

export default Routes;