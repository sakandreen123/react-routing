import React from 'react'

const Card = (props) => {
    return (
        <div class="card" style={{ width: '18rem' }}>
            <div class="card-header">
                {props.title}
            </div>
            <div class="card-body">
                {
                    props.children
                }
            </div>
            <div class="card-footer">
                card footer
            </div>
        </div>
    )
}

export default Card