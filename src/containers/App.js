import React, { useState } from 'react';
import './App.css';
import Header from '../components/Header/Header';
import PersonalInfos from '../components/PersonalInfos/PersonalInfos';
import Objectives from '../components/Objectives/Objectives';
import FormacaoAcademica from '../components/FormacaoAcademica/FormacaoAcademica';
import ExperienciaProfissional from '../components/ExperienciaProfissional/ExperienciaProfissional';
import Qualificacoes from '../components/Qualificacoes/Qualificacoes';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GerarCurriculo from '../components/GerarCurriculo/GerarCurriculo';

const title = 'Gerador de Curriculo Online';
const theme = 'dark';
const styleAddNewValues = { alignItems: 'center' };
const classAddNewValues = ['d-flex justify-content-between'];
const classButton = ['btn-secondary'];

function App() {
  const [dadosCurriculo, setDadosCurriculo] = useState({
    nome: '',
    contato: '',
    email: '',
    nacionalidade: '',
    estadoCivil: '',
    idade: '',
    endereco: '',
    cidade: '',
    estado: '',
    objetivo: '',
    formacao: [{ id: 0, curso: '', instituicao: '', anoConclusao: '' }],
    experiencia: [{ id: 0, empresa: '', cargo: '', anoEntrada: '', anoSaida: '', atividades: '' }],
    qualificacao: [{ id: 0, qualificacao: '' }]
  });

  const addFormacao = () => {
    let actualFormacao = [...dadosCurriculo.formacao];
    const lastValue = actualFormacao.length;
    const newLine = { id: lastValue, curso: '', instituicao: '', anoConclusao: '' };
    actualFormacao.push(newLine);
    setDadosCurriculo(prevState => ({ ...prevState, formacao: actualFormacao }));
  };

  const addQualificacao = () => {
    let actualQualificacao = [...dadosCurriculo.qualificacao];
    const lastValue = actualQualificacao.length;
    const newLine = { id: lastValue, qualificacao: '' };
    actualQualificacao.push(newLine);
    setDadosCurriculo(prevState => ({ ...prevState, qualificacao: actualQualificacao }));
  };

  const addExperiencia = () => {
    let actualExperiencia = [...dadosCurriculo.experiencia];
    const lastValue = actualExperiencia.length;
    const newLine = { id: lastValue, empresa: '', cargo: '', anoEntrada: '', anoSaida: '', atividades: '' };
    actualExperiencia.push(newLine);
    setDadosCurriculo(prevState => ({ ...prevState, experiencia: actualExperiencia }));
  };

  const handleChangeExperienciaProfissional = (event) => {
    const { name, value } = event.target;
    const index = event.target.dataset.index;
    let newExperienciaProfissional = [...dadosCurriculo.experiencia];
    newExperienciaProfissional[index] = { ...newExperienciaProfissional[index], [name]: value };
    setDadosCurriculo(prevState => ({ ...prevState, experiencia: newExperienciaProfissional }));
  }

  const handleChangeQualificacoes = (event) => {
    const { name, value } = event.target;
    const index = event.target.dataset.index;
    let newQualificacoes = [...dadosCurriculo.qualificacao];
    newQualificacoes[index] = { ...newQualificacoes[index], [name]: value };
    setDadosCurriculo(prevState => ({ ...prevState, qualificacao: newQualificacoes }));
  }

  const handleChangeFormacaoAcademica = (event) => {
    const { name, value } = event.target;
    const index = event.target.dataset.index;
    let newFormacaoAcademica = [...dadosCurriculo.formacao];
    newFormacaoAcademica[index] = { ...newFormacaoAcademica[index], [name]: value };
    setDadosCurriculo(prevState => ({ ...prevState, formacao: newFormacaoAcademica }));
  }

  const handleChangeDadosCurriculo = (event) => {
    const { name, value } = event.target;
    setDadosCurriculo(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="App">
      <Header theme={theme}>{title}</Header>
      <Form>
        <PersonalInfos data={dadosCurriculo} changed={(event) => handleChangeDadosCurriculo(event)}>
          Dados Pessoais
      </PersonalInfos>
        <Objectives data={dadosCurriculo} changed={(event) => handleChangeDadosCurriculo(event)}>
          Objetivo
      </Objectives>
        <FormacaoAcademica data={dadosCurriculo.formacao} changed={(event) => handleChangeFormacaoAcademica(event)}>
          <div className={classAddNewValues} style={styleAddNewValues}>
            Formação Acadêmica
            <Button className={classButton} onClick={addFormacao}>+</Button>
          </div>
        </FormacaoAcademica>
        <ExperienciaProfissional data={dadosCurriculo.experiencia} changed={(event) => handleChangeExperienciaProfissional(event)}>
          <div className={classAddNewValues} style={styleAddNewValues}>
            Experiência Profissional
            <Button className={classButton} onClick={addExperiencia}>+</Button>
          </div>
        </ExperienciaProfissional>
        <Qualificacoes data={dadosCurriculo.qualificacao} changed={(event) => handleChangeQualificacoes(event)}>
          <div className={classAddNewValues} style={styleAddNewValues}>
            Qualificações e Atividades Complementares
            <Button className={classButton} onClick={addQualificacao}>+</Button>
          </div>
        </Qualificacoes>
        <GerarCurriculo data={dadosCurriculo} />
      </Form>
    </div >
  );
}

export default App;
