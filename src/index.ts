#!/usr/bin/env node

import * as prompt from "prompt-promise"
import {getSign} from "horoscope"

const promiseOfADate: Promise<string> = prompt("What is your birthday? Please enter MM.DD.YYYY ")

promiseOfADate.then(function (query: string) {
  const queryMonthAsString: string = query.split(".")[0]
  const queryDayAsString: string = query.split(".")[1]
  const queryMonthAsNumber: number = Number(queryMonthAsString)
  const queryDayAsNumber: number = Number(queryDayAsString)

  console.log("Your sun sign is *.*.*.", getSign({month: queryMonthAsNumber, day: queryDayAsNumber}), ".*.*.*")

}).then(function () {
  prompt.finish();
  })
