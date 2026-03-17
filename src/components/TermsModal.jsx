export default function TermsModal({ onClose }) {
  return (
    <div
      className="modal-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-title"
    >
      <div className="modal-panel">
        <button className="modal-close" onClick={onClose} aria-label="Close terms of use">
          ×
        </button>
        <span className="section-label">Legal</span>
        <h2 id="terms-title" style={{ color: 'var(--text-primary)', marginBottom: '6px' }}>
          Terms of Use
        </h2>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '28px' }}>
          Last updated: March 2026
        </p>

        <h3>Acceptance of terms</h3>
        <p>
          By accessing and using rajivramkrishnan.com (the "Site"), you agree to be bound by these Terms of Use. If you do not agree, please do not use this Site. These terms apply to all visitors and users of the Site.
        </p>

        <h3>About this Site</h3>
        <p>
          This is a personal website operated by Rajiv Ramkrishnan, Ottawa, Ontario, Canada. The Site provides information about Rajiv's professional background, consulting services, and personal perspectives. It is not a commercial storefront and does not facilitate transactions directly through the Site.
        </p>

        <h3>Intellectual property</h3>
        <p>
          All content on this Site - including text, design, photographs, graphics, and code - is owned by or licensed to Rajiv Ramkrishnan unless otherwise noted. You may not reproduce, distribute, or create derivative works from this content without prior written permission, except for personal, non-commercial reference use.
        </p>
        <p>
          The photographs of Rajiv Ramkrishnan on this Site may not be reproduced or used for any purpose without explicit written consent.
        </p>

        <h3>Acceptable use</h3>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Site for any unlawful purpose or in violation of any applicable law or regulation</li>
          <li>Submit false, misleading, or fraudulent information through the contact form</li>
          <li>Attempt to gain unauthorised access to any part of the Site or its underlying systems</li>
          <li>Use automated tools to scrape, crawl, or collect data from the Site in a manner that places unreasonable demand on its infrastructure</li>
          <li>Impersonate Rajiv Ramkrishnan or misrepresent your affiliation with any person or entity</li>
        </ul>

        <h3>No warranties</h3>
        <p>
          This Site is provided on an "as is" and "as available" basis. Rajiv Ramkrishnan makes no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, reliability, or availability of the Site or its content. Professional advice should be sought before acting on any information found on this Site.
        </p>

        <h3>Limitation of liability</h3>
        <p>
          To the fullest extent permitted by applicable law, Rajiv Ramkrishnan shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this Site or its content.
        </p>

        <h3>Third-party links</h3>
        <p>
          This Site may contain links to external websites including LinkedIn and SVAHSV Inc. These links are provided for convenience only. Rajiv Ramkrishnan is not responsible for the content, privacy practices, or terms of those sites.
        </p>

        <h3>Governing law</h3>
        <p>
          These Terms of Use are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Ontario.
        </p>

        <h3>Changes to these terms</h3>
        <p>
          These terms may be updated at any time. The date at the top of this page reflects the most recent revision. Continued use of the Site after any changes constitutes your acceptance of the revised terms.
        </p>

        <h3>Contact</h3>
        <p>
          Questions about these terms can be directed to Rajiv Ramkrishnan through the contact form on this Site.
        </p>
      </div>
    </div>
  )
}
