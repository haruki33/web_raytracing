import Form from "./Form";
import RaytracingCanvas from "./RaytracingCanvas";
import type { ResponseData } from "./type";
import { useState } from "react";
import Container from '@mui/material/Container';

function Simulation() {
  const [res, setRes] = useState<ResponseData | null>(null);

  return (
    <>
      <Container maxWidth="sm" sx={{ border: "1px solid #1a1a1a", padding: 2, marginTop: 2, borderRadius: 2 }}>
        <Form setRes={setRes} />
      </Container>
      <Container maxWidth="sm" sx={{ border: "1px solid #1a1a1a", padding: 2, marginTop: 2, borderRadius: 2 }}>
        <RaytracingCanvas res={res} />
      </Container>
    </>
  );
};

export default Simulation;