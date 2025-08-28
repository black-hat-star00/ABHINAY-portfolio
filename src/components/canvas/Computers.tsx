import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

type DeviceType = "mobile" | "tablet" | "laptop" | "desktop";

const Computers: React.FC<{ deviceType: DeviceType }> = ({ deviceType }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const { scale, position } = useMemo(() => {
    switch (deviceType) {
      case "mobile":
        return { scale: 0.67, position: [0, -3.3, -2.2] as [number, number, number] };
      case "tablet":
        return { scale: 0.72, position: [0, -3.1, -1.9] as [number, number, number] };
      case "laptop":
        return { scale: 0.73, position: [0, -3.0, -1.7] as [number, number, number] };
      case "desktop":
      default:
        return { scale: 0.75, position: [0, -2.9, -1.5] as [number, number, number] };
    }
  }, [deviceType]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");

  const getDeviceType = (width: number): DeviceType => {
    if (width <= 640) return "mobile";
    if (width <= 1024) return "tablet";
    if (width <= 1440) return "laptop";
    return "desktop";
  };

  useEffect(() => {
    const updateType = () => setDeviceType(getDeviceType(window.innerWidth));
    updateType();
    window.addEventListener("resize", updateType);
    return () => window.removeEventListener("resize", updateType);
  }, []);

  return (
    <>
      <Canvas
        frameloop="always"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: deviceType === "mobile" ? 30 : deviceType === "tablet" ? 28 : 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={deviceType === "mobile" ? 4.5 : 6.0}
          />
          <Computers deviceType={deviceType} />
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  );
};

export default ComputersCanvas;
