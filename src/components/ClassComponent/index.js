import React, { Component } from 'react';
import { createRef } from 'react/cjs/react.production.min';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["apple", "orange", "pears"]
        }
        this.inputRef = createRef();
        console.log('Child -> Constructor ');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Child -> getDerivedStateFromProps ');
        return null;
    }

    componentDidMount = () => {
        console.log('Child -> Component did mount ');
    }

    shouldComponentUpdate = () => {
        console.log('Child -> Should Component Update ');
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log('Child -> getSnapshotBeforeUpdate');
    }

    componentDidUpdate = () => {
        console.log('Child -> componentDidUpdate');
      }

    addFruete = (e) => {
        let { list } = this.state;
        if (e == "start")
            list.push("Guava");
        else
            list = ["Guava", ...list];
        this.setState({
            list
        })
    }

    onchange = () => {
        console.log(this.inputRef.current.value)
    }
    
    render() {
        console.log('Child -> Render ');
        const { list } = this.state;
        return (
            <div>
                <p style={{background: '#a45', padding: '10px', color: 'white'}}>I am from {this.props.componenttype} Component</p>
                <ul style={{ background: "#a3a"}}>
                    {
                        list.map(((el, i) => {
                            return <li key={i} style={{ color: "white", background: "#e3a"}}>{el}</li>
                        }))
                    }
                </ul>
                <button onClick={() => { this.addFruete('start') }}>Add Fruite</button>
                <button onClick={() => { this.addFruete('end') }}>Add Fruite from starting</button>
                <input type="text" defaultValue="bar" ref={this.inputRef} onChange={(e) => { this.onchange() }} />
            </div>
        );
    }
}

export default ClassComponent;
