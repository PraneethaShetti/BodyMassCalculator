(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(8),i=a.n(s),c=(a(14),a(1)),r=a(2),o=a(4),u=a(3),h=a(5),d=a(6),m=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={feet:"",inch:"",pound:"",standardResult:"",displayResult:"none"},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleTextChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"calculateBMI",value:function(){var e=.4536*parseFloat(this.state.pound),t=.3048*parseFloat(this.state.feet),a=.0254*parseFloat(this.state.inch),n=e/Math.pow(t+a,2);isNaN(n)?this.setState({standardResult:"Please enter numeric values.",displayResult:"block"}):this.setState({standardResult:n,displayResult:"block"})}},{key:"resetResult",value:function(){this.setState({feet:"",inch:"",pound:"",standardResult:"",displayResult:"none"})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"Standard"},l.a.createElement("div",{className:"heightBlock"},l.a.createElement("label",null,"Please enter your Height"),l.a.createElement("input",{type:"text",className:"feet",name:"feet",placeholder:"feet",value:this.state.feet,onChange:this.handleTextChange.bind(this)}),l.a.createElement("input",{type:"text",className:"inch",name:"inch",placeholder:"inch",value:this.state.inch,onChange:this.handleTextChange.bind(this)})),l.a.createElement("div",{className:"weightBlock"},l.a.createElement("label",null,"Please enter your Weight"),l.a.createElement("input",{type:"text",className:"pound",name:"pound",placeholder:"pound",value:this.state.pound,onChange:this.handleTextChange.bind(this)})),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-primary",onClick:this.calculateBMI.bind(this)},"Submit"),l.a.createElement("button",{className:"btn btn-primary",onClick:this.resetResult.bind(this)},"Reset")),l.a.createElement("div",null,l.a.createElement("label",{className:"BMIvalue",style:{display:this.state.displayResult}},"Result:"),l.a.createElement("label",{className:"result",style:{display:this.state.displayResult}},this.state.standardResult))))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={centi:"",kilo:"",meticResult:"",displayResult:"none"},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleTextChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"calculateBMI",value:function(){var e=parseFloat(this.state.kilo),t=.01*parseFloat(this.state.centi),a=e/Math.pow(t,2);isNaN(a)?this.setState({meticResult:"Please enter numeric values.",displayResult:"block"}):this.setState({meticResult:a,displayResult:"block"})}},{key:"resetResult",value:function(){this.setState({centi:"",kilo:"",meticResult:"",displayResult:"none"})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"Metric"},l.a.createElement("div",{className:"heightBlock"},l.a.createElement("label",null,"Please enter your Height"),l.a.createElement("input",{type:"text",className:"centi",name:"centi",placeholder:"centi",value:this.state.centi,onChange:this.handleTextChange.bind(this)})),l.a.createElement("div",{className:"weightBlock"},l.a.createElement("label",null,"Please enter your Weight"),l.a.createElement("input",{type:"text",className:"kilo",name:"kilo",placeholder:"kilo",value:this.state.kilo,onChange:this.handleTextChange.bind(this)})),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-primary",onClick:this.calculateBMI.bind(this)},"Submit"),l.a.createElement("button",{className:"btn btn-primary",onClick:this.resetResult.bind(this)},"Reset")),l.a.createElement("div",null,l.a.createElement("label",{className:"BMIvalue",style:{display:this.state.displayResult}},"Result:"),l.a.createElement("label",{className:"result",style:{display:this.state.displayResult}},this.state.meticResult))))}}]),t}(n.Component),p=(a(16),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={standardboard:"block",metricboard:"none"},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"showstandardboard",value:function(){this.setState({standardboard:"block",metricboard:"none"})}},{key:"showmetricboard",value:function(){this.setState({standardboard:"none",metricboard:"block"})}},{key:"showBox",value:function(){return"block"===this.state.standardboard?l.a.createElement(m,null):l.a.createElement(b,null)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("button",{onClick:this.showstandardboard.bind(this)},"Standard board"),l.a.createElement("button",{onClick:this.showmetricboard.bind(this)},"Metric board"),this.showBox())}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.0e453ee1.chunk.js.map