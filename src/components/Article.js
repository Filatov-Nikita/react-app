import React, {Component} from 'react';
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {deleteArticle} from "../AC";

    class Article extends Component {
        
        static PropTypes = {
          article: PropTypes.shape({
              id: PropTypes.string.isRequired,
              text:PropTypes.string.isRequired,
              title: PropTypes.string.isRequired
          })
        }

        render() {
            const {article, isOpen, toogleOpen} = this.props;
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
        const {article, isOpen} = this.props
        if (isOpen) {
              return (
            <section>
               {article.text}
               <CommentList article = {article} />
            </section>
             )
        }
      
      }
    }

    export default connect(null, {deleteArticle})(Article)