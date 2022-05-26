import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { getCategories, removeCategory } from "../../../features/CategorySlice";
import '../product/css/form.css'
const ListCate = () => {
  const categories = useSelector((data) => data.category.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const onRemove = (slug) => {
    if(window.confirm("Ban muon xoa khong?")){
      dispatch(removeCategory(slug))
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
      <div>
      <Link to="/admin/category/add">Add new category</Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item, index) => (
            <tr key={index}>
              <td scope="row">{index + 1}</td>
              <td>{item.name}</td>
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

export default ListCate;
