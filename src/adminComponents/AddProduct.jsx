import React, { useState } from "react";
import { Button, Form, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/productSlice";

import AdminSidebar from "./AdminSidebar";

function AddProduct() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [popularity, setPopularity] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState();

  const handleTitleChange = (event) => setTitle(event.target.value);

  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleCategoryChange = (event) => setCategory(event.target.value);

  const handleRatingChange = (event) => setRating(event.target.value);

  const handlePopularityChange = (event) => setPopularity(event.target.value);

  const handlePriceChange = (event) => setPrice(event.target.value);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("desc", description);
      formData.append("rating", rating);
      formData.append("popularity", popularity);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("image", file);

      // log all form data fields
      console.log("Title: ", title);
      console.log("Description: ", description);
      console.log("Rating: ", rating);
      console.log("Popularity: ", popularity);
      console.log("Category: ", category);
      console.log("Price: ", price);
      console.log("image", file);

      dispatch(addProduct(formData));

      console.log("Product added successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container fluid className="px-3">
        <Row>
          <Col md={2} className="bg-light px-4 py-4">
            <AdminSidebar />
          </Col>
          <Col md={10}>
            <h1 className="my-3 text-center">Add Product</h1>

            <Container>
              <Form className="py-4" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label>Product Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter title"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDesc">
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="desc"
                    placeholder="Enter description"
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCat">
                  <Form.Label>Product Category</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    placeholder="Enter Category"
                    value={category}
                    onChange={handleCategoryChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRat">
                  <Form.Label>Product Rating</Form.Label>
                  <Form.Control
                    type="number"
                    name="rating"
                    placeholder="Enter rating"
                    value={rating}
                    onChange={handleRatingChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPop">
                  <Form.Label>Product Popularity</Form.Label>
                  <Form.Control
                    type="text"
                    name="popularity"
                    placeholder="Enter popularity"
                    value={popularity}
                    onChange={handlePopularityChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Product Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    value={price}
                    onChange={handlePriceChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImg">
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Enter image"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Insert
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddProduct;
