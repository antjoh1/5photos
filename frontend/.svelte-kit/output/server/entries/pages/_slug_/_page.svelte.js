import "clsx";
import { s as stringify, p as pop, a as push } from "../../../chunks/index.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function HeartIcon($$payload, $$props) {
  $$payload.out += `<svg${attr("stroke", "#fff")} stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="-3 0 32 32"${attr("fill-opacity", "0")}><path${attr("class", `heart ${stringify("")}  svelte-j68tdx`)} d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
}
function PhotoPreview($$payload, $$props) {
  push();
  let { chosenBatch } = $$props;
  let i = 0;
  console.log("This is in photoPreview", chosenBatch);
  let activePhotoPath = chosenBatch[i].path.replace("../static", "");
  let activePhotoText = chosenBatch[i].ordinalNum;
  let activePhotoLocation = chosenBatch[i].imgLocation;
  $$payload.out += `<div class="mainContentBox svelte-12azqnq"><div class="picExtra svelte-12azqnq"><button class="nextPhotoButton">Prev</button></div> <div class="pictureWrap svelte-12azqnq">`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="block svelte-12azqnq"><img${attr("src", activePhotoPath)} alt="mainPhoto" class="svelte-12azqnq"> <div class="picFooter svelte-12azqnq"><div${attr("class", `likeBox ${stringify("")}  svelte-12azqnq`)}><button class="likeButton svelte-12azqnq">`;
    HeartIcon($$payload);
    $$payload.out += `<!----></button> <h3>`;
    {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></h3></div> <div class="photoDesc svelte-12azqnq"><div><h3>${escape_html(activePhotoText)}</h3> <h4>${escape_html(activePhotoLocation)}</h4></div></div></div></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="picExtra svelte-12azqnq"><button class="nextPhotoButton">Next</button></div></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  console.log("this is page.svelte data: ", data);
  PhotoPreview($$payload, { chosenBatch: data.images });
  pop();
}
export {
  _page as default
};
