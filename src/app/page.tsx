import HomeScreen from "../components/home-screen/HomeScreen"
import AuthScreen from "../components/auth-screen/AuthScreen"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

const page = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  console.log(user)

    return (
      <div>
        {user ?<HomeScreen/>:<AuthScreen/>}
      </div>
    )
  }

export default page
