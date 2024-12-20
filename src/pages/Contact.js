import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import emailjs from "emailjs-com";

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    message: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.address.trim())
      newErrors.address =
        "Address is required. Example: 123 Main Street, Toronto, ON, Canada.";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "A valid email address is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    if (!isChecked) newErrors.rgpd = "You must accept the privacy policy.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    emailjs
      .send(
        "service_65z09m9",
        "template_0atnv1t",
        formData,
        "3cQRG2gAjc0Cmbs50"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSent(true);
          setErrors({});
          setFormData({
            firstName: "",
            lastName: "",
            address: "",
            email: "",
            message: "",
          });
          setIsChecked(false);
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Message sending failed. Please try again.");
        }
      );
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Contact Us</h2>
      <hr
        style={{
          width: "100px",
          borderTop: "3px solid #007bff",
          margin: "auto",
        }}
      />

      {isSent && (
        <p className="text-success text-center mt-3">
          Your message has been sent successfully!
        </p>
      )}

      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && (
            <Form.Text className="text-danger">{errors.firstName}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && (
            <Form.Text className="text-danger">{errors.lastName}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="123 Main Street, Toronto, ON, Canada"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          {errors.address && (
            <Form.Text className="text-danger">{errors.address}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@domain.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <Form.Text className="text-danger">{errors.email}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Write your message here"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && (
            <Form.Text className="text-danger">{errors.message}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="formRGPD" className="mt-3">
          <Form.Check
            type="checkbox"
            label="I accept the privacy policy"
            checked={isChecked}
            onChange={handleCheckboxChange}
            required
          />
          {errors.rgpd && (
            <Form.Text className="text-danger">{errors.rgpd}</Form.Text>
          )}
        </Form.Group>

        <div className="text-center mt-4 mb-5">
          <Button variant="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default ContactPage;
