import { useStore } from "../store/store";

export default function Dashboard() {
  const { firstName } = useStore((state) => state);
  return <div>{firstName}</div>;
}
