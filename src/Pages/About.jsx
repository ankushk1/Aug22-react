import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

const About = (props) => {

  // const location = useLocation();
  // console.log('location ---->' , location.state)

  // const params = useParams();
  // console.log(params)

  const [queryParams] = useSearchParams();

  console.log(queryParams)

  console.log('ID ===> ', queryParams.get("id"))
  console.log('Name ===> ', queryParams.get("name"))
  console.log('Age ===> ', queryParams.get("age"))

  return (
    <div>About</div>
  )
}

export default About