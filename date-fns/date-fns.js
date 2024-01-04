import { format, compareAsc, formatDistance } from "date-fns";
import { eo } from "date-fns/locale";

const a = format(new Date(2014, 1, 11), "dd/MM/yyyy");
console.log(a);

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
];
dates.sort(compareAsc);

console.log(dates);

const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
  locale: eo,
});

console.log(result);

//constants
import { maxTime, minTime } from "date-fns/constants";

function isAllowedTime(time) {
  console.log(maxTime, minTime);
  return time <= maxTime && time >= minTime;
}

const t = isAllowedTime(10);
console.log(t);
