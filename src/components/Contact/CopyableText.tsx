import { useState, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import "./Contact.css";

interface CopyableTextProps {
  text: string;
  className?: string;
}

const CopyableText = ({ text, className }: CopyableTextProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);

      // Posicionamiento relativo al texto
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const tooltip = document.getElementById("copy-tooltip");
        if (tooltip) {
          tooltip.style.left = `${
            rect.left + rect.width / 2 - tooltip.offsetWidth / 2
          }px`;
          tooltip.style.top = `${rect.bottom + 5}px`;
        }
      }
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <div className="relative inline-block">
      <span
        ref={textRef}
        onClick={handleCopy}
        className={`cursor-pointer hover:underline ${className || ""}`}
      >
        {text}
      </span>

      {showTooltip && (
        <div
          id="copy-tooltip"
          className="tooltip-copy"
          style={{
            transform: "translateX(-50%)",
            left: "50%",
            bottom: "-35px",
          }}
        >
          <FaCheck className="text-xs" />
          ¡Copiado!
        </div>
      )}
    </div>
  );
};

export default CopyableText;
