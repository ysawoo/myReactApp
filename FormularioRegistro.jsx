import React from 'react';
import { useForm } from 'react-hook-form';
function FormularioRegistro() {
    // Se añade 'reset' de useForm
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log("Datos enviados:", data);
        alert('¡Registro exitoso! Revisa la consola.');
        // Se llama a reset para limpiar el formulario
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre de Usuario</label>
                <input
                    {...register("usuario", {
                        required: "El nombre de usuario es obligatorio",
                        minLength: { value: 4, message: "Mínimo 4 caracteres" }
                    })}
                />
                {errors.usuario && <p style={{ color: 'red' }}>{errors.usuario.message}</p>}
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "El email es obligatorio",
                        pattern: {
                            value: '/^\S+@\S+\.\S+$/i',
                            message: "El formato del email no es válido"
                        }
                    })}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            </div>
            NUEVO CAMPO CON REGEX
            <div>
                <label>Contraseña</label>
                <input
                    type="password"
                    {...register("password", {
                        required: "La contraseña es obligatoria",
                        pattern: {
                            value: '/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/',
                            message: "La contraseña debe tener mínimo 8 caracteres, una letra y un número"
                        }
                    })}
                />
                {/* Así se muestra el error del regex */}
                {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
            </div>
            <button type="submit">Registrarse</button>
        </form>
    );
}
export default FormularioRegistro;