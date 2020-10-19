import React, { Fragment } from 'react';
import ComponentF from './ComponentF';
import ComponentE from './ComponentE';

const ComponentC = () => {
    return (
        <Fragment>
            <ComponentF />
            <ComponentE />
        </Fragment>
    );
}

export default ComponentC;