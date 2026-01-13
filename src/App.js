import { useMemo, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Letter from "./components/Letter";
import HeartPhoto from "./components/HeartPhoto.jsx";
import ValentinePrompt from "./components/ValentinePrompt";
import AcceptanceMessage from "./components/AcceptanceMessage";
import TryAgainMessage from "./components/TryAgainMessage";

// Put your files here:
import usPhoto from "./assets/us.jpeg";
import flowerBear from "./assets/flowerBear.gif";

export default function App() {
  const [answer, setAnswer] = useState("idle"); // "idle" | "yes" | "no"
  const [noCount, setNoCount] = useState(0);

  const cuteTryAgainLines = useMemo(
    () => [
      "Aww, are you feeling okay😀 Try again, bongo brain.",
      "Hehe wrong button 😌 hit “Yes”! 💘",
      "I’ll wait right here… (ha-ha-ha)",
      "Okayyyy but… we’d be *so* adorable together 💞",
      "Final answer? (Choose wisely 😚) 💝",
    ],
    []
  );

  const onYes = () => {
    setAnswer("yes");
  };

  const onNo = () => {
    setAnswer("no");
    setNoCount((c) => c + 1);
  };

  const tryAgainText =
    cuteTryAgainLines[Math.min(noCount, cuteTryAgainLines.length - 1)];

  return (
    <div className="page">
      <div className="floating-bg" aria-hidden="true">
        <span style={{ left: "8%",  top: "12vh" }}>❤️</span>
        <span style={{ left: "16%", top: "68vh" }}>💋</span>
        <span style={{ left: "24%", top: "35vh" }}>XOXO</span>

        <span style={{ left: "32%", top: "82vh" }}>❤️</span>
        <span style={{ left: "40%", top: "22vh" }}>💋</span>
        <span style={{ left: "48%", top: "55vh" }}>XOXO</span>

        <span style={{ left: "56%", top: "10vh" }}>❤️</span>
        <span style={{ left: "64%", top: "74vh" }}>💋</span>
        <span style={{ left: "72%", top: "38vh" }}>XOXO</span>

        <span style={{ left: "80%", top: "60vh" }}>❤️</span>
        <span style={{ left: "88%", top: "18vh" }}>💋</span>
        <span style={{ left: "94%", top: "46vh" }}>XOXO</span>
      </div>

      <main className="container">
        <Header />

        <section className="card stack">
          <Letter />

          <HeartPhoto src={usPhoto} alt="A photo of us" />

          <ValentinePrompt onYes={onYes} onNo={onNo} disabled={answer === "yes"} />

          {answer === "yes" && (
            <AcceptanceMessage gifSrc={flowerBear} />
          )}

          {answer === "no" && answer !== "yes" && (
            <TryAgainMessage text={tryAgainText} />
          )}
        </section>

        <footer className="footer">
          <span>I Love You Bush ❤️</span>
        </footer>
      </main>
    </div>
  );
}
