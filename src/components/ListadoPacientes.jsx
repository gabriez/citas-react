import Pacientes from "./Pacientes";

const ListadoPacientes = ({pacientes, setPatient, deletePatient}) => {

    
    return (
        <div className=" w-screen md:w-1/2 lg:3/5 mt-3 md:mt-0">
            {pacientes && pacientes.length == 0? 
            (
            <>
               <h2 className="font-black text-3xl text-center"> No hay pacientes </h2>
                <p className="text-lg text-center mt-4 mb-8">
                    Agrega pacientes
                    <span className="text-indigo-600 font-bold"> y aparecerán aquí abajo</span>
                </p> 
            </>
            )
            : 
            (
            <>
                <h2 className="font-black text-3xl text-center"> Listado de pacientes </h2>
                <p className="text-lg text-center mt-4 mb-8">
                    Administra tus 
                    <span className="text-indigo-600 font-bold"> Pacientes y Citas</span>
                </p>
                <div className={(pacientes.length == 0 ? '' : "overflow-y-scroll ") + "md:h-screen mb-10"}>
                    {pacientes.map((item, index) => <Pacientes key={item.id} 
                    paciente={item} setPatient={setPatient} deletePatient={deletePatient}/> )}
                </div>
            </>
            )}
        </div>
    )
}

export default ListadoPacientes;