import { useState } from "react"
import { Button } from "../../global/button"
import { Input } from "../../global/input"

interface LoginFormProps {
    handleOpenForgotPassw: () => void
    handleOpenCreateAcc: () => void
}

export function LoginForm({ handleOpenCreateAcc, handleOpenForgotPassw }: LoginFormProps) {
    const [email, setEmail] = useState("")
    const [passw, setPassw] = useState("")
    
    return (
        <>
            <p className="text-xl font-bold">Faça login em sua conta</p>
            
            <form className="space-y-3">
                <div className="space-y-2">
                <label htmlFor="email" className="text-sm">Digite seu email</label>
                <Input type="email" name="email" placeholder="exemplo@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                
                <div className="space-y-2">
                <label htmlFor="passw" className="text-sm">Digite sua senha</label>
                <Input type="password" name="passw" placeholder="Senha!@#123" value={passw} onChange={(e) => setPassw(e.target.value)}/>
                </div>

                <Button type="submit">
                    Fazer login
                </Button>
            </form>

            <div className="flex items-center justify-between">
                <span className="h-[2px] w-2/5 bg-zinc-500"></span>

                <span className="text-sm">OU</span>

                <span className="h-[2px] w-2/5 bg-zinc-500"></span>
            </div>

            <div className="text-center text-sm space-y-2">
                <Button onClick={handleOpenForgotPassw} variant="textLink">Esqueceu sua senha?</Button>
                <p>Não tem conta? <Button onClick={handleOpenCreateAcc} variant="textLink">Clique aqui.</Button></p>
            </div>
        </>
    )
}