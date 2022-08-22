import { component$, Slot } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <div>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </div>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    ...head,
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // { httpEquiv: "content-language", content: "en-us" },
      { name: "description", content: "A Qwik City app" },
    ],
  };
};

