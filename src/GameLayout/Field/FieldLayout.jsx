import styles from "./field.module.css";
import {connect} from "react-redux";
import { stepClick } from "../../actions/index.js";
import {Component} from "react";

class ComponentField extends Component {

    handleClick = (index) => {
        this.props.stepClick(index)
    }

    render(){
        const {field = [], isGameEnded} = this.props
        console.log("Props in ComponentField:", { field, isGameEnded });
        return (
            <div className="canvas">
                <ul className={styles.grid}>
                    {field.map((item, index) => (
                        <li key={index}>
                            <button
                                className={styles.btn}
                                disabled={field[index] || isGameEnded}
                                onClick={() => this.handleClick(index)}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Redux state in mapStateToProps:", state);
    return {
        field: state.stateGame.field || [],
        isGameEnded: state.stateGame.isGameEnded || false
    }
}
const mapDispatchToProps = (dispatch) => ({
    stepClick: (index) => dispatch(stepClick(index))
})
export const Field = connect(mapStateToProps, mapDispatchToProps)(ComponentField)