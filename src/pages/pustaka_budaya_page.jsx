import React,{useRef} from "react";

import ComponentTwoPustaka from "../components/pustaka_component/component_two";
import NavBar from "../global_components/navbar";
import ComponentOnePustaka from "../components/pustaka_component/component_one";
import ComponentThreePustaka from "../components/pustaka_component/component_three";
import ComponentFourPustaka from "../components/pustaka_component/component_four";
import ComponentFivePustaka from "../components/pustaka_component/component_five";
import FooterComponent from "../global_components/footer";
import CardSearchBudaya from "../components/common_component/card_search_budaya";

function PustakaBudayaPage({ provinsiData, budayaData, pulauData }) {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className="bg-basicColor">
        <NavBar provinsiData={provinsiData} pulauData={pulauData}/>
        <ComponentOnePustaka handleClick={handleClick} budaya={budayaData}/>
        <ComponentTwoPustaka ref={ref}/>
        <ComponentThreePustaka/>
        <ComponentFourPustaka budayaData={budayaData}/>
        <ComponentFivePustaka budayaData={budayaData}/>
        <FooterComponent/>
      </div>
    </>
  );
}

export default PustakaBudayaPage;
