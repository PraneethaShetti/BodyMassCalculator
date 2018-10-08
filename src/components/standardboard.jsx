import React, { Component } from 'react';

class Standardboard extends Component {
    constructor(props){
        super(props);
        this.state={
            feet:'',
            inch:'',
            pound:'',
            standardResult: '',
            displayResult:'none'
        }
    }    

    handleTextChange(evt){
        this.setState({[evt.target.name]:evt.target.value})
    }
    calculateBMI(){
        var weight = parseFloat(this.state.pound)*0.4536;
        var hfeet = parseFloat(this.state.feet)*0.3048;
        var hinch = parseFloat(this.state.inch)*0.0254;
        var height = Math.pow((hfeet+hinch), 2);
        var standardBMI=weight/height;
        if(isNaN(standardBMI)){
            this.setState({standardResult: "Please enter numeric values.", displayResult:'block'})    
        }else{
        this.setState({standardResult: standardBMI, displayResult:'block'})
        }
    }

    resetResult(){
        this.setState({
            feet:'',
            inch:'',
            pound:'',
            standardResult: '',
            displayResult:'none'
        })
    }

    render() {
        return (
            <div>
                <div className="Standard">
                    <div className="heightBlock">
                        <label>Please enter your Height</label>
                        <input type="text" className="feet" name="feet" placeholder="feet" value={this.state.feet} onChange={this.handleTextChange.bind(this)}></input>
                        <input type="text" className="inch" name="inch" placeholder="inch" value={this.state.inch} onChange={this.handleTextChange.bind(this)}></input>
                    </div>
                    <div className="weightBlock">
                        <label>Please enter your Weight</label>
                        <input type="text" className="pound" name="pound" placeholder="pound" value={this.state.pound} onChange={this.handleTextChange.bind(this)}></input>
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={this.calculateBMI.bind(this)}>Submit</button>
                        <button className="btn btn-primary" onClick={this.resetResult.bind(this)}>Reset</button>
                    </div>
                    <div>
                        <label className="BMIvalue"  style={{display:this.state.displayResult}}>Result:</label>
                        <label className="result" style={{display:this.state.displayResult}}>{this.state.standardResult}</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Standardboard;