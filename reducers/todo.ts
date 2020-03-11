import {
    TODO_ONCHANGE,
    TODO_ADD,
    TODO_DELETE,
} from '../constants/actionTypes';

export const initialState = {
    item: {
        value: '',
    },
    data: [],
};

export default (state = initialState, action) => {
    const {
        type,
        item
    } = action;

    switch(type) {
        case TODO_ONCHANGE: {
            // must create a new instance because that is a "next" state
            return Object.assign({}, state, {
                item,
            });
        }

        case TODO_ADD: {
            // return the previous state (skip)
            if(item.value === '') {
                return state;
            }

            return Object.assign({}, state, {
                //clear the `item.value`
                item: {
                    value: '',
                },
                // create a new array instance and push the item
                data: [
                    ...(state.data),
                    item,
                ],
            });
        }

        case TODO_DELETE: {
            // don't use `state.data` directory
            const {data, ...restState} = state;

            const updated = [...data].filter(_item => _item.value !== item.value);

            return Object.assign({}, restState, {
                data: updated,
            });
        }

        default: {
            return state;
        }
    }
};