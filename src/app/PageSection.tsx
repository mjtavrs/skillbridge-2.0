interface PageSectionProps {
  title: string
  description: string
}

export function PageSection({ title, description }: PageSectionProps) {
  return (
    <section className="mx-8 my-24 border-b border-skillbridge-white-90 px-32 pb-12">
      <div className="grid-cols-pageSection grid items-center gap-24">
        <h1 className="text-5xl font-semibold text-skillbridge-grey-15">
          {title}
        </h1>
        <p className="text-lg text-skillbridge-grey-35">{description}</p>
      </div>
    </section>
  )
}
