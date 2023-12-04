// All icons used are the copyrighted property of Font Awesome
import { useState } from "react";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import randomUser from "random-username-generator";
import SideBar from "./components/SideBar";

import ChatRoom from "./components/ChatRoom";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([
    {
      username: "Hello",
      content: "Hello",
    },
    {
      username: "Hello",
      content: "Hello",
    },
    {
      username: "Hello",
      content: "Hello",
    },
  ]);
  const [username, setUsername] = useState(randomUser.generate());
  const [sizes, setSizes] = useState(() => ["350px", "auto", "350px"]); // Fix the sizes array

  return (
    <div style={{ height: "100vh" }}>
      <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
        <Pane minSize={350} maxSize={500}>
          <div>
            <SideBar username={username} setUsername={setUsername} />
          </div>
        </Pane>
        <div>
          <ChatRoom username={username} />
        </div>
        <Pane minSize={150} maxSize={500}>
          <div>
            <UsersList users={users} />
          </div>
        </Pane>
      </SplitPane>
    </div>
  );
}

export default App;
