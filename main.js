const dates = [
    ['01.01.2000', '01.01.2016'],
    ['01.01.2016', '01.08.2016'],
    ['01.11.2015', '01.02.2017'],
    ['17.12.2016', '16.01.2017'],
    ['01.01.2016', '01.01.2016'],
    ['28.02.2015', '13.04.2018'],
    ['28.01.2015', '28.02.2015'],
    ['17.03.2022', '17.03.2023'],
    ['17.02.2024', '17.02.2025'],
];

const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000
const MILLISECONDS_IN_MONTH = MILLISECONDS_IN_DAY * 30
const MILLISECONDS_IN_YEAR = MILLISECONDS_IN_DAY * 365

function normalizeDate(date) {
    const splittedDateByDot = date.split('.')
    const normalizeDate = `${splittedDateByDot[1]}-${splittedDateByDot[0]}-${splittedDateByDot[2]}`
    return normalizeDate
}

function formatResponse({ years, months, totalDays }) {
    let sentence = ''
    if (years > 0) sentence += `${years} year${years > 1 ? 's' : ''}, `
    if (months > 0) sentence += `${months} month${months > 1 ? 's' : ''}, `
    sentence += `total ${totalDays} day${totalDays !== 1 ? 's' : ''}`
    return sentence
}

// IMPROVEMENT: use the month and the year of the two dates to know the difference between two dates
// function monthDifference(date1, date2){
//    getMonth(date)
//}

function outputDate(dates) {

    let firstDate = Date.parse(normalizeDate(dates[0])),
        secondDate = Date.parse(normalizeDate(dates[1])),

        deltaDatesInMilliseconds = Math.abs(firstDate - secondDate),

        // IMPROVEMENT: pass the two dates to a function monthDifference
        // months = monthDifference(date1, date2),
        months = Math.floor(deltaDatesInMilliseconds / MILLISECONDS_IN_MONTH) % 12,

        // IMPROVEMENT: count the total of days in every month, considering that in 
        // leap years february has 29 days
        // leapYear => year % 4 === 0
        totalDays = parseInt(deltaDatesInMilliseconds / MILLISECONDS_IN_DAY),

        // IMPROVEMENT: the number of days in a year depends on if is leap
        years = Math.floor(deltaDatesInMilliseconds / MILLISECONDS_IN_YEAR)

    return formatResponse({ years: years, months: months, totalDays: totalDays })

}