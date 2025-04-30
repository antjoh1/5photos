import { r as redirect } from "../../chunks/index3.js";
import { u as userState } from "../../chunks/state.svelte.js";
function load() {
  redirect(307, userState.pickedDate.replace(/\s/g, ""));
}
export {
  load
};
