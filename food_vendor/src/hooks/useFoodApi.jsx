import { useEffect, useState } from "react";

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
function useFoodApi(query = "") {
  
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchFood() {
      try {
        setLoading(true);
        setError(false);
        console.log("QUERY:", query);

        const response = await fetch(`${API_URL} ${encodeURIComponent(query)}`);
        const body = await response.json();
        console.log("API RESULT:", body);

        setData(body);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    fetchFood();
  }, [query]);

  return { data, loading, error };
}
export default useFoodApi;
