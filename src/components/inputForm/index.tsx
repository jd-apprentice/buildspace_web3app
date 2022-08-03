import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Waifu } from "../../utils/index";
import { ChangeEvent, useState } from "react";
import { FormControl } from "react-bootstrap";

export const InputForm = ({ wallet }) => {
  const [form, setForm] = useState<any>();
  const handleSubmit = () => Waifu(form);

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setForm(URL.createObjectURL(event.target.files[0]));
    }
  };

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
          <FormControl
            type="file"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onImageChange(e)
            }
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
