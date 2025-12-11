import React, { useMemo } from 'react';

interface CinematicSectionProps {
    children: React.ReactNode;
    isActive: boolean;
    isPrevious: boolean;
    isNext: boolean;
    direction: number;
    zIndex: number;
}

const CinematicSection: React.FC<CinematicSectionProps> = ({
    children,
    isActive,
    isPrevious,
    isNext,
    zIndex,
}) => {
    const style = useMemo((): React.CSSProperties => {
        let opacity = 0;
        let scale = 1;
        let blur = 0;
        let pointerEvents: 'auto' | 'none' = 'none';
        let zIndexVal = zIndex;

        if (isActive) {
            opacity = 1;
            scale = 1;
            blur = 0;
            pointerEvents = 'auto';
            zIndexVal = 10;
        } else if (isPrevious) {
            opacity = 0;
            scale = 0.85;
            blur = 10;
            zIndexVal = 5;
        } else if (isNext) {
            opacity = 0;
            scale = 1.15;
            blur = 10;
            zIndexVal = 5;
        }

        return {
            position: 'absolute',
            inset: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            opacity,
            transform: `scale(${scale}) translate3d(0,0,0)`,
            filter: `blur(${blur}px)`,
            zIndex: zIndexVal,
            pointerEvents,
            transformOrigin: 'center center',
            backfaceVisibility: 'hidden',
            transition: `
              opacity 1200ms cubic-bezier(0.4, 0.0, 0.2, 1),
              transform 1200ms cubic-bezier(0.4, 0.0, 0.2, 1),
              filter 1200ms linear
          `,
            willChange: 'transform, opacity, filter',
        };
    }, [isActive, isPrevious, isNext, zIndex]);

    return (
        <div style={style}>
            <div className="w-full h-full overflow-y-auto no-scrollbar relative">
                {children}
            </div>
        </div>
    );
};

export default CinematicSection;
