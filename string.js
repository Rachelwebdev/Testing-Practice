const stringLength = (str) => {
  if (str.length < 1) {
    return "name less than 1";
  } else if (str.length > 10) {
    return "name greater than 10";
  } else {
    return str.length;
  }
};

stringLength("Rachel");
stringLength("");
stringLength("JohnDoeBulls");
stringLength("Felix");

module.exports = stringLength;
