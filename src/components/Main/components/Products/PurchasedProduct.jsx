import React from 'react';

function PurchasedProduct(props) {
  return (
    <div>
      <img src={props.img.url} alt="Il" />
      <div>
        <p>{props.name}</p>
        <p>{props.cost}</p>
      </div>
    </div>
  );
}

export default PurchasedProduct;
