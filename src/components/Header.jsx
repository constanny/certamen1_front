import React from 'react'

import {AppBar,Toolbar,Typography,Box
} from '@mui/material'

function Header() {

    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="static">

                <Toolbar>

                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1 }}
                    >
                        Anillo Único
                    </Typography>

                    <Typography>
                        Uno para dominarlos a todos
                    </Typography>

                </Toolbar>

            </AppBar>

        </Box>
    )
}

export default Header