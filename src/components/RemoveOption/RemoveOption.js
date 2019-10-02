import React from 'react';

const styleText = {
    fontSize: '12px',
    textAlign: 'right',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'blue',
    paddingTop: '5px',
    zIndex: '99',
    width: '40px'
}

const classes = ['d-flex flex-row-reverse clickable'];

export default function RemoveOption({ deleted, index }) {
    return <div className={classes} ><span style={styleText} onClick={() => deleted(index)}>Excluir</span></div>;
}