import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import Navigation from './Navigation';
import Graphs from './Graphs';
import CustomEditor from '@components/CodeEditor/CodeEditor';
import "@styles/App.scss";

const App = () => 
{
	return (
		<Container fluid className="px-0">
			<Navigation />
			
			<Row className="vh-100">
			<Col className="p-0"> <CustomEditor/> </Col>
			<Col className="p-0"> <Graphs /> </Col>
			</Row>
		</Container>
	);
};
export default App;
