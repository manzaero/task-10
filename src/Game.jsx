import {InformationLayout} from "./GameLayout/Information/InformationLayout.jsx";
import {Field} from "./GameLayout/Field/FieldLayout.jsx";
import './Game.css'
import {GameLayout} from "./GameLayout/GameLayout.jsx";

export const Game = () => {

    return (<>
        <InformationLayout />
        <Field />
        <GameLayout />
    </>)
}