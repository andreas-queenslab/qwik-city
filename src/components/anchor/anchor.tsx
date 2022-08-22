import { component$, Slot } from "@builder.io/qwik";

export interface anchorProps {
  href: string;
}

export default component$(({ href }: anchorProps) => {
  return (
    <a class="inline-block p-4 md:p-0" href={href}>
      <Slot />
    </a>
  );
});
