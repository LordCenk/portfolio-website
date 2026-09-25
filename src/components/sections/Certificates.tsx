import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificateCard } from "@/components/ui/CertificateCard";
import { certificates } from "@/data/certificates";

export function Certificates() {
  return (
    <section id="certificates" className="section-scroll-offset py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Recognitions" title="Certificates" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.title} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}
