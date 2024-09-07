import { useNavigate } from "react-router";
import { useStore } from "../store/store";
import { paths } from "../paths";

export default function PurchasedTests() {
  const accessToken = useStore((state) => state.accessToken);
  const firstName = useStore((state) => state.firstName);
  const lastName = useStore((state) => state.lastName);
  const navigate = useNavigate();

  if (!accessToken) {
    navigate(paths.auth.logIn);
  }
  return (
    <div>
      <h1>Purchased Tests</h1>
      <p>Here you can see all the tests you have purchased.</p>
      <p>
        {firstName} {lastName}
      </p>
    </div>
  );
}
