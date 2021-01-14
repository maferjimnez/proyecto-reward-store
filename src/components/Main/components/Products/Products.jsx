import React, { useContext } from 'react';
import styled from "styled-components";
import { UserContext } from '../../../Context/UserContext';
import Product from './Product';

function Products () {
    const [products] = useContext(UserContext);

    return(
        <div>
           {products.map((product) => (
                <Product 
                {... product}
                key={product._id}
                />
            ))};     
        </div>
    );
};

export default Products;