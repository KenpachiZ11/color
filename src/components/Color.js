import React, { Component } from 'react'
import Color2 from './Color2'


export default class Color extends Component {
    constructor(props){
        super(props);
        this.state = {
            // colorHolder : '',
        };
    }
        
        reload = () => {
            window.location.reload()
        }

        // componentDidMount() {
        //     this.changeColorFunction();
        // }
    
        
        // changeColorFunction=()=> {
            // let r = Math.floor(Math.random() * 256),
            //     g = Math.floor(Math.random() * 256),
            //     b = Math.floor(Math.random() * 256),
            //     colorCode = `rgb(${r}, ${g}, ${b})`
            //     console.log(colorCode);
            
            // this.setState({
            //     colorHolder: colorCode
            // })
        // }
        
    render() {
        let r = Math.floor(Math.random() * 256),
            g = Math.floor(Math.random() * 256),
            b = Math.floor(Math.random() * 256)
            console.log(`${r}, ${g}, ${b}`);
            console.log(`${b}, ${r}, ${g}`);
            console.log(`${g}, ${b}, ${r}`);


        // const card = {
        //     width: 300,
        //     height: 150,
        //     border: '1px solid black',
        //     borderRadius: 10,
        //     padding: 16,
        //     margin: '100px auto',
        //     background: this.state.colorHolder,
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center'
        // }
        // const btn = {
        //     padding: 10,
        //     background: 'yellow'
        // }

        return (
            <div>
                {/* <div style = {card}>
                    <button onClick = {this.changeColorFunction} style = {btn}>Press me!</button>
                </div> */}
                    <button onClick = {this.reload} style = {{
                        background: 'yellow',
                        padding: 10,
                        marginTop: 40,
                        marginLeft: 470
                    }}>Click me!</button>
        
                <Color2 color = {`rgb(${r}, ${g}, ${b})`}/>
                <Color2 color = {`rgb(${b}, ${r}, ${g})`}/>
                <Color2 color = {`rgb(${g}, ${b}, ${r})`}/>
            </div>
        )
    }
}



