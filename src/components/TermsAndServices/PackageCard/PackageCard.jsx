import React from "react";
import { PackageCardWrapper } from "../../../pages/TermsAndServices/styled";

export default function PackageCard({ times, prices, discount, views }) {
  return (
    <PackageCardWrapper>
      <h1>
        <span className="times">{times} Days</span> -{" "}
        <span className="prices">{prices}$</span>
      </h1>
      <p className="content">
        - Reach to {views} user views - Suggest ranking keywords (upto 5
        keywords per country - 2 countries) - Increase average organic install
        about {discount}% - Export CSV 1 time/day
      </p>
    </PackageCardWrapper>
  );
}
