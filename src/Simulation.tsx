import Form from "./Form";
import RaytracingCanvas from "./RaytracingCanvas";
import type { ResponseData } from "./type";
import { useState } from "react";

function Simulation() {
  const [res, setRes] = useState<ResponseData | null>(null);

  return (
    <>
      <Form setRes={setRes} />
      <RaytracingCanvas res={res} />
    </>
  );
};

export default Simulation;