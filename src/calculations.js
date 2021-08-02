import dayjs from "dayjs";

function calculateBiorhythm(bDate, targetDate, cycle) {
    const bDay = dayjs(bDate).startOf('day');
    const tDay = dayjs(targetDate).startOf('day');
    const diff = tDay.diff(bDay, 'days');

    return Math.sin(2 * Math.PI * diff / cycle);
}

export function calculateBiorhythms(bDate, targetDate) {
   return {
        date: targetDate,
        physical: calculateBiorhythm(bDate, targetDate, 23),
        emotional: calculateBiorhythm(bDate, targetDate, 28),
        intellectual: calculateBiorhythm(bDate, targetDate, 33),
    }
}


export function calculateBiorhythmSeries(bDate, startDate, size) {
    const series = [];

    const startDay = dayjs(startDate).startOf('day');
    for (let i = 0; i < size; i++) {
     const targetDay = startDay.add(i, 'days').toISOString();
     series.push(calculateBiorhythms(bDate, targetDay));
    }

    return series;
 }