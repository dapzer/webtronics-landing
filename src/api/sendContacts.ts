import { ContactForm } from "@/types/ContactForm";
import * as process from "process";

export  const sendContacts = async (data: ContactForm) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback`, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })

  if (response.ok) {
    return true
  } else {
    return false
  }
}
