// node_modules/diagram-js/lib/util/Collections.js
function remove(collection, element) {
  if (!collection || !element) {
    return -1;
  }
  var idx = collection.indexOf(element);
  if (idx !== -1) {
    collection.splice(idx, 1);
  }
  return idx;
}
function add(collection, element, idx) {
  if (!collection || !element) {
    return;
  }
  if (typeof idx !== "number") {
    idx = -1;
  }
  var currentIdx = collection.indexOf(element);
  if (currentIdx !== -1) {
    if (currentIdx === idx) {
      return;
    } else {
      if (idx !== -1) {
        collection.splice(currentIdx, 1);
      } else {
        return;
      }
    }
  }
  if (idx !== -1) {
    collection.splice(idx, 0, element);
  } else {
    collection.push(element);
  }
}
function indexOf(collection, element) {
  if (!collection || !element) {
    return -1;
  }
  return collection.indexOf(element);
}

export {
  remove,
  add,
  indexOf
};
//# sourceMappingURL=chunk-UPPIJ347.js.map
