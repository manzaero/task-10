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
            <div className="m-auto w-1/12 mt-4">
                <ul className="grid grid-cols-1 grid-cols-2 grid-cols-3 gap-x-1 gap-y-1	 ">
                    {field.map((item, index) => (
                        <li key={index}>
                            <button
                                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-12 h-12"
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