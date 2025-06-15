import { useForm } from 'react-hook-form'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
// import './App.css'

function App() {
  const defaultValues = {
    tpX: 0,
    tpY: 0,
    tpZ: 0,
    rpX: 0,
    rpY: 0,
    rpZ: 0,
  }

  const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues,
  })

  const onSubmit = data => console.log(data)
  const onError = err => console.error(err)

  function Rectangle() {
    const vertices = [
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

    const surfaceIndexs = [
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
              count={4}
              array={new Float32Array([
                ...vertices[face[0]],
                ...vertices[face[1]],
                ...vertices[face[2]],
                ...vertices[face[3]],
              ])}
              itemSize={3}
              />
              <bufferAttribute
              attach="index"
              array={new Uint16Array([0, 1, 2, 0, 2, 3])}
              count={6}
              itemSize={1}
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

  const rayPoints = [
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
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <div>
          <p>送信器の座標</p>
          <div>
            <label htmlFor="tpX">X:</label>
            <input id="tpX" type="number" step="1" min="0" max="10"
            {...register('tpX', {
              required: 'TP X is required',
              max: {
                value: 10,
                message: 'TP X must be at most 10'
              },
              valueAsNumber: true,
            })} />
          </div>
          <div>{errors.tpX?.message}</div>
          <div>
            <label htmlFor="tpY">Y:</label>
            <input id="tpY" type="number" step="1" min="0" max="10"
            {...register('tpY', {
              required: 'TP Y is required',
              max: {
                value: 10,
                message: 'TP Y must be at most 10'
              },
              valueAsNumber: true,
            })} />
          </div>
          <div>{errors.tpX?.message}</div>
          <div>
            <label htmlFor="tpZ">Z:</label>
            <input id="tpZ" type="number" step="1" min="0" max="10"
            {...register('tpZ', {
              required: 'TP Z is required',
              max: {
                value: 10,
                message: 'TP Z must be at most 10'
              },
              valueAsNumber: true,
            })} />
          </div>
          <div>{errors.tpZ?.message}</div>
        </div>
        <div>
          <p>受信器の座標</p>
          <div>
            <label htmlFor="rpX">X:</label>
            <input id="rpX" type="number" step="1" min="0" max="10"
            {...register('rpX', {
              required: 'RP X is required',
              max: {
                value: 10,
                message: 'RP X must be at most 10'
              },
              valueAsNumber: true,
            })} />
          </div>
          <div>{errors.rpX?.message}</div>
          <div>
            <label htmlFor="rpY">Y:</label>
            <input id="rpY" type="number" step="1" min="0" max="10"
            {...register('rpY', {
              required: 'RP Y is required',
              max: {
                value: 10,
                message: 'RP Y must be at most 10'
              },
              valueAsNumber: true,
            })} />
          </div>
          <div>{errors.rpY?.message}</div>
          <div>
            <label htmlFor="rpZ">Z:</label>
            <input id="rpZ" type="number" step="1" min="0" max="10"
            {...register('rpZ', {
              required: 'RP Z is required',
              max: {
                value: 10,
                message: 'RP Z must be at most 10'
              },
              valueAsNumber: true,
            })} />
          </div>
          <div>{errors.rpZ?.message}</div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
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
      </div>
    </>
  )
}

export default App
