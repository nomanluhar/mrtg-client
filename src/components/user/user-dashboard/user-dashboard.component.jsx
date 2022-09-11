import React from "react";

const UserDashboard = () => {
  return (
    <div>
      <div>
        <h2>User data</h2>
      </div>

      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          title="this is our inline frame"
          src="https://www.google.com/maps/place/Intellimedia+Networks+India/@23.0340377,72.5643154,17z/data=!3m1!4b1!4m5!3m4!1s0x395e84f5e8950b4d:0x6d7ef987bce56ad6!8m2!3d23.0340311!4d72.5665031"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default UserDashboard;
