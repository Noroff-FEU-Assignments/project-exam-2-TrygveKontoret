import { ROOM_URL } from "../../utils/api";
import { useFetch } from "../../hooks/useFetch";

const Rooms = () => {
  const { data } = useFetch(ROOM_URL);
};
