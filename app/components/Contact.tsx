import ContactLinkCard from "./ui/ContactLinkCard";

export default function Contact() {
  return (
    <section id="contact" className="my-8">
      <h2 className="font-satoshi text-accent text-2xl md:text-[32px] lg:text-[48px] tracking-tight font-bold mb-10">
        Get in touch
      </h2>

      <h2 className="text-center font-satoshi font-medium text-2xl tracing-tightest mb-16 md:text-3xl">
        I'm currently open to remote front-end roles. If you're building
        something interesting, I'd love to hear about it.
      </h2>

      <div className="flex flex-col gap-7 mx-auto max-w-2xl">
        <ContactLinkCard
          title="Email"
          handle="berksysl.g@gmail.com"
          buttonLabel="Send Mail"
          href="mailto:berksysl.g@gmail.com"
        />
        <ContactLinkCard
          title="LinkedIn"
          handle="linkedin.com/in/tahaberk-soysal/"
          buttonLabel="Send Message"
          href="https://linkedin.com/in/tahaberk-soysal/"
        />
        <ContactLinkCard
          title="GitHub"
          handle="github.com/tbsoysal"
          buttonLabel="See More Projects"
          href="https://github.com/tbsoysal"
        />
      </div>
    </section>
  );
}
