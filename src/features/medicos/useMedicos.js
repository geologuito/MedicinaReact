import { useEffect, useState } from "react";

const API_URL = "https://apinet-4v1m.onrender.com/medicos";

export default function useMedicos() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, _setError] = useState("");

  useEffect(() => {

    // MOCK TEMPORAL
    setTimeout(() => {
      setItems([
        { nombre: "Guido", apellido: "Facio", especialidad: "Cardiología", matricula: "MP12345" },
        { nombre: "Lucio", apellido: "Aymonino", especialidad: "Pediatría", matricula: "MP67890" },
        { nombre: "Ana", apellido: "Gonzalez", especialidad: "Dermatología", matricula: "MP54321" },
      ]);

      setLoading(false);

    }, 500);

  }, []);

  return {
    items,
    loading,
    error
  };

}