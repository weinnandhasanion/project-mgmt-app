import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "components/App";
import { Provider } from "react-redux";
import store from "store";
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Router>
      <SnackbarProvider autoHideDuration={3000}>
        <App />
      </SnackbarProvider>
    </Router>
  </Provider>
);
