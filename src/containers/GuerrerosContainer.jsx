import React, { useState } from 'react'

import GuerrerosForm from '../components/GuerrerosForm'
import GuerrerosView from '../components/GuerrerosView'

function GuerrerosContainer() {

    const [guerreros, setGuerreros] = useState([]);

    // agrega un guerrero nuevo a la lista
    const handleCreateGuerrero = (guerrero) => {
        setGuerreros([...guerreros, guerrero]);
    }

    // elimina el guerrero seleccionado
    const handleDeleteGuerrero = (guerrero) => {

        const filtrada = guerreros.filter((item) => {
            return item.nombre != guerrero.nombre;
        });

        setGuerreros(filtrada);
    }

    return (
        <div className="container mt-3">

            <div className="row">

                <div className="col-12">

                    <GuerrerosForm
                        onCreateGuerrero={handleCreateGuerrero}
                    />

                </div>

            </div>

            <div className="row mt-4">

                <div className="col-12">

                    <GuerrerosView
                        guerreros={guerreros}
                        onQuitar={handleDeleteGuerrero}
                    />

                </div>

            </div>

        </div>
    )
}

export default GuerrerosContainer