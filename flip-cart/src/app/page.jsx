import Navbar from "@/components/Navbar/Navbar";
import HeroBanner from "@/components/home/HeroBanner";
import ProductSection from "@/components/home/ProductSection";
import Footer from "@/components/Footer";
import { deals, topElectronics, fashionPicks, homePicks } from "@/data/products";

export default function Home() {
  return (
    <main className="bg-[#f1f3f6] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-2">
        <HeroBanner />

        <ProductSection
          title="Deal of the Day"
          products={deals}
          link="/deals"
        />

        <ProductSection
          id="electronics"
          title="Top Electronics"
          products={topElectronics}
          link="/electronics"
        />

        <ProductSection
          id="fashion"
          title="Fashion Picks"
          products={fashionPicks}
          link="/fashion"
        />

        <ProductSection
          id="home"
          title="Home Picks"
          products={homePicks}
          link="/home"
        />

      </div>
      <Footer />
    </main>
  );
}