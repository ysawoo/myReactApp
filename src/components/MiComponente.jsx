import React, { useState, useEffect } from "react";
export default function MiComponente() {
    const [contador, setContador] = useState(0);
    useEffect(() => {
        console.log("Componente montado")
    }, [])
}