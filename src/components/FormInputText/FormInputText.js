import React from 'react';
import Form from 'react-bootstrap/Form';

export default function FormInputText(props) {
    return (<>
        <Form.Group>
            {(props.children !== null) ? <Form.Label>{props.children}</Form.Label> : null}
            <Form.Control data-index={props.index} name={props.name} type={props.type}
                value={props.value} onChange={props.changed} placeholder={props.placeholder} required />
        </Form.Group>
    </>);
}