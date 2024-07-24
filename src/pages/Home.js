import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navibars.js";
import HomePage from "./HomePage.js";
import About from "./About.js";
import Tickets from "./Tickets.js";


const Home = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
      );
      // console.log("API response:", response.data); 
      setData(response.data); // Set data to state

     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  useEffect(() => {
    fetchData();
  }, []); 

  console.log("Data state:", data); 

  return (
    <div >
      <Navbar data={data} />
      <HomePage data={data} />
      <About data={data} />
      <Tickets data={data} />
    </div>
  );
};

export default Home;
