import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import type { Certificate } from "@/data/certificates";

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card transition-transform hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full bg-muted">
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          className="object-cover"
          unoptimized={certificate.image.endsWith(".svg")}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{certificate.title}</h3>
        <p className="text-sm text-muted-foreground">{certificate.issuer}</p>
        {certificate.date && (
          <p className="mt-1 text-xs text-muted-foreground">{certificate.date}</p>
        )}
        {certificate.verifyUrl && (
          <a
            href={certificate.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-purple hover:underline"
          >
            Verify <FiExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
}
