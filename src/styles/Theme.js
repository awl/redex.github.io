// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");

var primary = Css.hex("dd4c39");

var text = Css.hex("444");

var subtleBorder = Css.hex("#eee");

var bad = Css.rgba(255, 0, 0, 0.75);

var Color = /* module */[
  /* primary */primary,
  /* darkPrimary */"hsl(6.9, 65%, 50%)",
  /* background */"whiteSmoke",
  /* text */text,
  /* link */primary,
  /* subtleBorder */subtleBorder,
  /* bad */bad
];

var Color$1 = /* module */[/* background */"white"];

var Panel = /* module */[
  /* Color */Color$1,
  /* crosshatchBackground */"repeating-linear-gradient(\n    340deg,\n    white,\n    white 10px,\n    whiteSmoke 10px,\n    whiteSmoke 12px\n  )"
];

var block = Css.hex("rgba(255, 255, 255, .1)");

var highlightedBlock = Css.hex("rgba(255, 255, 255, .2)");

var Color$2 = /* module */[
  /* background */primary,
  /* text */"white",
  /* block */block,
  /* highlightedBlock */highlightedBlock
];

var Inverted = /* module */[
  /* Color */Color$2,
  /* crosshatchBackground */"repeating-linear-gradient(\n    340deg,\n    hsl(6.9, 70.7%, 54%),\n    hsl(6.9, 70.7%, 54%) 10px,\n    hsl(6.9, 70.7%, 58%) 10px,\n    hsl(6.9, 70.7%, 58%) 12px\n  )"
];

var Shadow = /* module */[
  /* overlay */"1ex 1ex 1em 0 rgba(0, 0, 0, .1)",
  /* panel */"1px 1px 0 1px rgba(0, 0, 0, .05)"
];

exports.Color    = Color;
exports.Panel    = Panel;
exports.Inverted = Inverted;
exports.Shadow   = Shadow;
/* primary Not a pure module */
