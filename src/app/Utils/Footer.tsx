import Link from "next/link";

function Footer() {
  return (
    <div className="bg-slate-100 p-10">
      <div className="grid md:grid-cols-6 grid-rows-auto">
        <div className="section-1 md:col-span-2">
          <p className="heading font-bold text-primary">Get Started</p>
          <ul>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="/auth/login" className="">
                Sign Up
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="/auth/signup" className="">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
        <div className="section-2">
          <p className="heading font-bold text-primary">For Start-ups</p>
          <ul>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Overview
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Equity
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                AngelList vs. Carta: Cap Tables
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                AngelList vs. Pulley: Cap Tables
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Equity for Law Firms
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Raise
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Offers
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Roll Up Vehicles™
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                SAFE Cleanups
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Incorporation
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="section-3">
          <p className="heading font-bold text-primary">For Investors</p>
          <ul>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Rolling Funds®
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Venture Funds
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Syndicates
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Wishlist
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Rolling Funds® Fees Breakdown
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Demo Day Funds
              </Link>
            </li>
          </ul>
        </div>
        <div className="section-4">
          <p className="heading font-bold text-primary">For FundManagers</p>
          <ul>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Rolling Funds®
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Venture Funds
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Syndicates
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Pricing
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Networked banking
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Fund Cost Calculator
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                VC Fund Performance Calculator
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Scout Funds
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                AngelList vs. Carta: Fund Management
              </Link>
            </li>
          </ul>
        </div>
        <div className="section-5">
          <p className="heading font-bold text-primary">Resources</p>
          <ul>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Partnerships
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Blog
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Help Center
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Education Center
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                About us
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Careers
              </Link>
            </li>
            <li className="sub-headings text-normal text-sm text-primary my-3">
              <Link href="#" className="">
                Form CRS
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="rights py-5 border-b border-t border-slate-300 flex md:items-center items-start justify-between text-sm my-10">
        <div className="flex gap-5 flex-col md:flex-row">
          <p className="text-primary">Terms</p>
          <p className="text-primary">Privacy</p>
          <p className="text-primary">Disclosures</p>
          <p className="text-primary">Cookie Settings</p>
          <p className="text-primary">© AL Advisors Management Inc.</p>
        </div>
        <div className="flex gap-3">
          <p className="text-primary bg-slate-200 rounded-md w-12 aspect-square flex items-center justify-center font-bold text-lg">
            f
          </p>
          <p className="text-primary bg-slate-200 rounded-md w-12 aspect-square flex items-center justify-center font-bold text-lg">
            I
          </p>
          <p className="text-primary bg-slate-200 rounded-md w-12 aspect-square flex items-center justify-center font-bold text-lg">
            in
          </p>
        </div>
      </div>
      <div className="disclaimer text-sm">
        <p className="text-primary/70 font-bold">Disclaimer :</p>
        <p className="text-primary/50">
          Assets on platform refers the the amount of money being deployed by
          fund managers using AngelList’s software. This does not refer to any
          amount of money being deployed with AngelList’s affiliated exempt
          reporting adviser, AngelList Advisors, LLC.
        </p>
        <br />
        <p className="text-primary/50">
          The information contained herein is provided for informational and
          discussion purposes only and is not intended to be a recommendation
          for any investment, service, product, or other advice of any kind, and
          shall not constitute or imply an offer of any kind. Any investment
          opportunities and/or products or services shown here will only be
          completed pursuant to formal offering materials, a letter of intent,
          and/or any other agreements as determined by AngelList containing full
          details regarding risks, minimum investment, fees, and expenses of
          such transaction. The terms of any product, service, or particular
          investment opportunity, including size, costs, and other
          characteristics, are set forth in the applicable constituent documents
          for such product, service or particular investment opportunity and may
          differ materially from those presented in this presentation. Such
          terms are subject to change without notice. For more information on
          AngelList and its products and service
          <Link href="#" className="text-blue-700 underline">
            see here
          </Link>
          .
        </p>
        <br />
        <p className="text-primary/50">
          Quotes included in these materials related to Lead Angels services
          should not be construed in any way as an endorsement of Lead Angels
          advice, analysis, or other service rendered to its clients.
        </p>
      </div>
    </div>
  );
}

export default Footer;
