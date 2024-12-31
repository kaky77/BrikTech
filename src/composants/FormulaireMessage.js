import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    message: "",
  });

  const [isChecked, setIsChecked] = useState(false); // Privacy Policy
  const [errors, setErrors] = useState({}); // Errors state
  const [isSent, setIsSent] = useState(false); // Success state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "A valid email address is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    if (!isChecked) newErrors.privacy = "You must accept the privacy policy.";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Sending email using EmailJS
    emailjs
      .send(
        "service_thbyfk5", // Service ID
        "template_ruhrt48", // Template ID
        formData,
        "j7ZAbaBm-17rRiIxk" // Public Key
      )
      .then(
        (response) => {
          //console.log("SUCCESS!", response.status, response.text);
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
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <Container className="mt-5">
      {/* Title */}
      <h2 className="text-center">Contact Us</h2>
      <hr
        style={{
          width: "100px",
          borderTop: "3px solid #007bff",
          margin: "auto",
        }}
      />

      {/* Success Message */}
      {isSent && (
        <p className="text-success text-center mt-3">
          Your message has been sent successfully!
        </p>
      )}

      {/* Form */}
      <Form onSubmit={handleSubmit} className="mt-4">
        {/* First Name */}
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <Form.Text className="text-danger">{errors.firstName}</Form.Text>
          )}
        </Form.Group>

        {/* Last Name */}
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <Form.Text className="text-danger">{errors.lastName}</Form.Text>
          )}
        </Form.Group>

        {/* Address */}
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="123 Main Street, Toronto, ON, Canada"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && (
            <Form.Text className="text-danger">{errors.address}</Form.Text>
          )}
        </Form.Group>

        {/* Email */}
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <Form.Text className="text-danger">{errors.email}</Form.Text>
          )}
        </Form.Group>

        {/* Message */}
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Write your message here"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <Form.Text className="text-danger">{errors.message}</Form.Text>
          )}
        </Form.Group>

        {/* Privacy Policy Checkbox */}
        <Form.Group controlId="formPrivacy" className="mt-3">
          <Form.Check
            type="checkbox"
            label="I accept the privacy policy"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          {errors.privacy && (
            <Form.Text className="text-danger">{errors.privacy}</Form.Text>
          )}
        </Form.Group>

        {/* Submit Button */}
        <div className="text-center mt-4 mb-5">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default ContactForm;
