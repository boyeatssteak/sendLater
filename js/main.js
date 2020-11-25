import {
    format,
    addSeconds,
    addHours,
    addDays,
    addYears
} from 'date-fns'

const now = new Date()

/**
 * 05% 1-10 days
 * 10% 10-90 days
 * 35% 3-12 months
 * 35% 1-3 years
 * 10% 4th year
 * 05% 5th year
 */

const rangeOdds = [
    "lessThan10d",
    "between10d90d", "between10d90d",
    "between90d1y", "between90d1y", "between90d1y", "between90d1y", "between90d1y", "between90d1y", "between90d1y",
    "between1y3y", "between1y3y", "between1y3y", "between1y3y", "between1y3y", "between1y3y", "between1y3y",
    "inYear4", "inYear4",
    "inYear5"
]

const ranges = {
    "lessThan10d": {
        "min": addHours(now, 3),
        "max": addDays(now, 10),
    },
    "between10d90d": {
        "min": addDays(now, 10),
        "max": addDays(now, 90),
    },
    "between90d1y": {
        "min": addDays(now, 90),
        "max": addYears(now, 1),
    },
    "between1y3y": {
        "min": addYears(now, 1),
        "max": addYears(now, 3),
    },
    "inYear4": {
        "min": addYears(now, 4),
        "max": addYears(now, 5),
    },
    "inYear5": {
        "min": addYears(now, 5),
        "max": addYears(now, 6),
    },
}

const selectedRange = rangeOdds[Math.floor(Math.random() * rangeOdds.length)]
const rangeInSeconds = format(ranges[selectedRange].max, 't') - format(ranges[selectedRange].min, 't')
const selectedTimeInRange = Math.random() * rangeInSeconds
const selectedDateTime = addSeconds(ranges[selectedRange].min, selectedTimeInRange)

// console.log({
//     'aRangeName': selectedRange,
//     'rangeDates': ranges[selectedRange],
//     'xDate': format(selectedDateTime, 'PPpp')
// })

document.getElementById('today').innerHTML = format(now, 'Pp')
document.getElementById('date').innerHTML = format(selectedDateTime, 'P')
document.getElementById('time').innerHTML = format(selectedDateTime, 'p')
document.getElementById('now').innerHTML = format(now, 'PPpp')

const subject = document.getElementById('subject').textContent
const body = document.getElementById('explanation').textContent
const credits = 'For more info, visit https://letterx.co/apex/send-later/'
const deliverString = 'To be delivered ' + format(selectedDateTime, 'PPpp')
const mailto = 'mailto:?subject=' + subject + '&body=' + body + '%0A' + credits + '%0A' + deliverString
document.getElementById('emailLink').href = mailto