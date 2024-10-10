import {redirect} from 'next/navigation';
import Link from 'next/link'
// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect('/en');
   <Link href="https://aisphereguide.com">
    <a target="_blank" title="Tap4 AI Tools Directory">
      AI Sphere Guide
    </a>
  </Link>
}
