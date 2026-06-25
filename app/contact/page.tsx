"use client"

import { ContactList } from "@/components/common/contact/contactList";
import { ContactForm } from "@/components/common/contact/form";
import Label from "@/components/common/label";
import Nav from "@/components/common/nav";
import Terminal from "@/components/common/terminal";

export default function Contact() {
  return (
    <main className="h-screen bg-[#002b36] text-white p-6 pb-[30vh]">

      <section className="flex border border-[#184b55] rounded-lg overflow-hidden h-full">
        
        <Nav activePage="contact"/>
       
        <div className="flex-1 overflow-auto">
            <Label value="IanMaze/contact" />
            <ContactList />
        
        </div>
      
        <ContactForm />
        
      </section>
      
      <Terminal />

    </main>
  );
}