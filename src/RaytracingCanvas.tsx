import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import type { ResponseData } from "./type";
import { Grid, Button, TextField, Paper, Typography, Divider } from '@mui/material'

type TpRpProps = {
  res: ResponseData | null;
};

function TpRp({ res }: TpRpProps) {
  if (!res) return null;
  const Tp: typeof res.tp = res.tp;
  const Rp: typeof res.rp = res.rp;

  return (
    <>
      <mesh position={Tp as [number, number, number]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="rgb(0, 255, 0)" />
      </mesh>
      <mesh position={Rp as [number, number, number]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="rgb(0, 0, 255)" />
      </mesh>
    </>
  );
}


type RectangleProps = {
  res: ResponseData | null;
};

function Rectangle({ res }: RectangleProps) {
  if (!res) return null;
  const vertices: typeof res.points = res.points;
  const surfaceIndexs: typeof res.surfsListIdxs = res.surfsListIdxs;

  return (
    <>
      {vertices.map((v, i) => (
        <mesh key={i} position={v as [number, number, number]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="rgb(255, 0, 0)" />
        </mesh>
      ))}

      {surfaceIndexs.map((face, i) => (
        <mesh key={`face-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[
                new Float32Array([
                  ...vertices[face[0]],
                  ...vertices[face[1]],
                  ...vertices[face[2]],
                  ...vertices[face[3]],
                ]),
                3,
              ]}
            />
            <bufferAttribute
              attach="index"
              args={[
                new Uint16Array([0, 1, 2, 0, 2, 3, 1]),
                1,
              ]}
            />
          </bufferGeometry>
          <meshStandardMaterial
            color={`rgb(${i * 50}, 50, 50)`}
            opacity={0.2}
            transparent
            side={2}
          />
        </mesh>
      ))}
    </>
  );
}

type RayPathProps = {
  res: ResponseData | null;
};

function RayPath( {res} : RayPathProps) {
  if (!res) return null;
  const rayPoints: typeof res.routes = res.routes;
  return (
    <>
      {rayPoints.map((points, index) => (
        <Line
          key={index}
          points={points}
          color={`rgb(${index * 50}, 0, 255)`}
          lineWidth={2}
        />
      ))}
    </>
  );
}

type RaytracingCanvasProps = {
  res: ResponseData | null;
};

function RaytracingCanvas( { res }: RaytracingCanvasProps) {
  return (
    <>
      <Paper elevation={3} sx={{ p: 4, margin: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>Result</Typography>
      <Divider sx={{ my: 2 }} />
        <Canvas
          style={{ width: "300pt", height: "300pt", background: "rgb(238, 238, 238)" }}
          camera={{ position: [30, -30, 0], fov: 40 }}
          >
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 0, 0]} />
          <TpRp res={res} />
          <Rectangle res={res} />
          <RayPath res={res} />
          <OrbitControls />
        </Canvas>
      </Paper>
    </>
  )
}

export default RaytracingCanvas;
