
import {Component} from "react";
import {connect} from "react-redux";


class ComponentInformationLayout extends Component {


    render(){
        const {isDraw, isGameEnded, currentPlayer} = this.props;
        return (<div className="">
            {isDraw ? <div className="draw">
                <p className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-">Ничья</p>
            </div> : !isDraw && isGameEnded ? <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-">
                <p className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-">Победа: {`${currentPlayer}`}</p>
            </div> : !isDraw && !isGameEnded ? <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-">
                <p className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-">Ходит: {`${currentPlayer}`}</p>
            </div> : null}


        </div>)
    }
}

const mapStateToProps = (state) => ({
    isDraw: state.stateGame.isDraw,
    isGameEnded: state.stateGame.isGameEnded,
    currentPlayer: state.stateGame.currentPlayer
})

export const InformationLayout = connect(mapStateToProps)(ComponentInformationLayout)