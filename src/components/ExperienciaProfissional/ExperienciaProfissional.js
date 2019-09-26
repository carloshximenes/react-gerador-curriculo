import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Experiencia from './Experiencia/Experiencia';

export default function ExperienciaProfissional(props) {

    const style = { marginBottom: '1%' };

    return (<>
        <Container style={style}>
            <Card>
                <Card.Header>{props.children}</Card.Header>
                <Card.Body>
                    {props.data.map((experiencia, index) => {
                        return (
                            <Experiencia data={experiencia.data} key={index} index={index} changed={props.changed} />
                        )
                    })}
                </Card.Body>
            </Card>
        </Container>
    </>);
}