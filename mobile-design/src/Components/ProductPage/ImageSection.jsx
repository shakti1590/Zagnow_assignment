import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BatteryAndTime from "./BatteryAndTime";
import WishList from "./WishList";
import ArrowCart from "./ArrowCart";

function ImageSection() {
  const currentTime = new Date();
  const hrs = currentTime.getHours();
  const mins = currentTime.getMinutes();
  const [hours, setHours] = useState(hrs);
  const [minutes, setMinutes] = useState(mins);
  const [battery, setBattery] = useState(100);

  useEffect(() => {
    setInterval(() => {
      const currentTime = new Date();
      let hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();

      // battery percentage
      navigator.getBattery().then(function (battery) {
        const batteryPercentage = Math.round(battery.level * 100);
        setBattery(batteryPercentage);
        return batteryPercentage;
      });

      if (hours > 12) {
        hours -= 12;
      }
      setHours(hours);
      setMinutes(minutes);
    }, 1000);
  }, [minutes]);
  return (
    <Box w={"100%"} border={"1px solid re"}>
      {/* image-container */}
      <Image
        position={"relative"}
        w={"100%"}
        src="nike_tshirt.png"
        mt={"-15px"}
      />
      {/* Time and battery is given here */}
      <BatteryAndTime minutes={minutes} hours={hours} battery={battery} />

      {/* Arrow and Cart */}
      <ArrowCart />
      <WishList />
    </Box>
  );
}

export default ImageSection;
