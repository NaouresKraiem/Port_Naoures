# Contact Form Setup Guide

The contact form is now ready to integrate with a backend service. You have two options:

## Option 1: EmailJS (Recommended - Easiest, No Backend Needed)

EmailJS allows you to send emails directly from the frontend without a backend server.

### Quick Visual Guide:

1. **Dashboard Navigation:**
   ```
   EmailJS Dashboard
   ├── Email Services (click here first)
   ├── Email Templates (click here second)
   └── Account → General (click here third for Public Key)
   ```

2. **Where to Find Your IDs:**
   - **Service ID**: Found in "Email Services" page, next to your service name (format: `service_xxxxx`)
   - **Template ID**: Found in "Email Templates" page, next to your template name (format: `template_xxxxx`)
   - **Public Key**: Found in "Account" → "General" tab (format: `xxxxxxxxxxxxx`)

### Setup Steps:

1. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```

2. **Create EmailJS Account:**
   - Go to https://www.emailjs.com/
   - Sign up for a free account (200 emails/month free)

3. **Set up Email Service:**
   - In EmailJS dashboard, click on "Email Services" in the left sidebar
   - Click the "Add New Service" button
   - Choose your email provider (Gmail, Outlook, Yahoo, etc.)
   - Follow the connection steps:
     - For Gmail: You'll need to enable "Less secure app access" or use an App Password
     - For Outlook: Use your email and password
   - After connecting, you'll see your service listed
   - **Copy your Service ID** - it looks like: `service_xxxxxxxxx` (you'll see it next to your service name)

4. **Create Email Template:**
   - In EmailJS dashboard, click on "Email Templates" in the left sidebar
   - Click "Create New Template" button
   - Fill in the template details:
     - **To Email**: Your email address (e.g., `naoures.kraiem@esen.tn`)
     - **From Name**: `{{from_name}}` (this will be replaced with the sender's name)
     - **From Email**: `{{from_email}}` (this will be replaced with the sender's email)
     - **Subject**: `Contact Form: {{from_name}}`
     - **Content**: 
       ```
       You have a new message from your portfolio contact form.
       
       From: {{from_name}}
       Email: {{from_email}}
       
       Message:
       {{message}}
       ```
   - Click "Save" to save your template
   - **Copy your Template ID** - it looks like: `template_xxxxxxxxx` (you'll see it next to your template name in the templates list)

5. **Get Public Key:**
   - In EmailJS dashboard, click on "Account" in the left sidebar
   - Click on "General" tab
   - Scroll down to find "API Keys" section
   - **Copy your Public Key** - it looks like: `xxxxxxxxxxxxx` (a long string of characters)
   - ⚠️ Make sure to copy the **Public Key**, not the Private Key

6. **Update Contact.jsx:**
   - Uncomment the EmailJS code (lines with `emailjs.send`)
   - Replace:
     - `YOUR_SERVICE_ID` with your Service ID
     - `YOUR_TEMPLATE_ID` with your Template ID
     - `YOUR_PUBLIC_KEY` with your Public Key
   - Uncomment the import: `const { default: emailjs } = await import('@emailjs/browser')`

### Troubleshooting: Can't Find Service ID?

**If you can't see the Service ID:**
1. Make sure you've successfully connected an email service
2. The Service ID appears as a code like `service_abc123` next to your service name
3. If you don't see it, try:
   - Refreshing the page
   - Clicking on your service name to view details
   - The ID might be in the service settings/details page

**Example of what you're looking for:**
```
Email Services Page:
┌─────────────────────────────────┐
│ Gmail                            │
│ Service ID: service_abc123xyz    │ ← Copy this
│ Status: Connected ✓              │
└─────────────────────────────────┘

Email Templates Page:
┌─────────────────────────────────┐
│ Contact Form Template            │
│ Template ID: template_xyz789abc  │ ← Copy this
│ Status: Active ✓                 │
└─────────────────────────────────┘

Account → General Page:
┌─────────────────────────────────┐
│ API Keys                         │
│ Public Key: abc123xyz789...     │ ← Copy this
│ Private Key: (hidden)            │
└─────────────────────────────────┘
```

## Option 2: Custom Backend API

If you prefer to use your own backend server:

### Backend Requirements:

Create an API endpoint that accepts POST requests:

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Error message"
}
```

### Example Backend (Node.js/Express):

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'naoures.kraiem@esen.tn',
      subject: `Contact from ${name}`,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### Update Contact.jsx:

Replace the fetch URL in Contact.jsx:
```javascript
const response = await fetch('https://your-backend-api.com/api/contact', {
  // ... rest of the code
})
```

## Current Status

The form is currently set up for **Option 2 (Backend API)**. 

**To use EmailJS instead:**
1. Install EmailJS package
2. Follow EmailJS setup steps above
3. Uncomment the EmailJS code and comment out the fetch code

## Features Included:

✅ Form validation (required fields)
✅ Loading state (shows "Sending..." while submitting)
✅ Success/Error messages
✅ Form reset after successful submission
✅ Disabled button during submission
