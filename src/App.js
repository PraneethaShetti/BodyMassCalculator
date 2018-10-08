import React, { Component } from 'react';
import Standardboard from './components/standardboard';
import Metricboard from './components/metricboard';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      standardboard: 'block',
      metricboard: 'none'
    }
  }
  showstandardboard(){
    this.setState({
      standardboard: 'block',
      metricboard: 'none'
    })
  }
  showmetricboard(){
    this.setState({
      standardboard: 'none',
      metricboard: 'block'
    })
  }

  showBox(){
    if(this.state.standardboard=== 'block'){
     return  <Standardboard />
    }else{
      return <Metricboard />
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.showstandardboard.bind(this)}>Standard board</button>
        <button onClick={this.showmetricboard.bind(this)}>Metric board</button>
        {this.showBox()}
      </div>
    );
  }
}

export default App;
