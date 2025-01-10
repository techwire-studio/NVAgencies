import React from "react";

const RefundPolicy = () => {
  return (
    <div className=" py-8 px-8 md:px-28 lg:px-60">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-red-800 mb-6">
        Refund Policy
      </h1>
      <div className="text-red-800 mb-6 max-w-2xl mx-auto space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Returns Policy</h2>
          <p>
            <strong>Last Updated: 24/12/24</strong>
          </p>
          <p>
            At NV Agencies, your satisfaction is our priority. While we aim to
            deliver quality products every time, we understand that there may
            be instances where a return is necessary. Here's our simple and
            hassle-free returns process:
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Returns Procedure</h2>
          <ol className="list-decimal space-y-4 ml-5">
            <li>
              <strong>Initiate a Return Request:</strong>
              <ul className="list-disc space-y-2 ml-5">
                <li>
                  Email us at{' '}
                  <a
                    href="mailto:customer.care@nvagencies.co.in"
                    className="text-red-800 underline"
                  >
                    customer.care@nvagencies.co.in
                  </a>{' '}
                  or send a WhatsApp message with your order number and issue
                  details for return authorization.
                </li>
              </ul>
            </li>
            <li>
              <strong>Ship Your Return:</strong>
              <ul className="list-disc space-y-2 ml-5">
                <li>
                  After receiving authorization, ship the product to us via
                  India Post to the following address:
                  <address className="not-italic">
                    NV Agencies <br />
                    #2/3, NV House, <br />
                    H. Siddiah Road, <br />
                    Bengaluru - 560002
                  </address>
                </li>
              </ul>
            </li>
            <li>
              <strong>Refund Process:</strong>
              <ul className="list-disc space-y-2 ml-5">
                <li>
                  Upon receiving the returned product, we will conduct a quality
                  check. If the product passes, your refund will be processed
                  promptly.
                </li>
                <li>
                  It may take 7-10 days for the refunded amount to appear in
                  your account, subject to banking procedures.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <hr className="my-8 border-t-1 border-red-800" />

        <div>
          <h2 className="text-lg font-semibold mb-2">Terms & Conditions</h2>
          <ul className="list-disc space-y-2 ml-5">
            <li>
              We accept returns under the following circumstances:
              <ul className="list-disc space-y-2 ml-5">
                <li>The product does not fit your bike/scooter.</li>
                <li>A wrong or damaged product was delivered.</li>
              </ul>
            </li>
            <li>
              Please Note:
              <ul className="list-disc space-y-2 ml-5">
                <li>
                  Returns are not accepted for "change of mind" cases after the
                  product has been dispatched or delivered.
                </li>
                <li>
                  For instances where the incorrect product was ordered or the
                  product was not collected by the customer, shipping and
                  handling charges will be deducted from the refund.
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-4">
            Verify Compatibility Before Ordering
          </h3>
          <ul className="list-disc space-y-2 ml-5">
            <li>
              Please ensure the product is appropriate for your bike or scooter
              by consulting with a mechanic or comparing the product with the
              images provided on our website.
            </li>
            <li>
              Obvious cases of ordering the wrong product will not qualify for
              a refund of any shipping fees paid.
            </li>
          </ul>
          <hr className="my-8 border-t-1 border-red-800" />
          <h3 className="text-lg font-semibold mt-4">
            Additional Guidelines
          </h3>
          <ul className="list-disc space-y-2 ml-5">
            <li>
              <strong>Damaged or Missing Items:</strong> A complete, uncut
              unboxing video is required to claim missing or damaged items.
              Products will only be replaced if they are found to be damaged
              and a complete uncut unboxing video is provided.
            </li>
            <li>
              <strong>Address & Delivery Issues:</strong>
              <ul className="list-disc space-y-2 ml-5">
                <li>
                  If an order is returned to us due to an incomplete or incorrect
                  address or customer unavailability, the customer must bear
                  re-shipping charges. Orders will not be re-shipped without
                  payment of these charges.
                </li>
                <li>
                  Responsibility for orders lost due to incorrect or insufficient
                  address information lies with the customer. Refunds will not be
                  issued in such cases.
                </li>
                <li>
                  Address corrections can only be made if the order has not yet
                  been shipped. Please contact us via direct message to request
                  changes.
                </li>
              </ul>
            </li>
            <li>
              <strong>Orders Marked as Delivered:</strong>
              <ul className="list-disc space-y-2 ml-5">
                <li>
                  If your order is marked as delivered but hasn't reached you,
                  please check with your security, neighbors, or family members
                  who may have received it.
                </li>
                <li>
                  If unresolved, contact us via direct message before reaching
                  out to the courier service. Often, such issues are due to
                  delays or trouble locating your address, which we can help
                  resolve by coordinating with our courier partner.
                </li>
              </ul>
            </li>
            <li>
              <strong>Complaints Regarding Missing Orders:</strong> Complaints
              about missing orders must be submitted via direct message within
              4-5 days of the shipping timeline. Replacements will not be
              processed for issues reported beyond this timeframe.
            </li>
            <li>
            <hr className="my-8 border-t-1 border-red-800" />
              <strong>Important Deadlines:</strong>
              <ul className="list-disc space-y-2 ml-5">
                <li>
                  Submit your return request within 7 days of receiving your
                  order. Requests beyond this timeframe will not be processed.
                </li>
                <li>
                  Ensure the product is returned in its original packaging and
                  reaches us within 12 days of your return request's acceptance.
                </li>
              </ul>
            </li>
            <li>
              <strong>Late Returns:</strong> Products received at our warehouse
              after 12 days from the return request's acceptance date will not
              be eligible for a refund.
            </li>
            <li>
            <hr className="my-8 border-t-1 border-red-800" />
              <strong>Recovery of RTO Costs:</strong>
              <ul className="list-disc space-y-2 ml-5">
                <li>
                  If an order is returned to us due to incorrect or incomplete
                  shipping address provided by the customer, customer's
                  unavailability to accept the delivery, or refusal to accept the
                  parcel, the RTO (Return to Origin) shipping costs will be
                  deducted from the refund amount.
                </li>
                <li>
                  This deduction ensures we can recover the costs incurred during
                  the failed delivery attempt. The exact amount deducted will
                  depend on the shipping and handling charges associated with the
                  order.
                </li>
                <li>
                  If you wish to have the order re-shipped, additional shipping
                  charges will apply, and the order will be re-sent only after
                  these charges are cleared.
                </li>
                <li>
                  We urge customers to double-check their shipping details and
                  ensure availability to receive the order to avoid such
                  deductions.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
