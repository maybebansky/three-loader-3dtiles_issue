import { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";
import { Matrix4, Euler } from "three";
import * as THREE from "three";

import { Loader3DTilesR3FAsset } from "./loader-3dtiles-r3f";

export default function App() {
  const camera = useRef(null);

  return (
    <div className="h-screen w-screen bg-green-100 flex flex-col">
      <div className="h-full w-screen">
        <Canvas style={{ background: "#272730" }}>
          <PerspectiveCamera ref={camera}>
            <ErrorBoundary
              fallbackRender={() => (
                <mesh>
                  <sphereGeometry />
                  <meshBasicMaterial color="red" />
                </mesh>
              )}
            >
              <Suspense
                fallback={
                  <mesh>
                    <sphereGeometry />
                    <meshBasicMaterial color="yellow" />
                  </mesh>
                }
              >
                <Loader3DTilesR3FAsset
                  pointSize={1}
                  dracoDecoderPath={
                    "https://unpkg.com/three@0.160.0/examples/jsm/libs/draco"
                  }
                  basisTranscoderPath={
                    "https://unpkg.com/three@0.160.0/examples/jsm/libs/basis"
                  }
                  rotation={new Euler(-Math.PI / 2, 0, 0)}
                  url="https://storage.googleapis.com/xoxo-test-bucket-1/chunk2/tileset.json"
                  maximumScreenSpaceError={48}
                  resetTransform={true}
                />
              </Suspense>
            </ErrorBoundary>
          </PerspectiveCamera>
          <OrbitControls camera={camera.current} />
        </Canvas>
      </div>
      <p className="pl-2">three-loader-3dtiles</p>
    </div>
  );
}
