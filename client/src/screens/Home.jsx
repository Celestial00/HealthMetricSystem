import React, { useState, useEffect, useId } from "react";
import HealthChart from "../components/HealthChart";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import Navbar from "../components/Navbar";
import Cookies from "js-cookie";
import HealthMetricsTable from "../components/HealthMetricsTable";

export default function Home() {
  const [userId, setUserId] = useState();
  const [metricData, setmetricData] = useState(null);

  useEffect(() => {
    const id = Cookies.get("userId");
    if (id) {
      setUserId(id);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      fetchData();
    }
  }, [userId]);

  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:3300/api/metrics/${userId}`,
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    setmetricData(data);
  };


  return (
    <>

      <div>
        <Navbar UserId={userId} />
        <Hero />
        <Metrics MetricData={metricData} />
        <HealthChart MetricData={metricData} />
        <HealthMetricsTable MetricData={metricData} />
      </div>
    </>
  );
}
