function allKeysAndSymbols(object) {
  let proto = Object.getPrototypeOf(object);
  const props = [...Object.getOwnPropertyNames(object)];

  while (proto) {
    props.push(...Object.getOwnPropertyNames(proto));
    proto = Object.getPrototypeOf(proto);
  }

  return props;
}

console.log(allKeysAndSymbols({})); // ["constructor", "__defineGetter__", "__defineSetter__", "hasOwnProperty", ... ]
