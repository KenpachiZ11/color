import React, { Component } from 'react'

export default class Color2 extends Component {

    render() {
        const owner = {
            display: 'flex',
            gap: 60,
            margin: '30px auto',
            width: 800,
            justifyContent: 'center',
            flexDirection: 'row'
        }
        const cards = {
            width: 150,
            height: 75,
            borderRadius: 5,
            padding: 8,
            background: this.props.color,
            border: '2px solid black'
        }

        return (
            
            <div style = {owner}>
                <div style = {cards}></div>
            </div>
        )
    }
}
