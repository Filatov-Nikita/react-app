import React from 'react'
import Comment from './Comment'
import ToggleOpen from '../decorators/ToggleOpen'
import FormInput from './InputComment'
import PropTypes from 'prop-types'

    function CommentList({article, isOpen, toggleOpen}) {
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {getBody({article, isOpen})}
            </div>
        )
    }

CommentList.propTypes = {
    // from toogkeOpen Decorators
    comments: PropTypes.array,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

function getBody({article:{comments = [], id}, isOpen}) {
   // console.log(comments);
    if (isOpen) {
          if (!comments.length) {
              return (
                  <div>
                    <p>No comments yet</p>
                    <CommentForm articleId = {id} />
                  </div>
              )
          } else {
            return (
                <div>
                    <ul>
                        {comments.map(id => <li key={id}><Comment id={id}/></li>)}
                    </ul>
                     Ваш комментарий <FormInput pattern = {/^[a-zA-Z ]{3,30}$/} articleId = {id}/>
                </div>
                   
                )
          }
          return null;
          
    }
  
}
    export default ToggleOpen(CommentList)