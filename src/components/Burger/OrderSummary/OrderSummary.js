import React, {Component} from 'react'
import Aux from '../../../hoc/Auxx/Auxx'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('will update')
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>
                : {this.props.ingredients[igKey]}
            </li>)               
        })
        return (
              
            <Aux>
                <h3> Your Order</h3>
                <div>A delicious burger with the following ingridients:</div>
                <ul>
                    {ingredientSummary}
                </ul>
                <p> Total Price: <strong>{this.props.price.toFixed(2)}</strong></p>
                <div>Continue to Checkout?</div>
                <Button 
                    btnType="Danger" 
                    clicked={this.props.purchaseCancelled}>CANSEL</Button>
                <Button 
                    btnType="Success" 
                    clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        
        )
    }
}

export default OrderSummary