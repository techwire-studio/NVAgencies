import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className=" py-10 px-6 md:px-16">
      <div className="max-w-2xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold text-brown-800 mb-6">Privacy Policy</h1>
        <p className="mb-8 text-lg font-medium">
          Last Updated: <span className="font-semibold">27/09/2023</span>
        </p>
        <p className="mb-6">
          This Privacy Policy outlines how NV Agencies collects, uses, and safeguards personal information on{" "}
          <a href="https://www.nvagencies.co.in" className="text-blue-600 underline">
            www.nvagencies.co.in
          </a>.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect two types of information:
          </p>
          <ul className="list-disc ml-6">
            <li className="mb-2">
              <strong>Information You Provide:</strong> When you interact with our site, you may share personal details, such as your name and contact information.
            </li>
            <li>
              <strong>Automatically Collected Information:</strong> We gather data like your IP address and browsing habits using cookies and similar technologies.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6">
            <li className="mb-2">
              <strong>Providing Services:</strong> We use your information to deliver requested services and respond to inquiries.
            </li>
            <li className="mb-2">
              <strong>Communication:</strong> Your contact information allows us to stay in touch and provide updates.
            </li>
            <li>
              <strong>Website Improvement:</strong> We analyze data to enhance our website's performance and content.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Disclosure of Your Information</h2>
          <ul className="list-disc ml-6">
            <li className="mb-2">
              <strong>Service Providers:</strong> Third-party service providers help us run and improve our website.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We'll disclose information if required by law or a government request.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>
            While we take reasonable precautions, remember that internet security isn't foolproof. We do our best to protect your data from unauthorized access or loss.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p>
            You may have rights to access, correct, or delete your data. For inquiries or to exercise these rights, contact us using the provided information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Changes to this Policy</h2>
          <p>
            We may update this policy occasionally. The latest version will be on our website with the revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, please reach out to us at{" "}
            <a href="mailto:customer.care@nvagencies.co.in" className="text-blue-600 underline">
              customer.care@nvagencies.co.in
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
