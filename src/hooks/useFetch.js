import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzM2ODkzNThjZmQyZTAzYjk5N2JjNjQ4ZTU1YzAwNiIsIm5iZiI6MTc2NTM4ODM2NS43LCJzdWIiOiI2OTM5YjA0ZDc2NjVmMzk1Y2FhZjExMmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.hB-HGsavzLtXHhyzQSVnx2FHIe2JTmw1stkXK6GrCFQ`,
  },
};

export const useFetch = (url) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {

      try {
        
        const resposta = await fetch(url, options).then((resposta) => resposta.json());
        setDados(resposta);

      } catch (error) {
        console.log("Erro ao buscar dados: ", error);
      }

    };

    buscarDados();
  }, [url]);

  return { dados };
};