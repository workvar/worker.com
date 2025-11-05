export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white mt-10">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Privacy Policy for SileoTube
        </h1>

        <div className="space-y-8 text-gray-700">
          <div className="space-y-2">
            <p><strong>Effective Date:</strong> October 2025</p>
            <p><strong>Last Updated:</strong> October 2025</p>
          </div>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
              Introduction
            </h2>
            <p className="text-lg leading-relaxed">
              SileoTube ("we," "our," or "the extension") is a browser extension designed to help users maintain focus while using YouTube by removing distracting elements such as recommendations, Shorts, comments, and sidebars. This Privacy Policy explains how we handle your information when you use SileoTube.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
              Our Commitment to Privacy
            </h2>
            <p className="text-lg leading-relaxed">
              SileoTube is built with privacy as a core principle. We do not collect, track, store, or transmit any personally identifiable information (PII) or browsing data. All processing occurs locally on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
              Information We Do NOT Collect
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              SileoTube does <strong>not</strong> collect, store, or transmit:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg ml-4">
              <li>Personal information (name, email address, phone number, etc.)</li>
              <li>Browsing history</li>
              <li>YouTube watch history</li>
              <li>Search queries</li>
              <li>Video viewing preferences</li>
              <li>Device information</li>
              <li>Location data</li>
              <li>Usage analytics or telemetry</li>
              <li>Any other personal or identifying information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
              Information Stored Locally
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              SileoTube stores the following information <strong>only on your device</strong> using your browser&apos;s local storage:
            </p>
            <p className="text-lg leading-relaxed mb-4">
              <strong>Extension Settings</strong>: Your preferences for which distractions to hide:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg ml-4">
              <li>Homepage focus mode (enabled/disabled)</li>
              <li>Shorts page blocking (enabled/disabled)</li>
              <li>Watch page focus mode (enabled/disabled)</li>
              <li>Comments visibility (enabled/disabled)</li>
              <li>Sidebar visibility (enabled/disabled)</li>
              <li>Shorts recommendations visibility (enabled/disabled)</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              This information is stored locally using the browser&apos;s <code className="bg-gray-100 px-2 py-1 rounded">storage.local</code> API and <strong>never leaves your device</strong>. These settings are used solely to maintain your preferences between browser sessions and apply your chosen focus modes when you visit YouTube.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
              Permissions Used
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              SileoTube requires the following permissions to function:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Storage Permission
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                  <li><strong>Purpose</strong>: To save your extension settings locally on your device</li>
                  <li><strong>Data</strong>: Only your toggle preferences (on/off states) are stored</li>
                  <li><strong>Location</strong>: Data remains on your device and is never transmitted</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tabs Permission
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                  <li><strong>Purpose</strong>: To apply your settings across all open YouTube tabs simultaneously when you change preferences</li>
                  <li><strong>Data</strong>: No browsing data is accessed or stored; only used to send messages to YouTube tabs to apply your settings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Host Permissions (YouTube)
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                  <li><strong>Purpose</strong>: To inject content scripts only on YouTube pages (<code className="bg-gray-100 px-1 py-0.5 rounded text-sm">*://*.youtube.com/*</code>)</li>
                  <li><strong>Scope</strong>: Limited exclusively to YouTube domains and subdomains</li>
                  <li><strong>Function</strong>: Modifies the YouTube page layout to hide distracting elements based on your preferences</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
              External Connections
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              SileoTube makes minimal external connections only for the following purposes:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Image Loading (ImageKit CDN)
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                  <li><strong>Service</strong>: ImageKit.io (<code className="bg-gray-100 px-1 py-0.5 rounded text-sm">ik.imagekit.io</code>)</li>
                  <li><strong>Purpose</strong>: Loads background images shown on the homepage and Shorts blocking page</li>
                  <li><strong>Data</strong>: No personal information is sent; only requests for public image assets</li>
                  <li><strong>Privacy</strong>: ImageKit may log standard HTTP request metadata (IP address, user agent) as part of normal CDN operations. We do not control ImageKit&apos;s privacy practices, but these requests contain no personal identifying information beyond standard web request data.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Installation Redirect (Optional)
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                  <li><strong>Service</strong>: Worvar.com (<code className="bg-gray-100 px-1 py-0.5 rounded text-sm">workvar.com</code>)</li>
                  <li><strong>Purpose</strong>: On first installation, opens a welcome/product page in a new tab</li>
                  <li><strong>Timing</strong>: Only occurs once when the extension is first installed</li>
                  <li><strong>Data</strong>: No data is sent; this is a standard browser redirect</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Uninstall Survey (Optional)
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg ml-4">
                  <li><strong>Service</strong>: Worvar.com (<code className="bg-gray-100 px-1 py-0.5 rounded text-sm">workvar.com</code>)</li>
                  <li><strong>Purpose</strong>: Opens an optional feedback survey page when the extension is uninstalled</li>
                  <li><strong>Timing</strong>: Only occurs when the extension is removed</li>
                  <li><strong>Data</strong>: No data is sent; this is a standard browser redirect</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
              Data Sharing
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              SileoTube does <strong>not</strong> share, sell, rent, or disclose any information to third parties, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg ml-4">
              <li>Analytics services</li>
              <li>Advertising networks</li>
              <li>Data brokers</li>
              <li>Social media platforms</li>
              <li>Any other third-party services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
              Data Security
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Since all data is stored locally on your device:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg ml-4">
              <li>Your settings are protected by your browser&apos;s built-in security</li>
              <li>Data is encrypted at rest by your browser (if your browser supports it)</li>
              <li>No data transmission means no risk of interception during transfer</li>
              <li>You can delete all extension data at any time by uninstalling the extension or clearing browser storage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
              Your Rights and Choices
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              You have complete control over your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg ml-4">
              <li><strong>View Settings</strong>: Access your stored preferences through the extension popup</li>
              <li><strong>Modify Settings</strong>: Change your preferences at any time through the extension interface</li>
              <li><strong>Delete Data</strong>: Uninstall the extension to remove all stored settings, or manually clear browser storage</li>
              <li><strong>No Tracking</strong>: Since we don&apos;t collect data, there&apos;s nothing to opt out of</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
              Children&apos;s Privacy
            </h2>
            <p className="text-lg leading-relaxed">
              SileoTube does not knowingly collect information from children. Since we do not collect any personal information, this extension is safe for users of all ages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
              Changes to This Policy
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              If we make changes to this Privacy Policy, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg ml-4">
              <li>Update the "Last Updated" date at the top of this document</li>
              <li>Update the version if substantial changes are made</li>
              <li>Maintain the same privacy-first principles</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
              Compliance
            </h2>
            <p className="text-lg leading-relaxed">
              This Privacy Policy complies with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg ml-4 mt-2">
              <li>Chrome Web Store Developer Program Policies</li>
              <li>Firefox Add-on Policies</li>
              <li>General Data Protection Regulation (GDPR) principles (though we don&apos;t collect data, we follow privacy-by-design)</li>
              <li>California Consumer Privacy Act (CCPA) principles</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
              Contact
            </h2>
            <p className="text-lg leading-relaxed">
              For questions about this Privacy Policy or SileoTube&apos;s privacy practices, please visit:
            </p>
            <p className="text-lg mt-2">
              <a 
                href="https://worvar.com/sileotube/privacy" 
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://worvar.com/sileotube/privacy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8">
              Summary
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>In short</strong>: SileoTube stores your preferences locally on your device and does nothing else. No tracking, no analytics, no data collection, no external data transmission. Your privacy is protected by design.
            </p>
          </section>

          <div className="border-t border-gray-300 pt-8 mt-8">
            <p className="text-lg leading-relaxed text-gray-600">
              By using SileoTube, you acknowledge that you have read and understood this Privacy Policy. Since we don&apos;t collect any data, your continued use of the extension indicates your acceptance of how we handle your information (which is: we don&apos;t handle it at all).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}