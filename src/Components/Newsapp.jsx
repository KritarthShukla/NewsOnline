import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Newsapp.css";

export default function Newsapp() {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "9af798078f5b48e492fd8b5064947b59";
  const getData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json(); //to convert into json redable format to read
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

 const userInput=(event)=>{
    setSearch(event.target.value);
 }

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul className="head">
          <a >All News</a>
          <a>Top Headlines</a>
        </ul>
        <div className="searchBar">
          <input type="text" placeholder="Search News" value={search} onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <h1 className="heading1">Stay Update with TrendyNews</h1>
      </div>

      <div className="categoryBtn">
        <button onClick={userInput} value='Sports' >Sports</button>
        <button onClick={userInput} value='Politics'>Politics</button>
        <button onClick={userInput} value='Entertainment'>Entertainment</button>
        <button onClick={userInput} value='Health'>Health</button>
        <button onClick={userInput} value='Fitness'>Fitness</button>
      </div>
      <div>{newsData ? <Card data={newsData} /> : null}</div>
    </div>
  );
}
