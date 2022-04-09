
import {Formik , Form , Field } from 'formik'
import *  as Yup from 'yup'
import Alerta from './Alerta'
import {useNavigate} from 'react-router-dom'


const Formulario = ({cliente}) => {

    const redirect = useNavigate()


    const nuevoClienteShema = Yup.object().shape({
        nombre: Yup.string().min(5, '(ERROR) El nombre tiene que tener más de 5 carateres').required('(ERROR) Es obligatorio el nombre del cliente'),
        empresa: Yup.string().required('(ERROR) El nombre de la empresa es obligatorio'),
        email: Yup.string().email('(ERROR) El email no es valido , introduce uno correcto').required('(ERROR) El E-mail es obligatorio'),
        telefono: Yup.number().positive('(ERROR) El nùmero debe contener 10 digitos').integer('(ERROR) El nùmero debe contener 10 digitos').typeError('(ERROR) El nùmero no es valido'),
        notas: ''     
    })

    const handleSubmit =  async  (values) => {
        try {
            let respuesta;
            if(cliente.id) {

                const url = `http://localhost:4000/clientes/${cliente.id}`
                respuesta = await fetch(url, {
                    method:'PUT',
                    body:JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })    

            }  else {

                const url = 'http://localhost:4000/clientes'
                respuesta = await fetch(url, {
                    method:'POST',
                    body:JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                     
            }
            await respuesta.json()

            if(cliente.id) {
                alert('Registro actualizado correctamente')
            } else {
                alert('Registro creado correctamente !')
            }
              
            redirect("/clientes")   
            
        } catch (error) {
            console.log(error)
        }
        
    }



    return (  

        <div className="bg-white p-5 mt-10 rounded-md shadow-md md:w-3/4 mx-auto">

            <h1 className="text-gray-600 text-xl text-bold  text-center">
            {cliente?.nombre ? <h1> Editar cliente </h1>: <h1> Agregar nuevo Cliente</h1>}
            </h1>

            <Formik
                initialValues={{
                    nombre: cliente?.nombre ?? "",
                    empresa: cliente?.empresa ?? "",
                    email: cliente?.email ?? "",
                    telefono: cliente?.telefono ?? "",
                    notas: cliente?.notas ?? "",
                    id: cliente?.id ?? ""
                   
                    
                }}
                enableReinitialize={true}

                onSubmit={ async (values , {resetForm}) => {

                    await handleSubmit(values)
                    resetForm()
                    
                }}
                validationSchema={nuevoClienteShema}
            >
            {({errors, touched}) => {
              
                return (


            

                <Form className='mt-5'>

                    <div className='mb-5'>
                    

                    {cliente?.id ? (
                        <>
                            <label className='text-gray-600'
                            
                            >
                            ID
                            </label>
                            <Field

                            type="text"
                            value={cliente.id}
                            readOnly
                            className="bg-gray-400 w-full block rounded-md mt-5 p-3"
                            />

                        </>
                     ): null}

                    </div>
                    <div className='mb-5'>

                   
                        <label
                            className='text-gray-600'
                            htmlFor='nombre'
                        >Nombre *</label>
                        <Field

                            type="text"
                            id="nombre"
                            placeholder="Nombre del cliente"
                            className="bg-gray-200 w-full block rounded-md mt-5 p-3"
                            name="nombre"
                            autoComplete="off"
                           

                        />

                        {errors.nombre && touched.nombre ? (
                            <Alerta>{errors.nombre}</Alerta>
                        ) : null}
                        
                    </div>


                    <div className='mb-5'>

                 
                        <label
                            className='text-gray-600'
                            htmlFor='empresa'
                            
                        >Empresa *</label>
                        <Field

                            type="text"
                            id="empresa"
                            placeholder="Nombre de la empresa"
                            className="bg-gray-200 w-full block rounded-md mt-5 p-3"
                            name="empresa"
                        />
                        {errors.empresa && touched.empresa ? (
                            <Alerta>{errors.empresa}</Alerta>
                        ) : null}                
                    </div>       

                    <div className='mb-5'>

                        <label
                            className='text-gray-600'
                            htmlFor='email'
                        >E-mail *</label>
                        <Field

                            type="email"
                            id="email"
                            placeholder="Agrega el email"
                            className="bg-gray-200 w-full block rounded-md mt-5 p-3"
                            name="email"
                        />

                        {errors.email && touched.email ? (
                            <Alerta>{errors.email}</Alerta>
                        ) : null}                    
                    </div>  

                    <div className='mb-5'>

                        <label
                            className='text-gray-600'
                            htmlFor='telefono'
                        >Telefono (opcional)</label>
                        <Field

                            type="tel"
                            id="telefono"
                            placeholder="Agrega el telefono"
                            className="bg-gray-200 w-full block rounded-md mt-5 p-3"
                            name="telefono"
                        />

                        {errors.telefono && touched.telefono ? (
                            <Alerta>{errors.telefono}</Alerta>
                        ) : null}                      
                    </div> 

                    <div className='mb-5'>

                        <label
                            className='text-gray-600'
                            htmlFor='notas'
                        >Notas</label>
                        <Field
                            as="textarea"
                            type="text"
                            id="notas"
                            placeholder="Agrega alguna nota"
                            className="bg-gray-200 w-full block rounded-md mt-5 p-3 h-30"
                            name="notas"
                        />
                    </div>      

                    <input

                        type="submit"
                        value={cliente?.nombre ? 'Guardar cambios': 'Agregar cliente'}
                        className='bg-blue-600 font-bold uppercase w-full p-6 text-white hover:cursor-pointer'
                    />                   
                </Form>
                )}}

            </Formik>
            
        </div>
    );
}

Formulario.defaultProps = {
    cliente : {}
}
 
export default Formulario;