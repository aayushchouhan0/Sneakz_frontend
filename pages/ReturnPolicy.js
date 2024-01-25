// ReturnPolicy.js

import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className=" px-5 container mx-auto mt-8 text-justify">
      <h1 className="text-3xl font-semibold mb-6">Return Policy</h1>

      <p className="mb-4">
        We want you to be completely satisfied with your purchase. If for any reason you are not
        satisfied, you may return your item(s) within 30 days of receiving your order for a
        full refund or exchange.
      </p>

      <h2 className="text-xl font-semibold mb-5">Return Instructions:</h2>

      <ol className="list-decimal list-inside mb-4">
        <li className="mb-2">
          Ensure the item is in its original packaging, unworn, and in the same condition you
          received it.
        </li>
        <li className="mb-2">
          Fill out the return form included in your package or download it from our website.
        </li>
        <li className="mb-2">
          Package the item securely, and include the completed return form inside the package.
        </li>
        <li className="mb-2">
          Affix the provided return label to the outside of the package. If a return label is not
          provided, please contact our customer support for assistance.
        </li>
        <li className="mb-2">
          Drop off the package at your nearest postal service or schedule a pickup.
        </li>
      </ol>

      <h2 className="text-xl font-semibold mb-2">Refund Process:</h2>

      <p className="mb-4">
        Once we receive your return and inspect the item, we will process your refund or exchange.
        Please allow 7-10 business days for the refund to appear in your account.
      </p>

      <h2 className="text-xl font-semibold mb-2">Contact Us:</h2>

      <p className="mb-4">
        If you have any questions or concerns about the return process, feel free to contact our
        customer support team at <a href="mailto:support@example.com">support@example.com</a> or
        call us at (555) 123-4567.
      </p>

      <p className="text-gray-600 pb-5">
        Note: We reserve the right to refuse returns that do not meet our return policy criteria.
      </p>
    </div>
  );
};

export default ReturnPolicy;
