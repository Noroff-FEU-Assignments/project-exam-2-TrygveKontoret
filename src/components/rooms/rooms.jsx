import { ROOM_URL } from "../../utils/api";
import { useFetch } from "../../hooks/useFetch";
import { StyledRoom } from "./RoomsStyles";

export const Rooms = () => {
  const { data } = useFetch(ROOM_URL);
  console.log(data);

  return (
    <>
      <StyledRoom></StyledRoom>
    </>
  );
};
