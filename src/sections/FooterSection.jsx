import { couple } from '../data/invitation';

export function FooterSection() {
  return (
    <footer className="footer-section" id="footer">
      <p className="footer-msg">
        Your presence will turn this real-life romance into a blockbuster we will never forget.
        <br />
        <br />
        Come, dance, laugh, and celebrate with us in true Bollywood style!
      </p>
      <span className="footer-regards">Warm regards,</span>
      <span className="footer-family">{couple.family}</span>
      <span className="footer-name">
        {couple.bride} & {couple.groom}
      </span>
      <button type="button" onClick={() => window.open('https://instagram.com/invifestbyaastha', '_blank')}>
        TO BUY, SIMPLY SEND US A DM
      </button>
      <div className="footer-credit">CRAFTED WITH LOVE BY INVIFEST INDIA</div>
    </footer>
  );
}
