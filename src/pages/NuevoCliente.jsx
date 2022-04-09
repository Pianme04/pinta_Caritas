import Formulario from "../components/Formulario";



const NuevoCliente = () => {
    return (  
        <>

            <h1 className="font-black text-4xl text-center text-blue-600">Nuevo cliente</h1>
            <p className="text-center mt-5">LLena los siguientes datos para agregar un nuevo cliente</p>

            <Formulario/>

        </>

    );
}
 
export default NuevoCliente;