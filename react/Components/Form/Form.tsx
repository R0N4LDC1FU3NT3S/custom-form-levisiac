import React, { useState } from 'react'
import { Input, Checkbox, Button } from 'vtex.styleguide';
import { useCssHandles } from 'vtex.css-handles'

import { useMutation } from "@apollo/client";

import CREATE_DOCUMENT from '../../services/graphql/createDocument'



const Form = () => {

  const CSS_HANDLES = ["fieldName", "fieldEmail", "fieldDate", "fieldAgreement", "btnContainer", "btnSend", "notice"];
  const handles = useCssHandles(CSS_HANDLES);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [agreement, setAgreement] = useState(false)

  const [notSend, setNotSend] = useState("")

  const [addRegister, { data, loading, error }] = useMutation(CREATE_DOCUMENT);

  const handleSend = (e: any) => {
    e.preventDefault();
    if ((name && email && date && agreement) !== "") {
      console.log({
        name,
        email,
        date,
        agreement
      })
      console.log({ data, loading, error })
      addRegister({
        variables: {
          acronym: "UI",
          document: {
            "fields": [
              {
                "key": "fullName",
                "value": name
              },
              {
                "key": "emailAddress",
                "value": email
              },
              {
                "key": "dateOfBirth",
                "value": date
              },
              {
                "key": "agreement",
                "value": agreement
              }
            ]
          }
        }
      })
      setNotSend("")
    } else {
      setNotSend("ingrese todos los campos")
    }
  }

  if (data && (name && email && date && agreement) !== "") {
    setName("")
    setEmail("")
    setDate("")
    setAgreement(false)
    alert("Se ha guardado correctamente")
  }

  return (
    <form className={handles.form} >
      <div className="mb5">
        <Input className={handles.fieldName} placeholder="Ingresa tu nombre completo" size="small" label="Nombre completo" value={name} onChange={(e: any) => setName(e.target.value)} required />
      </div>
      <div className="mb5">
        <Input className={handles.fieldEmail} placeholder="Ingresa tu email" size="small" label="Email" type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} required />
      </div>
      <div className="mb5">
        <Input className={handles.fieldDate} placeholder="" size="small" label="Fecha de nacimiento" type="date" value={date} onChange={(e: any) => setDate(e.target.value)} required />
      </div>
      <div className="mb3">
        <Checkbox
          className={handles.fieldAgreement}
          checked={agreement}
          id="option-0"
          label="Quisero registrarme, enterarme de nuevas colecciones, ofertas, novedades y mas."
          name="default-checkbox-group"
          onChange={() => setAgreement(!agreement)}
          value="option-0"
        />
      </div>

      {loading && <h1 className={handles.notice}>Loading...</h1>}
      {notSend && <h1 className={handles.notice}>{notSend}</h1>}
      {error && <h1 className={handles.notice}>Se ha presentado un error al enviar los datos</h1>}


      <span className={handles.btnContainer} style={{
        "marginTop": "20px",
        "display": "flex",
        "justifyContent": "center"
      }}>
        <Button className={handles.btnSend} variation="primary" onClick={handleSend} type="submit"> Enviar</Button>
      </span>

    </form >
  )
}

export default Form

