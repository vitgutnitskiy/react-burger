import React from 'react'
import classes from './Order.css'

const order = (props) => {
    const ingredients = []

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    const ingredientOutput = ingredients.map(igr => {
        return <span
            style={
                {
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    padding: '5px'
                }
            }
            key={igr.name}>{igr.name} {igr.amount}</span>
    })

    return (
    <div className={classes.Order}>
        <div> Ingredients: {ingredientOutput}</div>
        <div>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></div>
    </div>
   )
}

export default order