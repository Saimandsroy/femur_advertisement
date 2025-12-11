"use client"

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050510, 0.035);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 26;

        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const groupCage = new THREE.Group();
        const groupStars = new THREE.Group();

        scene.add(groupCage);
        scene.add(groupStars);

        const ambientLight = new THREE.AmbientLight(0x4c1d95, 0.6);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x8b5cf6, 2, 60);
        pointLight.position.set(0, 10, 10);
        scene.add(pointLight);

        // Star Dust
        const starGeo = new THREE.BufferGeometry();
        const starCount = 800;
        const starPos = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount * 3; i++) {
            starPos[i] = (Math.random() - 0.5) * 90;
        }
        starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
        const starMat = new THREE.PointsMaterial({
            size: 0.15,
            color: 0xffffff,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        const starSystem = new THREE.Points(starGeo, starMat);
        groupStars.add(starSystem);

        // Cage
        const matCageLine = new THREE.LineBasicMaterial({
            color: 0x6366f1,
            transparent: true,
            opacity: 0.1,
            blending: THREE.AdditiveBlending
        });
        const cageGeo1 = new THREE.IcosahedronGeometry(18, 1);
        const cageWireframe1 = new THREE.WireframeGeometry(cageGeo1);
        const cageLines1 = new THREE.LineSegments(cageWireframe1, matCageLine);
        groupCage.add(cageLines1);

        // Animation
        let mouseX = 0;
        let mouseY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;
        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX - windowHalfX) * 0.0005;
            mouseY = (event.clientY - windowHalfY) * 0.0005;
        };
        document.addEventListener('mousemove', handleMouseMove);

        const clock = new THREE.Clock();
        let animationId: number;

        function animate() {
            animationId = requestAnimationFrame(animate);
            const time = clock.getElapsedTime();

            groupCage.rotation.y = time * 0.03;
            groupStars.rotation.y = time * 0.01;

            scene.rotation.y += 0.05 * (mouseX - scene.rotation.y);
            scene.rotation.x += 0.05 * (mouseY - scene.rotation.x);

            renderer.render(scene, camera);
        }

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            groupCage.clear();
            groupStars.clear();
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        />
    );
}
