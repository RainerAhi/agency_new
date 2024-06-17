import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import gsap from 'gsap'
import React, { useRef, useEffect } from 'react'

export default function Model({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/LNEmlTgPBJsgWwCk/scene.splinecode')

  const key1Ref = useRef();
  const key2Ref = useRef();
  const key3Ref = useRef();
  const key4Ref = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(key3Ref.current.position, { y: '-=60', duration: 0.3, yoyo: true, repeat: 1 })
      .to(key1Ref.current.position, { y: '-=60', duration: 0.3, yoyo: true, repeat: 1 }, "+=1")
      .to(key4Ref.current.position, { y: '-=60', duration: 0.3, yoyo: true, repeat: 1 }, "+=1")
      .to(key2Ref.current.position, { y: '-=60', duration: 0.3, yoyo: true, repeat: 1 }, "+=1")
      .to({}, { duration: 1 }); // Add a delay before the next loop starts
  }, []);

  return (
    <>
      <color attach="background" args={['#f9f8f6']} />
      <group {...props} dispose={null}>
        <scene scale={0.15} name="Scene">
          <mesh
            name="Rectangle 2"
            geometry={nodes['Rectangle 2'].geometry}
            material={materials['Metal Lines Texture 02']}
            castShadow
            receiveShadow
            position={[0.1, -275.39, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <group name="Keys" position={[0, -15.98, 0]}>
            <group ref={key4Ref} name="Key4" position={[215.39, 0, 215.17]} scale={0.96}>
              <mesh
                name="Cube"
                geometry={nodes.Cube.geometry}
                material={materials.keycap}
                castShadow
                receiveShadow
                position={[0, 52.73, 0]}
              />
              <group name="vscode" position={[-77.72, 152.78, -90.26]} rotation={[-Math.PI / 2, 0, 0]} scale={1.73}>
                <mesh
                  name="Shape 0"
                  geometry={nodes['Shape 0'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[1.36, -0.87, 0]}
                />
                <mesh
                  name="Shape 1"
                  geometry={nodes['Shape 1'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[1.3, -0.88, 0.01]}
                />
                <mesh
                  name="Shape 2"
                  geometry={nodes['Shape 2'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[1.3, -25.01, 0.02]}
                />
                <mesh
                  name="Shape 3"
                  geometry={nodes['Shape 3'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[68.75, -0.87, 0.03]}
                />
                <mesh
                  name="Shape 4"
                  geometry={nodes['Shape 4'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[1.3, -0.87, 0.04]}
                />
              </group>
            </group>
            <group ref={key3Ref} name="Key3" position={[-215.39, 0, 215.17]} scale={0.96}>
              <mesh
                name="Cube1"
                geometry={nodes.Cube1.geometry}
                material={materials.keycap}
                castShadow
                receiveShadow
                position={[0, 52.73, 0]}
              />
              <group
                name="photoshop"
                position={[-132.65, 150.96, -135.32]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.15}
              >
                <mesh
                  name="Shape 11"
                  geometry={nodes['Shape 11'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[54, -59.5, 0.01]}
                />
                <mesh
                  name="Shape 21"
                  geometry={nodes['Shape 21'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[140.3, -84.3, 0.02]}
                />
              </group>
            </group>
            <group ref={key2Ref} name="Key2" position={[215.39, 0, -215.17]} scale={0.96}>
              <mesh
                name="Cube2"
                geometry={nodes.Cube2.geometry}
                material={materials.keycap}
                castShadow
                receiveShadow
                position={[0, 52.73, 0]}
              />
              <group
                name="after effects"
                position={[-126.99, 150.69, -140.93]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.13}
              >
                <mesh
                  name="Shape 12"
                  geometry={nodes['Shape 12'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[29.8, -60.2, 0.01]}
                />
                <mesh
                  name="Shape 22"
                  geometry={nodes['Shape 22'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[132.7, -84.3, 0.02]}
                />
              </group>
            </group>
            <group ref={key1Ref} name="Key1" position={[-215.39, 0, -215.17]} scale={0.96}>
              <mesh
                name="Cube3"
                geometry={nodes.Cube3.geometry}
                material={materials.keycap}
                castShadow
                receiveShadow
                position={[0, 52.73, 0]}
              />
              <group
                name="tiktok"
                position={[-79.72, 152.89, -99.83]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.37, 0.37, 2.1]}
              >
                <mesh
                  name="Shape 01"
                  geometry={nodes['Shape 01'].geometry}
                  material={materials.white}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0]}
                />
              </group>
            </group>
          </group>
          <mesh
            name="Boolean"
            geometry={nodes.Boolean.geometry}
            material={nodes.Boolean.material}
            castShadow
            receiveShadow
            position={[0.1, -183.7, 0]}
          />
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.75}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-500}
            shadow-camera-right={500}
            shadow-camera-top={500}
            shadow-camera-bottom={-500}
            color="#eaeaea"
            position={[-562.85, 751.42, 306.13]}
          />
          <directionalLight
            name="Directional Light 2"
            castShadow
            intensity={1.42}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-786.152}
            shadow-camera-right={786.152}
            shadow-camera-top={786.152}
            shadow-camera-bottom={-786.152}
            position={[202.71, 362.18, -147.48]}
          />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}





















