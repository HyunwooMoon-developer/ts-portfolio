import { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFileText,
  AiOutlineFileMarkdown,
} from 'react-icons/ai';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState<{
    name: string;
    reply_to: string;
    message: string;
  }>({
    name: '',
    reply_to: '',
    message: '',
  });
  const [sent, setSent] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        contactInfo,
        import.meta.env.VITE_EMAILER_PUBLIC_KEY
      )
      .then(() => {
        setContactInfo({
          name: '',
          reply_to: '',
          message: '',
        });
        setSent(true);
      });
  };

  useEffect(() => {
    if (sent) {
      setTimeout(() => {
        setSent(false);
      }, 5000);
    }
  }, [sent]);

  return (
    <Container>
      <h1 className="title">CONTACT</h1>
      {sent ? (
        <div className="email-sent">Thank you! :)</div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="contact_name" className="mb-3 contact-form">
            <Form.Label>
              <h2>
                <b>Name</b>
              </h2>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Type your name"
              onChange={handleChange}
              value={contactInfo.name}
              name="name"
              required
            />
          </Form.Group>
          <Form.Group controlId="contact_email" className="mb-3 contact-form">
            <Form.Label>
              <h2>
                <b>Email</b>
              </h2>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Type your email"
              name="reply_to"
              onChange={handleChange}
              value={contactInfo.reply_to}
              required
            />
          </Form.Group>
          <Form.Group controlId="contact_message" className="mb-3 contact-form">
            <Form.Label>
              <h2>
                <b>Message</b>
              </h2>
            </Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Send message to get started"
              rows={5}
              onChange={handleChange}
              value={contactInfo.message}
              required
            />
          </Form.Group>
          <Button
            type="submit"
            color="primary"
            className="mb-3 contact-form contact-button"
            style={{ padding: 20 }}
          >
            Submit
          </Button>
        </Form>
      )}
      <Row className="justify-content-md-center">
        <Col md="6" xs="12">
          <a
            href="/assets/Resume_File.pdf"
            target="_blank"
            className="h1"
            style={{ marginRight: '20px' }}
            data-toggle="tooltip"
            data-placement="top"
            title="Resume"
            download
          >
            <AiFillFileText style={{ fontSize: '1.7em' }} />
          </a>
          <a
            href="/assets/Cover_Letter.pdf"
            target="_blank"
            className="h1"
            style={{ marginRight: '20px' }}
            data-toggle="tooltip"
            data-placement="top"
            title="Cover Letter"
            download
          >
            <AiOutlineFileMarkdown style={{ fontSize: '1.7em' }} />
          </a>
          <a
            href="https://github.com/HyunwooMoon-developer"
            target="_blank"
            className="h1"
            style={{ marginRight: '20px' }}
            data-toggle="tooltip"
            data-placement="top"
            title="Github"
          >
            <AiFillGithub style={{ fontSize: '1.7em' }} />
          </a>{' '}
          <a
            href="https://www.linkedin.com/in/hyunwoomoon/"
            target="_blank"
            className="h1"
            data-toggle="tooltip"
            data-placement="top"
            title="LinkedIn"
          >
            <AiFillLinkedin style={{ fontSize: '1.7em' }} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
