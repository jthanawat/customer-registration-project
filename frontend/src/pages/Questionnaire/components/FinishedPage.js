import React from 'react'
import {
  Card,
  CardContent
} from '@material-ui/core'
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import TopbarForm from '../../../layout/Form/Topbar'

const FinishedPage = () => {
  return (
    <>
    <TopbarForm />
    <Card>
      <CardContent>
        Thank you for taking the time
        to complete our survey!
      </CardContent>
    </Card>
    </>
  )
}


export default FinishedPage;