import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {

    axios.get("https://674e913e635bad45618f12bb.mockapi.io/studens").then((response) => {

      setStudents(response.data);
    })


  }, []);

  return (
    <div id='home-page'>
      <div className="container">
        <h1 className="text-center mb-3">Tasks Application </h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col" >Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((std) => {
                return (
                  <tr key={std.id}>
                    <td>{std.id}</td>
                    <td>{std.name}</td>
                    <td>
                      {
                        (std.isActive == true || std.isActive == 'true') ? "Present" : "Absent"
                      }
                    </td>
                    <td>
                      <Link className="btn btn-info btn-sm" to={`/details/${std.id}`}>
                        view
                      </Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default Home