import { useState } from "react";
import Form from "./Form";
import RaytracingCanvas from "./RaytracingCanvas";

type ResponseData = {
  points: [number, number, number][],
  surfListIdxs: [number, number, number, number][],
  routes: [number, number, number][],
  tp: [number, number, number],
  rp: [number, number, number],
};


function Content() {
  const [res, setRes] = useState<ResponseData | null>(null);

  return (
    <>
      <Form setRes={setRes} />
      <RaytracingCanvas res={res} />
    </>
  )
}

export default Content
