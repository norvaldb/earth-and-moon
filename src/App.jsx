import {useState, Suspense, useRef} from 'react'
import './App.css'
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {Box, Environment, OrbitControls, Plane, Text} from "@react-three/drei";
import Earth from "../src/assets/Earth.jsx";
import Moon from "../src/assets/Moon.jsx";

const XZPlane = ({size}) => (
    <Plane args={[size, size, size, size]}
           rotation={[1.5 * Math.PI, 0, 0]}
           position={[0, 0, 0]}>
        <meshStandardMaterial attach="material" color="#f9c74f" wireframe/>
    </Plane>
);

const XYPlane = ({size}) => (
    <Plane
        args={[size, size, size, size]}
        rotation={[0, 0, 0]}
        position={[0, 0, 0]}
    >
        <meshStandardMaterial attach="material" color="pink" wireframe/>
    </Plane>
);

const YZPlane = ({size}) => (
    <Plane
        args={[size, size, size, size]}
        rotation={[0, Math.PI / 2, 0]}
        position={[0, 0, 0]}
    >
        <meshStandardMaterial attach="material" color="#80ffdb" wireframe/>
    </Plane>
);

const Grid = ({size}) => {
    return (
        <group>
            <Text
                color="white" // default
                anchorX="center" // default
                anchorY="middle" // default
                position={[size / 2 + 1, 0, 0]}
                scale={[4, 4, 4]}
            >
                X+
            </Text>
            <Text
                color="white" // default
                anchorX="center" // default
                anchorY="middle" // default
                position={[-size / 2 - 1, 0, 0]}
                scale={[4, 4, 4]}
            >
                X-
            </Text>
            <Text
                color="white" // default
                anchorX="center" // default
                anchorY="middle" // default
                position={[0, size / 2 + 1, 0]}
                scale={[4, 4, 4]}
            >
                Y+
            </Text>
            <Text
                color="white" // default
                anchorX="center" // default
                anchorY="middle" // default
                position={[0, -size / 2 - 1, 0]}
                scale={[4, 4, 4]}
            >
                Y-
            </Text>
            <Text
                color="white" // default
                anchorX="center" // default
                anchorY="middle" // default
                position={[0, 0, size / 2 + 1]}
                scale={[4, 4, 4]}
            >
                Z+
            </Text>
            <Text
                color="white" // default
                anchorX="center" // default
                anchorY="middle" // default
                position={[0, 0, -size / 2 - 1]}
                scale={[4, 4, 4]}
            >
                Z-
            </Text>
            <XZPlane size={size}/>
            <XYPlane size={size}/>
            <YZPlane size={size}/>
        </group>
    );
}

const Controls = ({controls}) => {
    const {
        xRotation,
        yRotation,
        zRotation,
        xPosition,
        yPosition,
        zPosition,
        xScale,
        yScale,
        zScale,
        setXRotation,
        setYRotation,
        setZRotation,
        setXPosition,
        setYPosition,
        setZPosition,
        setXScale,
        setYScale,
        setZScale
    } = controls;
    return (
        <div className="controls">
            <h2>Selected Object: Cube</h2>
            <div className="controlGroup">
                <div className="control">
                    <label>X Position</label>
                    <input
                        value={xPosition}
                        onChange={(e) => setXPosition(e.target.value)}
                        step={1 / 32}
                        type="number"
                    />
                </div>
                <div className="control">
                    <label>Y Position</label>
                    <input
                        value={yPosition}
                        onChange={(e) => setYPosition(e.target.value)}
                        step={1 / 32}
                        type="number"
                    />
                </div>
                <div className="control">
                    <label>Z Position</label>
                    <input
                        value={zPosition}
                        onChange={(e) => setZPosition(e.target.value)}
                        step={1 / 32}
                        type="number"
                    />
                </div>
            </div>
            <div className="controlGroup">
                <div className="control">
                    <label>X Rotation</label>
                    <input
                        value={xRotation}
                        onChange={(e) => setXRotation(e.target.value)}
                        step={1 / 32}
                        type="number"
                    />
                </div>
                <div className="control">
                    <label>Y Rotation</label>
                    <input
                        value={yRotation}
                        onChange={(e) => setYRotation(e.target.value)}
                        step={1 / 32}
                        type="number"
                    />
                </div>
                <div className="control">
                    <label>Z Rotation</label>
                    <input
                        value={zRotation}
                        onChange={(e) => setZRotation(e.target.value)}
                        step={1 / 32}
                        type="number"
                    />
                </div>
            </div>
            <div className="controlGroup">
                <div className="control">
                    <label>X Scale</label>
                    <input
                        value={xScale}
                        onChange={(e) => setXScale(e.target.value)}
                        step={1 / 32}
                        type="number"
                    />
                </div>
                <div className="control">
                    <label>Y Scale</label>
                    <input
                        value={yScale}
                        onChange={(e) => setYScale(e.target.value)}
                        step={1 / 32}
                        type="number"
                    />
                </div>
                <div className="control">
                    <label>Z Scale</label>
                    <input
                        value={zScale}
                        onChange={(e) => setZScale(e.target.value)}
                        step={1 / 32}
                        type="number"
                    />
                </div>
            </div>
        </div>
    );
}

