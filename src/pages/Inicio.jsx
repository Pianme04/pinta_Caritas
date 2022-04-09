import React from 'react';

import { useEffect , useState} from "react";
import ClienteUI from "../components/ClienteUI";



const Inicio = () => {



    useEffect(() => {

        const obtenerClienteAPI = async () => {
            try {
                const url = import.meta.env.VITE_URL_API
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setClientes(resultado) 
                console.log('Si esta ')
            } catch (error) {
                console.log(error)
            }
        }
        obtenerClienteAPI()


    },[])

    const [clientes , setClientes] = useState([])

    const handleEliminar = async id => {

        const confirmar = confirm('Deseas borrar este registro')

        if(confirmar){
            try {


                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url, {
                    method:'DELETE'
            })
                await respuesta.json();
                const arrayCliente = clientes.filter(cliente => cliente.id !== id)
                setClientes(arrayCliente)

            
            } catch (error) {
                console.log(error)
            }
        } 
       
    }
    return (    
        <>

            <h1 className="font-black text-4xl text-center text-blue-600">Clientes</h1>
            <p className="text-center mt-5">Administra tus clientes </p>

            <table className="w-full mt-5 table-auto shadow bg-white">
                <thead className="bg-blue-800 text-white" >
                    <tr>
                        
                        <th className="p-2">ID</th>

                        <th className="p-2">Nombre</th>
                        <th className="p-2">Contacto</th>
                        <th className="p-2">Empresa</th>
                        <th className="p-2">Acciones</th>


                    </tr>

                </thead>

                <tbody>
                    
                    {clientes.map(cliente => (
                        <ClienteUI
                            key={cliente.id}
                            handleEliminar={handleEliminar}
                            cliente={cliente}

                        />
                    ))}
                </tbody>


            </table>

        

        </>
       

     );
}
 
export default Inicio;