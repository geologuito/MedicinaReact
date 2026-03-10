export default function CardsMedicos({ items, getPdfForMedico }) {
  return (
    <div className="md:hidden grid gap-4">
      {items.map((x) => {
        const pdf = getPdfForMedico(x);
        
        return (
          <div key={x.matricula} className="border rounded p-4 shadow-sm">
            <div className="font-bold text-lg">{x.nombre} {x.apellido}</div>
            <div className="text-gray-600">{x.especialidad}</div>
            <div className="text-gray-500">{x.matricula}</div>
            <a
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block px-3 py-1 bg-blue-600 text-white rounded"
            >
              Ver PDF
            </a>
          </div>
        );
      })}
    </div>
  )
}