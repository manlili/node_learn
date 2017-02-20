function print () {
	this.list = function (student) {
		for (var i=0 ; i< student.length ; i++) {
			console.log("学生姓名:"+student[i])
		}
	}
}
module.exports = print;