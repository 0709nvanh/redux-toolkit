import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts, removeProduct } from "../../../features/ProductSlice";
import { toast } from 'react-toastify';
// import './cs/'

const List = () => {
  const products = useSelector((data) => data.product.value);
  console.log("products", products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onRemove = (slug) => {
    if(window.confirm("Ban muon xoa khong?")){
      dispatch(removeProduct(slug))
    toast.success(' Wow so easy!', {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    }
  };

  return (
    <div>
      <div className="header-list">
        <div className="title-manager">
          <h2>Manager Product</h2>
        </div>
        <div className="btn-add-new">
          <Link to="/admin/product/add">
            <button type="button" className="btn btn-primary">Add new product</button>
          </Link>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td scope="row">{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.category?.name}</td>
              <td>{item.price}</td>
              <td>
                <button
                  onClick={() => onRemove(item.slug)}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
                <Link to={item.slug + "/edit"}>
                  <button type="button" className="btn btn-primary">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
