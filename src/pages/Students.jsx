import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

function Students() {
    const params = useParams();

    const [student, setStudent] = useState(null);
    const [found, setFound] = useState(false);

    console.log(params.sid);


    const data = [
        {
            id: 1,
            name: "Fatima"
        },
        {
            id: 2,
            name: "Ayesha"
        }
    ]

    useEffect(() => {

        const std = data.find(s => s.id == params.sid);
        if (std != undefined) {
            setStudent(std);
            setFound(true);
        } else {
            setStudent(null);
            setFound(false);
        }


    }, [params]);


    return (
        <div>
            {
                (found == false) ? "Student not found" : ''
            }
            <h3>Name: {(student != null) ? student.name : ''}</h3>
        </div>
    )
}

export default Students