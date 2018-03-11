import React, {Component} from 'react';
import Article from './Article'
import {connect} from 'react-redux'
//import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'
import {filtratedArticlesSelector} from "../selectors";
import { loadAllArticles } from "../AC";
import Loader from './Loader';
import { NavLink, Route } from "react-router-dom";
 class ArticlesList extends Component {
    
    static propTypes = {
        //from decorators accordion
        //toogleOpen: PropTypes.func.isRequired,
        //openItemId: PropTypes.string,
        articles: PropTypes.array
    }

    componentDidMount() {
        const {loading, isLoad, loadAllArticles} = this.props;
        if(!loading && !isLoad) {
            loadAllArticles();
        }
    }

     render() {
         const {articles, dateRange, loading} = this.props;
         if(loading) {
             return <Loader/>
         }
         const elements = articles.map(article => 
                <li key = {article.id}>
                    <NavLink to = {`/articles/${article.id}`}> 
                        {article.title}
                    </NavLink>
                </li> 
            
         )
            return (
                <ul>
                    {elements}
                </ul>
            ) 
     }
 }
 
 export default connect(
     (state) => {
        return {
            articles: filtratedArticlesSelector(state),
            loading: state.articles.loading,
            isLoad: state.articles.isLoad
        } 
     }, {loadAllArticles})(ArticlesList)
   //  <Article article = {article} isOpen = {article.id === openItemId} toogleOpen = {toogleOpen(article.id)}/>