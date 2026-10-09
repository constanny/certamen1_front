import React, { useState } from 'react'

import {Card,CardHeader,CardContent,CardActions,TextField,RadioGroup,FormControlLabel,Radio,Slider,Select,MenuItem,Rating,Button
} from '@mui/material'

function GuerrerosForm({ onCreateGuerrero = () => {} }) {

    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('Orco');
    const [nivel, setNivel] = useState(1);
    const [categoria, setCategoria] = useState('Capitán');
    const [furia, setFuria] = useState(1);

    // funcion q se ejecuta al registrar un guerrero
    const handleClick = () => {

        const guerrero = {};

        guerrero.nombre = nombre;
        guerrero.tipo = tipo;
        guerrero.nivel = nivel;
        guerrero.categoria = categoria;
        guerrero.furia = furia;

        // se envia el guerrero al container
        onCreateGuerrero(guerrero);

        // Limpiar el formulario
        setNombre('');
        setTipo('Orco');
        setNivel(1);
        setCategoria('Capitán');
        setFuria(1);
    }

    return (
        <Card raised>

            <CardHeader title="Ingresar Guerrero" />

            <CardContent>

                <div className="mt-3">
                    <TextField
                        fullWidth
                        label="Nombre del Guerrero"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mt-3">

                    <strong>Tipo de Guerrero</strong>

                    <RadioGroup
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    >
                        <FormControlLabel
                            value="Orco"
                            control={<Radio />}
                            label="Orco"
                        />

                        <FormControlLabel
                            value="Uruk"
                            control={<Radio />}
                            label="Uruk"
                        />
                    </RadioGroup>

                </div>

                <div className="mt-3">

                    <strong>Nivel de Combate: {nivel}</strong>

                    <Slider
                        value={nivel}
                        onChange={(e, nuevoValor) => setNivel(nuevoValor)}
                        min={1}
                        max={100}
                        step={1}
                    />

                </div>

                <div className="mt-3">

                    <strong>Categoría / Rango</strong>

                    <Select
                        fullWidth
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <MenuItem value="Capitán">
                            Capitán
                        </MenuItem>

                        <MenuItem value="Berserker">
                            Berserker
                        </MenuItem>

                        <MenuItem value="Explorador">
                            Explorador
                        </MenuItem>

                        <MenuItem value="Asediador">
                            Asediador
                        </MenuItem>
                    </Select>

                </div>

                <div className="mt-3">

                    <strong>Nivel de Amenaza / Furia</strong>

                    <div>
                        <Rating
                            value={furia}
                            onChange={(e, nuevoValor) => setFuria(nuevoValor)}
                        />
                    </div>

                </div>

            </CardContent>

            <CardActions>

                <Button
                    fullWidth
                    variant="contained"
                    onClick={handleClick}
                >
                    Registrar Guerrero
                </Button>

            </CardActions>

        </Card>
    )
}

export default GuerrerosForm