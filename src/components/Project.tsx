import { Card, Col, Image, Row } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Project = ({
  project,
}: {
  project: {
    id: number;
    title: string;
    link: string;
    description: string;
    skills: string;
  };
}) => {
  return (
    <Col>
      <Card
        className="g-5 project-card"
        style={{ height: 300, textDecoration: 'none' }}
        as={Link}
        to={project.link}
        target="_blank"
      >
        <Card.Header>
          <Row className="ms-auto">
            <Col>
              <Image src="/assets/folder.svg" style={{ width: '50px' }} />
            </Col>
            <Col>
              <AiFillGithub style={{ fontSize: '3em' }} />
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
        </Card.Body>
        <Card.Footer>{project.skills}</Card.Footer>
      </Card>
    </Col>
  );
};

export default Project;
