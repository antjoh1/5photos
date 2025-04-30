import "./client.js";
import { g as getContext } from "./index.js";
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get form() {
    return context().page.form;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
export {
  page as p
};
