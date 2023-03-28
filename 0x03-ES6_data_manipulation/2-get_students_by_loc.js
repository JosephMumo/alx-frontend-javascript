export default function getStudentsByLocation(arr, city) {
  return arr.filter((n) => n.location === city);
}
