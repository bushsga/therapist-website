import { Roboto } from 'next/font/google';
import './globals.css';

const inter = Roboto({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'MindfulTherapy - Professional Mental Health Services',
  description: 'Licensed therapy services in NEW YORK. Specializing in individual therapy, couples counseling, anxiety treatment, and trauma therapy. Begin your healing journey today.',
  keywords: 'therapy, mental health, counseling, anxiety treatment, trauma therapy, couples counseling, NEW YORK therapist',
  authors: [{ name: 'MindfulTherapy' }],
  openGraph: {
    title: 'MindfulTherapy - Professional Mental Health Services',
    description: 'Licensed therapy services in NEW YORK. Begin your healing journey with compassionate, evidence-based care.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
