import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

// This page exists solely for Netlify to detect forms at build time
// It should never be visited by users
export default function FormsPage() {
  return (
    <div style={{ display: 'none' }}>
      <form name="product-quote-form" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="product-quote-form" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <textarea name="message"></textarea>
        <input type="text" name="product" />
        <input type="text" name="subject" />
        <input name="bot-field" />
      </form>
    </div>
  );
}
