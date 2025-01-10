import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="bg-cream  px-6 py-12 text-maroon">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shipping Policy</h1>
        <div className="space-y-6">
          <div>
            <h2 className="font-medium">1. What courier services do you use?</h2>
            <p>
              We partner with Shipmozo as they have a large network of partners
              such as Xpressbess, Ekart, and Delhivery which helps us get your
              parcel as soon as possible to you.
            </p>
          </div>
          <div>
            <h2 className="font-medium">2. How soon will my order be dispatched after placing it?</h2>
            <p>
              Your order will be prepared for dispatch within 24 working hours
              from the moment we receive it.
            </p>
          </div>
          <div>
            <h2 className="font-medium">3. How long can I expect to wait for my order?</h2>
            <p>The delivery time depends on your location. Please calculate timelines post dispatch:</p>
            <ul className="list-disc pl-6">
              <li>South India/Metro Cities: 3 to 5 Days</li>
              <li>Rest of India: 5 to 7 Days</li>
              <li>North East and Andaman & Nicobar Islands: 7 to 8 Days</li>
            </ul>
            <p>
              Please note that in exceptional cases, delivery may take more time
              than expected.
            </p>
          </div>
          <div>
            <h2 className="font-medium">4. How can I track my order?</h2>
            <p>
              Once your order is dispatched, we'll promptly send you the
              tracking details via email. Kindly allow 24 working hours after
              placing your order to receive these tracking details and after
              receiving, you can track your order{" "}
              <a href="#" className="text-blue-500 underline">
                here
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="font-medium">5. Where do you dispatch orders from?</h2>
            <p>
              All our orders are dispatched from our centrally-located warehouse
              in Bengaluru.
            </p>
          </div>
          <div>
            <h2 className="font-medium">6. Do you offer delivery services across all of India?</h2>
            <p>
              Absolutely, we provide nationwide shipping, covering every corner
              of India.
            </p>
          </div>
          <div>
            <h2 className="font-medium">7. Do you offer any other shipping partners?</h2>
            <p>
              We also have access to other reputable couriers through Shiprocket,
              which include BlueDart, and DTDC. However, these might come at an
              extra cost. If you prefer using a premium service, please leave a
              message on WhatsApp, and we can assist you with the same.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
