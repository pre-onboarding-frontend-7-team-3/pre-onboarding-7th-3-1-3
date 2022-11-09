import App from "App";
import ReactDOM from "react-dom/client";
import "./index.css";
import { worker } from "./mocks/worker";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
