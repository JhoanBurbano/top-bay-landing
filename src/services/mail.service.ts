import { Bounce, toast } from "react-toastify";
import { Contact } from "../interfaces/contact.interface";

export async function sendMail(data: Contact): Promise<boolean> {
  const apiKey = import.meta.env.VITE_MAILGUN_API_KEY as string;
  const domainName = import.meta.env.VITE_DOMAIN_NAME as string;
  const url = `https://api.mailgun.net/v3/${domainName}/messages`;
  const recipient = import.meta.env.VITE_MAIL_RECIPIENT as string;
  const html = generateEmailPremiumTemplate(data);
  const formData = new FormData();
  formData.append("from", `${data.name} <${data.email}>`);
  formData.append("to", `Top Cleaning SF <${recipient}>`);
  formData.append("subject", `Contact Form Submission for ${data.service}`);
  formData.append("html", html);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(`api:${apiKey}`)}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    toast('✅ Message sent', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    return true;
  } catch (error) {
    console.error("Error sending message:", error);
    toast('❌ Error sending message, try again', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
      return false;
  }
}


function generateEmailPremiumTemplate(contact: Contact) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #2ea1ff;
      }
      h3 {
        padding: 10px;
        color: #2ea1ff;
        font-weight: bold;
        margin-bottom: 10px;
        background-color: white;
        width: 170px;
        border-radius: 5px;
        font-size: 14px;
        margin-left: auto;
      }
      h1 {
        color: white;
        font-weight: bold;
        margin-top: 0;
      }
      h1 strong {
        color: #ffe359;
      }
      p {
        color: white;

      }

      p strong {
        color: black;
        font-weight: bold;
      }

      p.message {
        background-color: white;
        padding: 10px;
        border-radius: 5px;
        color: black;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h3>Top Bay Area Services</h3>
      <h1>New Contact <strong>Form Submission</strong></h1>
      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Phone:</strong> ${contact.phone}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Service:</strong> ${contact.service}</p>
      <p class="message">${contact.message}</p>
    </div>
  </body>
  </html>
`;
}
