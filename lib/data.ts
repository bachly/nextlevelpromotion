export const graphData: Array<{
  id: number;
  currentHeight?: string;
  previousHeight?: string;
}> = [
  {
    id: 1,
    currentHeight: "50px",
    previousHeight: "38px",
  },
  {
    id: 2,
    currentHeight: "101px",
    previousHeight: "67px",
  },
  {
    id: 3,
    currentHeight: "122px",
    previousHeight: "92px",
  },
  {
    id: 4,
    currentHeight: "85px",
    previousHeight: "44px",
  },
  {
    id: 5,
    currentHeight: "50px",
    previousHeight: "31px",
  },
  {
    id: 6,
    currentHeight: "106px",
    previousHeight: "80px",
  },
];

export const transition = { duration: 0, ease: [0, 0, 0, 0] };
export const variants = {
  hidden: { transform: "translateY(0)", opacity: 1 },
  visible: { transform: "translateY(0)", opacity: 1 },
};
export const cardVariants = {
  hidden: { opacity: 1, transform: "scale(1) rotate(0deg)" },
  visible: { opacity: 1, transform: "scale(1) rotate(0deg)" },
};

export const FAQData: {
  title: string;
  description: string;
}[] = [
  {
    title: "What printing services do you offer?",
    description:
      "We offer a comprehensive range of custom printing solutions including banners, signage, A-frames, stickers, wall murals, promotional materials, event displays, and much more. From small format prints like business cards and flyers to large format displays like building wraps and media walls, we can handle projects of any size. Browse our product gallery to see the full range of solutions we offer.",
  },
  {
    title: "How do I get a quote for my project?",
    description:
      "Getting a quote is easy! Simply browse our products, click the quote button on any product you're interested in, and fill out the form with your details and requirements. Our team will review your request and get back to you with a detailed quote within 24 hours. For complex or large-scale projects, we're happy to schedule a consultation to discuss your needs in detail.",
  },
  {
    title: "What is the typical turnaround time for orders?",
    description:
      "Turnaround times vary depending on the product type, quantity, and complexity of your order. Standard orders typically take 5-10 business days from artwork approval to delivery. Rush services are available for urgent projects. We'll provide you with an accurate timeline when we quote your project and keep you updated throughout the production process.",
  },
  {
    title: "Do you provide design services?",
    description:
      "Yes! Our experienced design team can help bring your vision to life. Whether you need a complete design from scratch or just some tweaks to your existing artwork, we're here to help. Design services are available at an additional cost and can be included in your quote. We work closely with you to ensure the final design perfectly represents your brand and meets your objectives.",
  },
  {
    title: "What file formats do you accept for artwork?",
    description:
      "We accept a variety of file formats including PDF, AI, EPS, PSD, and high-resolution JPG or PNG files. For best results, we recommend providing vector files (AI or EPS) for designs with text and logos. If you're unsure about your files, send them through and our team will review them and provide feedback on quality and suitability for printing.",
  },
  {
    title: "Can I see a proof or sample before full production?",
    description:
      "Absolutely! We provide digital proofs for all orders before going to print. This ensures you're completely happy with colors, layout, and overall design. For large orders or new products, we can also arrange physical samples or test prints at an additional cost. Your approval is required before we proceed with full production.",
  },
  {
    title: "What areas do you service and deliver to?",
    description:
      "We service clients across Australia and can arrange delivery nationwide. Installation services are available for large format signage, wall graphics, and window displays in major metropolitan areas. Delivery times and costs vary based on location and order size. International shipping can also be arranged for specific products upon request.",
  },
  {
    title: "What payment methods do you accept?",
    description:
      "We accept multiple payment methods including credit cards, direct bank transfer, and PayPal. For established business clients, we also offer account terms with credit approval. A 50% deposit is typically required for large orders, with the balance due before dispatch. All payment details and terms will be clearly outlined in your quote.",
  },
];

// World Map data
export const WorldMapDotsData = [
  {
    start: {
      lat: 60.2008,
      lng: -149.4937,
    },
    end: {
      lat: -21.7975,
      lng: -60.8919,
    },
  },
  {
    start: { lat: 60.2008, lng: -149.4937 },
    end: { lat: 75.7975, lng: -42.8919 },
  },
  {
    start: { lat: -21.7975, lng: -60.8919 },
    end: { lat: 4.7223, lng: 16.1393 },
  },
  {
    start: {
      lat: 70.7975,
      lng: -42.8919,
    },
    end: {
      lat: 4.7223,
      lng: 16.1393,
    },
  },
  {
    start: {
      lat: 65.5074,
      lng: 100.1278,
    },
    end: {
      lat: 75.7975,
      lng: -42.8919,
    },
  },
  {
    start: {
      lat: 4.7223,
      lng: 16.1393,
    },
    end: {
      lat: 65.5074,
      lng: 100.1278,
    },
  },
  {
    start: {
      lat: 10.5074,
      lng: 95.1278,
    },
    end: {
      lat: 4.7223,
      lng: 16.1393,
    },
  },
];

export const WorldMapAvatarsData = [
  {
    lat: 60.2008,
    lng: -149.4937,
    url: "/assets/avatar/avatar1.png",
    size: 20,
  },
  {
    lat: -21.7975,
    lng: -60.8919,
    url: "/assets/avatar/avatar2.png",
    size: 26,
  },
  {
    lat: 75.7975,
    lng: -42.8919,
    url: "/assets/avatar/avatar3.png",
    size: 28,
  },
  {
    lat: 4.7223,
    lng: 16.1393,
    url: "/assets/avatar/avatar4.png",
    size: 30,
  },
  {
    lat: 65.5074,
    lng: 100.1278,
    url: "/assets/avatar/avatar5.png",
    size: 35,
  },
  {
    lat: 10.5074,
    lng: 95.1278,
    url: "/assets/avatar/avatar6.png",
    size: 19,
  },
];
