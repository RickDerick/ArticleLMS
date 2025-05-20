import { useState } from "react"
import axios from "axios"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [error, setError] = useState("")          
  const [loading, setLoading] = useState(false)   

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
        {
          email,      
          password,
          rememberMe, 
        }
      )

      const { token, user } = res.data

      // Save token (in localStorage or sessionStorage)
      if (rememberMe) {
        localStorage.setItem("authToken", token)
      } else {
        sessionStorage.setItem("authToken", token)
      }

      // Optionally, save user info
      localStorage.setItem("user", JSON.stringify(user))

      // Redirect or show success (example: navigate to dashboard)
      // window.location.href = "/dashboard"  // or use react-router navigate

      alert("Login successful!") // Simple success message for now

    } catch (err) {
      // Handle error (show message)
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message)
      } else {
        setError("Login failed. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  const dots = [0, 1, 2]

  return (
    <Card className="w-full max-w-4xl overflow-hidden rounded-xl p-0 flex flex-col md:flex-row shadow-lg">
      {/* Left side - Image and welcome text */}
      <div className="relative w-full md:w-1/2 bg-gradient-to-br from-amber-400 to-amber-600 text-white">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Login%20screens.PNG-3nkSA1e0LPK1LJMdaPji3GFuMqeKjr.png"
          alt="Library illustration"
          className="w-full h-full object-cover absolute inset-0 mix-blend-overlay opacity-90"
        />
        <div className="relative z-10 flex flex-col h-full p-6 justify-end pb-12">
          <h2 className="text-2xl font-bold mb-2">Welcome to ABC Library Management System</h2>
          <p className="text-sm opacity-90 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
          </p>
          <div className="flex justify-center space-x-2">
            {dots.map((dot, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full ${activeSlide === index ? "bg-white" : "bg-white/50"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full md:w-1/2 p-8 flex items-center">
        <div className="w-full max-w-md mx-auto">
          <div className="mb-8">
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
                <Checkbox id="remember" checked={rememberMe} onCheckedChange={setRememberMe} />
                <Label htmlFor="remember" className="text-sm cursor-pointer">
                  Remember Me
                </Label>
              </div>
              <a href="#" className="text-sm text-purple-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
      </div>
    </Card>
  )
}

export default LoginPage
