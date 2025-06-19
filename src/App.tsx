import Content from "./Content";
import Header from "./Header";
import { useState } from 'react';

function App() {
  const [selectedPage, setSelectedPage] = useState<string | null>('/home');

  console.log(`Selected page: ${selectedPage}`);
  
  return (
    <>
      <Header onSelectedPage={setSelectedPage} />
      <Content selectedPage={selectedPage} />
    </>
  )
}

export default App
