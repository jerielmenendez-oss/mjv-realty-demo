"use client";

import { useState } from "react";
import { useApp } from "@/lib/context";
import { t } from "@/lib/i18n";
import AnimateIn from "./AnimateIn";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const { lang } = useApp();
  const tr = t(lang);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = tr.contact.required;
    if (!form.email.trim()) {
      e.email = tr.contact.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = tr.contact.invalidEmail;
    }
    if (!form.phone.trim()) e.phone = tr.contact.required;
    if (!form.message.trim()) e.message = tr.contact.required;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((e) => ({ ...e, [field]: undefined }));
    }
  };

  if (submitted) {
    return (
      <AnimateIn direction="none">
        <div className="bg-sea/10 border border-sea/20 rounded-xl p-8 text-center max-w-lg mx-auto">
          <svg
            className="w-12 h-12 text-sea-dark mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="font-serif text-lg font-semibold text-charcoal">
            {tr.contact.success}
          </p>
        </div>
      </AnimateIn>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 max-w-lg mx-auto"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-charcoal/70 mb-1"
        >
          {tr.contact.name}
        </label>
        <input
          id="contact-name"
          type="text"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder={tr.contact.namePlaceholder}
          className="w-full border border-sand-light rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sea/40"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-red-600 mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-charcoal/70 mb-1"
        >
          {tr.contact.email}
        </label>
        <input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder={tr.contact.emailPlaceholder}
          className="w-full border border-sand-light rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sea/40"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-red-600 mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="contact-phone"
          className="block text-sm font-medium text-charcoal/70 mb-1"
        >
          {tr.contact.phone}
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder={tr.contact.phonePlaceholder}
          className="w-full border border-sand-light rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sea/40"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-xs text-red-600 mt-1">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-charcoal/70 mb-1"
        >
          {tr.contact.message}
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder={tr.contact.messagePlaceholder}
          className="w-full border border-sand-light rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sea/40 resize-none"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-600 mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {/* Preferred date/time */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label
            htmlFor="contact-date"
            className="block text-sm font-medium text-charcoal/70 mb-1"
          >
            {tr.contact.preferredDate}
          </label>
          <input
            id="contact-date"
            type="date"
            value={form.preferredDate}
            onChange={(e) => update("preferredDate", e.target.value)}
            className="w-full border border-sand-light rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sea/40"
          />
        </div>
        <div>
          <label
            htmlFor="contact-time"
            className="block text-sm font-medium text-charcoal/70 mb-1"
          >
            {tr.contact.preferredTime}
          </label>
          <input
            id="contact-time"
            type="time"
            value={form.preferredTime}
            onChange={(e) => update("preferredTime", e.target.value)}
            className="w-full border border-sand-light rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-sea/40"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-charcoal text-ivory font-medium rounded-lg hover:bg-charcoal-light transition-colors"
      >
        {tr.contact.submit}
      </button>
    </form>
  );
}
