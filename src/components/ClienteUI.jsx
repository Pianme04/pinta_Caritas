import {useNavigate} from 'react-router-dom'

const ClienteUI = ({cliente, handleEliminar}) => {
    const {nombre , empresa , email , telefono , notas , id } = cliente
    const Redirect = useNavigate()
    return (  
        <tr className="border-b hover:bg-gray-100">
            <td className='p-2'><p className='rounded-full bg-red-400 text-center m-auto p-2 font-black '>{id}</p></td>
            <td className="p-3">{nombre}</td>
            <td className="p-3">
                <p><span className="text-gray-800 font-bold uppercase ">Email: </span>{email}</p>
                <p><span className="text-gray-800 font-bold uppercase ">Tel: </span>{telefono}</p>

            </td>
            <td className="p-3">{empresa}</td>
            <td className="p-2">
                <button  className="block bg-green-600 w-full text-black font-bold text-xs mb-2 p-2" onClick={() => Redirect(`/clientes/editar/${id}`)}  type="button" >Editar</button>
                <button  className="block bg-red-600 hover:bg-red-500 w-full text-white font-bold text-xs mb-2 p-2"  type="button" onClick={() => handleEliminar(id)}>Eliminar</button>               
                <button  className="block bg-blue-600 w-full text-white font-bold text-xs mb-2 p-2"  type="button" onClick={() => Redirect(`/clientes/${id}`)}>Ver mas</button>


            </td>


   


        </tr>
     );
}
 
export default ClienteUI;