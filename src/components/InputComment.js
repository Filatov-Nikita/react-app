import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../AC';
import PropTypes from "prop-types";

    class InputComment extends Component {

        static propTypes = {
            articleId: PropTypes.string.isRequired,
            addComment: PropTypes.func.isRequired
        };

        constructor(props) {
            super(props);
            
            this.state = {
                 user: '',
                 text: ''
            }
        }

        handleSubmit = ev => {
            ev.preventDefault()
            this.props.addComment(this.state);
            this.setState({
                user: '',
                text: ''
            })
        }
        render() {
          
           return (
               <div>
                <form onSubmit = {this.handleSubmit}>
                        user: <input type="text" value = {this.state.user} onChange={this.handleChange('user')} /> <br/>
                        text: <input type="text" value = {this.state.text} onChange={this.handleChange('text')} /> <br/>
                         <input type = "submit" value = "submit"/>
                    </form>
               </div>
           )  
        }



        handleChange = type => event => {
            //console.log(this);
            const {pattern} = this.props;
            const {value} = event.target;

            if(pattern.test(value)) {
                console.log('---valid', '1')
            }

            this.setState({
                [type]: value
            })
        }
    }
    export default connect(null, (dispatch, ownProps) => ({
        addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
    }))(InputComment)
