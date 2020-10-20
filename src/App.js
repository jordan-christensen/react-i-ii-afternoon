import React, {Component} from 'react';
import './App.css';
import Home from "./components/Home"
import Roster from "./components/Roster"
import Buttons from "./components/Buttons"
import data from "./data"

class App extends Component{
  constructor(){
    super();
    this.state = {
      index: 0,
      data: data
    }
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  nextPage(){
    if(this.state.index < 24) {
    this.setState({
      index: this.state.index + 1
    })
    }
    if(this.state.index + 1 === 25){
      this.setState({
        index: 0
      })
    }
  }

  prevPage(){
    if(this.state.index >= 0){
    this.setState({
      index: this.state.index - 1
    })
    }
    if(this.state.index === 0){
      this.setState({
        index: 24
      })
    }
  }


  render(){
    return(
      <div className="App">
        <header className="Header">
          <Home className="Home" />
        </header>
        <main className="Main">
          <div className="container1">
            <Roster index={this.state.index} data={this.state.data} />
          </div>
          <div className="container2">
            <Buttons 
              className="buttons"
              next={this.nextPage}
              previous={this.prevPage}/>
          </div>
        </main>
      </div>
    )
  }

}

export default App;
