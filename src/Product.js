import React, {useState,useEffect } from "react";

const Product = () =>{
const [items, setItems] =useState([]);  //Data we fetch from the api
    const [loading, setLoading] =useState(false); // Know when the item have been loaded from the api endpoint

  const getData =()=>{
    fetch("./productsData.json")
      .then((res) => res.json()) //Convert to json format
      .then((json) => {
        setItems(json);
        setLoading(true);
      });
  }
  useEffect(()=>{
    getData()
  },[])

    if (!loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                
                {item.price}
                {item.product_name}
                {item.description}
                <img src={item.product_image} alt="product_image"></img>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  
}
export default Product