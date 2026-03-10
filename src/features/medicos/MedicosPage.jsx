import TablaMedicos from "./components/TablaMedicos";
import CardsMedicos from './components/CardsMedicos';
import useMedicos from "./useMedicos";

export default function MedicosPage() {
	const { items, loading, error } = useMedicos();


	// Construye la ruta del PDF físico
const USE_DEV_PDF = true; // Cambia a false para usar PDFs reales basados en matrícula

function getPdfForMedico(x) {

  if (USE_DEV_PDF || !x?.matricula) {
    return {
      url: "/pdfs/prueba.pdf",
      name: "prueba.pdf",
    };
  }

  return {
    url: `/pdfs/${x.matricula}.pdf`,
    name: `${x.matricula}.pdf`,
  };
}

	return (

		<div className="max-w-4xl mx-auto p-6">
			<h1>Medicos (desde .NET API)</h1>

			<div className="flex gap-3 items-center mb-4">
				<button
					// onClick={load} // comentado porque usamos mock
					disabled={loading}
					className="px-4 py-2 rounded border"
				>
					{loading ? "Cargando..." : "Recargar"}
				</button>

				<a href={"https://apinet-4v1m.onrender.com/medicos"} target="_blank" rel="noreferrer" className="text-blue-600">
					Abrir endpoint
				</a>
			</div>

			{error && <p className="text-red-600 mb-4">Error: {error}</p>}
			{loading && <p className="mb-4">Cargando datos…</p>}
			{!loading && !error && items.length === 0 && <p>No hay datos.</p>}

			{/* ==============================
          TABLA PARA DESKTOP
      ============================== */}
			{!loading && !error && items.length > 0 && (
				<div className="mb-4">
					<TablaMedicos
						items={items}
						getPdfForMedico={getPdfForMedico}
					/>
				</div>
			)}
			{/* ==============================
          CARDS PARA MOBILE
      ============================== */}
			<CardsMedicos
				items={items}
				getPdfForMedico={getPdfForMedico}
			/>
		</div>
	);
}