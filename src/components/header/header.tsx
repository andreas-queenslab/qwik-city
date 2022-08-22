import { component$, useStyles$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import styles from "./header.css?inline";

export default component$(() => {
  useStyles$(styles);

  const pathname = useLocation().pathname;

  return (
    <header>
      <div class="header-inner">
        <section class="logo">
          <a href="/" class="p-4 inline-block md:p-0">
            Qwik
          </a>
        </section>
        <nav>
          <a
            href="/blog"
            class={{
              active: pathname.startsWith("/blog"),
              "p-4 inline-block md:p-0": true,
            }}
          >
            Blog
          </a>
          <a
            href="/docs"
            class={{
              active: pathname.startsWith("/docs"),
              "p-4 inline-block md:p-0": true,
            }}
          >
            Docs
          </a>
          <a
            href="/api"
            class={{
              active: pathname.startsWith("/api"),
              "p-4 inline-block md:p-0": true,
            }}
          >
            API
          </a>
          <a
            href="/products/hat"
            class={{
              active: pathname.startsWith("/products"),
              "p-4 inline-block md:p-0": true,
            }}
          >
            Products
          </a>
          <a
            href="/about-us"
            class={{
              active: pathname.startsWith("/about-us"),
              "p-4 inline-block md:p-0": true,
            }}
          >
            About Us
          </a>
        </nav>
      </div>
    </header>
  );
});

