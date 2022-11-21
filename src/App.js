import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";

import CarShow from "./components/CarShow";

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
