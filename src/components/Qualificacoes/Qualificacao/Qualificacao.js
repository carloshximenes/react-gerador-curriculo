import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FormInputText from '../../FormInputText/FormInputText';

export default function Qualificacao(props) {

    return (<>
        <Form.Row>
            <Col><FormInputText placeholder='ex: Curso de ingles, Curso de atendimento ao público' index={props.index} name='qualificacao' type='text' value={props.qualificacao} changed={props.changed}>{(props.index === 0) ? 'Qualificação ou Atividade Complementar' : null}</FormInputText></Col>
        </Form.Row>
    </>);
}