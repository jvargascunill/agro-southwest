"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Preparado para Formspree: reemplazar YOUR_FORM_ID por el ID de tu formulario
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

const OFFICE_ADDRESS = "Ahumada 131, of 913, Santiago, Chile";
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;
const GOOGLE_MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&z=16&output=embed`;

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("done");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="bg-accent-gray py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark">
            {t("contact.label")}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-secondary/80">
            {t("contact.description")}
          </p>
        </motion.div>

        {/* Mapa Oficina */}
        <motion.div
          className="mx-auto mt-12 max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl border border-accent-gray overflow-hidden bg-white shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-accent-gray bg-accent-gray/30 px-4 py-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary-dark" />
                <span className="font-semibold text-secondary">{t("contact.office")}</span>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary-dark hover:underline"
              >
                {t("contact.viewOnMap")}
              </a>
            </div>
            <div className="aspect-[16/9] w-full min-h-[240px]">
              <iframe
                title={t("contact.office")}
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
            <p className="px-4 py-2 text-sm text-secondary/80">
              {t("contact.address")}
            </p>
          </div>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-12 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-accent-gray bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-secondary">
                {t("footer.contact")}
              </h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-secondary/80">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-primary-dark mt-0.5" />
                  <div>
                    <p className="font-medium text-secondary">{t("contact.office")}</p>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-dark underline"
                    >
                      {t("contact.address")}
                    </a>
                    <p className="mt-1">
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-dark hover:underline"
                      >
                        {t("contact.viewOnMap")}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-secondary/80">
                  <Mail className="h-5 w-5 flex-shrink-0 text-primary-dark" />
                  <a
                    href="mailto:contacto@agrosouthwest.com"
                    className="hover:text-primary-dark"
                  >
                    contacto@agrosouthwest.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-secondary/80">
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary-dark" />
                  <a
                    href="tel:+56974265206"
                    className="hover:text-primary-dark"
                  >
                    +56 9 7426 5206
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-accent-gray bg-white p-8 shadow-sm"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-secondary"
                  >
                    {t("contact.name")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-accent-gray bg-accent-white px-4 py-2.5 text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary"
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border border-accent-gray bg-accent-white px-4 py-2.5 text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-secondary"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-lg border border-accent-gray bg-accent-white px-4 py-2.5 text-secondary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm text-secondary/70">
                  Cotizar / Quote: indique volumen y destino.
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-secondary shadow-sm transition hover:bg-primary-dark disabled:opacity-70"
                >
                  {status === "sending" ? (
                    t("contact.sending")
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t("contact.send")}
                    </>
                  )}
                </button>
              </div>
              {status === "done" && (
                <p className="mt-4 text-sm text-green-600">
                  {t("contact.success")}
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm text-red-600">
                  {t("contact.error")}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
