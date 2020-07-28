import React from 'react';

import RoomAvailability from "./room_availability";
import RoomFacilities from "./room_facilities";
import RoomAdditionalFacilities from "./room_additional_facilities";

import styles from "./room_info.module.css";

export default function RoomInfo({ roomType, rowIndex }) {
  const { title, ratePlans, availability, facilities, otherFacilities } = roomType;
  const ratesNumber = ratePlans.length;

  return (
    <td rowSpan={ratesNumber}>
      <div className>{title}</div>
      <RoomAvailability availability={availability} />
      <RoomFacilities facilities={facilities} />
      <RoomAdditionalFacilities facilities={otherFacilities} collapsable={Boolean(rowIndex)} />
    </td>
  )
}