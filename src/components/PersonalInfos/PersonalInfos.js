import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FormInputText from '../FormInputText/FormInputText';

const style = { marginBottom: '1%' };

export default function PersonalInfos(props) {
    return (<>
        <Container style={style}>
            <Card>
                <Card.Header>{props.children}</Card.Header>
                <Card.Body>
                        <FormInputText placeholder='ex: Pedro Paulo de Lima Alves Junior' name='nome' type='text' value={props.data.nome} changed={props.changed}>Nome Completo</FormInputText>
                        <Form.Row>
                            <Col><FormInputText placeholder='ex: Brasileiro' name='nacionalidade' type='text' value={props.data.nacionalidade} changed={props.changed}>Nacionalidade</FormInputText></Col>
                            <Col><FormInputText placeholder='ex: Solteiro, Casado, Viúva' name='estadoCivil' type='text' value={props.data.estadoCivil} changed={props.changed}>Estado Civil</FormInputText></Col>
                            <Col><FormInputText placeholder='ex: 29' name='idade' type='number' value={props.data.idade} changed={props.changed}>Idade</FormInputText></Col>
                        </Form.Row>
                        <FormInputText placeholder='ex: Rua José Armano Furtado, número 45' name='endereco' type='text' value={props.data.endereco} changed={props.changed}>Endereço</FormInputText>
                        <Form.Row>
                            <Col><FormInputText placeholder='ex: Fortaleza' name='cidade' type='text' value={props.data.cidade} changed={props.changed}>Cidade</FormInputText></Col>
                            <Col><FormInputText placeholder='ex: Ceará' name='estado' type='text' value={props.data.estado} changed={props.changed}>Estado</FormInputText></Col>
                        </Form.Row>
                        <Form.Row>
                            <Col><FormInputText placeholder='ex: 85999996352 (DDD+Telefone)' name='contato' type='number' value={props.data.contato} changed={props.changed}>Telefone</FormInputText></Col>
                            <Col><FormInputText placeholder='ex: pedropaulo@email.com.br' name='email' type='email' value={props.data.email} changed={props.changed}>E-mail</FormInputText></Col>
                        </Form.Row>
                </Card.Body>
            </Card>
        </Container>
    </>);
}