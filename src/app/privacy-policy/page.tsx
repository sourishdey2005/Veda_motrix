import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow container py-16 md:py-24">
        <div className="prose prose-invert mx-auto max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight font-tech mb-8">
            Privacy Policy for VEDA-MOTRIX AI
          </h1>
          <p className="text-muted-foreground">Last Updated: October 26, 2023</p>

          <section className="mt-8">
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to VEDA-MOTRIX AI. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. We respect your privacy and are committed to protecting it through our compliance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Vehicle Telematics Data:</strong> Real-time data from your vehicle's sensors, including engine performance, mileage, location, and diagnostic trouble codes (DTCs). This data is essential for our predictive maintenance and health monitoring features.
              </li>
              <li>
                <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, phone number, and vehicle details (VIN, make, model) that you voluntarily give to us when you register for the service.
              </li>
              <li>
                <strong>Usage Data:</strong> Information automatically collected when you access our services, such as your IP address, browser type, operating system, and actions taken within our application.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">3. How We Use Your Information</h2>
            <p>Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Power our predictive maintenance algorithms to forecast potential vehicle issues.</li>
              <li>Enable our AI agents to autonomously schedule service appointments on your behalf.</li>
              <li>Improve vehicle manufacturing quality by providing anonymized, aggregated data back to manufacturers (RCA/CAPA Feedback Loop).</li>
              <li>Monitor for and prevent unethical or unauthorized actions by our autonomous AI agents through User and Entity Behavior Analytics (UEBA).</li>
              <li>Communicate with you regarding your vehicle's health and service appointments.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">4. Data Sharing and Disclosure</h2>
            <p>We do not share your personal information with third parties except as described in this Privacy Policy. We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Service Centers:</strong> To schedule appointments, we share necessary details such as your name, contact information, and vehicle issue.
              </li>
              <li>
                <strong>Vehicle Manufacturers:</strong> We may provide anonymized and aggregated data to help improve product quality. No personally identifiable information is shared in this process.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation.
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">5. Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">6. Your Rights and Choices</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You may also have the right to object to or restrict certain processing of your data. You can manage your preferences within your user dashboard or by contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-headline mt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:contact@veda-motrix.ai" className="text-accent hover:underline">contact@veda-motrix.ai</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}