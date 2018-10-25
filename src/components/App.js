import React, { Component } from "react";
import '../styles/App.css';
import Twitter from "./Twitter.js"
import { connect } from "react-redux";


const mapStateToProps = state => {
  return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};


class App extends Component {

	constructor(props) {
        super(props);
        this.state = {
            articles: this.props.articles ,
            apellido: '',
            name: '' ,
            edad : '',
            usuarios: ''               
        }
            this.handleChange = this.handleChange.bind(this); 
            this.handleSubmit = this.handleSubmit.bind(this);      
    }



componentWillReceiveProps(nextProps){
	console.log(nextProps);
        this.setState({
            articles: nextProps.articles 
        });        
}


	handleChange(e){
        this.setState({
            [e.target.name]: e.target.value 
        });
    }
    

	handleSubmit(e) {
        e.preventDefault();
        var  nombre = this.state.name ;
        var  id = this.state.edad ;
        this.props.addArticle({nombre , id});
    }


    render() {
        return (
            <div className="container">
                <h1>Home</h1>
                <label>Nombre </label>
                <br/>
  				<input type="text" className="form-control col-lg-2 center" onChange={ this.handleChange} name="name" value={this.state.name}/>
  				<br/>
                <label>Apellido </label>
                <br/>
                <input type="text" className="form-control col-lg-2" onChange={this.handleChange} name="apellido" value={this.state.apellido}/>
                <br/>
                <label>Edad </label>
                <br/>
                <input type="number" className="form-control col-lg-2" onChange={this.handleChange} name="edad" value={this.state.edad}/>
                <br/>
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                <br/>
               { this.state.articles.map(item =>{

               	return(
               		<div key={item.id}>
               		    <label className="col-lg-2"> Nombre:  {item.nombre} </label> 
               			<label className="col-lg-2"> Edad: {item.id} </label>
               		</div>
               		)
               })					
               }
  				

                <br/>            


            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);