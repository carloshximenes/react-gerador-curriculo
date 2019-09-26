import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FormInputText from '../../FormInputText/FormInputText';

export default function Formacao(props) {
    return (<>
        <Form.Row>
            <Col><FormInputText placeholder='ex: Superior completo, Graduação em hotelaria' index={props.index} name='curso' type='text' value={props.curso} changed={props.changed}>{(props.index === 0) ? 'Curso' : null}</FormInputText></Col>
            <Col><FormInputText placeholder='ex: Colégio Laços, Faculdade Santa Maria' index={props.index} name='instituicao' type='text' value={props.instituicao} changed={props.changed}>{(props.index === 0) ? 'Instituição' : null}</FormInputText></Col>
            <Col className='col-3'><FormInputText placeholder='ex: 2012' index={props.index} name='anoConclusao' type='number' value={props.anoConclusao} changed={props.changed}>{(props.index === 0) ? 'Conclusão' : null}</FormInputText></Col>
        </Form.Row>
    </>);
}