import {INCREMENT, DELETE_ARTICLE, SET_DATE, ADD_COMMENT, LOAD_ALL_ARTICLES} from "../const";

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