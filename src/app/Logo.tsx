"use client";

import { useRef, useEffect, useState } from "react";

const logo_height = 256;

const Logo = () => {
  const ballRef = useRef<HTMLImageElement>(null);
  const crackRef = useRef<HTMLDivElement>(null);
  const [crack, setCrack] = useState<number>(0);
  const [crackStyle, setCrackStyle] = useState<string>(
    "top-0 left-0 w-128 h-32 bg-cover bg-[url('/images/crack_0.png')] text-transparent bg-clip-text"
  );

  useEffect(() => {
    const tempStyle = `top-0 left-0 w-128 h-32 bg-cover bg-[url('/images/crack_${crack}.png')] text-transparent bg-clip-text`;
    console.log(crack);
    setCrackStyle(tempStyle);
  }, [crack]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ball = ballRef.current;
      if (ball) {
        let x = 0;
        let y = 0;
        let vx = 3;
        let vy = 1;
        const gravity = 0.2;
        const friction = 0.99;
        const bounce = 0.9;

        const animate = () => {
          const animationId = requestAnimationFrame(animate);
          vx *= friction;
          vy *= friction;
          vy += gravity;
          x += vx;
          y += vy;
          if (y + ball.height > logo_height) {
            y = logo_height - ball.height;
            vy *= -bounce;

            if (crack < 2) {
              setCrack(crack + 1);
            }
          }
          if (x + ball.width > window.innerWidth) {
            x = window.innerWidth - ball.width;
            vx *= -bounce;
          }
          if (x < 0) {
            x = 0;
            vx *= -bounce;
          }

          if (vx < 0.08) {
            console.log("end");
            cancelAnimationFrame(animationId);
          }
          console.log(vx);
          ball.style.transform = `translate(${x}px, ${y}px)`;
        };
        animate();
      }
    }
  }, []);

  return (
    <div className="flex relative justify-center w-full h-30">
      <div className="font-black_Han_Sans text-8xl drop-shadow-[6px_6px_3px_rgba(0,0,0,0.4)] text-white text-center">
        <div className={crackStyle} ref={crackRef}>
          CRACK
        </div>
      </div>
      <img
        src="/images/football.png"
        alt="football"
        className="absolute top-0 left-0 top-12 w-12 h-12"
        ref={ballRef}
      />
    </div>
  );
};

export default Logo;
