# Contact Page

This project is a simple contact page that allows users to send messages via email using EmailJS. It includes a form for user input and is styled with CSS.

## Project Structure

```
contact-page
├── src
│   ├── index.html      # HTML structure for the contact page
│   ├── styles.css      # Styles for the contact page
│   └── app.js          # JavaScript for handling form submission
├── package.json        # npm configuration file
└── README.md           # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd contact-page
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up EmailJS:**
   - Sign up at [EmailJS](https://www.emailjs.com/).
   - Create a new service and template.
   - Obtain your User ID, Service ID, and Template ID.

4. **Configure EmailJS in `app.js`:**
   - Replace the placeholders in the `app.js` file with your EmailJS credentials.

## Usage

1. Open `src/index.html` in a web browser.
2. Fill out the contact form with your name, email, and message.
3. Click the submit button to send your message.

## License

This project is licensed under the MIT License.