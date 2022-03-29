import {createAction, props} from "@ngrx/store";
import {GlobalInformation} from "../global.information";

export const setInformation = createAction('set information', props<{ information: GlobalInformation }>());
export  const resetInformation = createAction('reset information')