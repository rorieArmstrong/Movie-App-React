import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filmData: null
    };
  }
  
  componentDidMount() {
    this.filmApi();
  }
 

filmApi = () => {
  fetch("http://www.omdbapi.com/?i=tt3896198&apikey=c6cf6f22&t=Okja").then(
    response => response.json().then(
      result =>
      this.setState(
        {
          filmData: result
        }
      )
    )
    );
    }
  
    render() {
      const { filmData } = this.state;
      if (!filmData) {                                        
        return <div>Hold tight while movie are being fetched...</div>; 
      }  else {
        return (
        <div className="App">
          <header className="App-header">{this.state.filmData.Title} {this.state.filmData.imdbRating} {this.state.filmData.Year}</header>
          {/* <main className="App-body">{this.state.filmData.imdbRating} {this.state.filmData.Year}</main> */}
        </div>
        )
      }
  }

  // render() {
  // return (
  //   <div className="App">
  //     <{}>
      
  //   </div>
  // );
  }

export default App;
