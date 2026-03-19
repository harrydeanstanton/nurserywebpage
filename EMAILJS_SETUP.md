# EmailJS Setup Guide

This project uses EmailJS to send form submissions via email. Follow these steps to set it up:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Add an Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: Nowe zgłoszenie do żłobka - {{parent_name}}

Nowe zgłoszenie do żłobka Cypisek

Dane rodzica:
Imię i nazwisko: {{parent_name}}
Email: {{email}}
Telefon: {{phone}}

Dane dziecka:
Imię: {{child_name}}
Wiek (miesiące): {{child_age}}

Dodatkowe informacje:
{{message}}

---
To zgłoszenie zostało wysłane z formularza na stronie żłobka.
```

4. Set the **To Email** field to: `{{to_email}}` or your email address
5. Copy the **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** > **General** in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section
3. Copy the Public Key

## Step 5: Configure the Application

1. Create a `.env` file in the root of your project (copy from `.env.example`)
2. Add your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Restart your development server after adding the `.env` file

## Testing

After setup, test the form by:
1. Filling out the enrollment form
2. Submitting it
3. Checking your email inbox for the form submission

## Troubleshooting

- Make sure your `.env` file is in the root directory
- Restart the dev server after creating/updating `.env`
- Check the browser console for any error messages
- Verify your EmailJS service is active and properly configured
- Ensure your email template variables match the ones in the code

