import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FormInputText from '../../FormInputText/FormInputText';
import Col from 'react-bootstrap/Col';
import RemoveOption from '../../RemoveOption/RemoveOption';

const style = {
    paddingLeft: '10px',
    paddingRight: '10px',
    backgroundColor: 'rgba(0,0,0,.03)',
    marginBottom: '10px'
};

export default function Experiencia(props) {
    return (<>
        <Card style={style}>
            <RemoveOption index={props.index} deleted = {props.deleted}/>
            <Form.Row style={{marginTop: '-15px'}}>
                <Col><FormInputText placeholder='ex: McDonalds, Nestlé, Fazenda do seu João' name='empresa' type='text' value={props.empresa} index={props.index} changed={props.changed}>
                    Empresa
                </FormInputText></Col>
                <Col><FormInputText placeholder='ex: Servente, Auxiliar de enfermagem, Diarista' name='cargo' type='text' value={props.cargo} index={props.index} changed={props.changed}>
                    Cargo
                </FormInputText></Col>
            </Form.Row>
            <Form.Row>
                <Col><FormInputText placeholder='ex: 2012' name='anoEntrada' type='number' value={props.anoEntrada} index={props.index} changed={props.changed}>Ano Entrada</FormInputText></Col>
                <Col><FormInputText placeholder='ex: 2015' name='anoSaida' type='number' value={props.anoSaida} index={props.index} changed={props.changed}>Ano Saída</FormInputText></Col>
            </Form.Row>
            <FormInputText placeholder='ex: Atendimento ao público, Análise de documentos fiscais' name='atividades' type='text' value={props.atividades} index={props.index} changed={props.changed}>Principais Atividades</FormInputText>
        </Card>
    </>);
}