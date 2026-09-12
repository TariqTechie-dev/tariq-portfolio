import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "92445360160";

const PREFILLED_MESSAGE =
  "Hi Tariq! I visited your portfolio and would love to connect.";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    PREFILLED_MESSAGE
  )}`;

  return (
    <>
      <style>{`
        @keyframes whatsapp-pulse {
          0% {
            box-shadow:
              0 0 0 0 rgba(37, 211, 102, 0.45),
              0 4px 16px rgba(37, 211, 102, 0.35);
          }

          70% {
            box-shadow:
              0 0 0 10px rgba(37, 211, 102, 0),
              0 4px 16px rgba(37, 211, 102, 0.35);
          }

          100% {
            box-shadow:
              0 0 0 0 rgba(37, 211, 102, 0),
              0 4px 16px rgba(37, 211, 102, 0.35);
          }
        }
      `}</style>

      <div
        className="fixed bottom-5 right-4 z-50"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className={`pointer-events-none absolute right-[calc(100%+10px)] top-1/2 whitespace-nowrap rounded-lg border border-cyan-400/30 bg-slate-900 px-3 py-2 text-xs font-semibold text-white shadow-lg transition-all duration-200 ${
            hovered
              ? "translate-x-0 -translate-y-1/2 opacity-100"
              : "translate-x-1.5 -translate-y-1/2 opacity-0"
          }`}
        >
          Chat on WhatsApp
        </span>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
          style={{
            background: hovered
              ? "linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
              : "linear-gradient(135deg, #25D366 0%, #075E54 100%)",
            animation: "whatsapp-pulse 2.5s infinite",
          }}
        >
          <FaWhatsapp size={25} color="#ffffff" />
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;