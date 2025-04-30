import "clsx";
console.log("this is layout server page");
async function load({ url }) {
  let entries = [];
  let entriesList = (
    /** @type {string[]} */
    []
  );
  const res = await fetch("http://127.0.0.1:8000/images/listBatches", { method: "GET" });
  const batches_json = await res.json();
  for (let entry of batches_json) {
    entries.push({ slug: entry.replace(/\s/g, "") });
    entriesList.push(entry);
  }
  console.log(entriesList, entries);
  return {
    url: url.pathname,
    batches: entriesList
  };
}
export {
  load
};
