import React, { useState, useEffect } from 'react';
function ContadorConTitulo() {
    // 1. ESTADO: Guardamos el número del contador
    const [conteo, setConteo] = useState(0);
    // 2. EFECTO: Se ejecuta cuando el componente se monta y cada vez que 'conteo' cambia
    useEffect(() => {
        // Esta es la lógica del efecto secundario
        console.log('El efecto se está ejecutando porque el conteo cambió.');
        document.title = `Hiciste clic ${conteo} veces`;
    }, [conteo]); // <-- El array de dependencias
    // 3. RENDERIZADO: Mostramos el contador y el botón
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Contador Sincronizado con el Título</h1>
            <p style={{ fontSize: '3em', margin: '10px', fontWeight: 'bold' }}>
                {conteo}
            </p>
            <button onClick={() => setConteo(conteo + 1)}>
                Haz clic aquí
            </button>
        </div>
    );
}
export default ContadorConTitulo;