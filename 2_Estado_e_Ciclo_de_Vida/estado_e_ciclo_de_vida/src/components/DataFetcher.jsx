import { useEffect, useState } from "react";

function DataFetcher() {
  const [api, setApi] = useState(null);

  useEffect (() => {
    setTimeout(() => {
        setApi({message: "As informaçãoes chegaram!"});
    }, 2000);
  }, [])

  if (!api) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <h2>{api.message}</h2>
    </>
  );
}

export default DataFetcher;
