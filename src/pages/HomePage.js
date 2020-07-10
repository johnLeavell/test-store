import React from 'react'
import { ProductConsumer } from '../context';

export default function HomePage() {
    return (
        <>
            <ProductConsumer>
                {value => {
                    console.log('====================================');
                    console.log(value);
                    console.log('====================================');
                    return  <h1>Hello From HomePage</h1>
                }}
            </ProductConsumer>
        </>
    )
}
