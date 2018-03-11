import React, {Component} from 'react';
import PropTypes from "prop-types";
import ArticlesList from "../ArticlesList";
import Article from "../Article";
import { Route } from "react-router-dom";
class Articles extends Component {

    static propTypes = {

    };

    render() {
        return (
          <div>
            <ArticlesList />
            <Route path = "/articles/:id" render = {this.getArticles} />
          </div>  
        );
    }

    getArticles({match}) {
        const {id} = match.params;
        return <Article id = {id} isOpen/>
    }
}

export default Articles;
