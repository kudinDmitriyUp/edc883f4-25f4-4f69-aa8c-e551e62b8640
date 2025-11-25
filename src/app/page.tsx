"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, Coffee, Clock3, Droplet, Flower2, MapPin, Sparkles, Spa, Tv, UtensilsCrossed, Wifi, Wine, Wine2, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="aurora"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Roma Luxury Hotel"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764094762639-8eb0ovqu.jpg"
          logoAlt="Roma Luxury Hotel Logo"
          button={{
            text: "Book Now",
            href: "contact"
          }}
          className="bg-white border-b border-gray-200"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Discover Timeless Elegance in Rome"
          description="Experience luxury hospitality in the heart of Italy. Immerse yourself in history, culture, and world-class accommodation at our prestigious hotel."
          tag="Luxury Experience"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764094763383-undykglx.jpg"
          imageAlt="Rome Colosseum at sunset"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            {
              text: "Reserve Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "feature"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Your Gateway to Roman Splendor. A premier destination combining authentic Italian hospitality with contemporary luxury. Located steps from the Colosseum, our hotel offers the perfect balance of historical charm and modern comfort."
          features={[
            {
              icon: MapPin,
              title: "Prime Location",
              description: "Situated in the historic center of Rome, within walking distance of major attractions including the Colosseum, Roman Forum, and Vatican."
            },
            {
              icon: Award,
              title: "Award-Winning Service",
              description: "Our dedicated concierge team provides personalized assistance to ensure every moment of your stay is unforgettable."
            },
            {
              icon: Wine,
              title: "Michelin-Star Dining",
              description: "Savor exquisite Italian cuisine prepared by renowned chefs in our elegant restaurant overlooking the city."
            },
            {
              icon: Spa,
              title: "Wellness Sanctuary",
              description: "Rejuvenate in our full-service spa featuring traditional Italian treatments and modern therapeutic techniques."
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTen
          title="Exceptional Amenities"
          description="Every detail is crafted to exceed your expectations with world-class facilities and services."
          tag="Premium Facilities"
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: "1",
              title: "Luxurious Suites",
              description: "Indulge in our elegantly appointed rooms featuring marble bathrooms, premium linens, and panoramic city views.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764094764178-80zk2z09.jpg"
              },
              reverse: false,
              items: [
                {
                  icon: Wifi,
                  text: "High-speed complimentary WiFi throughout"
                },
                {
                  icon: Coffee,
                  text: "Italian espresso machine in every room"
                },
                {
                  icon: Tv,
                  text: "Smart TV with streaming services"
                }
              ]
            },
            {
              id: "2",
              title: "Fine Dining Experience",
              description: "Our restaurant showcases authentic Italian cuisine with a modern twist, complemented by an extensive wine selection.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764094764841-9qwc9cka.jpg"
              },
              reverse: true,
              items: [
                {
                  icon: UtensilsCrossed,
                  text: "Award-winning culinary team"
                },
                {
                  icon: Wine2,
                  text: "Premium Italian wine collection"
                },
                {
                  icon: Clock3,
                  text: "Room service available 24/7"
                }
              ]
            },
            {
              id: "3",
              title: "Spa & Wellness",
              description: "Unwind with therapeutic treatments in our serene spa using natural Italian skincare products.",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764094765663-o9ig4sdf.jpg"
              },
              reverse: false,
              items: [
                {
                  icon: Droplet,
                  text: "Heated infinity pool"
                },
                {
                  icon: Flower2,
                  text: "Aromatherapy treatments"
                },
                {
                  icon: Zap,
                  text: "Fitness center with modern equipment"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Guests Love Us"
          description="Hear from travelers who have experienced the magic of our hotel"
          tag="Guest Reviews"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Maria Rossi",
              role: "Travel Blogger",
              company: "Wanderlust Chronicles",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764094767065-6gmbd19f.jpg",
              imageAlt: "Maria Rossi"
            },
            {
              id: "2",
              name: "James Mitchell",
              role: "Business Traveler",
              company: "Global Ventures",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764094767768-rpc3udvx.jpg",
              imageAlt: "James Mitchell"
            },
            {
              id: "3",
              name: "Elena Visconti",
              role: "Luxury Consultant",
              company: "Elite Experiences",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764094768272-3bx04h9a.jpg",
              imageAlt: "Elena Visconti"
            },
            {
              id: "4",
              name: "Francesco Lombardi",
              role: "Art Collector",
              company: "Heritage Tours",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764094769131-hed6frs8.jpg",
              imageAlt: "Francesco Lombardi"
            },
            {
              id: "5",
              name: "Sophie Laurent",
              role: "Hospitality Expert",
              company: "Luxe Magazine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764094769897-urhz15vu.jpg",
              imageAlt: "Sophie Laurent"
            },
            {
              id: "6",
              name: "Giovanni Antonelli",
              role: "CEO",
              company: "Italian Heritage Foundation",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764094770531-ynrorkzv.jpg",
              imageAlt: "Giovanni Antonelli"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common inquiries about our hotel, rooms, and services"
          tag="Help Center"
          textboxLayout="default"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What is the check-in and check-out time?",
              content: "Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be arranged subject to availability. Please contact our concierge for special arrangements."
            },
            {
              id: "2",
              title: "Is there parking available at the hotel?",
              content: "Yes, we offer secure underground parking at a daily rate. We also provide valet parking services. Guests can reserve parking when booking their room."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "Our hotel features a Michelin-starred restaurant, casual café, and room service. We accommodate dietary preferences including vegetarian, vegan, and gluten-free options."
            },
            {
              id: "4",
              title: "Do you offer airport transfers?",
              content: "Yes, we provide convenient airport transfer services from both Fiumicino and Ciampino airports. Arrange this through our concierge at the time of booking."
            },
            {
              id: "5",
              title: "What is your cancellation policy?",
              content: "Cancellations made 7 days before arrival receive a full refund. Cancellations within 7 days may incur a charge. Flexible rates are available upon request."
            },
            {
              id: "6",
              title: "Are there meeting and event facilities?",
              content: "We offer state-of-the-art conference rooms, banquet halls, and event spaces perfect for business meetings, weddings, and special celebrations."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Experience"
          description="Contact our reservations team to book your unforgettable stay in Rome. We'll help arrange everything for your perfect Italian getaway."
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "checkIn",
              type: "date",
              placeholder: "Check-in Date",
              required: true
            },
            {
              name: "checkOut",
              type: "date",
              placeholder: "Check-out Date",
              required: true
            }
          ]}
          textarea={{
            name: "specialRequests",
            placeholder: "Special Requests or Room Preferences",
            rows: 4,
            required: false
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764094771991-r8063k40.jpg"
          imageAlt="Hotel Lobby Reception"
          mediaPosition="right"
          buttonText="Send Reservation Request"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Rooms & Suites",
                  href: "feature"
                },
                {
                  label: "Dining",
                  href: "#"
                },
                {
                  label: "Spa & Wellness",
                  href: "#"
                }
              ]
            },
            {
              title: "Guest Services",
              items: [
                {
                  label: "Book Now",
                  href: "contact"
                },
                {
                  label: "Group Bookings",
                  href: "#"
                },
                {
                  label: "Corporate Events",
                  href: "#"
                },
                {
                  label: "Weddings",
                  href: "#"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Tel: +39 06 7890 1234",
                  href: "#"
                },
                {
                  label: "Email: info@romaluxuryhotel.it",
                  href: "#"
                },
                {
                  label: "Via del Colosseo 1, Rome",
                  href: "#"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Roma Luxury Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}