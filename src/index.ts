#!/usr/bin/env node

import * as prompt from "prompt-promise";
import { getSign } from "horoscope";
import { Origin, Horoscope } from "circular-natal-horoscope-js";
import { cityMap } from "city-lat-long-map";

// const promiseOfALocation: Promise<string> = prompt("Location? ");

const main = async function () {
  const date: string = await prompt("What is your birthday? Please enter MM.DD.YYYY ");

  const MonthAsString: string = date.split(".")[0]
  const DayAsString: string = date.split(".")[1]
  const YearAsString: string = date.split(".")[2]
  const MonthAsNumber: number = Number(MonthAsString)
  const DayAsNumber: number = Number(DayAsString)
  const YearAsNumber: number = Number(YearAsString)

  console.log("Your sun sign is: *.*.*.", getSign({ month: MonthAsNumber, day: DayAsNumber }), ".*.*.*");

  const time: string = await prompt("What is your time of birth? Please enter in HH:MM ");

  const HourAsString: string = time.split(":")[0]
  const MinuteAsString: string = time.split(":")[1]
  const HourAsNumber: number = Number(HourAsString)
  const MinuteAsNumber: number = Number(MinuteAsString)

  const location: string = await prompt("And the location? Please enter the city in Latitude, Longitude to 2 decimal points: ");

  const LatAsString: string = location.split(",")[0]
  const LongAsString: string = location.split(",")[1]
  const LatAsNumber: number = Number(LatAsString)
  const LongAsNumber: number = Number(LongAsString)

  const origin = new Origin({
    year: YearAsNumber,
    month: MonthAsNumber - 1,
    date: DayAsNumber,
    hour: HourAsNumber,
    minute: MinuteAsNumber,
    latitude: LatAsNumber,
    longitude: LongAsNumber,
  });

  const horoscope = new Horoscope({
    origin,
    houseSystem: "whole-sign",
    zodiac: "tropical",
    aspectPoints: ['bodies', 'points', 'angles'],
    aspectWithPoints: ['bodies', 'points', 'angles'],
    aspectTypes: ["major", "minor"],
    customOrbs: {},
    language: 'en'
  });

  console.log("Your ascendant is: ", horoscope.Ascendant.Sign.label, "and your moon sign is: ", horoscope.CelestialBodies.moon.Sign.label)
  console.log("Have a pleasant day")
}

main()