import { useState } from "react"
import { Button } from "../../global/button"
import { Input } from "../../global/input"

interface ForgotFormProps {
  handleOpenCreateAcc: () => void
}

export function ForgotForm({ handleOpenCreateAcc }: ForgotFormProps) {
  const [email, setEmail] = useState("")

  return (
      <>
          <p className="text-lg font-bold">Digite seu email que enviaremos um link para redefinir sua senha</p>
        
          <form className="space-y-3">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm">Digite seu email</label>
              <Input type="email" name="email" placeholder="exemplo@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <Button type="submit">
              Enviar link
            </Button>
          </form>

          <div className="flex items-center justify-between">
            <span className="h-[2px] w-2/5 bg-zinc-500"></span>

            <span className="text-sm">OU</span>

            <span className="h-[2px] w-2/5 bg-zinc-500"></span>
          </div>

          <div className="text-center text-sm space-y-2">
            <Button onClick={handleOpenCreateAcc} variant="textLink" >
              Criar conta
            </Button>
          </div>
      </>
  )
}