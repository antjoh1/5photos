import { a as attr } from "../../chunks/attributes.js";
import { e as ensure_array_like, s as stringify, p as pop, a as push } from "../../chunks/index.js";
/* empty css               */
import { b as base } from "../../chunks/paths.js";
import "../../chunks/client.js";
import { u as userState } from "../../chunks/state.svelte.js";
import { e as escape_html } from "../../chunks/escaping.js";
function ArchiveList($$payload, $$props) {
  push();
  let batches = [];
  let previewImgPaths = [];
  let isSelected = (value) => {
    return value == userState.pickedDate;
  };
  const each_array = ensure_array_like(batches);
  $$payload.out += `<div class="textContainer px-4 py-2 bg-black mb-2 transition-all duration-150">photos</div> <div class="w-11/12 mx-auto mt-1 grid grid-cols-3 gap-4"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let batch = each_array[i];
    $$payload.out += `<a${attr("href", `${stringify(base)}/${stringify(batch.replace(/\s/g, ""))}`)} class="group w-full transition-all duration-150 ease-in-out"><div class="justify-self-center m-auto mb-2"><div class="justify-self-center w-10/12 h-48"><h2${attr("class", `${stringify(isSelected(batch) ? "active" : "")} justify-self-start py-1 px-4 group-hover:bg-black group-hover:text-white svelte-z6999m`)}>${escape_html(batch)}</h2> <div class="w-full h-full border-black overflow-clip group-hover:overflow-y-hidden group-hover:border-2 group-hover:border-solid"><img class="w-full h-full object-cover group-hover:scale-110 duration-150 ease-in-out"${attr("src", previewImgPaths[i])} alt="little preview thing"></div></div></div></a>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { data, children } = $$props;
  const reachMeLink = base + "/reachMe";
  $$payload.out += `<div class="wholePageContainer svelte-1ezxs8y"><header class="svelte-1ezxs8y"><div class="titleLogo px-4 py-2 bg-black svelte-1ezxs8y"><a${attr("href", base + "/")}>5cenes</a></div> <div class="textContainer interactive px-4 py-2 bg-black svelte-1ezxs8y"><a${attr("href", reachMeLink)}>about</a></div></header> <!---->`;
  {
    $$payload.out += `<div class="pageContentAnimated">`;
    children($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!----> <div class="py-5 mb-10">`;
  ArchiveList($$payload);
  $$payload.out += `<!----></div> <footer class="svelte-1ezxs8y"></footer></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _layout as default
};
