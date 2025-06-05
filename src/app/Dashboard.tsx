"use client";
import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    const worker = new Worker(
      new URL("./calculation.worker.js", import.meta.url)
    );

    worker.postMessage("startCalculation");

    worker.onmessage = (e) => {
      setD(e.data);
      worker.terminate(); // Terminate the worker once done
    };

    worker.onerror = (error) => {
      console.error("Worker error:", error);
    };

    return () => {
      worker.terminate(); // Cleanup worker on component unmount
    };
  }, []);

  return <div>{d}</div>;
}
