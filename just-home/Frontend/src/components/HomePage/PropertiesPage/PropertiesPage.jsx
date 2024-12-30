import {Hero, SearchProperties, HowToGetStart} from './index';

const PropertiesPage = () => {
  return (
    <div>
      {/* hero */}
      <Hero />

      {/* search properties */}
      <SearchProperties />

      {/* how to get started */}
      <HowToGetStart />
    </div>
  );
};

export default PropertiesPage;
