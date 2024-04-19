import Faqs from "@/Components/Faqs";
import Footer from "@/Components/Footer";
import { Header } from "@/Components/Header";
import Prices from "@/Components/Prices";
import ShowVideoIphone from "@/Components/ShowVideoIphone";
import { Showcase } from "@/Components/Showcase";




export default function Home() {
  return (
    <div className="gradient">
      <Header></Header>
      <Prices></Prices>
      
      <ShowVideoIphone></ShowVideoIphone>
      <Faqs></Faqs>
      <Footer></Footer>
    </div>
  );
}
