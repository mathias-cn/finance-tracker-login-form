import { useState } from "react"
import { Button } from "../../global/button"
import { Input } from "../../global/input"
import { CircleCheck, CircleX } from "lucide-react"

interface CreateFormProps {
  handleShowLogin: () => void
}

export function CreateForm({ handleShowLogin }: CreateFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [passw, setPassw] = useState("")
  const [passwConfirm, setPasswConfirm] = useState("")

  function containsSpecialChars(str: string) {
    const specialChars =
      /[!@#$]/;
    return specialChars.test(str);
  }
  function hasUpperCase(str: string) {
      return str !== str.toLowerCase();
  }
  function hasLowerCase(str: string) {
      return str !== str.toUpperCase();
  }

  return (
      <>
          <p className="text-lg font-bold">Crie sua conta e começe a gerenciar seus gastos</p>
        
          <form className="space-y-3">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm">Digite seu nome de usuário</label>
              <Input  type="text" name="name" placeholder="User123" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm">Digite seu email</label>
              <Input  type="email" name="email" placeholder="exemplo@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="passw" className="text-sm">Digite sua senha</label>
              <Input  type="password" name="passw" placeholder="Senha!@#123" value={passw} onChange={(e) => setPassw(e.target.value)} />
              {passw && (
                <ul className="text-sm text-red-400">
                  <li className={`flex w-full px-0 sm:px-4 items-center justify-start gap-1 sm:gap-2 ${passw.length >= 8 ? "text-lime-400" : ""}`}>
                    <p>A senha deve ter pelo menos 8 caracteres</p>
                    {passw.length >= 8 ? (<CircleCheck className="size-4" />) : (<CircleX className="size-4" />)}
                  </li>
                  <li className={`flex w-full px-0 sm:px-4 items-center justify-start gap-1 sm:gap-2 ${hasLowerCase(passw) ? "text-lime-400" : ""}`}>
                    <p>A senha deve ter pelo menos uma minuscúla</p>
                    {hasLowerCase(passw) ? (<CircleCheck className="size-4" />) : (<CircleX className="size-4" />)}
                  </li>
                  <li className={`flex w-full px-0 sm:px-4 items-center justify-start gap-1 sm:gap-2 ${hasUpperCase(passw) ? "text-lime-400" : ""}`}>
                    <p>A senha deve ter pelo menos uma Maiuscúla</p>
                    {hasUpperCase(passw) ? (<CircleCheck className="size-4" />) : (<CircleX className="size-4" />)}
                  </li>
                  <li className={`flex w-full px-0 sm:px-4 items-center justify-start gap-1 sm:gap-2 ${containsSpecialChars(passw) ? "text-lime-400" : ""}`}>
                    <p>A senha deve ter pelo menos um símbolo (!@#$)</p>
                    {containsSpecialChars(passw) ? (<CircleCheck className="size-4" />) : (<CircleX className="size-4" />)}
                  </li>
                </ul>
              )}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="passwConfirm" className="text-sm">Confirme sua senha</label>
              <Input type="password" name="passwConfirm" placeholder="Senha!@#123" value={passwConfirm} onChange={(e) => setPasswConfirm(e.target.value)} />
              {passw && (passw !== passwConfirm) && (
                <ul className="text-sm text-red-400">
                  <li className={`flex w-full px-0 sm:px-4 items-center justify-start gap-1 sm:gap-2 ${passw === passwConfirm ? "text-lime-400" : ""}`}>
                    <p>As senhas não coincidem</p>
                    <CircleX className="size-4" />
                  </li>
                </ul>
              )}

            </div>

            <Button type="submit">
              Criar conta
            </Button>
          </form>

          <div className="flex items-center justify-between">
            <span className="h-[2px] w-2/5 bg-zinc-500"></span>

            <span className="text-sm">OU</span>

            <span className="h-[2px] w-2/5 bg-zinc-500"></span>
          </div>

          <div className="text-center text-sm space-y-2">

            <p>Já tem uma conta? <Button onClick={handleShowLogin} variant="textLink">Clique aqui.</Button></p>
          </div>
      </>
  )
}