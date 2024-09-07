import LoginForm from "./components/auth/login-form";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <p className="text-3xl">Hello dev-x</p>
      <Button variant={"secondary"}>Shadcn Button</Button>
      <ModeToggle />
      <Card>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
