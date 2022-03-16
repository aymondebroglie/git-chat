import { createAction, props } from "@ngrx/store";

export const setUrl = createAction('setUrl action',props<{repo_url : string   }>());
export const resetUrl = createAction('resetUrl action');