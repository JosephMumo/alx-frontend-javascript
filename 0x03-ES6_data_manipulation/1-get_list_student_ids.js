export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return lst.map((n) => n.id);
  }

  return [];
}
