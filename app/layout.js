import './globals.css';

export const metadata = {
  title: 'MindfulTherapy - Professional Mental Health Services',
  description: 'Licensed therapy services in NEW YORK.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
