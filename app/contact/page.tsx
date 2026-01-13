"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { contactInfo, serviceHighlights, repairTypes } from "@/data/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    device: "",
    issue: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Récupération des clés depuis les variables d'environnement
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      device: formData.device,
      issue: formData.issue,
      message: formData.message,
      to_email: "hello.phonix@outlook.com",
    }, publicKey)
      .then(() => {
        toast.success("✓ Merci pour votre message ! Nous vous contacterons bientôt.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          device: "",
          issue: "",
          message: ""
        });
        setIsSubmitting(false);
      })
      .catch(() => {
        toast.error("✗ Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setIsSubmitting(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <ToastContainer />
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light tracking-tight text-neutral-900 mb-6">
            Contactez-nous
          </h1>
          <p className="text-lg font-light text-neutral-600 max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white border border-neutral-200 p-8 mb-8">
              <h2 className="text-2xl font-light text-neutral-900 mb-6 tracking-tight">Informations de contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-100">
                    <Phone className="h-6 w-6 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="font-normal text-neutral-900 mb-1">Téléphone</h3>
                    <p className="text-neutral-600 font-light">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-100">
                    <Mail className="h-6 w-6 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="font-normal text-neutral-900 mb-1">Email</h3>
                    <p className="text-neutral-600 font-light">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-100">
                    <MapPin className="h-6 w-6 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="font-normal text-neutral-900 mb-1">Nos ateliers</h3>
                    <p className="text-neutral-600 font-light">
                      {contactInfo.locations.map((location, index) => (
                        <span key={index}>
                          {location}
                          {index < contactInfo.locations.length - 1 && <br />}
                        </span>
                      ))}
                      <br />
                      <span className="text-sm">{contactInfo.mobileService}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-100">
                    <Clock className="h-6 w-6 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="font-normal text-neutral-900 mb-1">Horaires</h3>
                    <p className="text-neutral-600 font-light">
                      {contactInfo.hours.weekdays}<br />
                      {/* {contactInfo.hours.saturday}<br />
                      {contactInfo.hours.sunday} */}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 p-8 text-white">
              <h3 className="text-2xl font-light mb-4 tracking-tight">Réparation rapide</h3>
              <p className="text-neutral-300 mb-4 font-light">
                La plupart de nos réparations sont effectuées en 20 à 60 minutes. 
                Pas besoin de prendre rendez-vous, venez directement !
              </p>
              <ul className="space-y-2 text-neutral-200 font-light">
                {serviceHighlights.map((highlight, index) => (
                  <li key={index}>✓ {highlight}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white border border-neutral-200 p-8">
            <h2 className="text-2xl font-light text-neutral-900 mb-6 tracking-tight">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-neutral-700 mb-2 uppercase tracking-wide">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 outline-none transition font-light"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-light text-neutral-700 mb-2 uppercase tracking-wide">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 outline-none transition font-light"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-light text-neutral-700 mb-2 uppercase tracking-wide">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 outline-none transition font-light"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="device" className="block text-sm font-light text-neutral-700 mb-2 uppercase tracking-wide">
                  Modèle de téléphone *
                </label>
                <input
                  type="text"
                  id="device"
                  name="device"
                  required
                  value={formData.device}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 outline-none transition font-light"
                  placeholder="iPhone 16 Pro Max..."
                />
              </div>

              <div>
                <label htmlFor="issue" className="block text-sm font-light text-neutral-700 mb-2 uppercase tracking-wide">
                  Type de réparation *
                </label>
                <select
                  id="issue"
                  name="issue"
                  required
                  value={formData.issue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 outline-none transition font-light"
                >
                  {repairTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light text-neutral-700 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 outline-none transition resize-none font-light"
                  placeholder="Décrivez votre problème..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] font-light text-sm tracking-wide uppercase disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
