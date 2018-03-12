
export type Hero = { // tslint:disable-line:interface-over-type-literal
    _id: number;
    name: string;
    hasStar: boolean;
};

export type HeroesState = { // tslint:disable-line:interface-over-type-literal
    heroes: Hero[];
    isLoading: boolean;
    isSaving: boolean;
};
