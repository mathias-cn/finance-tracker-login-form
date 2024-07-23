import { useState } from "react"
import { LoginForm } from "./components/login-form"
import { CreateForm } from "./components/create-form"
import { ForgotForm } from "./components/forgot-form"

export function Login() {
  const [loginOpen, setLoginOpen] = useState(true)
  const [createAccOpen, setCreateAccOpen] = useState(false)
  const [forgotPasswOpen, setForgotPasswOpen] = useState(false)

  function showLogin() {
    setCreateAccOpen(false)
    setLoginOpen(true)
  }
  function showCreateAcc() {
    setLoginOpen(false)
    setForgotPasswOpen(false)
    setCreateAccOpen(true)
  }
  function showForgotPassw() {
    setLoginOpen(false)
    setForgotPasswOpen(true)
  }

  return (
    <div className="p-2 w-full h-screen flex items-center justify-center flex-col gap-4 text-zinc-200 overflow-hidden relative main-bg">
      <img src="/purple-blush.png" alt="Blush" className="absolute top-[-45%] right-[-15%] scale-150" />
      <img src="/purple-blush.png" alt="Blush" className="absolute bottom-[-45%] left-[-15%] scale-125" />
      <img src="/purple-blush.png" alt="Blush" className="absolute top-[-27%] left-[10%] scale-90 opacity-50" />
      <img src="/purple-blush.png" alt="Blush" className="absolute bottom-[-17%] right-[10%] scale-90 opacity-50" />

      <div className="bg-neutral-900 shadow-shape px-4 py-6 sm:p-6 rounded-xl space-y-4 z-10">
        <h1 className="font-bold text-2xl sm:text-4xl text-center">💸 Finance Tracker 💸</h1>
        {loginOpen && (
          <LoginForm
            handleOpenCreateAcc={showCreateAcc}
            handleOpenForgotPassw={showForgotPassw}
          />
        )}

        {createAccOpen && (
          <CreateForm 
            handleShowLogin={showLogin}
          />
        )}

        {forgotPasswOpen && (
          <ForgotForm
            handleOpenCreateAcc={showCreateAcc}
          />
        )}
      </div>
    </div>
  )
}