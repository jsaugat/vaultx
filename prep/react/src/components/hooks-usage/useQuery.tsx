import { useQuery } from "../../hooks/useQuery";

export default function Component({ param }) {
  const request = useQuery(async () => {
    const response = await getDataFromServer(param);
    return response.data;
  }, [param]);

  return (
    <div>
      {request.loading && <p>Loading...</p>}
      {request.error && <p>Error: {request.error.message}</p>}
      {request.data && <p>Data: {request.data}</p>}
    </div>
  );
}

