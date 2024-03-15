//Question 01
var students_name =[]

//Question 02
var students_name_obj = new Array()

//Question 03
var string_Arr = ["computer","laptop","desktop","pc","mouse","keybord"]

//Question 04
var number_Arr = [1,2,3,4,5,6]

//Question 05
var Boolean_Arr = [true,false]

//Question 06
var mixed_Arr = ["workstation",100,true,"helloworld",null,200,false]

//Question 07
var qualification_array = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
console.log(qualification_array)

//Question 08
var studentName = []
studentName.push("Ali","Saad","Saif"); //Using declared array above by push method.
var studentsMarks=[281,320,430]
var totalmarks=500
document.write("Score of Ali is ",studentsMarks[0]);
document.write(" Percentage: ",studentsMarks[0]/500*100,"%<br>")
document.write("Score of Saad is ",studentsMarks[1]);
document.write(" Percentage: ",studentsMarks[1]/500*100,"%<br>")
document.write("Score of Saif is ",studentsMarks[2]);
document.write(" Percentage: ",studentsMarks[2]/500*100,"%<br><br>")



//Question 09
var colors = ["yellow", "orange","red","blue","green"]
document.write(colors)



//Question 10
var score_arr = [780,315,440,512,490,695,552,780] //Unsorted Array
var score_arr_sorted = score_arr.sort()
console.log(score_arr_sorted)

//Question 11
var city_Names = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
var seleted_cities = city_Names.slice(2,4)
console.log(city_Names)
console.log(seleted_cities)


//Question 12
var sentence = ["This","is","my","cat"]
var joinsentence = sentence.join(" ");  //The join method takes one parameter in string which is used for
// joining/concatenating the all values of Array, by defeault is comma "," , In this case space is given
console.log(sentence)
console.log(joinsentence)


//Question 13
// First In First Out Rule Using unshift for first-in and pop for first out
console.log("First-In-First-Out")
var storevalues = []
storevalues.unshift("Value 1")
console.log(storevalues)
storevalues.unshift("Value 2")
console.log(storevalues)
storevalues.unshift("Value 3")
console.log(storevalues)
storevalues.unshift("Value 4")
console.log(storevalues)


storevalues.pop()
console.log(storevalues)
storevalues.pop()
console.log(storevalues)
storevalues.pop()
console.log(storevalues)
storevalues.pop()
console.log(storevalues)


//Question 14 
//Last-In-First-Out
console.log(" ")
console.log("Last-In-First-Out")
var storevalue = []
storevalue.push("Object 1")
console.log(storevalue)
storevalue.push("Object 2")
console.log(storevalue)
storevalue.push("Object 3")
console.log(storevalue)
storevalue.push("Object 4")
console.log(storevalue)




storevalue.pop()
console.log(storevalue)
storevalue.pop()
console.log(storevalue)
storevalue.pop()
console.log(storevalue)
storevalue.pop()

