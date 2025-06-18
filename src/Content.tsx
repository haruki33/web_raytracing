import { useState } from "react";
import Form from "./Form";
import RaytracingCanvas from "./RaytracingCanvas";
import type { ResponseData } from "./type";
import BasicCard from "./BasicCard";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

function Content() {
  const [res, setRes] = useState<ResponseData | null>(null);

  return (
    <>
      <Card>
        <Box display="flex" flexDirection="row" border="1px dashed grey">
            <Box flex={1} display="flex" alignItems="center" justifyContent="center" borderRight="1px solid #ccc">
            <RaytracingCanvas res={res} />
            </Box>
          <Box flex={1}>
            <Form setRes={setRes} />
          </Box>
        </Box>
      </Card>
    </>
  )
}

export default Content;
