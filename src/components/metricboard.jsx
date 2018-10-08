import React, { Component } from 'react';

class Metricboard extends Component {
    constructor(props){
        super(props);
        this.state={
            centi: '',
            kilo:'',
            meticResult: '',
            displayResult:'none'
        }
    }    

    handleTextChange(evt){
        this.setState({[evt.target.name]:evt.target.value})
    }
    calculateBMI(){
        var weight = parseFloat(this.state.kilo);
        var hcenti = parseFloat(this.state.centi)*0.01;
        var height = Math.pow((hcenti), 2);
        var metricBMI=weight/height;
        if(isNaN(metricBMI)){
            this.setState({meticResult: "Please enter numeric values.", displayResult:'block'})    
        }else{
        this.setState({meticResult: metricBMI, displayResult:'block'})
        }
    }

    resetResult(){
        this.setState({
            centi: '',
            kilo:'',
            meticResult: '',
            displayResult:'none'
        })
    }

    render() {
        return (
            <div>
                <div className="Metric">
                    <div className="heightBlock">
                        <label>Please enter your Height</label>
                        <input type="text" className="centi" name="centi" placeholder="centi" value={this.state.centi} onChange={this.handleTextChange.bind(this)}></input>
                    </div>
                    <div className="weightBlock">
                        <label>Please enter your Weight</label>
                        <input type="text" className="kilo" name="kilo" placeholder="kilo" value={this.state.kilo} onChange={this.handleTextChange.bind(this)}></input>
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={this.calculateBMI.bind(this)}>Submit</button>
                        <button className="btn btn-primary" onClick={this.resetResult.bind(this)}>Reset</button>
                    </div>
                    <div>
                        <label className="BMIvalue"  style={{display:this.state.displayResult}}>Result:</label>
                        <label className="result" style={{display:this.state.displayResult}}>{this.state.meticResult}</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Metricboard;