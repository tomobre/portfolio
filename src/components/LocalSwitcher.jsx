"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LocalSwitcher({translations}) {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (e) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div>
      <label className="border-2 rounded text-black">
        <p className="sr-only"> change language</p>
        <select
          defaultValue={localeActive}
          name=""
          id=""
          onChange={onSelectChange}
          disabled={isPending}
        >
          <option value="es">{translations.spanish}</option>
          <option value="en">{translations.english}</option>
        </select>
      </label>
    </div>
  );
}
