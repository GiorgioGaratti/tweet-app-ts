import {DateTime} from "luxon";
import DateTimeType from "../types/DateTimeType";

// return an object containing the date in two formats: one for comparisons - one for displaying date
const createDate = (offsetInMin: number): DateTimeType => {
    // generate local dates with a given offset from UTC 
    const dateToAssign: DateTime = DateTime.local().toUTC(offsetInMin);
    const dateExit: DateTimeType = {
        // date in ISO format (needed for comparing dates)
        dateISO: dateToAssign.toISO(),
        // date in "hh:mm - gg 'mm' yyyy" string format
        dateFormatted: dateToAssign.toFormat("t - DD") 
    };
    return dateExit;
}

export default createDate;