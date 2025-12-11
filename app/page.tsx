"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicSection from "@/components/ui/cinematic-section";
import AnimatedContent from "@/components/ui/animated-content";
import NavigationDots from "@/components/ui/navigation-dots";
import ThreeBackground from "@/components/ui/three-background";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section"; // Will create
import { CTA } from "@/components/sections/cta-section"; // Will create wrapper

export default function Home() {
    const [currentSection, setCurrentSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [direction, setDirection] = useState(1);
    const touchStart = useRef(0);

    // Define sections
    const sections = [
        <HeroSection key="hero" />,
        <ServicesSection key="services" />,
        <CTA key="cta" />,
        <Footer key="footer" />
    ];

    const totalSections = sections.length;

    const changeSection = useCallback((newSection: number) => {
        if (newSection === currentSection) return;

        const newDirection = newSection > currentSection ? 1 : -1;
        setDirection(newDirection);
        setIsScrolling(true);
        setCurrentSection(newSection);
        setTimeout(() => setIsScrolling(false), 1200);
    }, [currentSection]);

    const handleWheel = useCallback((e: WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (isScrolling) return;

        if (Math.abs(e.deltaY) > 10) {
            const scrollDir = e.deltaY > 0 ? 1 : -1;
            const nextSection = currentSection + scrollDir;

            if (nextSection >= 0 && nextSection < totalSections) {
                changeSection(nextSection);
            }
        }
    }, [currentSection, isScrolling, totalSections, changeSection]);

    useEffect(() => {
        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [handleWheel]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isScrolling) return;

            let next = -1;
            if (e.key === 'ArrowDown' || e.key === ' ') next = currentSection + 1;
            if (e.key === 'ArrowUp') next = currentSection - 1;
            if (e.key === 'Home') next = 0;
            if (e.key === 'End') next = totalSections - 1;

            if (next !== -1 && next >= 0 && next < totalSections && next !== currentSection) {
                e.preventDefault();
                changeSection(next);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSection, isScrolling, totalSections, changeSection]);

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            touchStart.current = e.touches[0].clientY;
        };

        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault();
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (isScrolling) return;

            const touchEnd = e.changedTouches[0].clientY;
            const diff = touchStart.current - touchEnd;

            if (Math.abs(diff) > 50) {
                const scrollDir = diff > 0 ? 1 : -1;
                const next = currentSection + scrollDir;

                if (next >= 0 && next < totalSections) {
                    changeSection(next);
                }
            }
        };

        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd, { passive: false });

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [currentSection, isScrolling, totalSections, changeSection]);

    return (
        <main className="min-h-screen bg-background overflow-hidden selection:bg-indigo-500/30 relative" style={{ perspective: '1000px' }}>
            <ThreeBackground />
            <Navbar />

            <NavigationDots
                totalSections={totalSections}
                currentSection={currentSection}
                onDotClick={(i) => {
                    if (!isScrolling && i !== currentSection) {
                        changeSection(i);
                    }
                }}
            />

            <div className="relative w-full h-full">
                {sections.map((Component, index) => {
                    const isActive = index === currentSection;
                    const isScrolledPast = index < currentSection;
                    const isFuture = index > currentSection;

                    return (
                        <CinematicSection
                            key={index}
                            isActive={isActive}
                            isPrevious={isScrolledPast}
                            isNext={isFuture}
                            direction={direction}
                            zIndex={isActive ? 10 : 0}
                        >
                            <AnimatedContent isActive={isActive}>
                                {Component}
                            </AnimatedContent>
                        </CinematicSection>
                    );
                })}
            </div>
        </main>
    );
}
