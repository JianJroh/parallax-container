import { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';

const defaultTransformStyle = {
  rotateX: 0,
  rotateY: 0,
};

export default function ParallaxContainer({
  children,
  maxDepth = 60,
  className = '',
  style = {},
}: {
  children: React.ReactNode;
  maxDepth?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [{ rotateX, rotateY }, api] = useSpring(() => defaultTransformStyle);

  useGesture(
    {
      onMove({ xy: [px, py] }) {
        const rect = ref.current?.getBoundingClientRect();
        if (ref.current && rect) {
          const { width, height } = rect;
          const maxRotateX = (Math.asin(maxDepth / height) / Math.PI) * 180;
          const maxRotateY = (Math.asin(maxDepth / width) / Math.PI) * 180;
          // (px - rect.left - rect.width / 2) / radioX
          const radioX = height / 2 / maxRotateX;
          const radioY = width / 2 / maxRotateY;
          const rotateX = -(py - rect.top - rect.height / 2) / radioX;
          const rotateY = (px - rect.left - rect.width / 2) / radioY;
          api({
            rotateX,
            rotateY,
          });
        }
      },
      onHover({ hovering }) {
        if (!hovering) api(defaultTransformStyle);
      },
    },
    { target: ref, passive: true }
  );

  return (
    <animated.div
      ref={ref}
      className={className}
      style={{
        transform: 'perspective(800px)',
        ...style,
        rotateX,
        rotateY,
      }}
    >
      {children}
    </animated.div>
  );
}
