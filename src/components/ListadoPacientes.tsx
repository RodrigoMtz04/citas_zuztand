import { usePacienteStore } from '../store/store'
import Paciente from './Paciente'

const ListadoPacientes = () => {

  const pacientes = usePacienteStore(state => state.pacientes)

  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5">
      <h2 className="font-black text-3xl text-center">Lista de Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes</span>
      </p>

        { pacientes.map((paciente) => (
            <Paciente
                key={paciente.id}
                paciente={paciente}
            />
        ))

        }

      {pacientes.length === 0 ? (
        <div className="bg-white shadow-md rounded-lg p-6 text-center text-gray-600">
          No hay pacientes registrados.
        </div>
      ) : (
        <div className="space-y-4">
          {pacientes.map(paciente => (
            <article key={paciente.id} className="bg-white shadow-md rounded-lg p-6 border-l-4 border-indigo-600">
              <h3 className="text-xl font-bold text-gray-800">{paciente.name}</h3>
              <p className="text-gray-600 mt-2">
                <span className="font-semibold text-gray-800">Dueño:</span> {paciente.caretaker}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">Email:</span> {paciente.email}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default ListadoPacientes