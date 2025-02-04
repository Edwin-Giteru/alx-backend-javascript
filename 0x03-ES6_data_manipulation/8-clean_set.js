export default function cleanSet(set, startString) {
    const string = [...set].filter((value) => {
      return   value.startsWith(startString);
    })
.map((value) => value.slice(startString.length))
    .join('-');
    return string;
}

