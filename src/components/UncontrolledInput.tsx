import {Component, createRef, RefObject} from 'react'

type State = {}
type Props = {}

export default class UncontrolledInput extends Component<State, Props> {
    state = {
        value: undefined,
    }

    ref: RefObject<HTMLInputElement> = createRef()

    componentDidMount() {
        this.ref.current?.focus()
    }

    render() {
        const {value} = this.state
        return (
            <>
                <input ref={this.ref} type="text" value={value}/>
                <button onClick={() => alert(this.ref.current?.value)}>点击获取非受控组件最新值</button>
            </>
        );
    }
}
