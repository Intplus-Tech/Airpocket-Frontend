import { Image } from "@/components/Image/Index";
import MaxwidthWrapper from "@/components/MaxwidthWrapper.tsx/MaxWidthWrapper";
import SearchBcg from "@/pages/SearchResults/assets/SearchFlight.jpeg";

const Cookie = () => {
  return (
    <MaxwidthWrapper>
      <main className="mb-6  md:mx-6">
        <div className="absolute top-0 left-0  w-full">
          <Image
            src={SearchBcg}
            alt="Searh"
            className="bg-cover mx-auto min-h-[200px] md:min-h-[250px] lg:min-h-[301px]"
          />
        </div>
        <section className=" mt-[12rem] md:mt-[15rem] lg:mt-[15rem] xl:mt-[16rem] w-full">
          <section className="w-full mt-4 flex flex-col gap-16">
            <article className="grid md:grid-cols-4">
              <div className="w-full col-span-1">
                <h1 className=" font-bold text-xl max-w-[20rem]  sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  Terms & Condition
                </h1>
              </div>

              <div className="w-full col-span-3 pl-8  ">
                <div className="">
                  <p>
                    Welcome to Airpockets Travel and Tours. Please read these
                    Terms and Conditions (“Terms”) carefully before using our
                    services. By accessing or using our website and services,
                    you agree to be bound by these Terms. If you do not agree to
                    these Terms, please do not use our services.
                  </p>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">1. Introduction</h1>
                  <p>
                    Airpockets Travel and Tours (“we,” “us,” “our”) provides
                    travel-related services including but not limited to flight
                    bookings, hotel reservations, car rentals, and travel
                    packages. Our contact information is as follows:
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Email: Connect@airpockets.co</li>
                    <li> Phone: +234 816 971 5754</li>
                  </ul>
                </div>

                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    2. Acceptance of terms
                  </h1>
                  <p>
                    By using our services, you agree to comply with and be bound
                    by these Terms. If you do not agree to these Terms, you may
                    not use our services.
                  </p>
                  {/* <ul className="list-disc pl-5">
                    <li>
                      To Provide and Manage Our Services: Process your bookings,
                      manage your account, provide customer support.
                    </li>
                    <li>
                      To Communicate with You: Send confirmations, updates, and
                      administrative messages.
                    </li>
                    <li>
                      To Personalize Your Experience: Tailor our services to
                      your preferences and interests.
                    </li>
                    <li>
                      To Improve Our Services: Analyze usage patterns to enhance
                      our website and services
                    </li>
                    <li>
                      To Market Our Services: Send promotional materials,
                      newsletters, and special offers.
                    </li>
                    <li>
                      To Ensure Security: Monitor and prevent fraudulent
                      activities, protect the integrity of our services
                    </li>
                  </ul> */}
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    3. Service offered
                  </h1>
                  <p>We offer various travel services including:</p>
                  <ul className="list-disc pl-5">
                    <li>Flight bookings</li>
                    <li>Hotel reservations</li>
                    <li>Visa assistance </li>
                    <li>Customized travel packages</li>
                  </ul>
                </div>

                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    4. User Obligation
                  </h1>

                  <p>As a user, you agree to:</p>

                  <ul className="list-disc pl-5">
                    <li>
                      Provide accurate and truthful information when making
                      bookings.
                    </li>
                    <li> Adhere to the payment terms and conditions.</li>
                    <li> Use our services for lawful purposes only.</li>
                    <li>
                      Refrain from using our services to harm or defraud others.
                    </li>
                  </ul>
                </div>

                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    5. Booking and REservation
                  </h1>
                  <p>Booking Process</p>
                  <ul className="list-disc pl-5">
                    <li>
                      Visit our website at Airpockets Travel and Tours to make
                      bookings.
                    </li>
                    <li>
                      Follow the on-screen instructions to complete your
                      booking.
                    </li>
                    <li> Ensure all information provided is accurate.</li>
                    <li>
                      Refrain from using our services to harm or defraud others.
                    </li>
                  </ul>

                  <p>Booking Confirmation</p>
                  <ul className="list-disc pl-5">
                    <li>
                      You will receive a confirmation email once your booking is
                      successful.
                    </li>
                    <li>
                      Check your booking details carefully and inform us
                      immediately of any discrepancies.
                    </li>
                  </ul>
                </div>

                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">6. Payment Terms</h1>

                  <p>Accepted Payment Methods</p>
                  <ul className="list-disc pl-5">
                    <li>
                      Credit/Debit Cards (Visa, MasterCard, American Express)
                    </li>
                    <li> Bank Transfers </li>
                  </ul>
                  <p>Payment Security</p>
                  <ul>
                    <li>
                      We use SSL encryption to protect your payment information.
                    </li>
                    <li>
                      {" "}
                      Comply with PCI-DSS standards for secure transactions
                    </li>
                  </ul>
                </div>

                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    7. Cancellation and Refund Policy
                  </h1>

                  <p>Cancellation Requests</p>
                  <ul className="list-disc pl-5">
                    <li>
                      {" "}
                      Submit cancellation requests via email to
                      connect@airpockets.co or call us at +234 816 971 5754.
                    </li>
                    <li>
                      Cancellations made within 24 hours of booking are eligible
                      for a full refund.
                    </li>
                    <li>
                      Cancellations made more than 30 days before the departure
                      date will incur a 30% cancellation fee.d
                    </li>
                    <li>
                      {" "}
                      Cancellations made less than 30 days before the departure
                      date are nonrefundable.
                    </li>
                  </ul>
                  <p>Refund Processing</p>
                  <ul className="list-disc pl-5">
                    <li>
                      Non-refundable bookings are not eligible for any refun
                    </li>
                    <li>
                      Refunds may take 10 business days or more to process.
                    </li>
                  </ul>
                </div>

                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    8. Changes to Bookings
                  </h1>

                  <p>User-Initiated Changes</p>
                  <ul className="list-disc pl-5">
                    <li>
                      Changes to bookings can be made by contacting our customer
                      support.
                    </li>
                    <li>
                      Fees may apply for changes depending on the service
                      provider’s policies.
                    </li>
                    <li></li>
                  </ul>
                  <p>Provider-Initiated Changes</p>
                  <ul className="list-disc pl-5">
                    <li>
                      We will inform you of any changes initiated by airlines,
                      hotels, or other service providers and provide
                      alternatives where possible
                    </li>
                  </ul>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    9. Travel Insurance
                  </h1>
                  <p>Availability</p>
                  <ul className="list-disc pl-5">
                    <li>
                      We offer travel insurance plans to cover trip
                      cancellations, medical emergencies, and other unforeseen
                      events.
                    </li>
                  </ul>
                  <p> Purchasing Insurance</p>
                  <ul className="list-disc pl-5">
                    <li>
                      Travel insurance can be added to your booking during the
                      checkout process.
                    </li>
                  </ul>
                  <p> Filing Claims</p>
                  <ul className="list-disc pl-5">
                    <li>
                      Contact the insurance provider directly using the
                      information provided in your travel insurance
                      documentation.
                    </li>
                  </ul>
                </div>

                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    10. Liability and Disclaimer
                  </h1>
                  <p>Limited Liability</p>
                  <ul className="list-disc pl-5">
                    <li>
                      We are not liable for any losses or damages arising from
                      the use of our services, including but not limited to:
                    </li>
                    <li>
                      Failures of service providers (e.g., airlines, hotels).
                    </li>
                    <li>
                      {" "}
                      Travel disruptions due to unforeseen circumstances.{" "}
                    </li>
                    <li> Loss of personal belongings.</li>
                  </ul>
                  <p>Disclaimers</p>
                  <ul className="list-disc pl-5">
                    <li>
                      We do not guarantee the accuracy of information provided
                      by third parties.
                    </li>
                    <li>
                      Our website and services are provided “as is” without
                      warranties of any kind.
                    </li>
                  </ul>
                </div>

                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    11. Force Majeura
                  </h1>
                  <p>
                    We are not liable for any failure to perform our obligations
                    due to events beyond our control, including but not limited
                    to natural disasters, war, pandemics, or government actions.
                  </p>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    12. Privacy Policy
                  </h1>
                  <p>
                    Your use of our services is also governed by our Privacy
                    Policy, which details how we collect, use, and protect your
                    personal information. Please review our Privacy Policy for
                    more information.
                  </p>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    13. Intellectual Property
                  </h1>
                  <p>
                    All content on our website, including text, images, logos,
                    and software, is owned by or licensed to Airpockets Travel
                    and Tours. Unauthorized use of our content is prohibited
                  </p>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    14. Third Party Links and Services
                  </h1>
                  <p>
                    Our website may contain links to third-party websites or
                    services. We are not responsible for the content or services
                    provided by these third parties
                  </p>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    15. Governing Law and Jurisdiction
                  </h1>
                  <p>
                    These Terms are governed by the laws of Lagos, Nigeria. Any
                    disputes arising from these Terms or your use of our
                    services will be resolved in the courts of Lagos, Nigeria
                  </p>
                </div>

                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    16. Amendment to Terms
                  </h1>
                  <p>
                    We reserve the right to amend these Terms at any time.
                    Changes will be effective immediately upon posting on our
                    website. Your continued use of our services constitutes
                    acceptance of the revised Terms
                  </p>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    17. Contact information
                  </h1>
                  <p>
                    For any questions or concerns regarding these Terms, please
                    contact us at: 5
                  </p>
                  <ul className="list-disc pl-5">
                    <li> Email: Connect@airpockets.co</li>
                    <li> Phone: +234 816 971 57</li>
                  </ul>
                </div>
              </div>
            </article>
          </section>
        </section>
      </main>
    </MaxwidthWrapper>
  );
};

export default Cookie;
