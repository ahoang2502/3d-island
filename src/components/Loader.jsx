import React from "react";
import { Html } from "@react-three/drei";

export default function Loader() {
	return (
		<Html>
			<div className="flex justify-center items-center">
				<div className="w-16 h-16 border-4 border-opacity-20 border-blue-800 border-t-blue-500 rounded-full animate-spin" />
			</div>
		</Html>
	);
}
