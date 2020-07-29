import React from "react"


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            display: "",
        }
        this.numClick = this.numClick.bind(this)
    }

    numClick(event) {
        const val = (event.target.value)

        this.setState(prevState => {
            return{
                display: `${prevState.display}${val}`
                }
            })
        }          

    oprtClick = (event) => {
        const arrDisplay = this.state.display.split(" ");
        const [num1, oprt, num2] = arrDisplay;
        
        if (num1 === ""){
            this.setState({display: ""})
        } else if (oprt === undefined || num2 === undefined){
            this.setState({display: num1 + " " + event.target.value + " "})
        } else if (oprt === "+") {
            const ans = Number(num1) + Number(num2)
            this.setState({display: `${ans} ${event.target.value} `})
        } else if (oprt === "-") {
            const ans = Number(num1) - Number(num2)
            this.setState({display: `${ans} ${event.target.value} `})
        } else if (oprt === "*") {
            const ans = Number(num1) * Number(num2)
            this.setState({display: `${ans} ${event.target.value} `})
        } else if (oprt === "/") {
            const ans = Number(num1) / Number(num2)
            this.setState({display: `${ans} ${event.target.value} `})
        } 
    } 

    clearClick = (event) => {
        this.setState(prevState => {
            return{
                display: ""
            }
        })
    }

    equalClick = () => {
        const arrayDisplay = this.state.display.split(" ");
        const [a, o, b] = arrayDisplay;
        
        if (b === "") {
            this.setState({display: `${a}`})
        } else if (o === "+") {
            const ans = Number(a) + Number(b)
            this.setState({display: `${ans}`})
        } else if (o === "-") {
            const ans = Number(a) - Number(b)
            this.setState({display: `${ans}`})
        } else if (o === "*") {
            const ans = Number(a) * Number(b)
            this.setState({display: `${ans}`})
        } else if (o === "/") {
            const ans = Number(a) / Number(b)
            this.setState({display: `${ans}`})
        }
    } 

    render() {
        console.log(this.state.display)
        return (
            <div className="calcGridContainer">
                <div className="calcDisplay">
                    <p>{this.state.display}</p>
                </div>
                <div className="buttons-grid">
                    <button onClick={this.numClick} value="7"> 7 </button>
                    <button onClick={this.numClick} value="8"> 8 </button>
                    <button onClick={this.numClick} value="9"> 9 </button>
                    <button onClick={this.oprtClick} value="/"> / </button>
                    <button onClick={this.numClick} value="4"> 4 </button>
                    <button onClick={this.numClick} value="5"> 5 </button>
                    <button onClick={this.numClick} value="6"> 6 </button>
                    <button onClick={this.oprtClick} value="*"> * </button>
                    <button onClick={this.numClick} value="1"> 1 </button>
                    <button onClick={this.numClick} value="2"> 2 </button>
                    <button onClick={this.numClick} value="3"> 3 </button>
                    <button onClick={this.oprtClick} value="-"> - </button>
                    <button onClick={this.numClick} value="."> . </button>
                    <button onClick={this.numClick} value="0"> 0 </button>
                    <button className="addBtn" onClick={this.oprtClick} value="+"> + </button>
                    <button className="clrBtn" onClick={this.clearClick} value="Clear"> Clear </button>
                    <button className="eqBtn" onClick={this.equalClick} value="="> = </button>
                </div>
            </div>
        )
    }
}

export default App