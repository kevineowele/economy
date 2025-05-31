"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis :", form);
    alert("Message envoyé !");
    // Tu peux ici envoyer vers une API ou un backend
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-semibold mb-1" htmlFor="nom">Votre nom <span className="text-red-500">*</span></label>
        <input 
          id="nom"
          name="nom"
          type="text"
          required
          value={form.nom}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Entrez votre nom"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="email">Votre email <span className="text-red-500">*</span></label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="exemple@domaine.com"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="sujet">Sujet</label>
        <input
          id="sujet"
          name="sujet"
          type="text"
          value={form.sujet}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Sujet du message"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="message">Votre message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full border rounded p-2"
          placeholder="Écrivez votre message ici..."
        ></textarea>
      </div>

      <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
        >
          Envoyer le message
        </button>
    </form>
  );
}
