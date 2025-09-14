
import { useForm } from "react-hook-form";

function CreaUnaTarea({ agregarTarea }) {
    // Inicializamos react-hook-form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        // data contiene los valores de los inputs registrados
        agregarTarea(data.tarea);
        reset(); // limpiamos el formulario
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Nueva Tarea:
                <input
                    {...register("tarea", { required: "Este campo es obligatorio" })}
                    placeholder="Escribe tu tarea"
                />
            </label>


            {errors.tarea && <p style={{ color: "red" }}>{errors.tarea.message}</p>}

            <button type="submit">Agregar</button>
        </form>
    );
}

export default CreaUnaTarea;

