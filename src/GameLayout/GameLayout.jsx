import {connect} from "react-redux";
import {restart, togglePlayer} from "../actions/index.js";
import {Component} from "react";

class ComponentGameLayout extends Component{
    handleRestart = () => {
        this.props.restart()
    }
    handleTogglePlayer = () => {
        this.props.togglePlayer()
    }

    render(){
        const {isDraw, isGameEnded, field} = this.props;
    return (
        <div className="flex justify-center">
            <button className="border-1 p-2 bg-blue-700 text-blue-100 rounded-xl m-2" onClick={this.handleRestart}>
                Заново
            </button>
            <button
                className="border-1 p-2 bg-amber-600 text-blue-100 rounded-xl m-2"
                disabled={
                    isDraw ||
                    isGameEnded ||
                    (Array.isArray(field) && field.some((param) => param !== ''))
                }
                onClick={this.handleTogglePlayer}
            >
                Сменить игрока
            </button>
        </div>)
    }
}

const mapStateToProps = (state) => ({
    isDraw: state.stateGame.isDraw,
    isGameEnded: state.stateGame.isGameEnded,
    field: state.stateGame.field,
})

const mapDispatchToProps = (dispatch) => ({
    restart: () => dispatch(restart()),
    togglePlayer: () => {
        dispatch(togglePlayer())
    },
})

export const GameLayout = connect(mapStateToProps, mapDispatchToProps)(ComponentGameLayout)