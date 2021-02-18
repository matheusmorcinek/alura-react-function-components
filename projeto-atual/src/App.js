import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

//class component
class App extends Component {

  render() {
    return (
      <Container component='article' maxWidth="sm">

        <Typography variant='h3' align='center' component='h1' >Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {

  console.log(dados);
}

// function App() {
//   return (
//     <h1>Formulário de Cadastro</h1>
//   );
// }

export default App;
