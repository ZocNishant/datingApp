import Header from "./components/header/Header";
import DatingCards from "./components/dating_cards/DatingCards";
import SwipeButtons from "./components/swipe_buttons/SwipeButtons";

const App = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
};

export default App;
