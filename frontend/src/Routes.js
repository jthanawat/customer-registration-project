import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import LandingPage from './pages/Form/LandingPage'
import One from './pages/Form/One'
import Two from './pages/Form/Two'
import Three from './pages/Form/Three'

// ============= test ================
import MainTopbar from './layout/Dashboard/Topbar'
import Profile from './layout/Dashboard/components/Profile'
import Main from './layout/Dashboard/Main'
import SidebarNav from './layout/Dashboard/components/SidebarNav'
import Sidebar from './layout/Dashboard/Sidebar'
import SignUp from './pages/Auth/SignUp'
import SignIn from './pages/Auth/SignIn'
// ===================================


const Routes = () => {
  return (
    <Switch>
      <Route
      exact path="/test/profile"
      component={Profile} />

      <Route
      exact path="/test/signup"
      component={SignUp} />
      <Route
      exact path="/test/signin"
      component={SignIn} />

      <Route
      exact path="/dashboard"
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
      to="/dashboard" 
      />
      {/* <Route
        exact path="/dashboard"
        component={Dashboard} /> */}
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