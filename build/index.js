#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var prompt = require("prompt-promise");
var horoscope_1 = require("horoscope");
var circular_natal_horoscope_js_1 = require("circular-natal-horoscope-js");
// const promiseOfALocation: Promise<string> = prompt("Location? ");
var main = function () {
    return __awaiter(this, void 0, void 0, function () {
        var date, MonthAsString, DayAsString, YearAsString, MonthAsNumber, DayAsNumber, YearAsNumber, time, HourAsString, MinuteAsString, HourAsNumber, MinuteAsNumber, location, LatAsString, LongAsString, LatAsNumber, LongAsNumber, origin, horoscope;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prompt("What is your birthday? Please enter MM.DD.YYYY ")];
                case 1:
                    date = _a.sent();
                    MonthAsString = date.split(".")[0];
                    DayAsString = date.split(".")[1];
                    YearAsString = date.split(".")[2];
                    MonthAsNumber = Number(MonthAsString);
                    DayAsNumber = Number(DayAsString);
                    YearAsNumber = Number(YearAsString);
                    console.log("Your sun sign is: *.*.*.", horoscope_1.getSign({ month: MonthAsNumber, day: DayAsNumber }), ".*.*.*");
                    return [4 /*yield*/, prompt("What is your time of birth? Please enter in HH:MM ")];
                case 2:
                    time = _a.sent();
                    HourAsString = time.split(":")[0];
                    MinuteAsString = time.split(":")[1];
                    HourAsNumber = Number(HourAsString);
                    MinuteAsNumber = Number(MinuteAsString);
                    return [4 /*yield*/, prompt("And the location? Please enter the city in Latitude, Longitude to 2 decimal points: ")];
                case 3:
                    location = _a.sent();
                    LatAsString = location.split(",")[0];
                    LongAsString = location.split(",")[1];
                    LatAsNumber = Number(LatAsString);
                    LongAsNumber = Number(LongAsString);
                    origin = new circular_natal_horoscope_js_1.Origin({
                        year: YearAsNumber,
                        month: MonthAsNumber - 1,
                        date: DayAsNumber,
                        hour: HourAsNumber,
                        minute: MinuteAsNumber,
                        latitude: LatAsNumber,
                        longitude: LongAsNumber
                    });
                    horoscope = new circular_natal_horoscope_js_1.Horoscope({
                        origin: origin,
                        houseSystem: "whole-sign",
                        zodiac: "tropical",
                        aspectPoints: ['bodies', 'points', 'angles'],
                        aspectWithPoints: ['bodies', 'points', 'angles'],
                        aspectTypes: ["major", "minor"],
                        customOrbs: {},
                        language: 'en'
                    });
                    console.log("Your ascendant is: ", horoscope.Ascendant.Sign.label, "and your moon sign is: ", horoscope.CelestialBodies.moon.Sign.label);
                    console.log("Have a pleasant day");
                    return [2 /*return*/];
            }
        });
    });
};
main();
//# sourceMappingURL=index.js.map