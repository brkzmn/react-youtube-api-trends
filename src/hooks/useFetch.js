import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getFetchData = async (url) => {
    if (isLoading === false || error !== null) {
      setIsLoading(true);
      setError(null);
    }
    try {
      const response = await fetch(url);
      console.log(response.ok, "res ok");
      if (!response.ok) {
        throw new Error("HTTP Error");
      }
      const data = await response.json();
      console.log("inside try catch");
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setData(null);
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFetchData(url);
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
