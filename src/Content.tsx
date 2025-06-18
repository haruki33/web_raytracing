import { useState } from "react";
import Form from "./Form";
import RaytracingCanvas from "./RaytracingCanvas";

type FormData = {
  enviType: number
  N: number,
  tpX: number,
  tpY: number,
  tpZ: number,
  rpX: number,
  rpY: number,
  rpZ: number,
};

function Content() {
  const [formData, setFormData] = useState<FormData | null>(null);

  return (
    <>
      <Form setFormData={setFormData} />
      <RaytracingCanvas formData={formData} />
    </>
  )
}

export default Content
