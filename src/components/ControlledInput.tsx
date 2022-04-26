import React, {ChangeEventHandler, Component} from 'react'

type State = {}
type Props = {}

export default class ControlledInput extends React.Component<any, any> {
    state = {
        value: "hi"
    }

    handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
        )
    }
}
