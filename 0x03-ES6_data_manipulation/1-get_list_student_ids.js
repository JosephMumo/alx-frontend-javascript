export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((n) => n.id);
  }

  return [];
}
