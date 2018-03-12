
import { Action } from '@ngrx/store';

import {
    Hero,
} from '../../models';

export const HEROES_ADD = '[Heroes] HEROES_ADD';
export const HEROES_SET_HEROES = '[Heroes] HEROES_SET_HEROES';
export const HEROES_UPDATE = '[Heroes] HEROES_UPDATE';
export const HEROES_LOADING = '[Heroes] HEROES_LOADING';
export const HEROES_LOADED = '[Heroes] HEROES_LOADED';
export const HEROES_SAVING = '[Heroes] HEROES_SAVING';
export const HEROES_SAVED = '[Heroes] HEROES_SAVED';

export class AddHero implements Action {
    readonly type = HEROES_ADD;

    constructor(public payload: Hero) { }
}

export class SetHeroes implements Action {
    readonly type = HEROES_SET_HEROES;

    constructor(public payload: Hero[]) { }
}

export class UpdateHero implements Action {
    readonly type = HEROES_UPDATE;

    constructor(public payload: Hero) { }
}

export class LoadingHeroes implements Action {
    readonly type = HEROES_LOADING;

    constructor(public payload: any = null) { }
}

export class LoadedHeroes implements Action {
    readonly type = HEROES_LOADED;

    constructor(public payload: any = null) { }
}

export class SavingHero implements Action {
    readonly type = HEROES_SAVING;

    constructor(public payload: any = null) { }
}

export class SavedHero implements Action {
    readonly type = HEROES_SAVED;

    constructor(public payload: any = null) { }
}

export type All =
    AddHero | SetHeroes | UpdateHero |
    LoadingHeroes | LoadedHeroes | SavingHero |
    SavedHero;
