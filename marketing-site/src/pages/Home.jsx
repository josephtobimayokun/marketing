import Nav from "../components/Nav";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import PlatformArchitecture from "../components/PlatformArchitecture";
import DatasetIntelligence from "../components/DatasetIntelligence";
import Experimentation from "../components/Experimentation";
import ServingExecution from "../components/ServingExecution";
import Observability from "../components/Observability";
import OpsControlRoom from "../components/OpsControlRoom";
import Security from "../components/Security";
import ProductDemo from "../components/ProductDemo";
import WhyMicrolink from "../components/WhyMicrolink";
import UseCases from "../components/UseCases";
import Pricing from "../components/Pricing";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <TrustBar />
      <PlatformArchitecture />
      <DatasetIntelligence />
      <Experimentation />
      <ServingExecution />
      <Observability />
      <OpsControlRoom />
      <Security />
      <ProductDemo />
      <WhyMicrolink />
      <UseCases />
      <Pricing />
      <Waitlist />
      <Footer />
    </div>
  );
}
