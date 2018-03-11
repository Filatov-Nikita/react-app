import React, {Component} from 'react';
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import Loader from './Loader';
import {deleteArticle, loadArticle} from "../AC";

    class Article extends Component {
        
        static PropTypes = {
            id: PropTypes.string.isRequired,
            //from connect
          article: PropTypes.shape({
              id: PropTypes.string.isRequired,
              text:PropTypes.string.isRequired,
              title: PropTypes.string.isRequired
          })
        }

        state = {
            update: 0
        }

        componentWillReceiveProps({isOpen, loadArticle, article}) {
            if(!article || (isOpen && !article.text && !article.loading)) { loadArticle(article.id) }
        }

        render() {
            const {article, isOpen, toogleOpen} = this.props;
            if(!article) return null
            return (
                <div>
                    <h3>{article.title}</h3>
                    <button onClick = {toogleOpen}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    <button onClick = {this.handleDelete}>delete me</button>
                    {this.getBody()}
            </div>
            )
        }

         handleDelete = () => {
            const {deleteArticle, article} = this.props;
            deleteArticle(article.id);
         }

        getBody() {
        const {article, isOpen} = this.props;
        if (isOpen) {
            if(article.loading) {return <Loader /> }
              return (
            <section>
               {article.text}
               <CommentList article = {article} />
            </section>
             )
        }
      
      }
    }

    export default connect((state, ownProps) => ({
        article: state.articles.entities.get(ownProps.id)
    }), {deleteArticle, loadArticle})(Article)