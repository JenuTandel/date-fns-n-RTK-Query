import { format, compareAsc, formatDistance, parse, isDate } from "date-fns";
import { eo, enIN, cs } from "date-fns/locale";

// const a = format(new Date(2014, 1, 11), "dd/MM/yyyy");
// console.log(a);

// const dates = [
//   new Date(1995, 6, 2),
//   new Date(1987, 1, 11),
//   new Date(1989, 6, 10),
// ];
// dates.sort(compareAsc);

// console.log(dates);

// const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
//   locale: eo,
// });

// console.log(result);

const data = format(new Date(2017, 10, 6), "do LLLL", { locale: enIN });
console.log(data);

import { daysInWeek } from "date-fns/constants";

console.log(daysInWeek);

const d = new Date(8640000000000001);
console.log("date", format(d, "dd/MM/yyyy"));

const dd = "2014/02/25";
const f = parse(dd, "yyyy/MM/dd", new Date());
// var f = parse("02/11/2014", "MM/dd/yyyy", new Date());

console.log(f);
const result = isDate(f);
console.log(result);
