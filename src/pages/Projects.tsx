import { Container, Row } from 'react-bootstrap';
import Project from '../components/Project';
import { projects } from '../store';

const Projects = () => {
  return (
    <Container className="main">
      <h1 className="title">PROJECTS</h1>
      <Row xs={1} sm={1} md={2} className="g-4">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
