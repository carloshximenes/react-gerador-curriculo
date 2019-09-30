import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FormInputText from '../../FormInputText/FormInputText';
import RemoveOption from '../../RemoveOption/RemoveOption';

const style = {
    paddingLeft: '10px',
    paddingRight: '10px',
    backgroundColor: 'rgba(0,0,0,.03)',
    marginBottom: '10px'
};

export default function Qualificacao(props) {

    return (<>
        <Card style={style}>
            <RemoveOption index={props.index} deleted={props.deleted} />
            <Form.Row style={{ marginTop: '-15px' }}>
                <Col>
                    <FormInputText placeholder='ex: Curso de ingles, Curso de atendimento ao público' index={props.index} name='qualificacao' type='text' value={props.qualificacao} changed={props.changed}>
                        Qualificação ou Atividade Complementar
                    </FormInputText>
                </Col>
            </Form.Row>
        </Card>
    </>);
}