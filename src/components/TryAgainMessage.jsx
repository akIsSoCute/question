export default function TryAgainMessage({ text }) {
  return (
    <section className="result noResult" aria-live="polite">
      <h3 className="resultTitle">Erm😀</h3>
      <p className="tryAgain">{text}</p>
    </section>
  );
}
