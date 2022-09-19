export const getApiJson = async (url, token) => {

  let response = undefined;

  if (token) {

    response = await fetch(url, {

      method: 'GET',

      headers: {

        'Content-type': 'application/json',

        'Authorization': `Bearer ${token}`

      }

    })

  } else {

    response = await fetch(url)

  }

  const responseJson = await response.json()

  return responseJson

}

export const getNoDays = (month, year) => {

  switch (month) {
    case 1:
      if (year) {

        if (year % 4 === 0) {

          return 29

        } else {

          return 28

        }

      } else {

        return 28

      }


    case 4:
    case 0:
    case 2:
    case 6:
    case 7:
    case 9:
    case 11:
      return 31
        ;

    case 3:
    case 5:
    case 8:
    case 10:
      return 30
        ;

    default:
      ;
  }

}

export const secondstoTimeStr = (number, x) => {

  let answer = number / 3600

  const hour = Math.floor(answer)

  answer = answer - hour

  answer = answer * 60

  const minute = Math.floor(answer)

  answer = answer - minute

  answer = answer * 60

  const second = Math.floor(answer)

  let stamp = hour >= 12 ? `pm` : `am`

  const newMinute = String(minute).length === 2 ? minute : `0${minute}`

  let newHour = hour > 12 ? (hour - 12) : hour

  newHour = hour === 0 ? 12 : newHour

  stamp = hour === 24 ? `am` : stamp

  return x === undefined ?
    `${newHour}:${newMinute}${stamp}` :
    `${newHour}:${newMinute}:${second}${stamp}`
}

export const timeListToMilSeconds = (theList) => {

  theList.map((a) => {
    return isNaN(parseInt(a)) ? a : parseInt(a)
  })

  let milliSec = 0

  if (theList.length === 3) {

    milliSec += theList[0] * 60 * 60 * 1000

    milliSec += theList[1] * 60 * 1000

    milliSec += theList[2] * 1000

  } else {

    let hr

    if (theList[3] === 'am') {
      if (theList[0] === 12) {
        hr = 0
      } else {
        hr = theList[0]
      }
    } else {
      if (theList[0] === 12) {
        hr = 24
      } else {
        hr = theList[0] + 12
      }
    }

    milliSec += hr * 60 * 60 * 1000

    milliSec += theList[1] * 60 * 1000

    milliSec += theList[2] * 1000

  }

  const returnValue = milliSec

  return returnValue
}

export const secondstoTimeList = (number) => {

  let answer = number / 3600

  const hour = Math.floor(answer)

  answer = answer - hour

  answer = answer * 60

  const minute = Math.floor(answer)

  answer = answer - minute

  answer = answer * 60

  const second = Math.floor(answer)

  return [hour, minute, second]
}

export const timetoSeconds = (theDate) => {
  const dateArray = [
    theDate.getHours() * 3600,
    theDate.getMinutes() * 60,
    theDate.getSeconds()
  ]

  let answer = 0

  for (const item of dateArray) {
    answer += item
  }

  return answer
}

export const getMonth = (number) => {

  switch (number) {
    case 0:
      return 'January'
        ;

    case 1:
      return 'February'
        ;

    case 2:
      return 'March'
        ;

    case 3:
      return 'April'

    case 4:
      return 'May'

    case 5:
      return 'June'

    case 6:
      return 'July'

    case 7:
      return 'August'

    case 8:
      return 'September'

    case 9:
      return 'October'

    case 10:
      return 'November'

    case 11:
      return 'December'

    default: break;
  }

}

export const getMonthNumber = (month) => {
  const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december',]

  return months.indexOf(month.trim().toLocaleLowerCase())
}

export const addDateSuffix = (dateX) => {

  let date = dateX.toString()

  if (['11', '12', '13'].indexOf(date) !== -1) {
    date = date + 'th'
  } else if (date[date.length - 1] > '3') {
    date = date + 'th'
  } else if (date[date.length - 1] === '0') {
    date = date + 'th'
  } else if (date[date.length - 1] === '1') {
    date = date + 'st'
  } else if (date[date.length - 1] === '2') {
    date = date + 'nd'
  } else if (date[date.length - 1] === '3') {
    date = date + 'rd'
  }

  if (isNaN(parseInt(dateX))) { return dateX } else { return date }
}

export const getDayNumber = (day) => {

  const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednessday',
    'thursday',
    'friday',
    'saturday'
  ]

  return days.indexOf(day.trim().toLocaleLowerCase())

}

export const getDay = (number) => {

  const num = parseInt(number)

  const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednessday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  }

  return days[num]

}

export const datetoTimeStr = (theDate) => {

  const acSeconds = timetoSeconds(theDate)

  const acTime = secondstoTimeStr(acSeconds)

  return acTime

}

export const datetoDateStr = (theDate) => {

  return `${addDateSuffix(theDate.getDate())} of ${getMonth(theDate.getMonth())}, ${theDate.getFullYear()}`

}

export const datetoDateSlash = (theDate) => {

  return `${theDate.getDate()}/${theDate.getMonth() + 1}/${theDate.getFullYear().toString().substr(2)}`

}

export const capitalize = (str) => {

  return str.charAt(0).toLocaleUpperCase() + str.slice(1);

}