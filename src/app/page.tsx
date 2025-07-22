// components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import ConversationMock from "./conversation-mock";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <SponsoredBy /> */}
      <div className="bg-[url('/intro/image/bg-why.png')] bg-top bg-center">
      <OurStats />
      <ConversationMock />
      </div>
      {/* <EventContent /> */}
      <Faq />
      <Footer />
    </>
  );
}
