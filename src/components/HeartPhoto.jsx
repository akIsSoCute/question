export default function HeartPhoto({ src, alt }) {
  return (
    <section className="photoWrap" aria-label="Photo section">
      <h2 className="sectionTitle">Here's my favorite photo of us</h2>

      <div className="heartFrame">
        <svg
          className="heartSvg"
          viewBox="0 0 200 180"
          role="img"
          aria-label={alt}
        >
          <defs>
            <clipPath id="heartClip">
              <path d="M100 165s-60-34-82-68C2 72 9 40 36 27c19-9 41-3 55 12 5 5 9 10 9 10s4-5 9-10c14-15 36-21 55-12 27 13 34 45 18 70-22 34-82 68-82 68z" />
            </clipPath>
          </defs>

          <image
            href={src}
            x="10"
            y="26"
            width="180"
            height="180"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#heartClip)"
          />
          <path
            className="heartOutline"
            d="M100 165s-60-34-82-68C2 72 9 40 36 27c19-9 41-3 55 12 5 5 9 10 9 10s4-5 9-10c14-15 36-21 55-12 27 13 34 45 18 70-22 34-82 68-82 68z"
          />
        </svg>
      </div>
    </section>
  );
}
