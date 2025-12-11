export const metadata = {
  title: "Legal | Femur Studio",
  description: "Unified Legal page with Privacy Policy and Terms & Conditions for Femur Studio.",
}

export default function LegalPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Legal</h1>
        <p className="text-muted-foreground">Privacy Policy and Terms & Conditions</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-2 sticky top-24 h-fit">
          <a href="#privacy" className="block text-sm text-muted-foreground hover:text-white">Privacy Policy</a>
          <a href="#terms" className="block text-sm text-muted-foreground hover:text-white">Terms & Conditions</a>
        </aside>

        <article className="prose prose-invert">
          <section id="privacy">
            <h2>Privacy Policy</h2>
            <p><strong>Last updated:</strong> September 26, 2025</p>
            <p>
              Femur Studio ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit our websites and use our services.
            </p>
            <h3>Information We Collect</h3>
            <ul>
              <li><strong>Contact information</strong> such as name, email, company, and phone when you submit forms.</li>
              <li><strong>Usage data</strong> such as pages visited, device and browser information, and approximate location.</li>
              <li><strong>Service data</strong> you provide when engaging our services.</li>
            </ul>
            <h3>How We Use Your Information</h3>
            <ul>
              <li>To respond to inquiries and provide requested services.</li>
              <li>To improve our websites, products, and customer experience.</li>
              <li>To send important updates, proposals, and transactional communications.</li>
              <li>To comply with legal, regulatory, and contractual obligations.</li>
            </ul>
            <h3>Cookies and Analytics</h3>
            <p>We may use cookies and privacy-friendly analytics. You can control cookies via your browser settings.</p>
            <h3>Data Sharing</h3>
            <p>We do not sell personal information. We may share data with trusted providers under appropriate safeguards.</p>
            <h3>Data Retention</h3>
            <p>We retain personal data only as long as necessary for the purposes outlined.</p>
            <h3>Your Rights</h3>
            <p>Contact <a href="mailto:hello@femur.agency">hello@femur.agency</a> to exercise data rights, where applicable.</p>
            <h3>Security</h3>
            <p>We implement reasonable technical and organizational measures to protect your information.</p>
            <h3>Contact</h3>
            <p>If you have questions, email <a href="mailto:hello@femur.agency">hello@femur.agency</a>.</p>
          </section>

          <hr />

          <section id="terms">
            <h2>Terms & Conditions</h2>
            <p><strong>Last updated:</strong> September 26, 2025</p>
            <h3>Acceptance of Terms</h3>
            <p>By using our websites and services, you agree to these Terms and our Privacy Policy.</p>
            <h3>Use of the Site</h3>
            <ul>
              <li>You agree not to misuse the site or engage in unlawful activities.</li>
              <li>Content is provided "as is" without warranties of any kind.</li>
            </ul>
            <h3>Intellectual Property</h3>
            <p>All content and materials are owned by Femur Studio or its licensors.</p>
            <h3>Proposals and Engagements</h3>
            <p>Specifics are defined in proposals and statements of work. In conflicts, the SOW governs.</p>
            <h3>Limitation of Liability</h3>
            <p>We are not liable for indirect, incidental, or consequential damages to the extent permitted by law.</p>
            <h3>Governing Law</h3>
            <p>These Terms are governed by the laws of our operating jurisdiction.</p>
            <h3>Changes</h3>
            <p>We may update these Terms. Continued use constitutes acceptance.</p>
            <h3>Contact</h3>
            <p>For questions, email <a href="mailto:hello@femur.agency">hello@femur.agency</a>.</p>
          </section>
        </article>
      </div>
    </main>
  )
}
