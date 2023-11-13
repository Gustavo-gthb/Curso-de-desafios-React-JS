import { useEffect, useState } from "react";

function MyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        setData("Dados carregados com sucesso!");
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar os dados", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>{loading ? <p>carregando...</p> : <p>{data}</p>}</div>
    </>
  );
}

export default MyComponent;
