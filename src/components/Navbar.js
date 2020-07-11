import React from 'react';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import logo from '../images/logo.svg';


export default function Navbar() {
    return (
            <ProductConsumer>
                {value => {
                    const {cartItems, handleSidebar, handleCart } = value
                    return <nav>Hello navbar</nav>
                }}
            </ProductConsumer>
    )
}
