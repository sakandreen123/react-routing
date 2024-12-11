import React from 'react'
import { Link } from 'react-router-dom'



function Menu() {

  const students = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ]


  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact-us'>Contact</Link></li>
        <li><Link to='/form'>Search Form</Link></li>
        {
          students.map((std) => {
            return (
              <li key={std.id}><Link to={`/students/${std.id}`} > {`Student ${std.id}`} </Link></li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Menu