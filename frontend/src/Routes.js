import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import RouteWithLayout from './components/RouteWithLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Form from './pages/Forms/Forms'

import MainLayout from './layout/Dashboard/Main'
import LandingPage from './pages/Questionnaire/LandingPage'
import FormOne from './pages/Questionnaire/1/Input'
import FormTwo from './pages/Questionnaire/2/Input'
import FormThree from './pages/Questionnaire/3/Input'
import FinishedPage from './pages/Questionnaire/components/FinishedPage'

import SignUp from './pages/Auth/SignUp'
import SignIn from './pages/Auth/SignIn'
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
        exact path="/sign-up"
        component={SignUp} />
      <Route
        exact path="/sign-in"
        component={SignIn} />
      <RouteWithLayout
        exact path="/dashboard"
        component={Dashboard}
        layout={MainLayout} />
      <Route
        exact path="/forms"
        component={Form} />


      <Route
        exact path="/starting-page"
        component={StartingPage} />
      <Route
        exact path="/starting/1"
        component={LandingPage} />
      <Route
        exact path="/starting/form/one"
        component={FormOne} />
      <Route
        exact path="/starting/form/two"
        component={FormTwo} />
      <Route
        exact path="/starting/form/three"
        component={FormThree} />
      <Route
        exact path="/finished"
        component={FinishedPage} />
    </Switch>
  )
}

export default Routes;