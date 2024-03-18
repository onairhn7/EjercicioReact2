import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const QuadraticFormulaForm = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [x1, setX1] = useState('');
  const [x2, setX2] = useState('');

  const handleCalculate = () => {
    if (!a || !b || !c) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, complete todos los campos.',
      });
      return;
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La ecuación no tiene soluciones reales.',
      });
      return;
    }

    const x1Value = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2Value = (-b - Math.sqrt(discriminant)) / (2 * a);

    setX1(x1Value);
    setX2(x2Value);
  };

  return (
    <div className="container mt-5">
      <h2>Calculadora de Fórmula Cuadrática</h2>
      <Form>
        <Form.Group>
          <Form.Label>Valor de a</Form.Label>
          <Form.Control
            type="number"
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Valor de b</Form.Label>
          <Form.Control
            type="number"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Valor de c</Form.Label>
          <Form.Control
            type="number"
            value={c}
            onChange={(e) => setC(parseFloat(e.target.value))}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleCalculate}>
          Calcular
        </Button>
      </Form>
      {x1 && x2 && (
        <div className="mt-3">
          <h4>Resultados:</h4>
          <p>x1 = {x1}</p>
          <p>x2 = {x2}</p>
        </div>
      )}
    </div>
  );
};

export default QuadraticFormulaForm;
