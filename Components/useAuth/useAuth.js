
import { useContext } from "react"
import { authentication } from "../Firebase/Firebaseconfig"

const useAuth=()=>{
    return useContext(authentication)
}
export default useAuth