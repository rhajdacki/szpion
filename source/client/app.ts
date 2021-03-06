import {app} from "hyperapp";

import {State} from "./state";
import {Actions} from "./actions";
import {view} from "./view";

const actions = new Actions();

const state = new State();

app(state, actions, view, document.body);
