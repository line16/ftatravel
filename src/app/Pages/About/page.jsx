"use client"
import React, {useEffect} from 'react'
import useRequestData from '../../../../Hooks/useRequestData'

const About = () => {
    const { data, isLoading, error, makeRequest } = useRequestData();

    useEffect(() => {
      makeRequest("http://localhost:5099/about");
    }, []);

  return (
    <div>
        <h1>om os</h1>
        <div>

        </div>
    </div>
  )
}

export default About