import { Image } from "@/components/Image/Index";
import MaxwidthWrapper from "@/components/MaxwidthWrapper.tsx/MaxWidthWrapper";
import SearchBcg from "@/pages/SearchResults/assets/SearchFlight.jpeg";

const Privacy = () => {
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
                  Privacy Policy
                </h1>
              </div>

              <div className="w-full col-span-3 pl-8  ">
                <div className="">
                  <p>
                    Airpockets Travel and Tours (“we,” “us,” “our”) is committed
                    to protecting your privacy. This Privacy Policy outlines how
                    we collect, use, disclose, and safeguard your information
                    when you visit our website airpockets.co and use our
                    services. Please read this Privacy Policy carefully. If you
                    do not agree with the terms of this Privacy Policy, please
                    do not access the site.
                  </p>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    1. Information we collect
                  </h1>
                  <p>Personal information</p>
                  <p>
                    When you see our services. We may collect personal
                    information that you voluntarily provide to inlncluding but
                    not limited to
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Contact Information: Name, email address, phone number,
                      postal address.
                    </li>
                    <li>
                      Booking Information: Travel itinerary, flight details,
                      hotel reservations, special requests
                    </li>
                  </ul>
                  <p>Non-Personal Information</p>
                  <p>
                    We may also collect non-personal information about you,
                    including but not limited to:
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Browser and Device Information: IP address, browser type,
                      operating system.
                    </li>
                    <li>
                      Usage Data: Pages viewed, time spent on pages, navigation
                      paths, clickstream data.
                    </li>
                  </ul>
                  <h1>Cookies and Tracking Technology</h1>
                  <p>
                    We use cookies and similar tracking technologies to collect
                    and use personal information about you, including to serve
                    interest-based advertising. For more information about the
                    types of cookies we use and how to control them, please see
                    our Cookie Policy.
                  </p>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    2. How We Use Your Information
                  </h1>

                  <ul className="list-disc pl-5">
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
                  </ul>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    3. How We Share Your Information
                  </h1>
                  <p>
                    We may share your information with third parties in the
                    following circumstances:
                  </p>
                  <h1>Service Providers</h1>
                  <p>
                    We may share your personal information with third-party
                    service providers that perform services on our behalf, such
                    as payment processing, data analysis, email delivery,
                    hosting services, customer service, and marketing efforts
                  </p>
                  <h1>Business Transfers</h1>
                  <p>
                    In the event of a merger, acquisition, or sale of all or a
                    portion of our assets, your personal information may be
                    transferred to the acquiring organization
                  </p>
                  <h1>Legal Obligations</h1>
                  <p>
                    We may disclose your information if required to do so by law
                    or in response to valid requests by public authorities
                    (e.g., a court or government agency)
                  </p>
                  <h1>Protection of Our Rights</h1>
                  <p>
                    We may disclose your information to protect and defend our
                    rights, property, and interests, including enforcing our
                    agreements, policies, and terms of use.
                  </p>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    4. Your Rights and Choices
                  </h1>

                  <h1>Access and Update</h1>
                  <p>
                    You have the right to access and update your personal
                    information. You can review and update your account
                    information by logging into your account on our website
                  </p>
                  <h1>pt-Out of Marketing Communications</h1>
                  <p>
                    You may opt out of receiving promotional communications from
                    us by following the unsubscribe instructions provided in the
                    emails or by contacting us directly
                  </p>
                  <h1>Cookie Preferences</h1>
                  <p>
                    You can set your browser to refuse all or some browser
                    cookies or to alert you when websites set or access cookies.
                    If you disable or refuse cookies, please note that some
                    parts of our website may become inaccessible or not function
                    properly.
                  </p>
                  <h1>Data Protection Rights</h1>
                  <p>
                    We may disclose your information to protect and defend our
                    rights, property, and interests, including enforcing our
                    agreements, policies, and terms of use.
                  </p>

                  <ul className="list-disc pl-5">
                    <li>
                      The right to access: You have the right to request copies
                      of your personal data.
                    </li>
                    <li>
                      The right to rectification: You have the right to request
                      that we correct any information you believe is inaccurate
                      or complete information you believe is incomplete.
                    </li>
                    <li>
                      The right to erasure: You have the right to request that
                      we erase your personal data, under certain conditions.
                    </li>
                    <li>
                      The right to restrict processing: You have the right to
                      request that we restrict the processing of your personal
                      data, under certain conditions.
                    </li>
                    <li>
                      The right to data portability: You have the right to
                      request that we transfer the data that we have collected
                      to another organization, or directly to you, under certain
                      conditions.
                    </li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us at
                    Connect@airpockets.co or +234 816 971 5754
                  </p>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">5. Data Security</h1>

                  <p>
                    We use administrative, technical, and physical security
                    measures to help protect your personal information. While we
                    have taken reasonable steps to secure the personal
                    information you provide to us, please be aware that despite
                    our efforts, no security measures are perfect or
                    impenetrable, and no method of data transmission can be
                    guaranteed against any interception or other type of misuse.
                  </p>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    6. Data Retention
                  </h1>

                  <p>
                    We will retain your personal information only for as long as
                    is necessary for the purposes set out in this Privacy Policy
                    and to the extent necessary to comply with our legal
                    obligations, resolve disputes, and enforce our policies.
                  </p>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    7. International Data Transfers
                  </h1>

                  <p>
                    Your information, including personal information, may be
                    transferred to—and maintained on— computers located outside
                    of your state, province, country, or other governmental
                    jurisdiction where the data protection laws may differ from
                    those of your jurisdiction
                  </p>
                  <p>
                    If you are located outside Nigeria and choose to provide
                    information to us, please note that we transfer the data,
                    including personal information, to Nigeria and process it
                    there.
                  </p>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    8. Third-Party Links
                  </h1>

                  <p>
                    Our website may contain links to third-party websites. We
                    are not responsible for the privacy practices or the content
                    of these websites. Please review the privacy policies of any
                    third-party sites you visit.
                  </p>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">
                    9. Changes to This Privacy Policy
                  </h1>
                  <p>
                    We may update this Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on our website. You are advised to review this Privacy
                    Policy periodically for any changes.
                  </p>
                </div>
                <div className="py-2 flex flex-col gap-2">
                  <h1 className="text-[#04C3F9] font-bold">10. Contact Us</h1>
                  <p>
                    If you have any questions or concerns about this Privacy
                    Policy, please contact us at:
                  </p>
                  <ul>
                    <li>Email: Connect@airpockets.co</li>
                    <li>Phone: +234 816 971 5754</li>
                  </ul>
                </div>
                <p className="my-4">
                  This privacy policy aims to ensure transparency and build
                  trust with our customers.
                </p>
              </div>
            </article>
          </section>
        </section>
      </main>
    </MaxwidthWrapper>
  );
};

export default Privacy;
