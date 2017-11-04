import React, {Component} from 'react'

class Critter extends Component {

    constructor(props) {
        super(props);

        this.state = {timer: null, counter: 0}
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState({timer});
    }

    tick() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        
        return (
            <span> Here's a counter: {this.state.counter} </span>
        );

    }
}

export default Critter;