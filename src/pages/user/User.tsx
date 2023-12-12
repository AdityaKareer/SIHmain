import Single from "../../components/single/Single"
import { singlePatient } from "../../data"
import "./user.scss"

const User = () => {

  //Fetch data and send to Single Component
  
  return (
    <div className="user">
      <Single {...singlePatient}/>
    </div>
  )
}

export default User