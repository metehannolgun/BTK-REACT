import React from 'react'
import { useLoaderData } from 'react-router'

const Courses = () => {
  const courses = useLoaderData()
  return (
    <>
      <h1>Courses</h1>
      <div className='container-2'>
        {courses.map((item) => (
          <div className='card' key={item.id}>
            <img src={`http://localhost:5000/images/${item.image}`} alt='' />
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <a href='$'>Detay</a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export async function coursesLoader() {
  const res = await fetch('http://localhost:5000/courses')
  if (!res.ok) {
    throw new Error('Failed to fetch courses')
  }
  return res.json()
}

export default Courses