import React from "react";

function TermsPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Use</h1>
        <p className="text-gray-600 mb-4">
          Welcome to Vibeazy! By using our app and services, you agree to the following terms and conditions.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing or using the Vibeazy app ("App"), you agree to comply with these Terms of Use ("Terms"). If
              you do not agree with these Terms, you must not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Eligibility</h2>
            <p className="text-gray-600">
              You must be at least 18 years old to use the App. By using the App, you confirm that you meet this age
              requirement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">3. Account Registration</h2>
            <p className="text-gray-600">
              To use certain features of the App, you may need to create an account. You are responsible for maintaining
              the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Group Wallet</h2>
            <p className="text-gray-600">
              Vibeazy allows users to contribute funds to a group wallet for hangouts. You agree to contribute funds in
              good faith, and Vibeazy is not responsible for any disputes arising from contributions or the use of the
              group wallet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">5. Restaurant Deals and Discounts</h2>
            <p className="text-gray-600">
              Vibeazy provides access to discounts and deals offered by restaurant partners. These offers are subject to
              change, and Vibeazy is not responsible for the accuracy or availability of any deals.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Payment and Transactions</h2>
            <p className="text-gray-600">
              All payments made via the App for group wallet contributions or restaurant deals are processed through
              third-party payment providers. You agree to comply with the payment provider’s terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">7. Prohibited Use</h2>
            <p className="text-gray-600">
              You agree not to use the App for any unlawful or prohibited purpose, including:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Violating any applicable laws or regulations</li>
              <li>Engaging in fraudulent activities</li>
              <li>Attempting to interfere with the App's functionality or security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">8. Limitation of Liability</h2>
            <p className="text-gray-600">
              Vibeazy is not liable for any indirect, incidental, or consequential damages arising from your use of the
              App. Our liability is limited to the extent allowed by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">9. Modifications to the Terms</h2>
            <p className="text-gray-600">
              Vibeazy reserves the right to modify or update these Terms at any time. We will notify users of
              significant changes, and your continued use of the App constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">10. Termination</h2>
            <p className="text-gray-600">
              Vibeazy may suspend or terminate your access to the App at our discretion, particularly if you violate
              these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">11. Governing Law</h2>
            <p className="text-gray-600">
              These Terms are governed by the laws of [Insert Country/State], without regard to conflict of law
              principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">12. Contact Information</h2>
            <p className="text-gray-600">
              For any questions or concerns about these Terms, please contact us at{" "}
              <a href="mailto:support@vibeazy.com" className="text-blue-500 underline">
                support@vibeazy.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsPage;
