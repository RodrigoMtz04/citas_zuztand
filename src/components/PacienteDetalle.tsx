type DetallePacienteProps = {
    label: string
    data: string
}
export default function PacienteDetalle({label, data} : DetallePacienteProps) {
    return (
        <div className="mb-4 py-2 border-b border-gray-200 last:border-b-0">
            <p className="text-sm font-bold text-gray-600 uppercase mb-1">{label}:</p>
            <p className="text-base text-gray-900 font-semibold">{data}</p>
        </div>
    )
}