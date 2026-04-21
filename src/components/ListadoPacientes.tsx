import { usePacienteStore } from '../store/store'
import Paciente from './Paciente'

const ListadoPacientes = () => {

  const pacientes = usePacienteStore(state => state.pacientes)

  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5">
      <h2 className="font-black text-3xl text-center">Lista de Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10 text-gray-600">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes</span>
      </p>

      {pacientes.length === 0 ? (
        <div className="bg-white shadow-md rounded-lg p-10 text-center text-gray-500 border border-dashed border-gray-300">
          <p className="text-lg">No hay pacientes registrados.</p>
          <p className="text-sm mt-2">Completa el formulario de la izquierda para agregar un paciente.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {pacientes.length > 0 && (
            <div className="text-center text-sm text-gray-500 mb-4">
              Total de pacientes: <span className="font-bold text-indigo-600">{pacientes.length}</span>
            </div>
          )}
          {pacientes.map(paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ListadoPacientes