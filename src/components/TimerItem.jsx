function TimerItem({ index }) {
  const angle = (index + 1) * 30;
  const x = 90 * Math.cos((angle - 90) * (Math.PI / 180));
  const y = 90 * Math.sin((angle - 90) * (Math.PI / 180));

  return (
    <div
      key={index}
      className="clock-number"
      style={{
        position: "absolute",
        top: `calc(50% + ${y}px)`,
        left: `calc(50% + ${x}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {index + 1}
    </div>
  );
}

export default TimerItem;
