import { useEffect, useState } from "react";

const CircularTimer = ({ duration = 10, size = 120, onComplete }: any) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;
  const progress = timeLeft / duration;
  const strokeDashoffset = circumference * (1 - progress);

  useEffect(() => {
    if (timeLeft <= 0) {
      
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev : any) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onComplete]);

  return (
    <div style={{ position: "relative", width: size, height: size  }}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e0e0e0"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#40A578"
          strokeWidth="3"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 1s linear",
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />
        <circle
        
          cx={
            size / 2 +
            radius * Math.cos(2 * Math.PI * progress - Math.PI / 2)
          }
          cy={
            size / 2 +
            radius * Math.sin(2 * Math.PI * progress - Math.PI / 2)
          }
          r="5"
          fill="#40A578"
          filter="drop-shadow(0 0 6px #40A578)"
        />
      </svg>
      
      <div style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          textAlign:'center',
          transform: "translate(-50%, -50%)",
          color: "#ffffffff",
        }}>
          <div
          style={{
            fontSize: 10,
            fontWeight:'bold'
            
          }}
        >
          Time For Payment
        </div>
        

      </div>
       <div
        style={{
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          fontSize: 15,
        }}
      >
        <img src="/bell.png" style={{ fontSize: 18 ,paddingTop:'3px'}} />
        <span>15 : 30</span>
      </div>
      

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#40A578",
        }}
      >
        <div style={{ fontSize: 24, fontWeight: "bold" }}>{timeLeft}s</div>
      </div>
    </div>
  );
};

export default CircularTimer;
