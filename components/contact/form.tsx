import { useState } from "react";
import Label from "../common/label";
import { ContactFormLogo } from "./contactLogo";
import { string, object, email } from "zod";

const ContactFormSchema = object({
  name: string()
    .trim()
    .min(1, "Name is required.")
    .max(100, "Name cannot exceed 100 characters."),

  email: email()
    .min(1, "Enter a valid email address.")
    .trim()
    .max(254, "Email cannot exceed 254 characters."),

  message: string()
    .trim()
    .min(1, "Message is required.")
    .max(2000, "Message cannot exceed 2000 characters."),
});

export function ContactForm() {
  const [outputMessage, setOutputMessage] = useState("");
  const [outputColor, setOutputColor] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function submitForm(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const eventData = new FormData(event.currentTarget);

    const result = ContactFormSchema.safeParse({
      name: eventData.get("name"),
      email: eventData.get("email"),
      message: eventData.get("message"),
    });

    if (!result.success) {
      setOutputColor("red");
      setOutputMessage(
        `Invalid input! Name: max 100 chars, Email: valid email, Message: max 2000 chars`
      );
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      if (response.ok) {
        setOutputColor("green");
        setOutputMessage("Message Sent!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setOutputColor("red");
        setOutputMessage("Message Not Sent!");
      }
    } catch (error) {
      setOutputColor("red");
      setOutputMessage("An error occurred while sending the message.");
    }
  }

  return (
    <div className="block border-l border-[#184b55] xl:w-200">
      <Label value="IanMaze/contactForm" />

      <form onSubmit={submitForm} className="p-2">
        <ContactFormLogo />

        <div className="bg-[#001e26] border border-[#184b55] p-5 rounded-lg">
          <p className="font-bold mb-4">
            Name:
            <input
              className="border border-[#184b55] rounded-lg p-1 w-full"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={100}
            />
          </p>

          <p className="font-bold mb-4">
            Email:
            <input
              className="border border-[#184b55] rounded-lg p-1 w-full"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={100}
            />
          </p>

          <p className="font-bold mb-4">
            Message:
            <textarea
              className="flex-1 border border-[#184b55] rounded-lg p-2 w-full h-30"
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </p>

          <button
            className="mx-auto block m-4 border border-[#184b55] rounded-lg w-50 hover:bg-blue-700 active:bg-green-700"
            type="submit"
          >
            Send
          </button>

          <p
            className="text-center font-bold"
            style={{
              color: outputColor,
            }}
          >
            {outputMessage}
          </p>
        </div>
      </form>
    </div>
  );
}
