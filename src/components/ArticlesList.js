import React, {Component} from 'react';
import Article from './Article'
import {connect} from 'react-redux'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'
import {filtratedArticlesSelector} from "../selectors";
import { loadAllArticles } from "../AC";
import Loader from './Loader'
 class ArticlesList extends Component {
    
    static propTypes = {
        //from decorators accordion
        toogleOpen: PropTypes.func.isRequired,
        openItemId: PropTypes.string,
        articles: PropTypes.array
    }

    componentDidMount() {
        const {loading, isLoad, loadAllArticles} = this.props;
        if(!loading || !isLoad) {
            loadAllArticles();
        }
    }

     render() {
         const {articles, openItemId, toogleOpen, dateRange, loading} = this.props;
         if(loading) {
             return <Loader/>
         }
         const elements = articles.map(article => 
                <li key = {article.id}>
                   <Article article = {article} isOpen = {article.id === openItemId} toogleOpen = {toogleOpen(article.id)}/>
                </li> 
            
         )
            return (
                <div>
                  {elements}
                </div>
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
     }, {loadAllArticles})(accordion(ArticlesList))
