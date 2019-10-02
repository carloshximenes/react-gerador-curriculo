import React from 'react';
import Form from 'react-bootstrap/Form';
import InputMask from 'react-input-mask';

export default function FormInputText(props) {
    const classes =['form-control'];
    return (<>
        <Form.Group>
            {(props.children !== null) ? <Form.Label>{props.children}</Form.Label> : null}
            <InputMask className={classes} mask={props.mask} name={props.name} type={props.type}
                value={props.value} onChange={props.changed} placeholder={props.placeholder} data-index={props.index}>
            </InputMask>
        </Form.Group>
    </>);
}