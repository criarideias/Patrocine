/**
 * Take the difference between the dates and divide by milliseconds per day.
 * Round to nearest whole number to deal with DST.
 */
export function dateDiff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}
