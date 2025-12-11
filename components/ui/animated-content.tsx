import React from 'react';

interface AnimatedContentProps {
    children: React.ReactNode;
    isActive: boolean;
    delay?: number;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({ children, isActive, delay = 300 }) => {
    const childrenArray = React.Children.toArray(children);

    return (
        <div className="w-full h-full">
            {childrenArray.map((child, index) => {
                const itemDelay = delay + (index * 200);

                return (
                    <div
                        key={index}
                        style={{
                            opacity: isActive ? 1 : 0,
                            transform: `translate3d(0, ${isActive ? 0 : 30}px, 0)`,
                            transition: `all 1000ms cubic-bezier(0.2, 0.8, 0.2, 1) ${itemDelay}ms`,
                            willChange: 'transform, opacity'
                        }}
                    >
                        {child}
                    </div>
                );
            })}
        </div>
    );
};

export default AnimatedContent;
