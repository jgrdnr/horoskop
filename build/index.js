#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var prompt = require("prompt-promise");
var horoscope_1 = require("horoscope");
var promiseOfADate = prompt("What is your birthday? Please enter MM.DD.YYYY ");
promiseOfADate.then(function (query) {
    var queryMonthAsString = query.split(".")[0];
    var queryDayAsString = query.split(".")[1];
    var queryMonthAsNumber = Number(queryMonthAsString);
    var queryDayAsNumber = Number(queryDayAsString);
    console.log("Your sun sign is *.*.*.", horoscope_1.getSign({ month: queryMonthAsNumber, day: queryDayAsNumber }), ".*.*.*");
}).then(function () {
    prompt.finish();
});
//# sourceMappingURL=index.js.map