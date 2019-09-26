import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FormInputText from '../../FormInputText/FormInputText';
import Col from 'react-bootstrap/Col';

export default function Experiencia(props) {

    const style = { padding: '10px',
                    backgroundColor: 'rgba(0,0,0,.03)',
                    marginBottom: '10px' };

    return (<>
        <Card style={style}>
            <FormInputText placeholder='ex: McDonalds, Nestlé, Fazendo do seu João' name='empresa' type='text' value={props.empresa} index={props.index} changed={props.changed}>Empresa</FormInputText>
            <Form.Row>
                <Col><FormInputText placeholder='ex: Servente, Auxiliar de enfermagem, Diarista' name='cargo' type='text' value={props.cargo} index={props.index} changed={props.changed}>Cargo</FormInputText></Col>
                <Col className="col-3"><FormInputText placeholder='ex: 2012' name='anoEntrada' type='number' value={props.anoEntrada} index={props.index} changed={props.changed}>Entrada</FormInputText></Col>
                <Col className="col-3"><FormInputText placeholder='ex: 2015' name='anoSaida' type='number' value={props.anoSaida} index={props.index} changed={props.changed}>Saída</FormInputText></Col>
            </Form.Row>
            <FormInputText placeholder='ex: Atendimento ao público, Análise de documentos fiscais' name='atividades' type='text' value={props.atividades} index={props.index} changed={props.changed}>Principais Atividades</FormInputText>
        </Card>
    </>);
}