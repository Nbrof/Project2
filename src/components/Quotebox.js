import React from 'react'
import { Jumbotron, Container } from 'reactstrap';


const Quotebox = (props) => {


    return (
        <div className="Quotebox">
            <Jumbotron fluid id="test">
                <Container fluid>
                    <p className="lead">XKDC was created in 2005 by American author Randall Munroe. Munroe is a graduate of Christopher Newport University with a job history as a programmer and roboticist for Nasa. XKDC has been a source of philosophical pondering, existential dread, and all around entertainment for many people, myself included. This WebApp serves as a simple way to check on the most up to date comic along with binge reading some of its many great moments in the past.</p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Quotebox