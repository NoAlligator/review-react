import {Component, ContextType} from 'react'
import {ThemeContext} from "./index";

type State = {}
type Props = {}

export default class ComponentName extends Component<State, Props> {
    state = {}
    static contextType = ThemeContext
    declare context: ContextType<typeof ThemeContext>

    render() {
        const theme = this.context!
        return (
            <>
                THEME:{theme}
            </>
        );
    }
}

