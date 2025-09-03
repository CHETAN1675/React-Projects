import { useState, useEffect } from "react";

 const useFetch = (url) => {
  // Initialize state variables for data, loading, and error
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(null);

  
   useEffect(() => {
     const fetchData = async () => {
       setLoading(true);
       try {
         const response = await fetch(url);
         if (!response.ok) {
           throw new Error("Network response was not ok")
         }
         const jsonData = await response.json();
         setData(jsonData);
       }
       catch (error) {
         setError(error);
       }
       setLoading(false);
     };
     fetchData();
   }, [url]);

    return { data, loading, error };
};

export default useFetch;
