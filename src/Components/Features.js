import React from "react";
import FeaturesBox from "./FeaturesBox";
import featureimage from "../images/feature_1.png";
import featureimage1 from "../images/feature_2.png";
import featureimage2 from "../images/feature_3.png";

function Features() {
  return (
    <div id="features">
      <div className="a-container">
        <FeaturesBox image={featureimage} title="Development Course" />
        <FeaturesBox image={featureimage1} title="Money Saving Services" />
        <FeaturesBox image={featureimage2} title="Usability Interface" />
      </div>
    </div>
  );
}

export default Features;
