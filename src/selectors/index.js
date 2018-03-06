import { createSelector } from "reselect";
import { mapToArr } from "../helpers";

const articlesGetter = state => state.articles.entities;
const dateRangeGetter = state => state.dateRange;
const commentsGetter = state => state.comments.entities;
const idGetter = (state, props) => props.id;


export const filtratedArticlesSelector = createSelector(articlesGetter, dateRangeGetter, (articles, dateRange) => {
    //console.log('---', 'reRender');
    const filterArticles = mapToArr(articles).filter(article => {
        const {to, from} = dateRange;
        const current = new Date(article.date);
        if (!to) {
            return true
        }
        return current >= from && current <= to
     })
     return filterArticles
}) 

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
   // console.log('---', 'update');
   console.log(comments);
    return comments.get(id);
})
//console.dir(filtratedArticlesSelector);