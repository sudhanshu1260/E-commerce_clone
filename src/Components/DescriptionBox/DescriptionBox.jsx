import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Your fashion site’s product descriptions play a crucial role in
          attracting and engaging customers – new and old. Your customers want a
          positive shopping experience, they want to find trust in your brand,
          and they want to be confident that they’re giving you their money for
          a good product. Your product page copy can ensure all of that happens.
          Here’s how to do it.
        </p>
        <p>
          Your fashion site’s product descriptions play a crucial role in
          attracting and engaging customers – new and old. Your customers want a
          positive shopping experience, they want to find trust in your brand.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
