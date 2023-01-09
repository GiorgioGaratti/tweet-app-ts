import {DateTime} from "luxon";
import DateTimeType from "../types/DateTimeType";

// generate local dates with a given offset from UTC 
const createDate: (offsetInMin:number) => DateTimeType = (offsetInMin) => {
    const dateToAssign:DateTime = DateTime.local().toUTC(offsetInMin);
    const dateExit:DateTimeType = {
        // date in ISO format (needed for comparing dates)
        dateISO: dateToAssign.toISO(),
        // date in "hh:mm - gg 'mm' yyyy" string format
        dateFormatted: dateToAssign.toFormat("t - DD") 
    };
    return dateExit;
}

export default createDate;