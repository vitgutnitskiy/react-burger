import React from 'react'

import burgerLogo from '../../assets/img/burger-logo.png'
import classes from './Logo.css'

const logo = (props) => (
    <div 
        style={{height: props.height}}
        className={classes.Logo}>
       <img src={burgerLogo} alt="logo" /> 
    </div>
)

export default logo 