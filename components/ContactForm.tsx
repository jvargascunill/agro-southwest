"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FORMSPREE_URL = "https://formspree.io/f/xykdykve";

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
    <section id="contacto" className="bg-secondary py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t("contact.label")}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-loose text-white/85">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-12 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-white/20 bg-white/5 p-8 shadow-sm backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">
                {t("footer.contact")}
              </h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-white/80">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-white">{t("contact.office")}</p>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary underline"
                    >
                      {t("contact.address")}
                    </a>
                    <p className="mt-1">
                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        {t("contact.viewOnMap")}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                  <a
                    href="mailto:contacto@agrosouthwest.com"
                    className="hover:text-primary"
                  >
                    contacto@agrosouthwest.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                  <a
                    href="tel:+56974265206"
                    className="hover:text-primary"
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
              className="rounded-2xl border border-white/20 bg-white/5 p-8 shadow-sm backdrop-blur-sm"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  >
                    {t("contact.name")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-white/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-white/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-white/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm text-white/70">
                  {t("contact.quoteHint")}
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-secondary shadow-sm transition hover:bg-primary-light disabled:opacity-70"
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
                <p className="mt-4 text-sm text-primary">
                  {t("contact.success")}
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm text-red-400">
                  {t("contact.error")}
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Mapa Oficina */}
        <motion.div
          className="mx-auto mt-14 max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl border border-white/20 overflow-hidden bg-white/5 shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-white/20 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-semibold text-white">{t("contact.office")}</span>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
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
            <p className="px-4 py-2 text-sm text-white/80">
              {t("contact.address")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
