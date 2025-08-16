import React from "react";
import "../composants/styles/Style.css";

function Privacy() {
  return (
    <div className="container-fluid ">
      <br />
      <br />
      <div className="row">
        <div className="col-12">
          <div className="section">
            <div className="privacy-policy">
              <h1>
                <span role="img" aria-label="lock">
                  🔒
                </span>{" "}
                Privacy Policy
              </h1>

              <h2>
                <span role="img" aria-label="waving hand">
                  👋
                </span>{" "}
                Introduction
              </h2>
              <p>
                Hello, your privacy is important to us. This policy explains how
                our mobile game collects, uses, and protects your information.
              </p>

              <h2>
                <span role="img" aria-label="bar chart">
                  📊
                </span>{" "}
                1. Data Collected
              </h2>
              <p>We may collect the following types of data:</p>
              <ul>
                <li>
                  <span role="img" aria-label="mobile phone">
                    📱
                  </span>{" "}
                  Technical info (device model, OS, anonymous IDs)
                </li>
                <li>
                  <span role="img" aria-label="video game controller">
                    🎮
                  </span>{" "}
                  Gameplay data (progress, scores, in-app purchases)
                </li>
                <li>
                  <span role="img" aria-label="location pin">
                    📍
                  </span>{" "}
                  Location data (country or city)
                </li>
              </ul>
              <p>
               These are non-personal data that do not identify you. We do not collect identifiable personal information like your 
               name or email address without your explicit consent.
              </p>

              <h2>
                <span role="img" aria-label="gear">
                  ⚙️
                </span>{" "}
                2. Use of Data
              </h2>
              <p>
                Your data is used to enhance the gameplay experience, save your progress, show personalized ads (if applicable), and analyze app performance.
              </p>

              <h2>
                <span role="img" aria-label="link">
                  🔗
                </span>{" "}
                3. Data Sharing
              </h2>
              <p>We may share certain technical data with:</p>
              <ul>
                <li>
                  <span role="img" aria-label="bar chart">
                    📊
                  </span>{" "}
                   Analytics services (e.g., Google Firebase)
                </li>
                <li>
                  <span role="img" aria-label="megaphone">
                    📢
                  </span>{" "}
                  Ad partners (e.g., AdMob, Unity Ads)
                </li>
              </ul>

              <h2>
                <span role="img" aria-label="child">
                  🧒
                </span>{" "}
                4. Child Protection
              </h2>
              <p>
                Our products are designed for a general audience of all ages. We do not collect personal data from users under 13. Only non-personal data may be collected.
              </p>

              <h2>
                <span role="img" aria-label="shield">
                  🛡️
                </span>{" "}
                5. Security
              </h2>
              <p>
                We implement reasonable measures to protect your data from unauthorized access or misuse. However, no method is 100% secure. We cannot guarantee complete protection against hackers or illegal third parties.
              </p>

              <h2>
                <span role="img" aria-label="memo">
                  📝
                </span>{" "}
                6. Your Rights
              </h2>
              <p>
                You may request the deletion of your data or withdraw your consent at any time by contacting us at the address below.
              </p>

              <h2>
                <span role="img" aria-label="mailbox">
                  📬
                </span>{" "}
                7. Contact
              </h2>
              <p>
                If you have any questions, contact us at: <strong>briktech@outlook.com</strong>
              </p>

              <h2>
                <span role="img" aria-label="tools">
                  🛠️
                </span>{" "}
                8. Changes
              </h2>
              <p> We reserve the right to update this policy. Any changes will be published here.</p>

              <h2>
                <span role="img" aria-label="check mark">
                  ✅
                </span>{" "}
                9. Your Agreement
              </h2>
              <p>
               By using our products (services, apps, website), you acknowledge that you understand the above and agree to our data practices as described. If you do not agree, please do not use our products.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Privacy;
