import { useState } from "react";
import Form from "./Form";
import RaytracingCanvas from "./RaytracingCanvas";
import type { ResponseData } from "./type";

function Content() {
  const [res, setRes] = useState<ResponseData | null>(null);

  return (
    <>
      <Form setRes={setRes} />
      <RaytracingCanvas res={res} />
    </>
  )
}

export default Content;
