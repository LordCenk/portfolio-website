import Image from "next/image";

export function ProfileImage() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border-4 border-transparent bg-gradient-to-br from-brand-red via-brand-purple to-brand-blue p-1">
      <div className="relative h-full w-full overflow-hidden rounded-[1.35rem] bg-muted">
        <Image
          src="/images/profile.webp"
          alt="Shashank Agrawal"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
