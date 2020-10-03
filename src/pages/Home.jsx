import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import data_cards from '../data/data_cards.json';
import Navbar from '../components/Navbar';
import { Button } from 'react-bootstrap';
import '../styles.css'
import Card from '../components/Card';


export default class Home extends Component {

    constructor() {
        super();

        this.state = {
            data: data_cards
        }
    }

    render() {
        return (
            <>
                <Navbar />
                <Carousel data={this.props.data} />
                <br></br>
                <h2>Categorias</h2>
                <br/>
                <div className="contButtons container">
                    <Button style={{backgroundColor: "#E5FF6F", border: "none"}} className="mr-2">Superior</Button>{' '}
                    <Button style={{backgroundColor: "#A0FF6F", border: "none"}} className="mr-2">Inferior</Button>{' '}
                    <Button style={{backgroundColor: "#6FFFA7", border: "none"}} className="mr-2">Natación</Button>{' '}
                    <Button style={{backgroundColor: "#6FFFF5", border: "none"}} className="m-2">Zapatos</Button>{' '}
                </div>
                <Card/>
            </>
        )
    }
}