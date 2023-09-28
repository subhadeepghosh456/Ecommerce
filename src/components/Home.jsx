import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addtoList } from "../utils/itemSlice";

const Home = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [sortFilter, setSortFilter] = useState("");
  const dispatch = useDispatch();

  const total_data = useSelector((store) => store.list.listItems);

  const getProducts = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const response = await data.json();
      dispatch(addtoList(response));
      setData(response);
      setFilterData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const filterFunc = () => {
    const newData = data.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilterData(newData);
  };

  const sortProducts = () => {
    const sortedList = [...data];
    sortedList.sort((a, b) => {
      return a.price - b.price;
    });
    return sortedList;
  };

  const sortProductsByTitle = () => {
    const sortedList = [...data];
    sortedList.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    return sortedList;
  };

  const handleSortChange = (event) => {
    const filter = event.target.value;
    if (filter === "price") {
      const newData = sortProducts();
      setFilterData(newData);
    }
    if (filter === "title") {
      const newData = sortProductsByTitle();
      setFilterData(newData);
    }
    setSortFilter(filter);
  };

  useEffect(() => {
    filterFunc();
  }, [text]);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="home">
      <Header />
      <div className="search-filter-container">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search here..."
          className="search-filter"
        />
      </div>
      <div className="filter-option-container">
        <div className="filter-option">
          <h5>Select a filter</h5>
          <select value={sortFilter} onChange={handleSortChange}>
            <option>--Select a option--</option>
            <option value="price">Sort By Value</option>
            <option value="title">Sort By Title</option>
          </select>
        </div>
      </div>
      <div className="product-list">
        {filterData?.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
