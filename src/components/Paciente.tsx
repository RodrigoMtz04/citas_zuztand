import type { Patient } from "../types"
import PacienteDetalle from "./PacienteDetalle"
import { usePacienteStore } from '../store/store'
import DialogModal from "./DialgoModal.tsx";
import { useState } from "react";
import { toast } from 'react-toastify';

type PacienteProps = {
    paciente: Patient
}

const Paciente = ({ paciente }: PacienteProps) => {


    const [isOpened, setIsOpened] = useState(false);


    const onProceed = () => {
       handleClickEliminar()
    }

    const eliminarPaciente = usePacienteStore((state) => state.eliminarPaciente)

    const handleClickEliminar = () => {
        eliminarPaciente(paciente.id)
        toast.success(`Se ha eliminado correctamente a ${paciente.name}`)
    }

    // Importar la funcion del store
    const establecerPacienteActivo =
        usePacienteStore((state) => state.establecerPacienteActivo)
    // Manejador del click
    const handleClickEditar = () => {
        establecerPacienteActivo(paciente)
    }

    return (
        <div className="mx-5 my-10 px-6 py-8 bg-white shadow-lg rounded-xl border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-indigo-600 mb-4">{paciente.name}</h3>
                <div className="space-y-2">
                    <PacienteDetalle label="ID" data={paciente.id} />
                    <PacienteDetalle label="Propietario" data={paciente.caretaker} />
                    <PacienteDetalle label="Email" data={paciente.email} />
                    <PacienteDetalle label="Fecha Alta" data={paciente.date || 'No especificada'} />
                    <PacienteDetalle label="Síntomas" data={paciente.symptoms} />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition-colors"
                    onClick={handleClickEditar}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg transition-colors"
                    onClick={() => setIsOpened(true)}
                >Eliminar</button>
            </div>

            <DialogModal
                title="Confirmar eliminación"
                isOpened={isOpened}
                onProceed={onProceed}
                onClose={() => setIsOpened(false)}
            >
                <p>¿Estás seguro de que deseas eliminar a {paciente.name}?</p>
            </DialogModal>
        </div>
    )
}

export default Paciente