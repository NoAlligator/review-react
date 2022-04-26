import React, {Component} from 'react'

type State = {}
type Props = {}

export default class Fallback extends Component<State, Props> {
    state = {}

    render() {
        return (
            <>
                <div style={({
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "5vw"
                })}>Loading...</div>
            </>
        );
    }
}
