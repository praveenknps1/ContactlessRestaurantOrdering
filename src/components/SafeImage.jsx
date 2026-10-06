import { useState } from "react";

// Shows an image; if the link is broken (many are external), shows a tidy emoji tile instead.
export default function SafeImage({
  src,
  alt = "",
  emoji = "🍽️",
  className = "size-full object-cover",
  fallbackClassName = "text-5xl",
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`grid size-full place-items-center bg-linear-to-br from-sage-soft to-[#cfdecb] ${fallbackClassName}`}
        role="img"
        aria-label={alt}
      >
        <span>{emoji}</span>
      </div>
    );
  }
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}
