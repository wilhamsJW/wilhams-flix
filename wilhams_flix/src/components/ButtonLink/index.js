import React from 'react';

export default props =>
    <a href={props.href} className={props.className}>
        {props.children}
    </a>