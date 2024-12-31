import { Component } from "solid-js";
import Countdown from "./components/Countdown";

const App: Component = () => {
  const targetDate = "2025-01-01T00:00:00";

  return (
    <main>
      <p class="text-4xl text-center py-20">Новый год через...</p>
      <div class="clock">
        <Countdown targetDate={targetDate} />
      </div>
    </main>
  );
};

export default App;
