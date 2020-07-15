import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard/Dashboard'
import QuestionnaireOne from './views/Questionnaire/TypeOne'
import TopbarMain from './layout/TopbarMain'
import TopbarForm from './layout/TopbarForm'
import TypeOne from './views/Questionnaire/TypeOne'
import LandingPage from './views/Questionnaire/LandingPage'

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashbaord" />
      {/* <Route
        exact path="/dashboard"
        component={Dashboard} />

      <Route 
      exact path="/questionnaire/typeone" 
      component={QuestionnaireOne}/> */}
      {/* <TopbarMain /> */}
      <Route
      exact path="/landingpage1"
      component={LandingPage} />
      <Route
      exact path="/questionnaire/type-one"
      component={TypeOne} />
      <Route
      exact path="/questionnaire/type-two"
      component={TypeOne} />
    </Switch>
  )
}

export default Routes;