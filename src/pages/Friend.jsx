import { useParams } from "react-router";

const Friend = () => {
  const { id } = useParams();
  return <div>Friend ID: {id}</div>;
};
export default Friend;
