import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Wave from "../../components/wave/Wave.js";
import WalletIcon from "../icon/wallet";
import MessageIcon from "../icon/message";
import { useState } from "react";

const InputForm = (props) => {
  const [form, setForm] = useState(" ");
  const handleInput = (e) => setForm(e.target.value);
  const handleSubmit = () => Wave(form);

  return (
    <Form>
      <Form.Group as={Row} className="my-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          <WalletIcon /> Wallet
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={props.wallet} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
         <MessageIcon /> Send
        </Form.Label>
        <Col sm="10">
          <Form.Control
            onChange={handleInput}
            type="text"
            placeholder="Enter your message"
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

export default InputForm;
