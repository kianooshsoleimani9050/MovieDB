import CustomQueryClientProvider from "./contexts/CustomQueryClientProvider";
import Router from "./routes";

function App() {
  return (
    <CustomQueryClientProvider>
      <Router />
    </CustomQueryClientProvider>
  );
}

export default App;
