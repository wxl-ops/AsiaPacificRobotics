import React from "react";
import "./index.less";
export default function AsiaPacificRobotics() {
  return (
    <div className="Asia-Pacific-Robotics">
      <div
        className="banner"
        style={{ background: `url(${require("./hero.png")}) 0% 0% /cover` }}
      >
        <div className="title">
          <p>ROBOTICS</p>
          <p>亚太机器人</p>
        </div>
      </div>
      <div className="Asia-Pacific-Robotics_wrapper">这是内容</div>
    </div>
  );
}
