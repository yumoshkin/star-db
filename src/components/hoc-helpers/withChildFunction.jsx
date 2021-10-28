import React from 'react';

// eslint-disable-next-line react/display-name
const withChildFunction = (fn) => (Wrapped) => (props) => <Wrapped {...props}>{fn}</Wrapped>;

export default withChildFunction;
