import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";
import React from "react";

class Mainbody extends React.Component
{
  render(){
  const whatWeWillLearn = "React JS";
  const totalLecture = 3;
  return(
    <div style={{minHeight:"70vh"}}>
      <p>In this courese, we will learn {whatWeWillLearn} by building taskopedia</p>
      <p>Total Lecture : {totalLecture}</p>
      <ul>
        <li>Basic Fondation</li>
        <li>Functional and Class Component</li>
      </ul>
      <div className="container row">Students Enrolled</div>
      <Student experience={2} name="Peter Parker" headshot="https://api.lorem.space/image/face?w=150&h=150">
        <StudentReview/>
      </Student>
      <Student experience={10} name="Ben Parker" headshot="https://api.lorem.space/image/face?w=150&h=152">
         <StudentReview/>
      </Student>
      <Student experience={5} name="May Parker" headshot="https://api.lorem.space/image/face?w=150&h=154">
       
      </Student>

    </div>
  )
}
}

export default Mainbody;