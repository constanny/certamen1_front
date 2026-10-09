import React from 'react'

import {Card,CardHeader,CardContent,Table,TableHead,TableBody,TableRow,TableCell,TableContainer,Chip,Button,Alert
} from '@mui/material'

function GuerrerosView({ guerreros = [], onQuitar = () => {} }) {

    // si todavia no existen guerreros registrados
    if (!guerreros?.length) {
        return (
            <Alert severity="info">
                Debes ingresar al menos un guerrero.
            </Alert>
        )
    }

    // avisa al container qué guerrero se debe eliminar
    const handleQuitar = (guerrero) => {
        onQuitar(guerrero);
    }

    return (
        <Card>

            <CardHeader title="Despliegue del Ejército" />

            <CardContent>

                <TableContainer>

                    <Table>

                        <TableHead>

                            <TableRow>
                                <TableCell>Nombre del Guerrero</TableCell>
                                <TableCell>Tipo de Guerrero</TableCell>
                                <TableCell>Categoría / Rango</TableCell>
                                <TableCell>Nivel</TableCell>
                                <TableCell>Clasificación</TableCell>
                                <TableCell>Acción</TableCell>
                            </TableRow>

                        </TableHead>

                        <TableBody>

                            {/* se crea una fila por cada guerrero */}
                            {guerreros.map((guerrero, index) => (

                                <TableRow key={index}>

                                    <TableCell>
                                        {guerrero.nombre}
                                    </TableCell>

                                    <TableCell>
                                        {guerrero.tipo}
                                    </TableCell>

                                    <TableCell>
                                        {guerrero.categoria}
                                    </TableCell>

                                    <TableCell>
                                        {guerrero.nivel}
                                    </TableCell>

                                    <TableCell>

                                        {guerrero.tipo === 'Orco' ? (

                                            <Chip
                                                label="Orco"
                                                color="success"
                                            />

                                        ) : (

                                            <Chip
                                                label="Uruk"
                                                color="primary"
                                            />

                                        )}

                                    </TableCell>

                                    {/* boton para eliminar el guerrero */}
                                    <TableCell>

                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => handleQuitar(guerrero)}
                                            sx={{
                                                fontSize: '0.75rem'
                                            }}  
                                        >
                                            Asesinado por la aparición
                                        </Button>

                                    </TableCell>

                                </TableRow>

                            ))}

                        </TableBody>

                    </Table>

                </TableContainer>

            </CardContent>

        </Card>
    )
}

export default GuerrerosView