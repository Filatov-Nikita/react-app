import {INCREMENT, DELETE_ARTICLE, SET_DATE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, 
    START, SUCCESS, FAIL, LOAD_ARTICLE_COMMENTS} from "../const";

export default function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function setDate(date) {
    return {
        type: SET_DATE,
        payload: { date }
    }
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            comment, 
            articleId
        },
        generateId: true
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticle(id) {
        return (dispatch) =>  {
            dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })

        setTimeout(() => {
            fetch(`api/article/${id}`).then(res => res.json()).then(response => dispatch({
                type: LOAD_ARTICLE + SUCCESS,
                payload: {id, response}
            }))
            .catch(error => dispatch({
                type: LOAD_ARTICLE + FAIL,
                payload: {id, error}
            }))
        }, 1000);
    }
}
export function loadArticleComments(id) {
    return  {
        type: LOAD_ARTICLE_COMMENTS,
        payload: { id },
        callAPI: `/api/comment?article=${id}`
    }
}