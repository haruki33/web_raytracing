import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";

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

type RectangleProps = {
  formData: FormData | null;
};

function Rectangle({ formData }: RectangleProps) {
  if (!formData) return null;
  const vertices: [number, number, number][] = formData.points;
  const surfaceIndexs: [number, number, number, number][] = formData.surfsListIdxs;
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


function RayPath( {formData} : FormData) {
  const rayPoints: [number, number, number][][] = [
    [
      [-5, -8, 0],
      [-3, -5, 0],
      [2, 2, 1],
    ],
    [
      [5, 8, 0],
      [-3, -5, 0],
      [2, 2, 1],
    ],
  ];
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
  formData: FormData | null;
};

function RaytracingCanvas( { formData }: RaytracingCanvasProps) {
  return (
    <>
      <Canvas
        style={{ width: "300pt", height: "300pt", background: "rgb(238, 238, 238)" }}
        camera={{ position: [30, -30, 0], fov: 40 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} />
        <Rectangle formData={formData} />
        <RayPath formData={formData} />
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default RaytracingCanvas;
