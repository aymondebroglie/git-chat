import {createReducer, on} from "@ngrx/store";
import {GlobalInformation} from "../global.information";
import {resetInformation, setInformation} from "./repo.actions";

export const intialState: GlobalInformation = {repoUrl: '', name: ''};

const _infoReducer = createReducer(intialState, on(setInformation, (state, {information}) => information),
    on(resetInformation, state => intialState))


export function informationReducer(state: any, action: any) {
    return _infoReducer(state, action);
}