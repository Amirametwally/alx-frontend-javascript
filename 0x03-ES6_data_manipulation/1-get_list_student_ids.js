const getListStudentIds = (listStudents) => {
  let listStudentIds = [];
  if ((listStudents instanceof Array)) {
    listStudentIds = listStudents.map((student) => student.id);
    return listStudentIds;
  }
  return listStudentIds;
};

export default getListStudentIds;
