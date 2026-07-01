type Props = { id?: string; eyebrow: string; title: string; children: React.ReactNode; className?: string; };
export default function SectionBlock({ id, eyebrow, title, children, className='' }: Props) {
  return <section id={id} className={`section ${className}`}><p className="eyebrow">{eyebrow}</p><h2 className="title">{title}</h2><div className="copy">{children}</div></section>;
}
