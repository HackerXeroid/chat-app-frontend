import { useState } from "react";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import randomUser from "random-username-generator";
import SideBar from "./components/SideBar";

import ChatRoom from "./components/ChatRoom";

const username = randomUser.generate();

function App() {
  const [sizes, setSizes] = useState(() => ["350px", "calc(100% - 350px)"]); // Fix the sizes array

  return (
    <div style={{ height: "100vh" }}>
      <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
        <Pane minSize={350} maxSize={500}>
          <div>
            <SideBar username={username} />
          </div>
        </Pane>
        <div>
          <ChatRoom username={username} />
        </div>
      </SplitPane>
    </div>
  );
}

export default App;
