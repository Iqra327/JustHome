import { Hero, Cities, Features, SignIn, Banner, FeaturedProperties, Reviews, FAQ } from "./index.js";

const HomePage = () => {
  return (
    <>
      {/* hero section */}
      <Hero />

      {/* find properties */}
      <Cities />

      {/* why you should work */}
      <Features />

      {/* sign in section */}
      <SignIn />

      {/* banner */}
      <Banner />

      {/* featured properties */}
      <FeaturedProperties />

      {/* customer reviews */}
      <Reviews />

      {/* faqs */}
      <FAQ />
    </>
  );
};

export default HomePage;
