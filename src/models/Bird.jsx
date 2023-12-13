import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

const Bird = () => {
	const birdRef = useRef();

	// Load the 3D model and animations from provided GLTF file
	const { scene, animations } = useGLTF(birdScene);

	// Get access to the animations of the bird
	const { actions } = useAnimations(animations, birdRef);

	useEffect(() => {
		actions["Take 001"].play();
	}, []);

	useFrame(({ clock, camera }) => {
		// Update the Y position simulate the flight moving in a sine wave
		birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

		if (birdRef.current.position.x > camera.position.x + 10) {
			birdRef.current.rotation.y = Math.PI;
		} else if (birdRef.current.position.x < camera.position.x - 10) {
			birdRef.current.rotation.y = 0;
		}

		if (birdRef.current.rotation.y === 0) {
			birdRef.current.position.x += 0.01;
			birdRef.current.position.z -= 0.01;
		} else {
			birdRef.current.position.x -= 0.01;
			birdRef.current.position.z += 0.01;
		}
	});

	return (
		<mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
			<primitive object={scene} />
		</mesh>
	);
};

export default Bird;
