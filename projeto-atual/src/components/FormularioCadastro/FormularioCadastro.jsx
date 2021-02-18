import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function FormularioCadastro({ aoEnviar, validarCPF }) {

    const [nome, setNome] = useState('');
    //o hook useState devolve um array de dois elementos
    //a primeira é a referência para o valor do estado atual e a segunda é a função que altera esse estado.

    //guarda o estado interno do componente, e toda vez que esse state for alterado o React força a reenderização desse component
    //vai manter este state durante todo o ciclo de vida
    //antes usavamos o state com class componente, mas agora em function components usamos o hook useState
    // state = {
    // };

    const [sobrenome, setSobrenome] = useState('');
    // const arr = useState('Morcinek');
    // const sobrenome = arr[0];
    // const setSobrenome = arr[1];

    const [cpf, setCPF] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);


    //=====validacoes

    const [erros, setErros] = useState({
        cpf: {
            valido: true,
            texto: ''
        }
    });

    return (
        <form onSubmit={(event) => {

            event.preventDefault();

            aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
        }}>

            <TextField
                value={nome}
                onChange={(event) => {

                    // let tempNome = event.target.value;
                    // if (tempNome.length >= 3) {

                    //     tempNome = tempNome.substring(0, 3);
                    // }

                    setNome(event.target.value);
                }} margin='normal' id="nome" label="Nome" variant="outlined" type='text' fullWidth />

            <TextField value={sobrenome}
                onChange={(event) => {

                    setSobrenome(event.target.value);
                }} margin='normal' id="sobrenome" label="Sobrenome" variant="outlined" type='text' fullWidth />

            <TextField
                value={cpf}
                onChange={(event) => { setCPF(event.target.value) }}
                margin='normal'
                id="cpf"
                label="CPF"
                variant="outlined"
                type='text'
                fullWidth
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onBlur={(event) => {

                    const ehValido = validarCPF(event.target.value);
                    console.log(event.target.value);
                    console.log(ehValido);
                    setErros({ cpf: ehValido });
                }} />

            <FormControlLabel
                control={
                    <Switch
                        checked={promocoes}
                        name="Promoções"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        onChange={
                            (event) => {

                                setPromocoes(event.target.checked)
                            }
                        }
                    />
                }
                label="Promoções"
            />

            <FormControlLabel
                control={
                    <Switch
                        checked={novidades}
                        name="Novidades"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        onChange={(event) => { setNovidades(event.target.checked) }}
                    />
                }
                label="Novidades"
            />

            <Button color='primary' variant='contained' type='submit'>Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;