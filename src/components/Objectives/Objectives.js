import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import FormInputText from '../FormInputText/FormInputText';

export default function Objectives(props) {

    const style = { marginBottom: '1%' };

    return (<>
        <Container style={style}>
            <Card>
                <Card.Header>{props.children}</Card.Header>
                <Card.Body>
                    <FormInputText name='objetivo' type='text' value={props.data.objetivo} changed={props.changed}
                        placeholder='ex: Assistente fiscal, Garçom, Engenheiro agrícola, Enfermeira'>
                        Objetivo
                        </FormInputText>
                </Card.Body>
            </Card>
        </Container>
    </>);
}