"use client";

import { useState } from "react";
import Link from "next/link";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setIsError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const payload = {
      name,
      email,
      phone,
      message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || result?.ok === false) {
        throw new Error(
          String(result?.message || result?.error || "Failed to send message."),
        );
      }

      form.reset();
      setStatusMessage("Message sent successfully.");
      setIsError(false);
    } catch (error) {
      const errorText =
        error instanceof Error
          ? error.message
          : "Unable to send right now. Please try again in a moment.";
      setStatusMessage(errorText);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section tekup-section-padding contact-page-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 d-flex align-items-center">
            <div className="tekup-default-content">
              <h2>Let us Build a Smart Infrastructure Together</h2>
              <p>
                Whether you are scaling a data center or optimizing a local
                network, our team is ready to help. Reach out today to discuss
                your equipment needs or schedule a consultation with our
                technical experts.
              </p>
              <div className="tekup-contact-info-wrap wrap2">
                <div className="tekup-contact-info mb-0">
                  <i className="ri-mail-fill"></i>
                  <h5>Contact</h5>
                  <Link href="mailto:Sales@ProtekSolutions.ca">
                    Sales@ProtekSolutions.ca
                  </Link>
                  <Link href="tel:+19053300671">905-330-0671</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 offset-xl-1 col-lg-6">
            <div className="tekup-main-form">
              <h3>Fill The Contact Form</h3>
              <p>Feel free to contact us. We do not spam your email.</p>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tekup-main-field">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="tekup-main-field">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="tekup-main-field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="tekup-main-field">
                      <textarea
                        name="message"
                        placeholder="Write your message"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <button
                      id="tekup-main-form-btn"
                      className="contact-page-send-btn"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}{" "}
                      <i className="ri-arrow-right-up-line"></i>
                    </button>
                    {statusMessage ? (
                      <p
                        style={{
                          marginTop: "12px",
                          marginBottom: 0,
                          color: isError ? "#c62828" : "#2e7d32",
                        }}
                      >
                        {statusMessage}
                      </p>
                    ) : null}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
