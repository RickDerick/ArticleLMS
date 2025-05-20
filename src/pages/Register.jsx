"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"
import { Eye, EyeOff } from "lucide-react"
import axios from "axios"

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [passwordError, setPasswordError] = useState("")
  const [showPassword, setShowPassword]= useState(false)
  const [showConfirmPassword,setShowConfirmPassword]= useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear password error when user types in either password field
    if (name === "password" || name === "confirmPassword") {
      setPasswordError("")
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match")
      return
    }

    // Validate password length
    if (formData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters")
      return
    }
    const {confirmPassword, ...dataToSubmit}= formData;
    // console.log("Registration attempt with:", { ...dataToSubmit})
    try {
       const res = await axios.post( `${process.env.REACT_APP_API_BASE_URL}/auth/register`, dataToSubmit)
       console.log('checkRes', res)
    } catch (error) {
        console.error("Registration failed:", error.response?.data || error.message)
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
          <h2 className="text-2xl font-bold mb-2">Join ABC Library Management System</h2>
          <p className="text-sm opacity-90 mb-6">
            Create an account to access thousands of books and educational resources.
          </p>
          <div className="flex justify-center space-x-2">
            {dots.map((dot, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Registration form */}
      <div className="w-full md:w-1/2 p-8 flex items-center">
        <div className="w-full max-w-md mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-1">Create Account</h1>
            <p className="text-gray-500 text-sm">Please fill in your information</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2 relative">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="pr-10"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                    tabIndex={-1}
                >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>

            <div className="space-y-2 relative">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="pr-10"
            />
            <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                tabIndex={-1}
            >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>

            {passwordError && (
                <div className="flex items-center text-red-500 text-sm mt-1">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>{passwordError}</span>
                </div>
            )}
            </div>


            <div className="flex items-center space-x-2 mt-4">
              <Checkbox id="terms" checked={agreeToTerms} onCheckedChange={setAgreeToTerms} required />
              <Label htmlFor="terms" className="text-sm cursor-pointer">
                I agree to the{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Privacy Policy
                </a>
              </Label>
            </div>

            <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 mt-6" disabled={!agreeToTerms}>
              Create Account
            </Button>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="login" className="text-purple-600 hover:underline">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Card>
  )
}

export default RegisterPage
