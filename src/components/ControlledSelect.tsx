import React, {ChangeEventHandler, Component} from 'react'

type State = {}
type Props = {}

export default class ControlledInput extends React.Component<any, any> {
    state = {
        value: "Locked because it is a controlled "
    }


    render() {
        return (
            <input type="text" value={this.state.value}/>
        )
    }
}
