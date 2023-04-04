import React from 'react';
import Button from 'react-bootstrap/Button';

function Welcome() {
  return (
    <div className="jumbotron">
      <h1>Images Gallery Alvaro</h1>
      <p>¿Pendiente de una paja?</p>
      <p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          ¿Quiere Saber Mas?
        </Button>
      </p>
    </div>
  );
}
export default Welcome;
