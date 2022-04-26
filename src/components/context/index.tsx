import {Component, createContext} from 'react'

export type Theme = "dark" | "light"
type State = {
    theme: Theme
}
type Props = {}

const ThemeContext = createContext<Theme>("light")

export default class ComponentName extends Component<State, Props> {
    state: State = {
        theme: "light"
    }

    render() {
        const {theme} = this.state
        return (
            <ThemeContext.Provider value={theme}>

            </ThemeContext.Provider>
        );
    }
}

export {
    ThemeContext
}
