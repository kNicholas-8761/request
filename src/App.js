import React, { useState, useEffect } from "react";
import "./App.css";
import Product from "./component/Product";
import TotalItems from "./component/TotalItems";
import Pagination from "./component/Pagination";
import { Container } from "react-bootstrap";




function App() {
  const [items, setItems] = useState([]); //Data we fetch from the api
  const [loading, setLoading] = useState(false); // Know when the item have been loaded from the api endpoint
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const getData = () => {
    fetch("./productsData.json")
      .then((res) => res.json()) //Convert to json format
      .then((json) => {
        setItems(json);
        setLoading(true);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  //Change Page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="App">
      <TotalItems items={items} />
      <Product items={currentItems} loading={loading} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
}

export default App;
