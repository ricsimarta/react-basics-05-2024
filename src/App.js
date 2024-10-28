import { useEffect, useState } from "react";
import Text from "./components/Text";

function App() {
  const texts = [
    {
      content: "Codecool",
      color: "red"
    },
    {
      content: "Frontend",
      color: "blue"
    },
    {
      content: "Course",
      color: "green"
    }
  ]

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
      console.log("timeout");
    }, 1000)
  }, []);

  return (
    <div className="App">
      {loaded
        ? texts.map((text, index) => <Text key={index} content={text.content} color={text.color} />)
        : <div>loading...</div>
      }
    </div>
  );
}

export default App;
