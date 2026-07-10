"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FormField, Input } from "@/components/ui/form-field";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setStatus("Please complete the required fields.");
      form.reportValidity();
      return;
    }
    form.reset();
    setStatus("Demo enquiry captured locally. No data has been sent or stored.");
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Name"><Input name="name" required /></FormField>
        <FormField label="Organisation"><Input name="organisation" /></FormField>
        <FormField label="Email"><Input name="email" type="email" required /></FormField>
        <FormField label="Telephone"><Input name="telephone" /></FormField>
        <FormField label="Project sector"><Input name="sector" placeholder="Healthcare, commercial..." required /></FormField>
        <FormField label="Project location"><Input name="location" /></FormField>
        <FormField label="Estimated construction value"><Input name="value" placeholder="e.g. £500k-£1m" /></FormField>
        <FormField label="Project stage"><Input name="stage" placeholder="Feasibility, tender, construction..." /></FormField>
      </div>
      <label className="block text-sm font-bold text-nexa-silver">
        Required services
        <textarea name="services" className="mt-2 min-h-24 w-full rounded-md border border-white/10 bg-white/[0.055] p-3 text-white" />
      </label>
      <label className="block text-sm font-bold text-nexa-silver">
        Message
        <textarea name="message" required className="mt-2 min-h-32 w-full rounded-md border border-white/10 bg-white/[0.055] p-3 text-white" />
      </label>
      <Button type="submit">Submit demo enquiry</Button>
      {status ? <p className="text-sm font-bold text-nexa-light-cyan">{status}</p> : null}
    </form>
  );
}
