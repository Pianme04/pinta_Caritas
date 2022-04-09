import {useEffect , useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const VerCliente = () => {
    const {id} = useParams();
    const redirect = useNavigate()

    const [cliente , setCliente] = useState({})

    useEffect(() => {
        const obtenerCliente = async () => {

            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json();
                setCliente(resultado)    
            } catch (error) {
                console.log(error)
            }

        }
        obtenerCliente()
    }, [])
    
    return ( 


        <>

            {cliente.nombre ? 
                <div>
                    <h1 className="font-black text-4xl text-center text-blue-600">Cliente seleccionado : {cliente.nombre}</h1>
                    <p className="text-center mt-2 mb-4">Solo estas en modo lectura</p>


                    <p className='text-3xl '>Cliente: <span className='text-gray-500 font-bold uppercase'>{cliente.nombre}</span></p>
                    <p className='text-1xl '>Empresa: <span className='text-gray-500 font-bold uppercase'>{cliente.empresa}</span></p>
                    <p className='text-1xl '>Telefono: <span className='text-gray-500 font-bold uppercase'>{cliente.telefono}</span></p>
                    <p className='text-1xl '>Email: <span className='text-gray-500 font-bold uppercase'>{cliente.email}</span></p>
                    <p className='text-1xl '>Telefono: <span className='text-gray-500 font-bold uppercase'>{cliente.telefono}</span></p>
                    {cliente.notas && <p className='text-1xl '>Notas: <span className='text-gray-500 font-bold uppercase'>{cliente.notas}</span></p>}
                    <div >
                        <button onClick={() => redirect('/clientes')} className='mt-20 bg-yellow-500 p-3  font-black '>Regresar</button>
                    </div>

                </div>
            :
                <div>
                <h1 className="font-black text-4xl text-center text-blue-600"><span className='text-red-500'>ERROR!</span> No se encuentra el cliente con la id {id}</h1>
                <p className="text-center mt-2 mb-4"> Vefifca que los datos sean correctos  </p>

                
               


                </div>
            }
            
        </>
     );
}
 
export default VerCliente;