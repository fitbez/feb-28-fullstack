import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const ProductContext = createContext();

export function ProductProvider(props) {
  const navigate = useNavigate();
  const [newproducts, setNewProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
  });

  const [product, setProduct] = useState({});

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const fetchProductData = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/products/allproducts"
    );
    setNewProducts(response.data);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  // This function will add products into the newproducts array
  const addProduct = (name, price) => {
    // add the logic to insert the product information
    setNewProducts([...newproducts, { name, price }]);
  };

  const { name, price } = newProduct;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name !== "" && price !== "") {
      addProduct(name, price);
      await axios.post(
        "http://localhost:5000/api/products/addproduct",
        newProduct
      );
      setNewProduct({
        name: "",
        price: "",
      });
      navigate("/product-list");
    } else {
      alert("Please enter both inputs");
    }
  };

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleUserChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/user/register", user);
    console.log("user", user);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    console.log("id", id);
    fetchProductData();
  };

  const handleUpdate = async (id) => {
    await axios
      .get(`http://localhost:5000/api/products/find/${id}`)
      .then((response) => setProduct(response.data));
    navigate("/product-entry");
  };

  const handleFilter = (filterCriteria) => {
    // TODO: Add another filter method for sorting stationary and clothing catagories
    switch (filterCriteria) {
      case "price":
        setNewProducts(newproducts.filter((product) => product.price >= 20));
        break;
      case "stationary":
        setNewProducts(
          newproducts.filter((product) => product.catagory === "Stationary")
        );
        break;
      case "clothing":
        setNewProducts(
          newproducts.filter((product) => product.catagory === "Clothing/shoes")
        );
        break;
      default:
        setNewProducts(newproducts);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        newproducts,
        newProduct,
        handleChange,
        user,
        handleUserChange,
        handleUserSubmit,
        handleSubmit,
        handleDelete,
        handleFilter,
        handleUpdate,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
