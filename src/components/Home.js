import React, { Component } from "react";
import {getusers} from './Firebaseconfig.js'
import {saveuser} from './Firebaseconfig.js'
const firebase = require('firebase/app');
require('firebase/firestore') ;
import '../styles/App.css';


class Home extends Component {

	constructor() {
        super();
        this.state = {
            apellido: '',
            name: '' ,
            edad : '',
            usuarios: ''          
        }
            this.handleChange = this.handleChange.bind(this); 
            this.handleSubmit = this.handleSubmit.bind(this);      
    }


    componentWillMount(){
    }

    componentDidMount(){

    }

	handleChange(e){
        this.setState({
            [e.target.name]: e.target.value 
        });
    }
    

	handleSubmit(e) {
        e.preventDefault();
        saveuser(this.state.name , this.state.apellido , this.state.edad)
    }



    render() {
        return (
            <div className="container">
                <h1>Home</h1>
                <label>Nombre </label>
                <br/>
  				<input type="text" className="form-control col-lg-2 center" onChange={this.handleChange} name="name" value={this.state.name}/>
  				<br/>
                <label>Apellido </label>
                <br/>
                <input type="text" className="form-control col-lg-2" onChange={this.handleChange} name="apellido" value={this.state.apellido}/>
                <br/>
                <label>Edad </label>
                <br/>
                <input type="number" className="form-control col-lg-2" onChange={this.handleChange} name="edad" value={this.state.edad}/>
                <br/>
  				<label className="col-lg-2"> {this.state.name} </label>
                <br/>
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
             


            </div>
        );
    }
}

export default Home;