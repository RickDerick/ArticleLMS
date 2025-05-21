import { useState, useEffect } from "react"
import axios from "axios"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useLocation, useNavigate } from "react-router-dom"
import {  Loader2 } from "lucide-react"
import { showSuccess, showError } from "@/utils/toast"
import { useAuth } from "@/context/AuthContext"


const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const {check, settingUser, login, logout} = useAuth()

  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const emailFromQuery = params.get('email')
    if(emailFromQuery){
      setEmail(emailFromQuery)
    }
  }, [location.search])
  
  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
        { email, password }
      )

      const { token, user } = res.data.data
      console.log("checkUser", user)
      console.log("checkToken",token)

      if (token && user ) {
       settingUser(user)
       login(token, user)
      } 
      showSuccess("res.data.data.message")
      navigate("/dashboard")
    } catch (err) {
      showError(err.response?.data?.message || "Login failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100 px-4">
      <Card className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold mb-1">Login</h1>
          <p className="text-gray-500 text-sm">Please enter your details</p>
          {error && <p className="mt-2 text-red-600">{error}</p>}
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email or Username</Label>
            <Input
              id="email"
              type="text"
              placeholder="Enter Email or Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={setRememberMe}
              />
              <Label htmlFor="remember" className="text-sm cursor-pointer">
                Remember Me
              </Label>
            </div>
            <a href="#" className="text-sm text-purple-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
            ):(
              "Login"
            )}
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default LoginPage
