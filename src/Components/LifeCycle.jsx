import React from "react";

export default class LifeCycle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        //eveerytime component is renderd, time is displayed
        this.timerId = setInterval(() => {
            //after every second update our time
            this.setState({ date: new Date() })
            this.setState(console.log("Component was mounted"))
        }, 1000);
    }

    componentDidUpdate() {
        this.timerId = setInterval(() => {
            this.setState(console.log('COMPONENT WAS UPDATED'))
        }, 1000);
    }

    componentWillUnmount() {
        this.timerId = clearInterval(() => {
            this.setState(console.log('COMPONENT UNMOUNTED'))
    }, 1000);
    }
    
    render() {
        return (
            <div>
                <h3>Current time : {this.state.date.toLocaleTimeString() }</h3>
            </div>
        )
    }
}