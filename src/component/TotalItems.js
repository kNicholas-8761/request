import React from 'react'

const TotalItems = ({items}) => {
    return (
        <div className="p-2">
            <h4>All Products</h4>
            <div className="text-muted">{items.length} Products</div>
        </div>
    )
}

export default TotalItems
