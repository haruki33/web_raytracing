import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
function RaytracingCanvas() {

  function Rectangle() {
    const vertices: [number, number, number][] = [
      [-5, -8, 10],
      [ 5, -8, 10],
      [-5, -8, -10],
      [ 5, -8, -10],
      [-5,  8, 10],
      [ 5,  8, 10],
      [-5,  8, -10],
      [ 5,  8, -10],
      [-5, -1, 7],
      [ 3, -1, 7],
      [-5, -1, -7],
      [ 3, -1, -7],
      [-5,  1, 7],
      [ 3,  1, 7],
      [-5,  1, -7],
      [ 3,  1, -7]
    ];

    const surfaceIndexs: [number, number, number, number][] = [
      [0, 1, 3, 2],
      [0, 1, 5, 4],  
      [2, 3, 7, 6],  
      [1, 3, 7, 5],  
      [4, 5, 7, 6],  
      [0, 8, 9, 1],  
      [2, 10, 11, 3],  
      [6, 14, 15, 7],  
      [4, 12, 13, 5],  
      [8, 9, 11, 10],
      [12, 13, 15, 14],
      [8, 10, 14, 12],
      [9, 11, 15, 13],
      [10, 11, 15, 14]
    ];


    // 各頂点に球体を描画
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
                  3
                ]}
              />
              <bufferAttribute
                attach="index"
                args={[
                  new Uint16Array([0, 1, 2, 0, 2, 3]),
                  1
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

  function RayPath() {
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

  return (
    <>
      <Canvas
        style={{ width: "300pt", height: "300pt", background: "rgb(238, 238, 238)" }}
        camera={{ position: [30, -30, 0], fov: 40 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} />
        <Rectangle />
        <RayPath />
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default RaytracingCanvas;
