// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;

import { redirect } from "@sveltejs/kit";
import { userState } from "./state.svelte";

export function load() {
    redirect( 307, userState.pickedDate.replace(/\s/g, '') )
}