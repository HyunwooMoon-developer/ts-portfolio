import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { iconList } from '../store';

const About = () => (
  <Container>
    <Row className="g-2">
      <Col md={3} xs={12} style={{ marginTop: '15%' }}>
        <Row>
          <Image src="/assets/hyunwoo1.jpg" style={{ width: 500 }} />
        </Row>
        <Row>
          <Image
            src="/assets/certificate.jpg"
            style={{ marginTop: 20, width: 500 }}
          />
        </Row>
      </Col>
      <Col md={9} xs={12} style={{ marginTop: '6%' }}>
        <h2>
          About <b className="home-name">Hyunwoo Moon</b>
        </h2>
        <Card style={{ marginTop: 20, marginLeft: 20 }}>
          <Card.Body>
            <blockquote
              className="blockquote mb-0"
              style={{ textAlign: 'left' }}
            >
              <p>
                <span className="highlight">
                  "There is no end to learning!"
                </span>
              </p>
              <p>I always live with these words in my heart.</p>
              <p>
                I have always enjoyed doing new things and having experiences
                and loved learning. While programming, I come up with new ideas
                and take the initiative to solve problems.
              </p>
              <p>
                Currently, I work as a{' '}
                <span className="highlight">Web Developer</span>, and I am
                always studying and developing myself to grow more.
              </p>
              <p>
                <span className="highlight">
                  Always I will be more advanced than today!
                </span>
              </p>
            </blockquote>
          </Card.Body>
        </Card>
        <Row
          className="justify-content-center"
          style={{ marginTop: 20, marginLeft: 20 }}
        >
          {iconList.map((item) => (
            <Col
              xs={4}
              md={2}
              key={item.skill}
              className="tech-icons"
              data-toggle="tooltip"
              data-placement="top"
              title={item.skill}
            >
              {item.icon}
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  </Container>
);

export default About;
