import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import emailjs from "emailjs-com";

function Formulaire() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    message: "",
  });

  const [isChecked, setIsChecked] = useState(false); // État pour la case RGPD

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification de la case RGPD
    if (!isChecked) {
      alert(
        "Vous devez accepter la politique de confidentialité pour continuer."
      );
      return;
    }

    emailjs
      .send(
        "service_65z09m9", // Remplace par ton Service ID EmailJS
        "template_0atnv1t", // Remplace par ton Template ID EmailJS
        formData, // Les données du formulaire
        "3cQRG2gAjc0Cmbs50" // Remplace par ton User ID EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Votre message a été envoyé avec succès !");
          setFormData({
            name: "",
            address: "",
            email: "",
            message: "",
          });
          setIsChecked(false); // Réinitialisation de la case RGPD
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Échec de l'envoi. Veuillez réessayer.");
        }
      );
  };

  return (
    <Container className="mt-5">
      {/* Titre */}
      <h2 className="text-center">Nous Contacter</h2>

      {/* Trait centré */}
      <div className="d-flex justify-content-center my-3">
        <hr style={{ width: "100px", borderTop: "3px solid #007bff" }} />
      </div>

      {/* Texte descriptif */}
      <p className="text-center text-muted">
        Si vous avez des questions ou souhaitez plus d'informations, n'hésitez
        pas à nous envoyer un message via ce formulaire.
      </p>

      {/* Formulaire */}
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group controlId="formName">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Entrez votre nom complet"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            maxLength={50}
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Adresse</Form.Label>
          <Form.Control
            type="text"
            placeholder="123 Rue Principale, Québec, QC"
            name="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            maxLength={50}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            size="sm"
            type="email"
            placeholder="exemple@domaine.com"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            maxLength={50}
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Votre message ici"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </Form.Group>

        {/* RGPD : Case à cocher */}
        <Form.Group controlId="formCheckbox" className="mt-3">
          <Form.Check
            type="checkbox"
            label="J'accepte la politique de confidentialité"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            required
          />
        </Form.Group>

        {/* Bouton Soumettre */}
        <div className="text-center mt-3">
          <Button variant="success" type="submit">
            Soumettre
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Formulaire;
