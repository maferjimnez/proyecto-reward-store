import React from 'react';
import styled from "styled-components";

function Product (props) {
    const { name, img }  = props;

    return(
        <div>
            <p>{name}</p>
            <img src={img.url} alt={`Imagen de ${props.name}`} />
        </div>
    );
};

export default Product; 