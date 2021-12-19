export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="space-y-10 lg:space-y-0 lg:grid grid-cols-4">
          <div className="space-y-4">
            <strong>Support</strong>
            <p>Help Centre</p>
            <p>Safety information</p>
            <p>Cancellation options</p>
            <p>Our COVID-19 Response</p>
            <p>Supporting people with disabilities</p>
            <p>Report a neighbourhood concern</p>
          </div>

          <div className="space-y-4">
            <strong>Community</strong>
            <p>Airbnb.org: disaster relief housing</p>
            <p>Support Afghan refugees</p>
            <p>Celebrating diversity & belonging</p>
            <p>Combating discrimination</p>
          </div>

          <div className="space-y-4">
            <strong>Hosting</strong>
            <p>Try hosting</p>
            <p>AirCover: protection for Hosts</p>
            <p>Explore hosting resources</p>
            <p>Visit our community forum</p>
            <p>How to host responsibly</p>
          </div>

          <div className="space-y-4">
            <strong>About</strong>
            <p>Newsroom</p>
            <p>Learn about new features</p>
            <p>Letter from our founders</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Airbnb Luxe</p>
          </div>
        </div>

        <hr className="my-10" />
        
        <div className="lg:flex items-center justify-between text-xs hidden">
          <div className="flex items-center space-x-3">
            <p>{new Date().getFullYear()} Airbnb Clone by Monwar Khan</p>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Sitemap</p>
            <p>UK Modern Slavery Act</p>
            <p>Company detail</p>
          </div>

          <div className="flex items-center space-x-5">
            <p>English (GB)</p>
            <p>GBP</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
