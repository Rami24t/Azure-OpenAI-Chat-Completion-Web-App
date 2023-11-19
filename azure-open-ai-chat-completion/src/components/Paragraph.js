export function Paragraph({title, text}) {
  return (
    <section className="paragraph">
      <h1>{title}</h1>
      <p>
        {text}
      </p>
    </section>
  );
}
