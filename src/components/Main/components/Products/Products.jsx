import React, { useContext } from 'react';
import styled from "styled-components";
import { UserContext } from '../../../Context/UserContext';
import Product from './Product';

function Products () {
    const products = useContext(UserContext);
    console.log(products)

    return(
        <div>
           {products.products.map((product) => (
                <Product 
                {... product}
                key={product._id}
                />
            ))};     
        </div>
    );
};

export default Products;