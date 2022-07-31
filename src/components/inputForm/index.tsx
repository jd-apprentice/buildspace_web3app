import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Wave } from "../../utils/index";
import { SetStateAction, useState } from "react";

export const InputForm = ({ wallet }) => {
  const [form, setForm] = useState();
  const handleInput = (e?: { target: { value: SetStateAction<string> } }) =>
    //@ts-ignore
    setForm(e.target.value);
  const handleSubmit = () => Wave(form);

  return (
    <Form>
      <Form.Group as={Row} className="my-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          <i className="bi bi-wallet2">Wallet</i>
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={wallet} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          <i className="bi bi-send">Send</i>
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Enter your message"
            onChange={handleInput}
          />
        </Col>
        <Button
          onClick={handleSubmit}
          className="mt-4 w-25 d-flex justify-content-center mx-auto"
          variant="outline-primary"
        >
          Sumbit
        </Button>
      </Form.Group>
    </Form>
  );
};
