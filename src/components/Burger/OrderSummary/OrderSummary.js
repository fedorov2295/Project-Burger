import React from 'react';
import Aux from '../../../hoc/Auxilary/Auxilary';
import Button from '../../UI/Button/Button'


const OrderSummary = (props) => {

    const ingedientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (<li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>)
    });

    return(
        <Aux>
            <h3>Your order</h3>
            <p>A delicios burger with the following ingredients</p>
            <ul>
                {ingedientSummary}
            </ul>
            <p><strong>Total price:{props.price.toFixed(2)}</strong></p>
            <p>Continue to CheckOut</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success'clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    
    )
}


export default OrderSummary;