import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Game} from './Game.jsx'
import './index.css'
import {store} from "./store.js";
import {Provider} from "react-redux";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <Game />
    </Provider>
  </StrictMode>,
)
