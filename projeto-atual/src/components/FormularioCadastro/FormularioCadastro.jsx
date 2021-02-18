import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function FormularioCadastro() {

    return (
        <form>

            <TextField margin='normal' id="nome" label="Nome" variant="outlined" type='text' fullWidth />
            <TextField margin='normal' id="sobrenome" label="Sobrenome" variant="outlined" type='text' fullWidth />
            <TextField margin='normal' id="cpf" label="CPF" variant="outlined" type='text' fullWidth />

            <FormControlLabel
                control={
                    <Switch
                        defaultChecked
                        name="Promoções"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                }
                label="Promoções"
            />

            <FormControlLabel
                control={
                    <Switch
                        defaultChecked
                        name="Novidades"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                }
                label="Novidades"
            />
 
            <Button color='primary' variant='contained' type='submit'>Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;