import Typical from "react-typical";

function LiveText({
  liveTitle = ["Hello.", "Nice to meet you"],
  loop = Infinity,
}: LiveTextProps) {
  return (
    <h1 className="live-text">
      <Typical
        role="region"
        aria-live="off"
        aria-label={liveTitle?.join(" ")}
        steps={liveTitle?.flatMap((e) => [e, 2000])}
        loop={loop}
        wrapper="span"
      />
    </h1>
  );
}

export { LiveText };
