import { Col, Container, Image, Row } from 'react-bootstrap';
import TypeWriter from 'typewriter-effect';
import { AiFillFileText, AiOutlineFileMarkdown } from 'react-icons/ai';
import { jobTitle } from '../store';

const Home = () => (
  <Container>
    <Row className="g-2">
      <Col md={4} xs={12} style={{ marginTop: '10%' }}>
        <Image
          src="/assets/hyunwoo.jpg"
          rounded
          fluid
          alt="hyuwnoo"
          className="home-picture"
        />
      </Col>
      <Col md={8} xs={12} style={{ marginTop: '10%' }}>
        <h1>
          Hi! I'm <b className="home-name">Hyunwoo Moon</b> &&
        </h1>
        <br />
        <b className="home-name">
          <TypeWriter
            options={{
              strings: jobTitle,
              autoStart: true,
              loop: true,
              deleteSpeed: 80,
            }}
          />
        </b>
        <Row style={{ margin: '10%', marginLeft: '25%', width: '60%' }}>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: '10%' }}
          >
            <Col>
              <a
                href="/assets/Resume_File.pdf"
                target="_blank"
                className="h1"
                style={{ marginRight: '20px' }}
                data-toggle="tooltip"
                data-placement="top"
                title="Resume"
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
              >
                <AiOutlineFileMarkdown style={{ fontSize: '1.7em' }} />
              </a>
            </Col>
          </Row>
        </Row>
        <Row className="justify-content-md-center">
          <Image src="/assets/coding-allday.gif" fluid style={{ width: 600 }} />
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Home;
