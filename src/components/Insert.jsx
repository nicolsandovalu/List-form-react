import React, { useState } from "react";

const Insert = ({onSubmit}) => {
    const [colaborador, setColaborador] = useState ({
        id: 0,
        name: '',
        email: '',
    })

    const handleChange = (e) => {
        setColaborador ({
            ...colaborador,
            [e.target.id]: e.target.value
        })
    }

    const saveColaborador= (e) =>{
        e.preventDefault();
        if (!colaborador.name || !colaborador.email) {
            alert ('Debe rellenar todos los campos');
            return;
        }
        onSubmit (colaborador);
    }

    return (
        <div>
            <h5>Agregar nuevo colaborador</h5>

            <form onSubmit={saveColaborador}>

            <div className="mb-3">
                    <label for="name" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="name" onChange={handleChange}/>
                </div>

                <div className="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange}/>
                </div>


                <button type="submit" className="button1">Guardar</button>
            </form>
        </div>
    )
}

export default Insert;