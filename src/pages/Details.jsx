import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';



function Details() {
    const [student, setStudent] = useState({});
    const [error, setError] = useState(false);

    const params = useParams();
    console.log(params.id);


    useEffect(() => {

        axios.get(`https://674e913e635bad45618f12bb.mockapi.io/students/${params.id}`).then((response) => {
            console.log(response);
            setStudent(response.data);
            setError(false);
        }).catch((er) => {
            console.log(er.message);
            setError(true);
        })


    }, []);

    return (
        <div className='container'>
            {
                (error == true) ? <div className='text-success fs-3'>Student record not found</div> : <Card title="Student Details"> <div>
                    <h2>Name: {student.name}</h2>
                    <h3>City: {student.city}</h3>
                    <h4>Age : {student.age}</h4>
                </div>
                </Card>
            }

        </div>
    )
}

export default Details