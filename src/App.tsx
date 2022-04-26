import React, {Suspense} from 'react'
import './App.css'
// import ControlledInput from "./components/ControlledInput";
// import ControlledSelect from "./components/ControlledSelect";
// import UncontrolledInput from "./components/UncontrolledInput";

const Fallback = React.lazy(() => import("./components/Fallback"))
const SuspendContent = React.lazy(() => import("./components/SuspendContent"))

const App = () => {
    return (
        <>
            <Suspense fallback={<Fallback/>}>
                <SuspendContent/>
            </Suspense>
            {/*<UncontrolledInput/>*/}
            {/*<ControlledInput/>*/}
            {/*<ControlledSelect/>*/}
        </>
    )
}

export default App
