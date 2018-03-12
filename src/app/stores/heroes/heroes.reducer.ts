
import * as _ from 'lodash';

import {
    Hero,
    HeroesState,
} from '../../models';
import * as heroesActions from './heroes.actions';

export type Action = heroesActions.All;

const defaultState: HeroesState = {
    heroes: [],
    isLoading: false,
    isSaving: false,
};

export function heroesReducer(state = defaultState, action: Action) {
    const _state = _.cloneDeep(state);

    switch (action.type) {
        case heroesActions.HEROES_ADD:
            _state.heroes.push(action.payload);
            break;
        case heroesActions.HEROES_SET_HEROES:
            _state.heroes = _.cloneDeep(action.payload);
            break;
        case heroesActions.HEROES_UPDATE:
            for (const i in _state) {
                if (_state[i]._id === action.payload._id) {
                    if (_.isString(action.payload.name)) {
                        _state[i].name = action.payload.name;
                    }

                    if (_.isBoolean(action.payload.hasStar)) {
                        _state[i].hasStar = action.payload.hasStar;
                    }
                }
            }
            break;
        case heroesActions.HEROES_LOADING:
            _state.isLoading = true;
            break;
        case heroesActions.HEROES_LOADED:
            _state.isLoading = false;
            break;
        case heroesActions.HEROES_SAVING:
            _state.isSaving = true;
            break;
        case heroesActions.HEROES_SAVED:
            _state.isSaving = false;
            break;
    }

    return _state;
}
