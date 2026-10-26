export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <a href="/" className="text-[#c22121] text-sm font-medium hover:underline">
            ← Volver al inicio
          </a>
          <h1 className="text-4xl font-bold text-[#1a1a2e] mt-6 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">Last updated: October 2026</p>
        </div>

        {/* Contenido */}
        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">Tracking Technologies</h2>
            <p>
              We or our service providers may use small electronic files known as pixel tags
              (also referred to as web beacons, clear GIFs, and single-pixel gifs) or similar
              means (collectively, "Pixel Tags") in connection with some webpages and email
              messages. A Pixel Tag is an electronic image, often a single pixel (1×1), that
              is ordinarily not visible to website visitors and may be associated with cookies
              on visitors' devices. Pixel Tags allow us and our service providers to count users
              who have visited certain website pages, track events such as downloads and forms
              completed, deliver customized services, segment audiences for targeted advertising,
              and help determine the effectiveness of promotional or advertising campaigns. When
              used in formatted email messages, Pixel Tags can inform the sender of the email
              whether and when the email has been opened. Pixel Tags do not collect names, email
              addresses, or other contact information, but they may collect IP address.
            </p>
            <p className="mt-3">
              You may block Pixel Tags by using the privacy settings on your own device or
              browser to transmit a "do not track" signal, "opt-out preference" signal, or
              other mechanism for exercising your choice regarding the collection of your
              information when you visit various websites. To learn more about "do not track"
              signals, you can visit{" "}
              <a href="http://www.allaboutdnt.com/" target="_blank" rel="noopener noreferrer"
                className="text-[#c22121] hover:underline">
                www.allaboutdnt.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1a1a2e] mb-3">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@accidentinjurycarear.com"
                className="text-[#c22121] hover:underline">
                info@accidentinjurycarear.com
              </a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}