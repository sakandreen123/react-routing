import React from 'react'

const Card = (props) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
                {
                    props.children
                }
            </div>
            <div className="card-footer">
                card footer
            </div>
        </div>
    )
}

export default Card