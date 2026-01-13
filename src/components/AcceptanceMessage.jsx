export default function AcceptanceMessage({ gifSrc }) {
  return (
    <section className="result yesResult" aria-live="polite">
      <h3 className="resultTitle">YAYYYY!! 🥰💝</h3>

      <div className="gifCard">
        <img className="gif" src={gifSrc} alt="Cute I love you bear gif" />
      </div>

      <div className="notes">
        <p className="note">I love you more than words can explain. Thank you for being my favorite person!!! Now you have 3 weeks to decide where we eat biggie</p>
      </div>
    </section>
  );
}
