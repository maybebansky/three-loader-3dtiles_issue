import { Object3D, Points, PointsMaterial } from "three";
import { useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { TilesRenderer } from "3d-tiles-renderer/r3f";

const TILESET_URL =
  import.meta.env.VITE_TILESET_URL || "http://localhost:3000/tileset.json";

const cameraPosition = [50, 50, 50] as const;

export default function Render() {
  return (
    <div className="w-screen h-[95vh] bg-amber-100">
      <Canvas>
        <TilesRenderer
          url={TILESET_URL}
          errorTarget={8}
          maxDepth={50}
          onLoadModel={({ scene }: { scene: Object3D }) => {
            scene.traverse((c) => {
              if (c instanceof Points) {
                const material = c.material;
                if (material instanceof PointsMaterial) {
                  material.size = 0.01;
                  material.sizeAttenuation = true;
                  material.needsUpdate = true;
                }
              }
            });
          }}
        />
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <OrbitControls
          target={[0, 0, 0]}
          enableDamping={true}
          dampingFactor={0.1}
        />
      </Canvas>
    </div>
  );
}
