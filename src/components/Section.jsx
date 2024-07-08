function Section({ id, children, styles }) {
  return (
    <section id={id} className={`py-[8rem] px-8 sm:px-24 ${styles}`}>
      <div className="my-0 mx-auto max-w-[60rem]">{children}</div>
    </section>
  );
}

export default Section;
