import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload) {
  let files = {};
  $$payload.out += `<form class="flex-col w-100" enctype="multipart/form-data" method="POST"><div class="flex gap-x-10 justify-start items-center px-12">Batch name: <input type="text" name="batchName" class="svelte-9wj0x4"></div> <div class="m-auto flex flex-col gap-y-4 divide-y divide-white p-12"><div class="flex flex-row items-center gap-x-10 pt-5">`;
  if (files.photo1) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img class="preview svelte-9wj0x4"${attr("src", files.photo1.url)} alt="thingie" id="preview1">`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="flex h-20 w-20 items-center justify-center rounded-full border-2 border-solid border-white font-extralight">1</div>`;
  }
  $$payload.out += `<!--]--> <input accept="image/*" type="file" name="photo1" id="imgInp" class="svelte-9wj0x4"> <label for="photo1-imgLocation">Location:</label> <input type="text" name="photo1-imgLocation" id="photo1-imgLocation" class="svelte-9wj0x4"> <label for="photo1-altText">Description:</label> <input type="text" name="photo1-altText" id="photo1-altText" class="svelte-9wj0x4"></div> <div class="flex flex-row items-center gap-x-10 pt-5">`;
  if (files.photo2) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img class="preview svelte-9wj0x4"${attr("src", files.photo2.url)} alt="thingie" id="preview2">`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="flex h-20 w-20 items-center justify-center rounded-full border-2 border-solid border-white font-extralight">2</div>`;
  }
  $$payload.out += `<!--]--> <input accept="image/*" type="file" name="photo2" id="imgInp2" class="svelte-9wj0x4"> <label for="photo2-imgLocation">Location:</label> <input type="text" name="photo2-imgLocation" id="photo2-imgLocation" class="svelte-9wj0x4"> <label for="photo2-altText">Description:</label> <input type="text" name="photo2-altText" id="photo2-altText" class="svelte-9wj0x4"></div> <div class="flex flex-row items-center gap-x-10 pt-5">`;
  if (files.photo3) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img class="preview svelte-9wj0x4"${attr("src", files.photo3.url)} alt="thingie" id="preview3">`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="flex h-20 w-20 items-center justify-center rounded-full border-2 border-solid border-white font-extralight">3</div>`;
  }
  $$payload.out += `<!--]--> <input accept="image/*" type="file" name="photo3" id="imgInp3" class="svelte-9wj0x4"> <label for="photo3-imgLocation">Location:</label> <input type="text" name="photo3-imgLocation" id="photo3-imgLocation" class="svelte-9wj0x4"> <label for="photo3-altText">Description:</label> <input type="text" name="photo3-altText" id="photo3-altText" class="svelte-9wj0x4"></div> <div class="flex flex-row items-center gap-x-10 pt-5">`;
  if (files.photo4) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img class="preview svelte-9wj0x4"${attr("src", files.photo4.url)} alt="thingie" id="preview4">`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="flex h-20 w-20 items-center justify-center rounded-full border-2 border-solid border-white font-extralight">4</div>`;
  }
  $$payload.out += `<!--]--> <input accept="image/*" type="file" name="photo4" id="imgInp4" class="svelte-9wj0x4"> <label for="photo4-imgLocation">Location:</label> <input type="text" name="photo4-imgLocation" id="photo4-imgLocation" class="svelte-9wj0x4"> <label for="photo4-altText">Description:</label> <input type="text" name="photo4-altText" id="photo4-altText" class="svelte-9wj0x4"></div> <div class="flex flex-row items-center gap-x-10 pt-5">`;
  if (files.photo5) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img class="preview svelte-9wj0x4"${attr("src", files.photo5.url)} alt="thingie" id="preview5">`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="flex h-20 w-20 items-center justify-center rounded-full border-2 border-solid border-white font-extralight">5</div>`;
  }
  $$payload.out += `<!--]--> <input accept="image/*" type="file" name="photo5" id="imgInp5" class="svelte-9wj0x4"> <label for="photo5-imgLocation">Location:</label> <input type="text" name="photo5-imgLocation" id="photo5-imgLocation" class="svelte-9wj0x4"> <label for="photo5-altText">Description:</label> <input type="text" name="photo5-altText" id="photo5-altText" class="svelte-9wj0x4"></div></div> <div class="px-12"><input type="submit" class="flex bg-black hover:bg-[var(--pink-accent)] border border-solid hover:border-black text-white hover:text-black p-3 justify-self-end transition duration-250 ease-in svelte-9wj0x4" value="Submit Photos!"></div></form>`;
}
export {
  _page as default
};
