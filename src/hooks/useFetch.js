import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [pending, setPending] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);

        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }

        let data = await res.json();
        //console.log("Data del hook: ", data);
        setPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        setPending(true);
        setError(err);
      }
    };

    getData(url);
  }, [url]);

  return { data, pending, error };
};
