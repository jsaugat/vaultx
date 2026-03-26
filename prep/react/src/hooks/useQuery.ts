import { useEffect, useState } from "react";

type QueryState =
  | {
      status: "success";
      error: null;
    }
  | { status: "loading"; error: null }
  | { status: "error"; error: Error };

const cache = new Map();

export const useQuery = <T>(
  fetchFn: () => Promise<T>,
  deps: React.DependencyList = [],
) => {
  const [state, setState] = useState<QueryState<T>>({
    status: "loading",
    error: null,
  });

  useEffect(() => {
    const isActive = true;

    setState({
      status: "loading",
      error: null,
    });

    fetchFn().then(() => cache.set())
  }, deps);
};

// export default function Component({ param }) {
//   const request = useQuery(async () => {
//     const response = await getDataFromServer(param);
//     return response.data;
//   }, [param]);

//   return (
//     <div>
//       {request.loading && <p>Loading...</p>}
//       {request.error && <p>Error: {request.error.message}</p>}
//       {request.data && <p>Data: {request.data}</p>}
//     </div>
//   );
// }
