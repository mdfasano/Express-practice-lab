const students = [
    {name: 'Matt', grade: 'B'},
    {name: 'Sam', grade: 'A'},
    {name: 'Will', grade: 'A-'}
]

module.exports = {
    getAll: function () {
        return students;
    },
    getOne: function (name) {
        let namedStudent = null;
        students.forEach(student => {
            if (student.name === name) namedStudent = student;
        });
        if (namedStudent === null) return {name: "not found"};
        else return namedStudent;
    }
}