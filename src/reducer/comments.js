import {normalizedComments as defaultComments} from "../dataArticles";
import { ADD_COMMENT } from "../const";
import { arrToMap } from "../helpers";

    export default (commentsState = arrToMap(defaultComments), action) => {
        const {type, payload, randomId} = action;

        switch(type) {
            case ADD_COMMENT: 
                return {
                    ...commentsState, [randomId]: payload.comment
                }
        }

        return commentsState
    }

