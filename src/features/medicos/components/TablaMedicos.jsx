export default function TablaMedicos({ items, getPdfForMedico }) {
  return (
    <table className="hidden md:table w-full border-collapse border border-gray-400">
      <thead>
        <tr className="bg-gray-100">
          <th className="text-left p-2 border-b">Nombre</th>
          <th className="text-left p-2 border-b">Apellido</th>
          <th className="text-left p-2 border-b">Especialidad</th>
          <th className="text-left p-2 border-b">Matrícula</th>
          <th className="text-left p-2 border-b">PDF</th>
        </tr>
      </thead>
      <tbody>
        {items.map((x) => {
          const pdf = getPdfForMedico(x);
          return (
            <tr key={x.matricula} className="hover:bg-gray-50">
              <td className="p-2 border-b">{x.nombre}</td>
              <td className="p-2 border-b">{x.apellido}</td>
              <td className="p-2 border-b">{x.especialidad}</td>
              <td className="p-2 border-b">{x.matricula}</td>
              <td className="p-2 border-b">
                <a href={pdf.url} target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1 text-white bg-blue-600 rounded">Ver PDF</a>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}