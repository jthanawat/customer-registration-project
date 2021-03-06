import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import RouteWithLayout from './components/RouteWithLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Forms from './pages/Forms/Forms'

import MainLayout from './layout/Dashboard/Main'
import FormOne from './pages/Questionnaire/1/Input'
import FormTwo from './pages/Questionnaire/2/Input'
import FormThree from './pages/Questionnaire/3/Input'
import FinishedPage from './pages/Questionnaire/components/FinishedPage'

import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import StartingPage from './pages/Questionnaire/components/StartingPage'
// ===================================


const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <Route
        exact 
        path="/register"
        component={Register} 
        />
      <Route
        exact 
        path="/login"
        component={Login} 
        />
      <RouteWithLayout
        exact 
        path="/dashboard"
        component={Dashboard}
        layout={MainLayout} 
        />
      <RouteWithLayout
        exact 
        path="/forms"
        component={Forms} 
        layout={MainLayout}
        />


      <Route
        exact 
        path="/starting"
        component={StartingPage} 
        />
      <Route
        exact 
        path="/starting/form/one"
        component={FormOne} 
        />
      <Route
        exact 
        path="/starting/form/two"
        component={FormTwo} 
        />
      <Route
        exact 
        path="/starting/form/three"
        component={FormThree} 
        />
      <Route
        exact 
        path="/finished"
        component={FinishedPage} 
        />
    </Switch>
  )
}

export default Routes;