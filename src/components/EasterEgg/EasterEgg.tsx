import React, { useEffect, useState } from "react";
import "./EasterEgg.css";

interface EasterEggProps {
  triggerKeybind?: boolean; // default true
  onClose?: () => void;
}

const Keybind = ["m", "i", "a", "o", "u"];

const EasterEgg: React.FC<EasterEggProps> = ({
  triggerKeybind = true,
  onClose,
}) => {
  const [keybindIndex, setKeybindIndex] = useState(0);
  const [showCat, setShowCat] = useState(false);
  const [catGifUrl, setCatGifUrl] = useState<string | null>(null);
  const [loadingCat, setLoadingCat] = useState(false);

  // Keybind detection
  useEffect(() => {
    if (!triggerKeybind) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === Keybind[keybindIndex]) {
        setKeybindIndex((prev) => prev + 1);
        if (keybindIndex + 1 === Keybind.length) {
          setShowCat(true);
          setKeybindIndex(0);
        }
      } else {
        setKeybindIndex(0);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [keybindIndex, triggerKeybind]);

  // Fetch cat gif when modal opens
  useEffect(() => {
    if (showCat) {
      setLoadingCat(true);
      setCatGifUrl(null);
      fetch("https://cataas.com/cat/gif?json=true")
        .then((res) => res.json())
        .then((data) => {
          setCatGifUrl(`${data.url}`);
        })
        .catch(() => setCatGifUrl(null))
        .finally(() => setLoadingCat(false));
    }
  }, [showCat]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showCat) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [showCat]);

  if (!showCat) return null;
  return (
    <div className="easteregg-modal">
      <div className="easteregg-cat">
        {loadingCat ? (
          <span>Chargement du chat...</span>
        ) : catGifUrl ? (
          <img src={catGifUrl} alt="Chat dansant" className="easteregg-img" />
        ) : (
          <span>Erreur de chargement du chat 🐱</span>
        )}
      </div>
      <div className="easteregg-title">
        Miaou ! Tu as trouvé le chat secret !
      </div>
      <button
        className="easteregg-close"
        onClick={() => {
          setShowCat(false);
          if (onClose) onClose();
        }}
      >
        Fermer
      </button>
    </div>
  );
};

export default EasterEgg;
