"use client"

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

const OtpForm = ({ email, isLoading, onSubmit }) => {
  const handleOtpSubmit = (otp) => {
    if (otp.length === 6) {
      onSubmit(otp)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1 text-center">Verify OTP</h1>
      <p className="text-sm text-gray-500 text-center mb-6">
        Enter the OTP sent to your email
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="otp">OTP</Label>
          <InputOTP
            id="otp"
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            disabled={isLoading}
            onChange={handleOtpSubmit}
            autoFocus
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button
          type="submit"
          className="w-full bg-purple-700 hover:bg-purple-800 mt-4"
          disabled={isLoading}
          onClick={() => handleOtpSubmit(document.querySelector('input').value)}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Verify OTP"
          )}
        </Button>
      </form>
    </div>
  )
}

export default OtpForm