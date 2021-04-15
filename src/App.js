import { Provider } from "react-redux";
import Routes from "./routers";
import generateStore from "./redux/store";

const store = generateStore();

function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}

export default App;
