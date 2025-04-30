import { e as ensure_array_like, s as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
const profilePic = "/_app/immutable/assets/reachMe.86DX0RGc.jpeg";
const profileDesc = [
  "Hi there! I’m so glad you stopped by. This website is just a little place I use to publish some photos I think turned out good in a preset format.",
  "Whether you have a question, an idea for a shoot, or just want to chat about photography, I’d love to hear from you.",
  "Photography is all about capturing meaningful moments, and I’m always excited to connect with others who appreciate the art.",
  "I’m currently building my portfolio, so if you’d like some high-quality photos of yourself or an event you’re hosting, feel free to reach out—I’d love to work with you!"
];
function _page($$payload) {
  const each_array = ensure_array_like(profileDesc);
  $$payload.out += `<div class="mainContentBox svelte-y3zm2p"><img${attr("src", profilePic)} alt="Blonqe" class="singleImage svelte-y3zm2p"> <div class="photoDesc svelte-y3zm2p"><div class="nameAndIcons svelte-y3zm2p"><h1 class="introName svelte-y3zm2p">Bleona S.</h1> <a class="instaLink svelte-y3zm2p" href="https://www.instagram.com/bleonassss/"><img class="instaLogo svelte-y3zm2p"${attr("src", `${stringify(base)}/instagramLogo.svg`)} alt="instagramLink"></a></div> <div class="paragraphs svelte-y3zm2p"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let paragraph = each_array[$$index];
    $$payload.out += `<p class="svelte-y3zm2p">${escape_html(paragraph)}</p>`;
  }
  $$payload.out += `<!--]--></div> <p class="email svelte-y3zm2p">bleonasylaaa@gmail.com</p></div></div>`;
}
export {
  _page as default
};
