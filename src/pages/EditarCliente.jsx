import {useEffect , useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import Formulario from "../components/Formulario";

const EditarCliente = () => {

    const {id} = useParams();
    console.log(id)
    const redirect = useNavigate()

    const [cliente , setCliente] = useState({})

    useEffect(() => {
        const obtenerCliente = async () => {

            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json();
                setCliente(resultado)  
                console.log(resultado)  
            } catch (error) {
                console.log(error)
            }

        }
        obtenerCliente()
    }, [])
    return ( 
        
        <>

            {cliente.nombre ? 
                (
                    <>

                    <h1 className="font-black text-4xl text-center text-blue-600">Editar cliente</h1>
                    <p className="text-center mt-5">LLena los siguientes datos para editar el cliente</p>

                    <Formulario
                        cliente={cliente}
                    />
                    </>
                )
            : 
                <div>
                    <h1 className="font-black text-4xl text-center text-blue-600"><span className='text-red-500'>ERROR!</span> No se encuentra el cliente con la id {id}</h1>
                    <p className="text-center mt-2 mb-4"> Vefifca que los datos sean correctos  </p>

                
               


                </div>
            }

            

        </>

       
     );
}
 
export default EditarCliente;