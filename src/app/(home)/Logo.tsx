"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Switch } from "@headlessui/react";

const logo_height = 300;

export default function Logo() {
  const ballRef = useRef<HTMLImageElement>(null);

  const [crackStyle, setCrackStyle] = useState(
    "flex items-center top-0 left-0 w-128 h-32 bg-cover bg-[url('/images/crack_off.png')] bg-clip-text text-white/100 transition-colors duration-700 ease-in-out "
  );
  const [ballStyle, setBallStyle] = useState(
    "absolute top-5 left-5 top-12 w-12 h-12 opacity-0 transition-opacity duration-500 ease-in-out"
  );
  const [shake, setShake] = useState(false);
  const [reDrawTrigger, setReDrawTrigger] = useState(false);
  const animationToggle = useRef(true);

  let animationId = 0;

  const onClickAnimationToggle = () => {
    if (animationToggle.current) {
      animationToggle.current = false;
    } else {
      animationToggle.current = true;
    }
    setReDrawTrigger(!reDrawTrigger);
  };

  const onVisible = () => {
    if (document.visibilityState === "visible") {
      animationToggle.current = window.sessionStorage.getItem("animationRunning") === "true";
    } else {
      window.sessionStorage.setItem("animationRunning", String(animationToggle.current));
    }
    initAnimation();
    setReDrawTrigger(!reDrawTrigger);
  };

  const initAnimation = () => {
    setBallStyle("absolute top-5 left-5 top-12 w-12 h-12 opacity-0 transition-opacity duration-500 ease-in-out");
    setCrackStyle(
      `flex items-center top-0 left-0 w-128 h-32 bg-cover bg-[url('/images/crack_on.png')] bg-clip-text text-white/100 transition-colors duration-700 ease-in-out`
    );
    const ball = ballRef.current;
    if (ball) {
      ball.style.transform = `translate(0px, 0px)`;
    }
    cancelAnimationFrame(animationId);
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

    document.addEventListener("visibilitychange", onVisible);

    return () => {
      document.removeEventListener("visibilitychange", onVisible);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-32">
      <Switch
        checked={animationToggle.current}
        onChange={onClickAnimationToggle}
        className={`absolute flex flex-row items-center top-20 right-5 w-11 h-6 rounded-full ${
          animationToggle.current ? "bg-red-700" : "bg-gray-400"
        }`}>
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            animationToggle.current ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <div
        className={`font-black_Han_Sans text-8xl h-32 drop-shadow-[6px_6px_3px_rgba(0,0,0,0.4)] text-white ${
          shake ? "animate-shake" : ""
        }`}>
        <div className={crackStyle}>CRACK</div>
      </div>
      <img src="/images/football.png" alt="football" className={ballStyle} ref={ballRef} />
    </div>
  );
}
