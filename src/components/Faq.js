import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "1. What types of bike stickers do you offer?", answer: "We offer a wide range of high-quality bike stickers to suit various two-wheeler models and styles. Our collection includes reflective stickers, racing stripes, tank pads, brand logos, decorative decals, and more. Whether you're looking to enhance your bike’s aesthetics or add a personalized touch, we’ve got you covered." },
    { question: "2. How can I find the right sticker for my bike?", answer: "You can easily find the perfect sticker using our search bar at the top of the page. Simply enter your bike’s model, sticker type, or design name, and our system will show you relevant options. You can also browse by category or explore detailed product descriptions and images to ensure compatibility. If you're still unsure, feel free to contact our support team for guidance." },
    { question: "3. Are the stickers you sell durable and of high quality?", answer: "Yes, all the stickers we sell are made from premium materials designed for durability and long-lasting performance. They are weather-resistant, fade-proof, and easy to apply. You can trust that our products will keep your bike looking great for years." },
    { question: "4. What is your return and exchange policy for stickers?", answer: "We have a flexible return and exchange policy for stickers. If you’re not satisfied with your purchase or if the sticker is defective, you can return or exchange it within 7 days of delivery. The item must be unused, in its original packaging, and accompanied by proof of purchase. For more details, please visit our Return & Exchange Policy." },
    { question: "5. How long does it take to receive my order?", answer: "Delivery times vary depending on your location and product availability. Typically, orders are processed and shipped within 24 working hours, and delivery takes an additional 3-7 business days. You’ll receive a tracking number once your order has been shipped. You can track your order here. For more details, refer to our Shipping Policy." },
    { question: "6. Do you offer international shipping?", answer: "Currently, we only ship within India. We are exploring options to expand our services to include international shipping soon. Stay tuned for updates!" },
    { question: "7. What payment methods do you accept?", answer: "We accept a variety of payment methods, including credit/debit cards, net banking, UPI, and popular digital wallets like Paytm and Google Pay. All transactions are secure and encrypted to ensure your payment information is safe." },
    { question: "8. Can I cancel my order after placing it?", answer: "Yes, you can cancel your order within 24 hours of placing it, provided it hasn’t been shipped yet. To cancel your order, please contact our customer support team with your order details. Once the order has been shipped, it cannot be canceled." },
    { question: "9. Do you offer Cash on Delivery (COD) for stickers?", answer: "Yes, COD is available for most products listed on our website. However, this service is limited to certain regions and order values. You can check COD availability by entering your pin code during checkout. A nominal COD service fee may apply and will be collected as advance to confirm your order." },
    { question: "10. How can I contact customer support if I have more questions?", answer: "If you have any further questions or need help with your order, our customer support team is here for you. You can reach us via email at customer.care@nvplus.co.in or WhatsApp us during our business hours. We strive to respond to all inquiries within 24 hours." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <button
                className="text-left text-lg font-medium focus:outline-none hover:underline"
              >
                {faq.question}
              </button>
              <span
                className={`transform transition-transform text-lg ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                &darr;
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
