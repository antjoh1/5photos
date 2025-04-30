import "clsx";
import { p as pop, a as push } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  page.form;
  $$payload.out += `<form class="form-entry svelte-894xsf" method="POST"><label for="username" class="svelte-894xsf">Username:</label> <input type="text" name="username" id="username"> <label for="password" class="svelte-894xsf">Password:</label> <input type="text" name="password" id="password"> <div class="px-12"><input type="submit" class="flex bg-black hover:bg-[var(--pink-accent)] border border-solid hover:border-black text-white hover:text-black p-3 justify-self-end transition duration-250 ease-in" value="Login"></div></form>`;
  pop();
}
export {
  _page as default
};
