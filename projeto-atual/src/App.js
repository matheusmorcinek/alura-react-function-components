import { Component, Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import Container from '@material-ui/core/Container';

//class component
class App extends Component {

  render() {
    return (
      <Container component='article' maxWidth="sm">

        <h1>Formulário de cadastro</h1>
        <FormularioCadastro />
      </Container>
    );
  }
}

// function App() {
//   return (
//     <h1>Formulário de Cadastro</h1>
//   );
// }

export default App;
