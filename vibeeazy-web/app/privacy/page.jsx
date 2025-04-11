import React from "react";

function PrivacyPolicy() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          At Vibeazy, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal
          data.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Information We Collect</h2>
            <p className="text-gray-600">
              We collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <strong>Personal Information:</strong> When you create an account, we collect your name, email address,
                and other contact details.
              </li>
              <li>
                <strong>Payment Information:</strong> For processing transactions, we may collect payment details
                through third-party payment processors.
              </li>
              <li>
                <strong>Usage Data:</strong> We collect data on how you use the App, including your activity,
                preferences, and interactions with restaurant deals.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">2. How We Use Your Information</h2>
            <p className="text-gray-600">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>To provide, maintain, and improve the App's features</li>
              <li>To process payments and manage group wallet contributions</li>
              <li>To communicate with you regarding updates, promotions, and changes to our services</li>
              <li>To personalize your experience and recommend relevant restaurants and deals</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">3. Sharing Your Information</h2>
            <p className="text-gray-600">
              We do not sell, rent, or lease your personal information to third parties. However, we may share your
              information with:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <strong>Restaurant Partners:</strong> To provide you with deals and promotions.
              </li>
              <li>
                <strong>Payment Processors:</strong> To facilitate payments and transactions.
              </li>
            </ul>
            <p className="text-gray-600 mt-2">
              We may also share your information when required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Data Security</h2>
            <p className="text-gray-600">
              We take reasonable measures to protect your information from unauthorized access, disclosure, or
              alteration. However, no method of transmission over the internet is 100% secure, and we cannot guarantee
              the security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">5. Your Rights</h2>
            <p className="text-gray-600">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Access, correct, or delete your personal information</li>
              <li>Opt-out of marketing communications at any time</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
            <p className="text-gray-600 mt-2">
              To exercise your rights, please contact us at{" "}
              <a href="mailto:support@vibeazy.com" className="text-blue-500 underline">
                support@vibeazy.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Retention of Data</h2>
            <p className="text-gray-600">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">7. Third-Party Links</h2>
            <p className="text-gray-600">
              The App may contain links to third-party websites or services. We are not responsible for the privacy
              practices or content of those third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">8. Children’s Privacy</h2>
            <p className="text-gray-600">
              Vibeazy is not intended for users under the age of 18. We do not knowingly collect personal information
              from children. If we become aware that we have collected information from a child under 18, we will take
              steps to delete that information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">9. Changes to the Privacy Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. When we make changes, we will notify you by updating
              the effective date at the top of this document.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">10. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions or concerns about this Privacy Policy or how we handle your information, please
              contact us at{" "}
              <a href="mailto:support@vibeazy.com" className="text-blue-500 underline">
                support@vibeazy.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
