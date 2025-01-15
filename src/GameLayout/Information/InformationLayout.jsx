import styles from './info.module.css';
import {Component} from "react";
import {connect} from "react-redux";


class ComponentInformationLayout extends Component {


    render(){
        const {isDraw, isGameEnded, currentPlayer} = this.props;
        return (<div className="info">
            {isDraw ? <div className="draw">
                <p className={styles.p}>Ничья</p>
            </div> : !isDraw && isGameEnded ? <div className="next-step">
                <p className={styles.p}>Победа: {`${currentPlayer}`}</p>
            </div> : !isDraw && !isGameEnded ? <div className="winner">
                <p className={styles.p}>Ходит: {`${currentPlayer}`}</p>
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