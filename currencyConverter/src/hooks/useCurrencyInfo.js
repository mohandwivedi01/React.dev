import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return; // Ensure the currency is defined
    
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);
        console.log(res[currency]); // Correct placement of console.log
      })
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
