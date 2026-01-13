export default function ValentinePrompt({ onYes, onNo, disabled }) {
  return (
    <section className="prompt" aria-label="Valentine question">
        <p className="hint">Now... there's only one thing left to ask.</p>
      <h2 className="question">Will you be my Valentine?</h2>
      <p className="hint">Choose wisely… (I’m nervous 😳)</p>

      <div className="btnRow">
        <button
          className="btn btnYes"
          onClick={onYes}
          disabled={disabled}
          type="button"
        >
          Yes! 💘
        </button>

        <button
          className="btn btnNo"
          onClick={onNo}
          disabled={disabled}
          type="button"
        >
          No 🙈
        </button>
      </div>
    </section>
  );
}