const Cube = ({position, rotation, scale = [1, 1, 1], handleClick}) => (
    <group position={position} rotation={rotation} scale={scale}>
        <Box args={[1, 1, 1]} onClick={handleClick}>
            <meshStandardMaterial attach="material" color="white"/>
        </Box>
    </group>
);

const Light = ({
                   position,
                   color,
                   intensity,
                   orbitalOffset = 0,
                   orbitalSpeed = 1
               }) => {
    const ref = useRef();
    useFrame(() => {
        let date = Date.now() * orbitalSpeed * 0.001 + orbitalOffset;
        ref.current.position.set(
            Math.cos(date) * 2 + position[0],
            Math.sin(date) * 2 + position[1],
            Math.sin(date) * 2 + position[2]
        );
    });
    const texture = useTexture("lightbulb.png");
    return (
        <group position={position} ref={ref}>
            <sprite>
                <spriteMaterial
                    attach="material"
                    map={texture}
                    transparent
                    opacity={0.7}
                    color={color}
                />
            </sprite>
            <pointLight color={color} intensity={intensity} decay={2} distance={20}/>
        </group>
    );
};

const App = () => {
    const [xPosition, setXPosition] = useState(0);
    const [yPosition, setYPosition] = useState(0);
    const [zPosition, setZPosition] = useState(0);

    const [xRotation, setXRotation] = useState(0);
    const [yRotation, setYRotation] = useState(0);
    const [zRotation, setZRotation] = useState(0);

    const [xScale, setXScale] = useState(1);
    const [yScale, setYScale] = useState(1);
    const [zScale, setZScale] = useState(1);


    return (
        <>

            <Canvas camera={{position: [0, 2, 10]}}>
                <Suspense
                    fallback={
                        <Text
                            color="white" // default
                            anchorX="center" // default
                            anchorY="middle" // default
                        >
                            Loading
                        </Text>
                    }
                >
                    <OrbitControls/>
                    <directionalLight intensity={0.5} position={[6, 2, 1]}/>
                    {/* <ambientLight intensity={0.1} /> */}
                    <Grid size={10}/>
                    <Light position={[3, 0, 2]} color="red" intensity={2} offset={200}/>
                    <Light
                        position={[2, 2, -2]}
                        color="blue"
                        intensity={2}
                        distance={10}
                        orbitalSpeed={2}
                    />
                    <Light
                        position={[-3, 0, 2]}
                        color="green"
                        intensity={2}
                        orbitalSpeed={3}
                    />

                    <Cube
                        handleClick={() => console.log("clicked on the cube")}
                        rotation={[
                            xRotation * Math.PI,
                            yRotation * Math.PI,
                            zRotation * Math.PI
                        ]}
                        position={[xPosition, yPosition, zPosition]}
                        scale={[xScale, yScale, zScale]}
                    />
                </Suspense>
            </Canvas>
            <Controls
                controls={{
                    xPosition,
                    yPosition,
                    zPosition,
                    xRotation,
                    yRotation,
                    zRotation,
                    xScale,
                    yScale,
                    zScale,
                    setXPosition,
                    setYPosition,
                    setZPosition,
                    setXRotation,
                    setYRotation,
                    setZRotation,
                    setXScale,
                    setYScale,
                    setZScale
                }}
            />
            {/*<Canvas>*/}
            {/*    <OrbitControls/>*/}
            {/*    <Suspense fallback={null}>*/}
            {/*        <ambientLight intensity={0.3}/>*/}
            {/*        <Earth></Earth>*/}
            {/*        /!*<Moon></Moon>*!/*/}
            {/*    </Suspense>*/}
            {/*    <Environment preset="sunset"/>*/}
            {/*</Canvas>*/}
        </>
    )
}

export default App
