import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from './SingleProduct'

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        console.log("response data is : ", response.data)
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
console.log("products are : ", products)
console.log("products ID are : ", products._id)
  return (
    <>
      <Container>
         <Row className="my-3">
           {products.map((product) => (
             <Col key={product._id} xs={6} md={4}>
               <SingleProduct product={product} />
             </Col>
           ))}
         </Row>
       </Container>
    </>
  );
}

export default Products;