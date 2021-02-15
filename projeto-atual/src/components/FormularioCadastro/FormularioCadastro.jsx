import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

function FormularioCadastro() {

    return (
        <form>

            <TextField margin='normal' id="nome" label="Nome" variant="outlined" type='text' fullWidth/>
            <TextField margin='normal' id="sobrenome" label="Sobrenome" variant="outlined" type='text' fullWidth/>
            <TextField margin='normal' id="cpf" label="CPF" variant="outlined" type='text' fullWidth/>
            <TextField margin='normal' id="promocoes" label="Promoções" variant="outlined" type='checkbox' fullWidth/>
            <TextField margin='normal' id="novidades" label="Novidades" variant="outlined" type='checkbox' fullWidth/>

            {/* <Checkbox checked={}/>
            <Checkbox/> */}

            <Button color='primary' variant='contained' type='submit'>Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;