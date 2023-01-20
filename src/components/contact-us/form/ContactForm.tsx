import React from "react";
import styles from "./contact-form.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/components/ui/input/Input";
import { sendContacts } from "@/api/sendContacts";
import { ContactForm } from "@/types/ContactForm";
import { toast } from "react-toastify";

const phoneRegExp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

const contacts = yup.object().shape({
  name: yup.string().min(4).required(),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid").required(),
  email: yup.string().email().required()
});

const field = [
  { field: "name", placeholder: "Name" },
  { field: "phone", placeholder: "Phone" },
  { field: "email", placeholder: "E-mail" }
];


const ContactForm = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm<ContactForm>({ resolver: yupResolver(contacts) });

  const sendForm: SubmitHandler<ContactForm> = (data) => {
    sendContacts(data).then(res => {
      if (res) {
        reset()
        toast.success("Your contacts have been successfully sent")
      } else {
        toast.warning("An error occurred while submitting the form")
      }
    })
  }

  return (
    <form className={styles.body} onSubmit={handleSubmit(sendForm)}>
      <div className={styles.fields}>
        {field.map((el, index) => (
          <Input key={index} {...register(el.field as keyof ContactForm)} type="text" placeholder={el.placeholder}
                 errorMessage={errors[el.field as keyof ContactForm]?.message?.toString()} />
        ))}
      </div>

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
