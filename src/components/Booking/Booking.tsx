import React, { useState, useEffect } from "react";
import "./Booking.css";

const Booking: React.FC = () => {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    tel: "",
    email: "",
  });
  const [errors, setErrors] = useState<{ tel?: string }>({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (success) {
      timer = setTimeout(() => setSuccess(false), 5000);
    }
    return () => clearTimeout(timer);
  }, [success]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    let valid = true;
    let newErrors: { tel?: string } = {};
    if (!/^\+?\d*$/.test(form.tel)) {
      newErrors.tel =
        "Le numéro doit contenir uniquement des chiffres ou le signe +.";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    if (validate()) {
      setSuccess(true);
      setForm({ nom: "", prenom: "", tel: "", email: "" });
    }
  };

  return (
    <section id="booking" className="booking">
      <div className="booking-content">
        <h2 className="booking-title">Réservez Votre Table !</h2>
        <p className="booking-desc">
          Réservez dès maintenant votre table pour une expérience caféinée
          inoubliable en compagnie de nos adorables chats. Plongez dans
          l'ambiance apaisante de Café Chatouille et laissez-vous séduire par
          nos délices caféinés et nos compagnons félins. Réservez dès
          aujourd'hui et préparez-vous à vivre un moment magique de détente et
          de plaisir.
        </p>
      </div>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-form-row">
          <div className="booking-form-group">
            <label>Nom*</label>
            <input
              name="nom"
              type="text"
              required
              value={form.nom}
              onChange={handleChange}
            />
          </div>
          <div className="booking-form-group">
            <label>Prénom*</label>
            <input
              name="prenom"
              type="text"
              required
              value={form.prenom}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="booking-form-row">
          <div className="booking-form-group">
            <label>N° de téléphone*</label>
            <input
              name="tel"
              type="tel"
              required
              value={form.tel}
              onChange={handleChange}
              pattern="^\+?\d*$"
            />
            {errors.tel && <span className="booking-error">{errors.tel}</span>}
          </div>
          <div className="booking-form-group">
            <label>Adresse email*</label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="booking-form-actions">
          <button type="submit" className="booking-btn">
            Réserver
          </button>
        </div>
        {success && (
          <div className="booking-success">
            Votre réservation a bien été prise en compte !
          </div>
        )}
      </form>
    </section>
  );
};

export default Booking;
