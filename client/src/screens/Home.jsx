import React, { useState, useEffect, useId } from "react";
import HealthChart from "../components/HealthChart";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import Navbar from "../components/Navbar";
import Cookies from "js-cookie";
 


export default function Home() {

  const [userId, setUserId] = useState()

  useEffect(() => {
    const id = Cookies.get("userId");
    if (id) {
      setUserId(id);
    }
  }, []);

 
  return (
    <>
      <div>
        <Navbar UserId={userId} />
        <Hero  />
        <Metrics />
        <HealthChart />
      </div>
    </>
  );
}
