import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Image } from "@/components/Image/Index";
import MaxwidthWrapper from "@/components/MaxwidthWrapper.tsx/MaxWidthWrapper";
import SearchBcg from "@/pages/SearchResults/assets/SearchFlight.jpeg";

const Faqs = () => {
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
          <div>
            <h1 className="  font-bold md:text-5xl lg:text-7xl xl:text-[89px">
              Frequently asked questions
            </h1>

            <h1 className=" py-4 mt-2">
              We're here to help with any questions you have about plans,
              pricing, and supported features.
            </h1>
          </div>

          <section className="w-full mt-4 flex flex-col gap-16">
            <article className="grid md:grid-cols-5">
              <div className="w-full col-span-2">
                <h1 className=" font-bold text-xl max-w-[20rem]  sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  General Information
                </h1>
              </div>
              <div className="w-full col-span-3  ">
                <div className="">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        What is Airpockets Travel and Tour
                      </AccordionTrigger>
                      <AccordionContent className="max-w-[40rem]">
                        Airpockets Travel and Tour is a travel company dedicated
                        to providing seamless and personalized travel
                        experiences. We offer a range of services including
                        flight bookings, hotel reservations, car rentals, and
                        customized travel packages.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        How can I contact customer support?
                      </AccordionTrigger>
                      <AccordionContent className="max-w-[40rem]">
                        You can reach our customer support team via email at
                        connect@airpockets.co or call us at (+234 816 971 5754).
                        Our support hours are Monday to Friday, 9 AM to 5 PM
                        (GMT+1).
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </article>

            <article className="grid md:grid-cols-5">
              <div className="w-full col-span-2">
                <h1 className=" font-bold text-xl max-w-[20rem]  sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  Booking
                </h1>
              </div>
              <div className="w-full col-span-3  ">
                <div className="">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How do I book a trip?</AccordionTrigger>
                      <AccordionContent className="max-w-[40rem]">
                        <p>
                          You can book a trip through our website by following
                          these steps:
                        </p>
                        <ul>
                          <li>1. Visit our website at Airpockets.co</li>
                          <li>
                            2. Use the search bar to find flights, hotels, or
                            travel packages.
                          </li>
                          <li>
                            3. Select your preferred options and proceed to
                            checkout.
                          </li>
                          <li> 4. Enter your personal and payment details.</li>
                          <li> 5. Confirm your booking.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        Can I book a trip for someone else?
                      </AccordionTrigger>
                      <AccordionContent className="max-w-[40rem]">
                        Yes, you can book a trip for someone else. Just enter
                        their details in the passenger information section
                        during the booking process.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        How do I know if my booking is confirmed?
                      </AccordionTrigger>
                      <AccordionContent className="max-w-[40rem]">
                        You will receive a confirmation email with all the
                        details of your booking once the payment is processed.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </article>

            <article className="grid md:grid-cols-5">
              <div className="w-full col-span-2">
                <h1 className=" font-bold text-xl max-w-[20rem]  sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  Payment
                </h1>
              </div>
              <div className="w-full col-span-3  ">
                <div className="">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        What payment methods are accepted?
                      </AccordionTrigger>
                      <AccordionContent className="max-w-[40rem]">
                        <p>What payment methods are accepted?</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        How can I contact customer support?
                      </AccordionTrigger>
                      <AccordionContent className="max-w-[40rem]">
                        We accept the following payment methods:
                        <ul>
                          <li> - Credit/Debit Cards (Visa, MasterCard)</li>
                          <li> - Bank Transfers</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        Is it safe to enter my credit card details on your
                        website?
                      </AccordionTrigger>
                      <AccordionContent className="max-w-[40rem]">
                        Yes, it is safe. Our website uses SSL encryption to
                        protect your personal and payment information.
                        Additionally, we comply with all PCI-DSS standards for
                        secure transactions.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>
                        Can I pay in installments?
                      </AccordionTrigger>
                      <AccordionContent className="max-w-[40rem]">
                        Currently, we do not offer installment payment options.
                        Full payment is required at the time of booking.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </article>

            <article className="grid md:grid-cols-5">
              <div className="w-full col-span-2">
                <h1 className=" font-bold text-xl max-w-[20rem]  sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  Special Request
                </h1>
              </div>
              <div className="w-full col-span-3  ">
                <div className="">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        Can I request special meals on my flight?
                      </AccordionTrigger>
                      <AccordionContent className="max-w-[40rem]">
                        Yes, you can request special meals such as vegetarian,
                        vegan, gluten-free, and others during the booking
                        process or by contacting our customer support team at
                        least 48 hours before your flight.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        How do I request wheelchair assistance at the airport?
                      </AccordionTrigger>
                      <AccordionContent className="max-w-[40rem]">
                        You can request wheelchair assistance during the booking
                        process or by contacting our customer support team at
                        least 48 hours before your flight. We will coordinate
                        with the airline to ensure assistance is provided.
                        assistance is provided.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </article>

            <article className="grid md:grid-cols-5">
              <div className="w-full col-span-2">
                <h1 className=" font-bold text-xl max-w-[20rem]  sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  Travel Insurance
                </h1>
              </div>
              <div className="w-full col-span-3  ">
                <div className="">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        Do you offer travel insurance?
                      </AccordionTrigger>
                      <AccordionContent className="max-w-[40rem]">
                        Yes, we offer travel insurance plans to cover trip
                        cancellations, medical emergencies, lost luggage, and
                        other unforeseen events. You can add travel insurance to
                        your booking during the checkout process.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        How do I file a travel insurance claim?
                      </AccordionTrigger>
                      <AccordionContent className="max-w-[40rem]">
                        To file a travel insurance claim, please contact the
                        insurance provider directly. The contact information and
                        policy details will be included in your travel insurance
                        documentation provided after purchase. assistance is
                        provided.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </article>

            <article className="grid md:grid-cols-5">
              <div className="w-full col-span-2">
                <h1 className=" font-bold text-xl max-w-[20rem]  sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  Feedback & Complaints
                </h1>
              </div>
              <div className="w-full col-span-3  ">
                <div className="">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        How can I provide feedback about my experience?
                      </AccordionTrigger>
                      <AccordionContent className="max-w-[40rem]">
                        We value your feedback and strive to improve our
                        services. You can provide feedback by filling out the
                        survey form sent to your email after your trip or by
                        contacting our customer support team.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        What should I do if I have a complaint?
                      </AccordionTrigger>
                      <AccordionContent className="max-w-[40rem]">
                        If you have a complaint, please contact our customer
                        support team with the details of your issue. We will
                        investigate and respond to your complaint as quickly as
                        possible to resolve any concerns. assistance is
                        provided.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </article>
          </section>

          <div className="my-8">
            If you have any other questions not covered in this FAQ, please feel
            free to contact our customer support team. We are here to help you
            have a wonderful travel experience with Airpockets Travel and Tour.
          </div>
        </section>
      </main>
    </MaxwidthWrapper>
  );
};

export default Faqs;
