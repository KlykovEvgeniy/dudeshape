import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app';
import { App } from './app';
import "./app/styles/normolized.scss";

const root = ReactDOM.createRoot(
    document.querySelector('#root') as HTMLDivElement
)!;

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)