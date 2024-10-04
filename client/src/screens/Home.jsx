import React from "react";
import HealthChart from "../components/HealthChart";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import Navbar from "../components/Navbar";




export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Metrics />
        <HealthChart />
      </div>
    </>
  );
}
