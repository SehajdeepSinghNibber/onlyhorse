import HomeScreen from "../components/home-screen/HomeScreen"
import AuthScreen from "../components/auth-screen/AuthScreen"

const user = false

const page = () => {
  return (
    <div>
      {user ?<HomeScreen/>:<AuthScreen/>}
    </div>
  )
}

export default page
