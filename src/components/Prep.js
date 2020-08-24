import React from 'react'
import Editor from './Editor'
import { Col, Row, Container } from "../components/Grid";
import NavCard from './NavCard'

export default function Prep() {
    return (
      <Container fluid>
          <Row>
              <Col size="md-4">
                <NavCard />
              </Col>
              <Col size="md-8">
                <Editor />
            </Col>
          </Row>
          {/* <Row>
              <Col size="md-12">
                <Editor />
            </Col>
          </Row> */}
      </Container>
    )
  }
  