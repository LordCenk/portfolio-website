"use client";

import Image from "next/image";
import { useState } from "react";

const REAL_PHOTO = "/images/profile.webp";
const PLACEHOLDER = "/images/profile-placeholder.svg";

export function ProfileImage() {
  const [src, setSrc] = useState(REAL_PHOTO);

  return (
    <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border-4 border-transparent bg-gradient-to-br from-brand-red via-brand-purple to-brand-blue p-1">
      <div className="relative h-full w-full overflow-hidden rounded-[1.35rem] bg-muted">
        <Image
          src={src}
          alt="Shashank Agrawal"
          fill
          className="object-cover"
          unoptimized={src.endsWith(".svg")}
          onError={() => setSrc(PLACEHOLDER)}
          priority
        />
      </div>
    </div>
  );
}
