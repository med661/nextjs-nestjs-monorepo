const emailStyles = () => {
  return `
    <style>
      body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background: #f9f9f9;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      .header {
        background: #0049b7;
        color: white;
        text-align: center;
        padding: 20px;
        border-radius: 10px 10px 0 0;
      }
      .button {
        display: inline-block;
        background: linear-gradient(90deg, #fbb034, #ffdd00);
        color: white;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 25px;
        font-size: 16px;
        font-weight: bold;
        margin-top: 20px;
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 12px;
        color: #666;
      }
      .social-icons a {
        display: inline-block;
        margin: 0 5px;
        text-decoration: none;
      }
      .social-icons img {
        width: 24px;
        height: 24px;
      }
    </style>
  `;
};

export const verificationEmailHtml = (firstname: string, token: string) => {
  const url = `${process.env.CLIENT_URL}/verify-email?token=${token}`;
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        ${emailStyles()} <!-- Injecting CSS styles -->
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to Formationnets!</h1>
          </div>
          <p>Dear ${firstname},</p>
          <p>
            We are thrilled to have you join our community of learners. To get started, 
            please verify your account by clicking the button below:
          </p>
          <div style="text-align: center;">
            <a href="${url}" class="button">Verify Your Email</a>
          </div>
          <p>
            Formationnets is dedicated to providing high-quality training programs 
            to help you achieve your career goals.
          </p>
          <p>
            <strong>Note:</strong> This verification link is valid for 1 hour. If you 
            have any questions, please contact our support team at 
            <a href="mailto:formationnettn@gmail.com">formationnettn@gmail.com</a>.
          </p>
          <div class="footer">
            <p>&copy; 2024 Formationnets | +216 55 962 808</p>
            <p>Follow us on:</p>
            <div class="social-icons">
              <a href="https://facebook.com" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook">
              </a>
              <a href="https://twitter.com" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg" alt="Twitter">
              </a>
              <a href="https://instagram.com" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram">
              </a>
              <a href="https://linkedin.com" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn">
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
  return html;
};
