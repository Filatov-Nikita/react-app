import {normalizedComments} from "../dataArticles";
import { ADD_COMMENT, LOAD_COMMENT, SUCCESS, LOAD_ARTICLE_COMMENTS } from "../const";
import { arrToMap } from "../helpers";
import {Record, OrderedMap} from 'immutable';

    const CommentRecord = Record({
        id: null,
        text: null,
        user: null
    });

    const ReducerState = Record({
        entities: new OrderedMap({})
    });

   const defaultComments = new ReducerState();

    export default (commentsState = defaultComments, action) => {
        const {type, payload, randomId, response} = action;

        switch(type) {
            case ADD_COMMENT: 
                return {
                    ...commentsState, [randomId]: payload.comment
                }
                
            case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)))
        }

        return commentsState
    }

