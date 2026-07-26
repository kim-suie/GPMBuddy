import { createRoot } from "react-dom/client"; 
import App from "./app/App.jsx"; // CHANGED HERE: Changed extension from .tsx to .jsx
import "./styles/index.css"; 

// CHANGED HERE: Removed the "!" operator from document.getElementById("root")
createRoot(document.getElementById("root")).render(<App />);
