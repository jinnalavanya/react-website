import axios from "axios";
import React, { useEffect, useState } from "react";
import AddNews from "./CRUD/AddNews";
import { NavLink } from "react-router-dom";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [update, setUpdate] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/LatestNews/")
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const deleteNews = (itemId) => {
    alert("deleted" + itemId);
    axios
      .delete("http://localhost:4000/LatestNews/" + itemId)
      .then(() => {
        console.log("deleted successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h3>Latest News</h3>
      <NavLink to="/addNews">
        <button className="btn btn-warning mb-3 size-lg">AddNews</button>
      </NavLink>
      <div className="container">
        <div className="row">
          <table className="table table-bordered table-hover">
            <thead className="text-danger">
              <tr>
                <th>title</th>
                <th>Latest News</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {news.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => {}}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => {
                          deleteNews(item.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
