const getLength = (any) => {
  let type = typeof any;
  switch (type) {
    case "object":
      if (Array.isArray(any)) {
        console.log(any.length);
      } else if (any !== null && any.length) {
        console.log(any.length);
      } else if (any instanceof Map || any instanceof Set) {
        console.log(any.size);
      }
      break;
    case "string":
    case "function":
      console.log(any.length);
      break;
    case "number":
    case "bigint":
      console.log(("" + any).length);
      break;
    case "symbol":
      console.log(any.description.length);
      break;
    case "boolean":
    default:
      console.log(0);
      break;
  }
  return "";
};