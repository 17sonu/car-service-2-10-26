export const businessInfo = {
  businessName: "Car Service",
  phone: "9875454169",
  whatsapp: "9875454169", // Add the confirmed WhatsApp number, including country code, when available.
  locationUrl: "https://maps.app.goo.gl/ks3TuumUHmpHPDPSA", // Paste the real Google Maps URL here.
  websiteUrl: "https://your-domain.com/", // Replace after deployment.
  tollIncluded: null, // true = included, false = not included, null = confirm while booking.
  car: {
    name: "Hyundai Xcent",
    model: "Top Model",
    images: [
      {
        src: "/assets/car1.png",
        alt: "White Hyundai Xcent far view",
      },
      {
        src: "/assets/car-side.webp",
        alt: "White Hyundai Xcent side view",
      },
      {
        src: "/assets/car-front.webp",
        alt: "White Hyundai Xcent front view",
      },
      {
        src: "/assets/car-detail.webp",
        alt: "White Hyundai Xcent front detail",
      },
    ],
    features: [
      "AC",
      "Comfortable seating",
      "Clean interior",
      "Safe and reliable",
      "Well maintained",
      "Family travel",
      "Professional service",
    ],
    specs: [
      ["Vehicle", "Hyundai Xcent"],
      ["Category", "Sedan"],
      ["Air Conditioning", "Available"],
      ["Seating", "5 seater car"],
      ["Windows", "Power windows"],
      ["Phone Charging","Available"],
      ["Music System","Available"],
      ["Service Type", "Local / Outstation / Pickup & Drop"],
      ["Condition", "Well Maintained"],
    ],
  },
  services: [
    {
      title: "Hospital Transport",
      description: "Comfortable transport for hospital visits.",
      icon: "hospital",
    },
    {
      title: "Airport Pickup & Drop",
      description: "Pickup and drop service for airport travel.",
      icon: "plane",
    },
    {
      title: "Station Pickup & Drop",
      description: "Convenient railway station transportation.",
      icon: "train",
    },
    {
      title: "Marriage Ceremonies",
      description: "Comfortable car service for wedding events.",
      icon: "heart",
    },
  ],
  serviceAreas: ["Singur", "Nasirpur", "Bora", "Diara", "Begampur", "Dankuni"],
  pricing: [
    ["Local Trip", "Contact for price"],
    ["Airport Transfer", "Contact for price"],
    ["Railway Station", "Contact for price"],
    ["Wedding Ceremony", "Contact for price"],
    ["Outstation", "Contact for price"],
  ],
};
