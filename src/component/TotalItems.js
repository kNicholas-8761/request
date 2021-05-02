import React from 'react'

const TotalItems = ({items}) => {
    return (
        <div className="p-2">
            <h3>All Products</h3>
            <div className="text-muted">{items.length} Products</div>
        </div>
    )
}

export default TotalItems
