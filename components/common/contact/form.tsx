import { useState } from "react";
import Label from "../label";

export function ContactForm() {
    const [outputMessage, setOutputMessage] = useState("");
    const [outputColor, setOutputColor] = useState("");

    function submitForm(event:
        React.SubmitEvent<HTMLFormElement>) {
            event.preventDefault();

            const formData = new FormData(event.currentTarget);

            const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            };

            console.log(data);

            setOutputColor('green');
            setOutputMessage('Message Sent!')
        
    }

    return (
        <div className="block border-l border-[#184b55] w-200">

            <Label 
                value="IanMaze/contactForm"
            />

            <form onSubmit={submitForm}
                className="p-2">

                    <h1 className="text-4xl font-bold text-center m-10">Contact Form</h1>

                    <div className="bg-[#001e26] border border-[#184b55] p-5 rounded-lg">
                        <p className="font-bold mb-4">Name:
                            <input className="border border-[#184b55] rounded-lg p-1 w-full" name="name" placeholder="Your Name"/>
                        </p>

                        <p className="font-bold mb-4">Email: 
                            <input className="border border-[#184b55] rounded-lg p-1 w-full" name="email" placeholder="Your Email" />
                        </p>

                        <p className="font-bold mb-4">Message:
                            <textarea className="flex-1 border border-[#184b55] rounded-lg p-2 w-full h-30" name="message" placeholder="Your Message" />
                        </p>

                        <button className="mx-auto block m-4 border border-[#184b55] rounded-lg w-50 hover:bg-blue-700 active:bg-green-700" type="submit">Send</button>

                        <p className="text-center font-bold" style={{
                            color:outputColor
                        }}>{outputMessage}</p>
                    </div>
                    
                </form>

        </div>
    );
}