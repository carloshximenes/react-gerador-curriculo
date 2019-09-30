import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FormInputText from '../../FormInputText/FormInputText';
import RemoveOption from '../../RemoveOption/RemoveOption';

export default function Formacao(props) {

    const style = {
        paddingLeft: '10px',
        paddingRight: '10px',
        backgroundColor: 'rgba(0,0,0,.03)',
        marginBottom: '10px'
    };

    return (<>
        <Card style={style}>
            <RemoveOption index={props.index} deleted={props.deleted} />
            <Form.Row style={{ marginTop: '-15px' }} >
                <Col><FormInputText placeholder='ex: Superior completo, Graduação em hotelaria' index={props.index} name='curso' type='text' value={props.curso} changed={props.changed}>Curso</FormInputText></Col>
            </Form.Row>
            <Form.Row>
                <Col><FormInputText placeholder='ex: Colégio Laços, Faculdade Santa Maria' index={props.index} name='instituicao' type='text' value={props.instituicao} changed={props.changed}>Instituição</FormInputText></Col>
                <Col className='col-3'><FormInputText placeholder='ex: 2012' index={props.index} name='anoConclusao' type='number' value={props.anoConclusao} changed={props.changed}>Conclusão</FormInputText></Col>
            </Form.Row>
        </Card>
    </>);
}