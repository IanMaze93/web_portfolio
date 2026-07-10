"use client";

import { ContactList } from "@/components/contact/contactList";
import { ContactForm } from "@/components/contact/form";
import Label from "@/components/common/label";
import Nav from "@/components/common/nav";
import Terminal from "@/components/common/terminal";

export default function Contact() {
  return (
    <main className="h-screen bg-[black] text-white p-6">
      <section className="xl:flex border border-[#184b55] rounded-lg bg-[#002b36] xl:overflow-hidden xl:h-full">
        <Nav activePage="contact" />

        <div className="xl:flex-1 overflow-auto">
          <Label value="IanMaze/contact" />
          <ContactList />
        </div>

        <ContactForm />
      </section>

      <Terminal />
    </main>
  );
}
