import { useState } from 'react'
import { Image } from "semantic-ui-react"
import "./Auth.scss";
import { AuthOptions, LoginForm, RegisterForm } from "../../components/Auth";
import { logoNameWhite } from "../../assets";

export function Auth() {
  const [typeForm, setTypeForm] = useState(null);

  const openLogin = () => setTypeForm("login");
  const openRegister = () => setTypeForm("register");
  const goBack = () => setTypeForm(null);

  const renderForm = () => {
    if(typeForm === "login"){
      return <LoginForm openRegister={openRegister}
      goBack={goBack} />
    }

    if(typeForm === "register"){
      return <RegisterForm
      openLogin={ openLogin }
      goBack={ goBack }
       />
    }

    return <AuthOptions 
    openLogin={ openLogin }
    openRegister={ openRegister }
    />
  }

  return (
    <div className= "auth">
        <div className="auth__content"> 
            <Image 
            src={ logoNameWhite }
            alt= "musicfy"
            className="auth__content-logo"
            />

          {renderForm()}

        </div>
    </div>
  )
}
