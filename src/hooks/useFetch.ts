import Axios from "axios";
import { useState, useEffect } from "react";

import { apiHostname } from "../config.json";

export function useFetch(url: string, apiExterna?: boolean) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      let urlFinal = `${apiHostname}${url}`;

      if (apiExterna) {
        urlFinal = url;
      }

      const { data } = await Axios.get(urlFinal);
      setData(data);
    }
    fetchData();
  }, []);

  return data;
}
