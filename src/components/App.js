import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";

import Header from "./elements/Header";
import Home from "./Home";

const App = () => (
  <>
    <Header />
    <Home />
    <GlobalStyle />
  </>
);

export default App;

// 1. JSX is syntactic sugar for React.createElement
// 2. JSX can selfclose.
// 3. User defined components should start with a capital letter
// 4. You can use JavaScript expressions inside of JSX
// 5. You can nest components just like you can in HTML
// 6. Nested content can be accessed in props.children
