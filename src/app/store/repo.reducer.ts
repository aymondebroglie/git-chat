import { createReducer, on, State  } from "@ngrx/store";
import { resetUrl, setUrl } from "./repo.actions";

export const intialState : string    =  '' ;

const _repoReducer = createReducer(
    intialState,
    on(setUrl, (state, {repo_url}) =>   repo_url),
    on(resetUrl, (state) => intialState)
)

export function repoReducer(state : any , action : any) {
    return _repoReducer(state, action)
}
