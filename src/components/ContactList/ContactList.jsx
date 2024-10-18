import { useSelector } from "react-redux"
import { selectContacts } from "../../redux/contactsSlice"
import { selectFilterStr } from "../../redux/filtersSlice"
import s from "./ContactList.module.css"
import Contact from "../Contact/Contact"

const ContactList = () => {
  const contacts = useSelector(selectContacts)
  const filterStr = useSelector(selectFilterStr)

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(filterStr.toLowerCase().trim())
  )

  return (
    <div>
      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={s.card}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList
