import React, { useState, useEffect } from "react";
import Axios from "axios";
import Table from "../../Component/Table/Table";

const API = () => {
  const [starwar, setStarwar] = useState([]);
  const fetchApi = async () => {
    await Axios.get("https://swapi.dev/api/people/")
      .then((Response) => {
        console.log(Response.data.results);
        const data = Response.data.results;
        setStarwar(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    // const fetchApi = () => {
    //   Axios.get("https://swapi.dev/api/people/")
    //     .then((Response) => {
    //       console.log(Response.data.results);
    //       const data = Response.data.results;
    //       setStarwar(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    fetchApi();
  }, []);
  return (
    <div>
      {/* <h1>API Page</h1>;
      <button className="btn btn-primary mb-3" onClick={fetchApi}>
        Fetch
      </button> */}
      <Table starwar={starwar} />
    </div>
  );
};

export default API;
