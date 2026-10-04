import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Footer() {
  const sections = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories', 'Gift Cards'],
    },
    {
      title: 'Apple Wallet',
      links: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'],
    },
    {
      title: 'Account',
      links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
    },
    {
      title: 'Entertainment',
      links: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store'],
    },
    {
      title: 'Apple Store',
      links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Carrier Deals at Apple', 'Order Status', 'Shopping Help'],
    },
    {
      title: 'For Business',
      links: ['Apple and Business', 'Shop for Business'],
    },
    {
      title: 'For Education',
      links: ['Apple and Education', 'Shop for K-12', 'Shop for College'],
    },
    {
      title: 'For Healthcare',
      links: ['Apple in Healthcare', 'Health on Apple Watch', 'Health Records on iPhone'],
    },
    {
      title: 'For Government',
      links: ['Shop for Government', 'Shop for Veterans and Military'],
    },
    {
      title: 'Apple Values',
      links: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supply Chain Innovation'],
    },
    {
      title: 'About Apple',
      links: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'],
    },
  ];

  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-[11px] pb-12 font-sans">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        {/* Breadcrumb Trail */}
        <div className="flex items-center space-x-1.5 py-4 border-b border-[#d2d2d7]/50 text-xs text-[#1d1d1f]">
          <a href="#" className="hover:opacity-75" aria-label="Apple">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.66-7.79-11.89-14.24-5.35-8.26-9.67-17.6-12.98-28.02-3.3-10.42-4.96-20.4-4.96-29.93 0-14.16 3.6-25.75 10.8-34.77 7.21-9.02 16.32-13.63 27.33-13.84 4.58 0 9.78 1.25 15.6 3.75 5.82 2.5 9.74 3.79 11.76 3.86 1.63 0 5.76-1.39 12.39-4.16 6.64-2.77 12.24-3.9 16.82-3.41 12.51.98 22.38 5.76 29.61 14.34-10.89 6.63-16.22 15.75-15.98 27.37.23 9.34 3.81 17.15 10.74 23.42 6.94 6.27 15.22 9.77 24.84 10.51-2.18 6.63-4.78 13.06-7.8 19.3zM119.22 33.64c0-7.38 2.64-14.28 7.92-20.7 5.28-6.42 11.89-10.63 19.82-12.64.44 1.3.66 2.45.66 3.44 0 7.37-2.73 14.41-8.19 21.11-5.46 6.7-12.08 10.74-19.86 12.12-.22-1.09-.35-2.2-.35-3.33z" />
            </svg>
          </a>
          <ChevronRight className="w-3 h-3 text-[#86868b]" />
          <a href="#" className="text-[#6e6e73] hover:text-[#1d1d1f]">AirPods</a>
          <ChevronRight className="w-3 h-3 text-[#86868b]" />
          <span className="text-[#1d1d1f] font-medium">AirPods (2nd generation)</span>
        </div>

        {/* Multi-column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8 border-b border-[#d2d2d7]/40">
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-[#1d1d1f] mb-2">{sections[0].title}</h5>
              <ul className="space-y-1.5">
                {sections[0].links.map((link) => (
                  <li key={link}><a href="#" className="hover:text-[#1d1d1f] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#1d1d1f] mb-2">{sections[1].title}</h5>
              <ul className="space-y-1.5">
                {sections[1].links.map((link) => (
                  <li key={link}><a href="#" className="hover:text-[#1d1d1f] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-[#1d1d1f] mb-2">{sections[2].title}</h5>
              <ul className="space-y-1.5">
                {sections[2].links.map((link) => (
                  <li key={link}><a href="#" className="hover:text-[#1d1d1f] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#1d1d1f] mb-2">{sections[3].title}</h5>
              <ul className="space-y-1.5">
                {sections[3].links.map((link) => (
                  <li key={link}><a href="#" className="hover:text-[#1d1d1f] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-[#1d1d1f] mb-2">{sections[4].title}</h5>
            <ul className="space-y-1.5">
              {sections[4].links.map((link) => (
                <li key={link}><a href="#" className="hover:text-[#1d1d1f] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-[#1d1d1f] mb-2">{sections[5].title}</h5>
              <ul className="space-y-1.5">
                {sections[5].links.map((link) => (
                  <li key={link}><a href="#" className="hover:text-[#1d1d1f] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#1d1d1f] mb-2">{sections[6].title}</h5>
              <ul className="space-y-1.5">
                {sections[6].links.map((link) => (
                  <li key={link}><a href="#" className="hover:text-[#1d1d1f] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#1d1d1f] mb-2">{sections[7].title}</h5>
              <ul className="space-y-1.5">
                {sections[7].links.map((link) => (
                  <li key={link}><a href="#" className="hover:text-[#1d1d1f] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#1d1d1f] mb-2">{sections[8].title}</h5>
              <ul className="space-y-1.5">
                {sections[8].links.map((link) => (
                  <li key={link}><a href="#" className="hover:text-[#1d1d1f] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-[#1d1d1f] mb-2">{sections[9].title}</h5>
              <ul className="space-y-1.5">
                {sections[9].links.map((link) => (
                  <li key={link}><a href="#" className="hover:text-[#1d1d1f] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[#1d1d1f] mb-2">{sections[10].title}</h5>
              <ul className="space-y-1.5">
                {sections[10].links.map((link) => (
                  <li key={link}><a href="#" className="hover:text-[#1d1d1f] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between text-[#6e6e73] gap-2">
          <div>
            Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="#" className="hover:text-[#1d1d1f]">Privacy Policy</a>
            <span className="text-[#d2d2d7]">|</span>
            <a href="#" className="hover:text-[#1d1d1f]">Terms of Use</a>
            <span className="text-[#d2d2d7]">|</span>
            <a href="#" className="hover:text-[#1d1d1f]">Sales Policy</a>
            <span className="text-[#d2d2d7]">|</span>
            <a href="#" className="hover:text-[#1d1d1f]">Legal</a>
            <span className="text-[#d2d2d7]">|</span>
            <a href="#" className="hover:text-[#1d1d1f]">Site Map</a>
          </div>
          <div>
            <a href="#" className="hover:text-[#1d1d1f] font-medium text-[#424245]">United States</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
