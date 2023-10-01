import React from 'react'

function Pacientes({paciente, setPatient, deletePatient}) {
    
    
    const handleEditPatient = () => {
        setPatient({...paciente})
    }
    
    const handleDeletePatient = () => {

        if (confirm("¿Quieres eliminar al paciente?")) deletePatient(paciente.id);
    }

    return (
        <div className="mx-3 mb-3 bg-white shadow-lg px-5 py-10 rounded-xl">
            <p className="font-bold uppercase mb-3 text-gray-700"> Nombre de la mascota: {''}
                <span className=" normal-case font-normal "> {paciente.mascota} </span>
            </p>
            <p className="font-bold uppercase mb-3 text-gray-700"> Propietario: {''}
                <span className=" normal-case font-normal ">{paciente.propietario} </span>
            </p>
            <p className="font-bold uppercase mb-3 text-gray-700"> Email: {''}
                <span className=" normal-case font-normal ">{paciente.email}</span>
            </p>
            <p className="font-bold uppercase mb-3 text-gray-700"> Fecha de alta: {''}
                <span className=" normal-case font-normal ">{paciente.alta}</span>
            </p>
            <p className="font-bold uppercase mb-3 text-gray-700"> Sintomas: {''}
                <span className=" normal-case font-normal "> {paciente.sintomas} </span>
            </p>
            <div className='flex gap-2'>
                <button type="button" 
                className='py-1 px-6 bg-indigo-500 hover:bg-indigo-700
                text-white font-semibold uppercase rounded-lg'
                onClick={handleEditPatient}>
                    Editar
                </button>
                <button type="button"
                className='py-1 px-6 bg-red-500 hover:bg-red-700
                text-white font-semibold uppercase rounded-lg'
                onClick={handleDeletePatient}>Eliminar</button>
            </div>
        </div>
    )
}

export default Pacientes
