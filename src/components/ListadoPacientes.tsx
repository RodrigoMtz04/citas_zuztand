import { usePacienteStore } from '../store/store'

const ListadoPacientes = () => {

  const pacientes = usePacienteStore(state => state.pacientes)

  return (
      <div>
        <h2>Lista de Pacientes</h2>
        {pacientes.map(paciente => (
            <div key={paciente.id}>
              <h3>{paciente.name}</h3>
              <p>Dueño: {paciente.caretaker}</p>
              <p>Email: {paciente.email}</p>
            </div>
        ))}
      </div>
  )
}

export default ListadoPacientes