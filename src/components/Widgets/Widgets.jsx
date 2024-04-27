import React from "react";
import "./Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fredrelationship101&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="700"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        allowTransparency="true"
        allow="encrypted-media"
        title="FacebookPage"
      ></iframe>
    </div>
  );
};

export default Widgets;
