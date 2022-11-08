import React from "react"
import "./contactsList.css"
import Contact from "../Contact/Contact"

export default function ContactsList() {
  const contacts = [
    {
      name: "Amanda",
      about: "Hey there! I am using WhatsApp",
      profilePhoto:
        "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Brandon",
      about: "Hey there! I am using WhatsApp",
      profilePhoto:
        "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Charlotte",
      about: "Hey there! I am using WhatsApp",
      profilePhoto:
        "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    }
  ]

  return (
    <div className="contacts-list">
      <div className="letter-a">
        <div className="letter">A</div>
        <div className="list contacts-a">
          <Contact person={contacts[0]} />
          <Contact person={contacts[0]} />
          <Contact person={contacts[0]} />
        </div>
      </div>
      <div className="letter-a">
        <div className="letter">B</div>
        <div className="list contacts-b">
          <Contact person={contacts[1]} />
        </div>
      </div>
      <div className="letter-a">
        <div className="letter">C</div>
        <div className="list contacts-c">
          <Contact person={contacts[2]} />
        </div>
      </div>
    </div>
  )
}
