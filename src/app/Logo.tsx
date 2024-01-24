"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const logo_height = 300;

const Logo = () => {
  const ballRef = useRef<HTMLImageElement>(null);

  const [crackStyle, setCrackStyle] = useState(
    "flex items-center top-0 left-0 w-128 h-32 bg-cover bg-[url('/images/crack_off.png')] text-transparent bg-clip-text "
  );
  const [ballStyle, setBallStyle] = useState(
    "absolute top-5 left-5 top-12 w-12 h-12 opacity-0 transition-opacity duration-500 ease-in-out"
  );
  const [shake, setShake] = useState(false);
  const [reDrawTrigger, setReDrawTrigger] = useState(false);
  const animationToggle = useRef(true);

  let animationId = 0;

  const Animation = () => {
    {
    }
  };

  const onClickAnimationToggle = () => {
    if (animationToggle.current) {
      animationToggle.current = false;
    } else {
      animationToggle.current = true;
    }
    setReDrawTrigger(!reDrawTrigger);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      animationToggle.current = true;
      setInterval(() => {
        const ball = ballRef.current;
        if (ball) {
          let x = 0;
          let y = 0;
          let vx = 1;
          let vy = 1;
          const gravity = 0.4;
          const friction = 0.99;
          const bounce = 0.9;
          ball.style.transform = `translate(0px, 0px)`;

          const initAnimation = () => {
            setBallStyle(
              "absolute top-5 left-5 top-12 w-12 h-12 opacity-0 transition-opacity duration-500 ease-in-out"
            );
            setCrackStyle(
              `flex items-center top-0 left-0 w-128 h-32 bg-cover bg-[url('/images/crack_on.png')] bg-clip-text text-white/100 transition-colors duration-700 ease-in-out`
            );
            cancelAnimationFrame(animationId);
          };

          const animate = () => {
            if (false === animationToggle.current) {
              initAnimation();
              return;
            }
            setBallStyle(
              "absolute top-5 left-5 top-12 w-12 h-12 opacity-100 transition-opacity duration-500 ease-in-out"
            );

            animationId = requestAnimationFrame(animate);
            vx *= friction;
            vy *= friction;
            vy += gravity;
            x += vx;
            y += vy;

            if (y + ball.height > logo_height) {
              y = logo_height - ball.height;
              vy *= -bounce;

              setCrackStyle(
                `flex items-center top-0 left-0 w-128 h-32 bg-cover bg-[url('/images/crack_on.png')] bg-clip-text text-white/0 transition-colors duration-0 ease-in-out`
              );
              if (vy < -1.2) {
                setShake(true);
                setTimeout(() => setShake(false), 350);
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

            if (vx < 0.01) {
              initAnimation();
            }
            ball.style.transform = `translate(${x}px, ${y}px)`;
          };

          animate();
        }
      }, 10000);
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-32">
      <Image
        src={
          animationToggle.current
            ? "/images/toggle_on.svg"
            : "/images/toggle_off.svg"
        }
        width={64}
        height={32}
        alt="toggleOn"
        className="absolute top-5 right-5"
        onClick={onClickAnimationToggle}
      />
      <div
        className={`font-black_Han_Sans text-8xl h-32 drop-shadow-[6px_6px_3px_rgba(0,0,0,0.4)] text-white ${
          shake ? "animate-shake" : ""
        }`}
      >
        <div className={crackStyle}>CRACK</div>
      </div>
      <img
        src="/images/football.png"
        alt="football"
        className={ballStyle}
        ref={ballRef}
      />
    </div>
  );
};

export default Logo;
