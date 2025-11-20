# Agency AI Website

A modern agency ai website built using **React** and **Tailwind CSS**.  
This project is based on a tutorial by **GreatStack** on YouTube.

---

## Tutorial Source

This project was created by following GreatStack’s tutorial:  
-> https://youtu.be/sbMHR9K60NY?si=8e1b5DDse04FcdNL

---

## Tech Stack

- **React** — Component-based UI library
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — For smooth animations and motion effects
- **Web3Forms** — For handling contact form submissions without a backend
- **React Hot Toast** — For notifications

---

## Features

- Fully responsive UI 
- Modern agency-ai layout  
- Property listings section
- Animated navigation bar  
- Search & filter section  
- Contact form  
- Clean, reusable components 

## How to use
1. Make Sure You Have node and npm installed in your pc
2. Clone the project
```bash
git clone https://github.com/fu-fufajer/agency-ai.git
```
Then enter the project folder
```bash
cd agency-ai
```

3. Install Depedencies
```bash
npm install
```

4. Run the project
```bash
npm run dev
```
Vite will generate a local development link, then open the link
```arduino
http://localhost:5173
```

5. Set Up Web3Forms ( For Contact Form )
This project use Web3Forms for contact form submissions

Steps
- Go to https://web3forms.com
- Create an account (free)
- Copy your Access Key
- Paste it inside your contact form code in the ContactUs.jsx line 18:
```jsx
const response = await fetch("https://api.web3forms.com/submit", {...});
```
Without this key, the form will not send emails.

## You're All Set!
Now you can run, edit, and deploy the Agency AI Website.