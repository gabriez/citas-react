import { useState, useEffect } from "react";
import Errors from "./errors";


const Form = ({setPacientes, patient, pacientes, setPatient}) => {
    const randomId = () => {
        return  Math.random().toString(36).substring(2) + Date.now().toString(16);
    }
    
    const [formData, setFormData] = useState({
        mascota: '',
        propietario: '',
        email: '',
        alta: '',
        sintomas: '',
        id: randomId()
    });

    const [errors, setErrors] = useState({
        mascota: false,
        propietario: false,
        email: false,
        alta: false,
        sintomas: false
    })

    useEffect(() => {
        if ( patient.id ) {
            setFormData({
                ...patient
            })
        }
    }, [patient])

    const handleChanges = (e) => {
        let {id, value} = e.target;
        setFormData((prevState) => ({ ...prevState, [id]: value})); 
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        
        if ( Object.values(formData).includes('')) {
            
            let errorsIndex = Object.values(formData).map((item, index) => { if (item == ``) return index});
            let errorsKey = Object.keys(formData);
            setErrors({
                mascota: false,
                propietario: false,
                email: false,
                alta: false,
                sintomas: false
            });
            errorsIndex.forEach( item => {
                setErrors((prevState) => ({...prevState, [errorsKey[item]]: true}))
            });
            return; 
        } 

        if ( patient.id ) {
            let indexPatient = pacientes.findIndex( element => element.id === patient.id);
            setPacientes((prevState) => {
                prevState[indexPatient] = {...formData};
                return [...prevState];
            });
            setPatient({});
        } else {
            setPacientes((prevState) => [...prevState, formData]);
        }
        
        setErrors({
            mascota: false,
            propietario: false,
            email: false,
            alta: false,
            sintomas: false
        });
        
        setFormData({
            mascota: '',
            propietario: '',
            email: '',
            alta: '',
            sintomas: '',
            id: randomId()
        })
    }



    return (
            <div className="w-screen md:w-1/2 lg:w-2/5">
                <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
                <p className="text-lg text-center mt-4 mb-8"> Añade pacientes y<span className="text-indigo-600 font-bold"> adminístralos</span></p>
                <form className="bg-white py-5 px-3 rounded-xl shadow-lg mx-3 mb-3" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block font-bold text-gray-700 uppercase" htmlFor="mascota">Nombre de la mascota</label>
                        <input type="text" name="mascota" id="mascota" 
                        className="w-full border-2 p-2 mt-2 rounded-md placeholder:text-gray-400" 
                        placeholder="Nombre de la mascota" 
                        value={formData.mascota}
                        onChange={handleChanges}
                        />
                        {errors.mascota && <Errors/>}    
                    </div>
                    <div className="mb-5 transition-all">
                        <label className="block font-bold text-gray-700 uppercase" htmlFor="propietario">Nombre del propietario</label>
                        <input type="text" name="propietario" id="propietario" 
                        className="w-full border-2 p-2 mt-2 rounded-md placeholder:text-gray-400" 
                        placeholder="Nombre del propietario"
                        value={formData.propietario}
                        onChange={handleChanges} />    
                        {errors.propietario && <Errors/>}
                    </div>
                    <div className="mb-5">
                        <label className="block font-bold text-gray-700 uppercase" htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" 
                        className="w-full border-2 p-2 mt-2 rounded-md placeholder:text-gray-400" 
                        placeholder="Introduce el email"
                        value={formData.email}
                        onChange={handleChanges} />    
                        {errors.email && <Errors/>}
                    </div>
                    <div className="mb-5">
                        <label className="block font-bold text-gray-700 uppercase" htmlFor="alta">Alta</label>
                        <input type="Date" name="alta" id="alta" 
                        className="w-full border-2 p-2 mt-2 rounded-md placeholder:text-gray-400" 
                        value={formData.alta}
                        onChange={handleChanges}/>    
                        {errors.alta && <Errors/>}
                    </div>
                    <div className="mb-5">
                        <label className="block font-bold text-gray-700 uppercase" htmlFor="sintomas">Sintomas</label>
                        <textarea name="sintomas" id="sintomas" placeholder="Describe los sintomas"
                        className="w-full border-2 p-2 mt-2 rounded-md placeholder:text-gray-400"
                        value={formData.sintomas}
                        onChange={handleChanges}/>
                        {errors.sintomas && <Errors/>}
                    </div>
                    <input type="submit" value={Object.keys(patient).length > 0 ? "Editar" : "Agregar paciente"}
                    className=" bg-indigo-600 w-full text-white p-3 uppercase font-bold 
                    cursor-pointer hover:bg-indigo-700" 
                    />
                </form>
           
            </div>
    )
}
export default Form;