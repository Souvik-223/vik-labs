import Link from 'next/link';

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="mark" />
            <p>An independent product studio building software, video, and marketing for founders. Based in Bengaluru, working with teams from Berlin to Brooklyn.</p>
          </div>
          <div className="footer-col">
            <h4>Studio</h4>
            <ul>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/journal">Journal</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><Link href="mailto:hello@viklabs.io">hello@viklabs.io</Link></li>
              <li><Link href="#">X / @viklabs</Link></li>
              <li><Link href="#">LinkedIn</Link></li>
              <li><Link href="#">Read.cv</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Office</h4>
            <ul>
              <li><Link href="#">Bengaluru, IN</Link></li>
              <li><Link href="#">UTC+05:30</Link></li>
              <li><Link href="/contact">Book an intro</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-mark">viklabs</div>

        <div className="footer-bottom">
          <div className="status">All systems normal · accepting Q3 work</div>
          <div>© 2026 VikLabs Studio · v26.05</div>
        </div>
      </div>
    </footer>
  );
}
