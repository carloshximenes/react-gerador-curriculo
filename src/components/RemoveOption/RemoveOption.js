import React from 'react';

const styleText = {
    fontSize: '12px',
    textAlign: 'right',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'blue',
    paddingTop: '5px',
    zIndex: '99'
}

const classes = ['pull-right', 'clickable'];

export default function RemoveOption(props) {
    return <><a className={classes} style={styleText} data-index={props.index} onClick={props.deleted}>Excluir</a></>;
}