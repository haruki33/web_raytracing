import { useState } from "react";
import Form from "./Form";
import RaytracingCanvas from "./RaytracingCanvas";

function Content() {
  const [formData, setFormData] = useState(null);

  return (
    <>
      <Form setFormData={setFormData} />
      <RaytracingCanvas formData={formData} />
    </>
  )
}

export default Content
