import React from 'react'
import { Jumbotron, Container } from 'reactstrap';

const InfoBox = (props) => {


    return (
       
        <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">XKDC Generator</h1>
            <p className="lead">An Application that can grab your favorite XKDC Comic. All credit for these comics goes to Randall Munroe</p>
          </Container>
        </Jumbotron>
      </div>

    )
        
}
export default InfoBox