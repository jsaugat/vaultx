import { useEffect } from "react";
import { useState } from "react";

export function useQuery(fn, deps = []) {
  const [response, setResponse] = useState({
    loading: undefined,
    error: undefined,
    data: [],
  });

  useEffect(() => {
    setResponse((prev) => ({
      ...prev,
      loading: true,
    }));
    fn()
      .then((value) => {
        setResponse((prev) => ({
          ...prev,
          data: value,
        }));
      })
      .catch((err) => {
        setResponse((prev) => ({
          ...prev,
          error: err,
        }));
      })
      .finally(() => {
        setResponse((prev) => ({
          ...prev,
          loading: false,
        }));
      });
  }, [fn, ...deps]);

  return response;
}
