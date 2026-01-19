# Verify Your EmailJS Credentials

## Fix Gmail Authentication Error (412: Insufficient authentication scopes)

If you're getting `412 Gmail_API: Request had insufficient authentication scopes` when creating a Gmail service, follow these steps:

### Solution: Use Gmail App Password (Recommended)

1. **Enable 2-Step Verification on your Google Account:**
   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification" if not already enabled

2. **Generate an App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter a name like "EmailJS Portfolio"
   - Click "Generate"
   - **Copy the 16-character password** (it looks like: `abcd efgh ijkl mnop`)

3. **In EmailJS Dashboard:**
   - Go to: https://dashboard.emailjs.com/admin/integration
   - Click "Add New Service"
   - Choose "Gmail"
   - **Use your Gmail email address**
   - **Use the App Password** (not your regular Gmail password)
   - Click "Connect"

### Alternative: Use a Different Email Service

If Gmail continues to give issues, try:
- **Outlook/Hotmail** - Usually works without app passwords
- **Yahoo Mail** - May require app password
- **Custom SMTP** - Most reliable option

### Using Custom SMTP (Most Reliable)

1. In EmailJS, choose "Custom SMTP"
2. Get SMTP settings from your email provider:
   - **Gmail SMTP:**
     - Host: `smtp.gmail.com`
     - Port: `587`
     - Username: Your Gmail address
     - Password: App Password (from step 2 above)
     - Security: TLS

---

## Verify Your EmailJS Credentials

You're getting a "Service ID not found" error. Follow these steps to verify and fix:

## Step 1: Verify Service ID

1. Go to: https://dashboard.emailjs.com/admin/integration
2. Click on **"Email Services"** in the left sidebar
3. You should see your connected email service (Gmail, Outlook, etc.)
4. **Copy the Service ID** - it should look like `service_xxxxx`
5. Make sure it matches what's in `Contact.jsx` (currently: `service_swytufe`)

**If you don't see a service:**
- Click "Add New Service"
- Connect your email provider
- Copy the new Service ID

## Step 2: Verify Template ID

1. Go to: https://dashboard.emailjs.com/admin/template
2. Click on **"Email Templates"** in the left sidebar
3. You should see your template
4. **Copy the Template ID** - it should look like `template_xxxxx`
5. Make sure it matches what's in `Contact.jsx` (currently: `template_8te0vtk`)

**If you don't see a template:**
- Click "Create New Template"
- Set up the template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
- Copy the new Template ID

## Step 3: Verify Public Key

1. Go to: https://dashboard.emailjs.com/admin/account
2. Click on **"General"** tab
3. Scroll to **"API Keys"** section
4. **Copy the Public Key** (NOT the Private Key)
5. Make sure it matches what's in `Contact.jsx` (currently: `O0hv_xD-fyB7BBNvq`)

## Step 4: Update Contact.jsx

After verifying, update these values in `src/components/Contact.jsx`:

```javascript
await emailjs.send(
    'service_swytufe',      // ← Replace with your actual Service ID
    'template_8te0vtk',     // ← Replace with your actual Template ID
    {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: 'naoures.kraiem@esen.tn'
    },
    'O0hv_xD-fyB7BBNvq'     // ← Replace with your actual Public Key
)
```

And also update the initialization:

```javascript
useEffect(() => {
    emailjs.init('O0hv_xD-fyB7BBNvq')  // ← Replace with your actual Public Key
}, [])
```

## Common Issues:

1. **Service ID not found**: The service might not be connected or the ID is wrong
2. **Template ID not found**: The template might not exist or the ID is wrong
3. **Public Key error**: Make sure you're using the Public Key, not Private Key

## Quick Test:

After updating, try sending a test email. Check the browser console (F12) for any error messages.
