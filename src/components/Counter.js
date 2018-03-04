import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import increment from '../AC';

    class Counter extends Component {
        static propTypes = {
            //from decorator connect
            counter: PropTypes.number
        }
        render() {
            return (
                <div>
                    <h2>
                        {this.props.counter}
                        <button onClick = {this.handleInc}>Inc Here</button>
                    </h2>
                </div>                
            );
        }

        handleInc = () => {
           this.props.dispatchIncrement();
        }
    }

    function mapStateToProps(state) {
        return {
            counter: state.count
        }
    }
    const mapToDispatch = {
        dispatchIncrement: increment
    }
    const decorator = connect(mapStateToProps, mapToDispatch);

    export default decorator(Counter);