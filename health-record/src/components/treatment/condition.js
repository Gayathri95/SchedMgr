import React, {Component} from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import {logo, head, head1, head2, para, col1, col2} from '../css/PHomeCSS'
import {Link} from 'react-router-dom'
class Condition extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = "#19709c"
    }

    render() {
        return (
            <div>
              <p id="title"></p>
              <hr>
              <p id="start"></p>
              <p id="end"></p>
              <hr>
              <p id="patient"</p>
              <p id="doctor"></p>
              <hr>
              <p id="treatment"></p>
              <hr>
              <p id="notes"></p>

            </div>

        )
    }
}

export default Condition;