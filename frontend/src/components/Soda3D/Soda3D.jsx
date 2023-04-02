import React, {
    useRef,
    useCallback,
    useEffect,
} from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    addBasePlugins
} from "webgi";
import "./soda.css"

function Soda3D() {
    const canvasRef = useRef(null)

    const setupViewer = useCallback(async () => {
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })

        const manager = await viewer.addPlugin(AssetManagerPlugin)

        // or use this to add all main ones at once.
        await addBasePlugins(viewer)


        // This must be called once after all plugins are added.
        viewer.renderer.refreshPipeline()

        await manager.addFromPath("/assets/soda_can_red.glb")

        viewer.scene.activeCamera.position.set(25,25,35);
        viewer.scene.activeCamera.positionUpdated();
        viewer.scene.setBackground("white");
        // viewer.scene.activeCamera.setCameraOptions({constrolsEneabled: false});
    }, []);

    useEffect(() => {
        setupViewer();
    }, []);
    return (
        <div id="webgi-canvas-container">
            <canvas id="webgi-canvas" ref={canvasRef} />
        </div>
    );
}

export default Soda3D;