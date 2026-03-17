export default function PrivacyModal({ onClose }) {
  return (
    <div
      className="modal-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
    >
      <div className="modal-panel">
        <button className="modal-close" onClick={onClose} aria-label="Close privacy policy">
          ×
        </button>
        <span className="section-label">Legal</span>
        <h2 id="privacy-title" style={{ color: 'var(--text-primary)', marginBottom: '6px' }}>
          Privacy Policy
        </h2>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '28px' }}>
          Last updated: March 2026
        </p>

        <h3>Who we are</h3>
        <p>
          This website is operated by Rajiv Ramkrishnan, trading as SVAHSV Inc., based in Ottawa, Ontario, Canada. If you have questions about how your personal information is handled, you can reach us through the contact form on this site.
        </p>

        <h3>What information we collect</h3>
        <p>When you use the contact form on this website, we collect:</p>
        <ul>
          <li>Your name</li>
          <li>Your email address</li>
          <li>The content of your message</li>
        </ul>
        <p>
          We do not use cookies for tracking, advertising, or analytics beyond what is inherently provided by our hosting platform (Netlify). We do not collect financial information, government identifiers, or sensitive personal data.
        </p>

        <h3>How we use your information</h3>
        <p>Information submitted through the contact form is used solely to respond to your inquiry. We do not use your information for marketing purposes without your explicit consent, in accordance with Canada's Anti-Spam Legislation (CASL).</p>

        <h3>Where your information is stored</h3>
        <p>
          Form submissions are processed and stored by Netlify, Inc., a service provider based in the United States. By submitting the contact form, you acknowledge that your information may be transferred to and processed in the United States. This transfer is made in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and on the basis that Netlify maintains industry-standard security practices.
        </p>

        <h3>How long we keep your information</h3>
        <p>
          We retain contact form submissions only as long as reasonably necessary to respond to your inquiry and maintain records of business correspondence - typically no longer than two years.
        </p>

        <h3>Your rights under PIPEDA</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Know what personal information we hold about you</li>
          <li>Request access to or correction of your personal information</li>
          <li>Withdraw consent to the use of your information (subject to legal or contractual restrictions)</li>
          <li>Lodge a complaint with the Office of the Privacy Commissioner of Canada</li>
        </ul>
        <p>To exercise any of these rights, please contact us through the form on this website.</p>

        <h3>CASL compliance</h3>
        <p>
          We will not send you commercial electronic messages unless you have expressly consented to receive them. Submitting a contact form inquiry does not constitute consent to receive marketing communications.
        </p>

        <h3>Third-party links</h3>
        <p>
          This website contains links to LinkedIn and SVAHSV Inc. (svahsv.online). We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies before providing personal information.
        </p>

        <h3>Changes to this policy</h3>
        <p>
          We may update this policy from time to time. The date at the top of this page will reflect any changes. Continued use of this website after changes constitutes acceptance of the updated policy.
        </p>
      </div>
    </div>
  )
}
