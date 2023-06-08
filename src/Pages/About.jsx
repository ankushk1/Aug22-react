import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const About = (props) => {

  const location = useLocation();
  console.log('location ---->' , location.state)

  const params = useParams();
  console.log(params)

  return (
    <div>About</div>
  )
}

export default About