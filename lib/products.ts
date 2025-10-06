// Product interface
export interface Product {
  name: string;
  description: string;
  media: string[];
}

// Complete product catalog with descriptions
export const products: Product[] = [
  // A-Frames
  {
    name: "A Frame - Insertable",
    description: "Quick-change sidewalk sign perfect for daily specials and promotions. Easy to update, double-sided visibility captures customers from both directions.",
    media: ["/products/A Frame - Insertable.jpg"]
  },
  {
    name: "A Frame Large & Small",
    description: "Versatile A-frame signs in multiple sizes for any location. Weather-resistant and portable, ideal for storefronts, events, and high-traffic areas.",
    media: ["/products/A Frame Large & Small.jpg"]
  },
  {
    name: "A Frame with Chalkboard",
    description: "Classic chalkboard A-frame that adds character while promoting your business. Reusable and eco-friendly, perfect for cafes, restaurants, and boutiques.",
    media: ["/products/A Frame with Chalkboard.jpg"]
  },
  {
    name: "Snap A-Frame",
    description: "Professional snap-frame system for effortless poster changes. Sleek design with quick-release edges makes updating your message fast and frustration-free.",
    media: ["/products/Snap A-Frame.jpg"]
  },
  {
    name: "Monsoon A Frame",
    description: "Heavy-duty A-frame built to withstand extreme weather conditions. Weighted base ensures stability in wind and rain, perfect for outdoor year-round advertising.",
    media: ["/products/Monsoon A Frame.jpg"]
  },
  {
    name: "Portable Real Estate A Frame",
    description: "Lightweight yet durable signage designed for real estate professionals. Easy to transport between properties, instant curb appeal for open homes and listings.",
    media: ["/products/Portable Real Estate A frame.jpg"]
  },
  {
    name: "Real Estate A-Frame",
    description: "Premium real estate signage that commands attention at property viewings. Professional appearance builds trust with potential buyers and establishes your brand.",
    media: ["/products/Real Estate A-Framejpg.jpg"]
  },

  // Banners
  {
    name: "Premium Pull-Up Banner",
    description: "Professional retractable banners perfect for trade shows, events, and retail displays. Easy to set up in seconds, portable, and delivers maximum visual impact to attract customers.",
    media: ["/products/Premium Pull-Up Banner.jpg"]
  },
  {
    name: "Luxury Pull-Up Banner",
    description: "Premium quality retractable banners with superior finish. Ideal for corporate events, high-end retail, and professional presentations where quality matters.",
    media: ["/products/Luxury Pull-Up Banner.jpg"]
  },
  {
    name: "Double-Sided Pull-Up Banner",
    description: "Maximize visibility with banners that work from every angle. Perfect for open spaces and high-traffic areas where audiences approach from multiple directions.",
    media: ["/products/Double-Sided Pull-Up Banner.jpg"]
  },
  {
    name: "Vinyl Banner",
    description: "Durable outdoor advertising that withstands all weather conditions. Ideal for grand openings, sales promotions, and long-term outdoor campaigns with vibrant, eye-catching graphics.",
    media: ["/products/Vinyl Banner.jpg"]
  },
  {
    name: "Fabric Banner",
    description: "Premium fabric banners with rich colors and wrinkle-resistant finish. Professional appearance for indoor events, trade shows, and upscale retail environments.",
    media: ["/products/Fabric Banner.jpg"]
  },
  {
    name: "Fabric Mesh Banner",
    description: "Wind-resistant mesh banners perfect for outdoor installations. Air flows through the material, reducing wind load while maintaining vibrant graphics and visibility.",
    media: ["/products/Fabric Mesh Banner.jpg"]
  },
  {
    name: "Mesh Banner",
    description: "Breathable mesh material ideal for outdoor fence wraps and building wraps. Reduces wind resistance while delivering bold, weather-resistant graphics that last.",
    media: ["/products/Mesh Banner.jpg"]
  },
  {
    name: "Teardrop Banner",
    description: "Eye-catching teardrop flags that flutter in the wind to grab attention. Perfect for outdoor events, storefronts, and sporting venues where visibility is key.",
    media: ["/products/Teardrop Banner.jpg"]
  },
  {
    name: "Rectangle Flags",
    description: "Bold rectangular flags that stand tall and visible from a distance. Ideal for events, car dealerships, and retail locations to attract customers.",
    media: ["/products/Rectangle Flags.jpg"]
  },
  {
    name: "Replacement Flags",
    description: "Keep your outdoor advertising fresh with replacement flags for existing hardware. Cost-effective way to update messaging seasonally or for new campaigns.",
    media: ["/products/Replacement Flags.jpg"]
  },
  {
    name: "Ground Spikes Banner",
    description: "Portable banner system with ground spikes for secure outdoor placement. Quick setup on grass or soil, perfect for events, sports fields, and outdoor promotions.",
    media: ["/products/Ground Spikes Banner.jpg"]
  },
  {
    name: "X Banner",
    description: "Compact and affordable banner stands ideal for presentations and small spaces. Lightweight, easy to transport, and quick to set up anywhere you need visibility.",
    media: ["/products/X Banner.jpg"]
  },

  // Media Walls & Backdrops
  {
    name: "Media Wall",
    description: "Professional backdrop solution for events, press conferences, and brand activations. Create stunning photo opportunities while showcasing multiple sponsors and reinforcing brand presence.",
    media: ["/products/Media Wall.jpg"]
  },
  {
    name: "Adjustable Media Wall",
    description: "Customizable backdrop system that adapts to different venue sizes. Modular design allows flexible configurations for events of any scale.",
    media: ["/products/Adjustable Media Wall.jpg"]
  },
  {
    name: "Selfie Frame",
    description: "Create memorable brand experiences with custom selfie frames. Perfect for events, weddings, and promotions - turn your guests into brand ambassadors on social media.",
    media: ["/products/Selfie Frame.jpg"]
  },
  {
    name: "Stretch Fabric Stands",
    description: "Seamless fabric displays that create a premium, professional appearance. Wrinkle-free graphics and easy assembly make them ideal for trade shows and retail environments.",
    media: ["/products/Stretch Fabric Stands.jpg"]
  },

  // Outdoor & Event Solutions
  {
    name: "Market Umbrella",
    description: "Branded outdoor umbrellas that provide shade while promoting your business. Ideal for cafes, markets, and outdoor events to increase brand visibility in high-traffic areas.",
    media: ["/products/Market Umbrella.jpg"]
  },
  {
    name: "Gazebo Big",
    description: "Large branded shelter that creates a professional presence at outdoor events. Provides shade while maximizing brand exposure at markets, festivals, and sports events.",
    media: ["/products/Gazebo Big.jpg"]
  },
  {
    name: "Gazebo Small",
    description: "Compact branded gazebo perfect for smaller spaces and portable marketing. Easy to set up and transport, ideal for markets, pop-ups, and promotional events.",
    media: ["/products/Gazebo Small.jpg"]
  },
  {
    name: "Table Throws",
    description: "Transform standard tables into professional brand displays. Perfect for trade shows, exhibitions, and events to create a polished, cohesive brand presentation.",
    media: ["/products/Table Throws.jpg"]
  },
  {
    name: "Table Runner",
    description: "Add branded elegance to any table display without full coverage. Perfect for trade shows and events where you want brand presence without hiding table legs.",
    media: ["/products/Table Runner.jpg"]
  },
  {
    name: "Crowd Control Barriers",
    description: "Custom-branded barriers that manage crowds while promoting your brand. Turn functional event management into valuable marketing real estate.",
    media: ["/products/Crowd Control Barriers.jpg"]
  },

  // Signage - Corflute & Lightweight
  {
    name: "Corflute Sign",
    description: "Lightweight yet durable signage for real estate, construction sites, and temporary promotions. Weather-resistant and cost-effective for short to medium-term campaigns.",
    media: ["/products/Corflute Sign.jpg"]
  },
  {
    name: "Signflute Frame",
    description: "Professional framing system for corflute signs that adds durability and premium appearance. Easy to install and maintains clean, professional look.",
    media: ["/products/Signflute Frame.jpg"]
  },
  {
    name: "Signflute Signage",
    description: "Versatile corflute signage perfect for temporary promotions and directional signs. Lightweight, affordable, and easy to install anywhere you need visibility.",
    media: ["/products/Signflute Signage.jpg"]
  },
  {
    name: "Signflute Triangle",
    description: "Triangular corflute signs ideal for real estate and directional wayfinding. Unique shape stands out and provides visibility from multiple angles.",
    media: ["/products/Signflute Triangle.jpg"]
  },
  {
    name: "Cardboard Signage",
    description: "Eco-friendly signage solution perfect for indoor promotions and retail displays. Cost-effective for short-term campaigns and sustainable marketing initiatives.",
    media: ["/products/Cardboard Signage.jpg"]
  },

  // Premium Signage
  {
    name: "Box Signage",
    description: "Three-dimensional illuminated signage that commands attention day and night. Premium solution for storefronts and businesses that want to stand out with professional, high-impact branding.",
    media: ["/products/Box Signage.jpg"]
  },
  {
    name: "Reception Signage",
    description: "Professional reception signage that makes powerful first impressions. Establish credibility and reinforce your brand identity from the moment clients enter your space.",
    media: ["/products/Reception Signange.jpg"]
  },
  {
    name: "Shop Signage",
    description: "Custom storefront signage that attracts customers and builds brand recognition. Professional appearance that sets your business apart and draws foot traffic.",
    media: ["/products/Shop Signage 1.jpg"]
  },
  {
    name: "Signage",
    description: "Versatile custom signage solutions for any business need. From storefronts to directional signs, create professional brand presence wherever customers need to find you.",
    media: ["/products/Signage.jpg"]
  },
  {
    name: "Foam PVC Sign",
    description: "Rigid, lightweight signage with premium finish and durability. Perfect for indoor and outdoor use, offering professional appearance that withstands the elements.",
    media: ["/products/Foam PVC Sign.jpg"]
  },
  {
    name: "SEG Signage",
    description: "Silicone Edge Graphics provide seamless, premium signage with no visible frames. Modern, high-end appearance ideal for retail, events, and corporate environments.",
    media: ["/products/SEG Signage.jpg"]
  },
  {
    name: "Modular SEG Lightbox",
    description: "Backlit SEG displays that make your graphics glow with stunning brilliance. Modular system allows flexible configurations for trade shows and retail environments.",
    media: ["/products/Modular SEG Lightbox.jpg"]
  },
  {
    name: "Screenboard",
    description: "Premium rigid board perfect for high-quality signage and displays. Excellent for professional presentations, point-of-sale displays, and long-lasting indoor signage.",
    media: ["/products/Screenboard.jpg"]
  },

  // Specialty Signs
  {
    name: "Construction Sign",
    description: "Heavy-duty signage built for construction sites and industrial environments. Weather-resistant and highly visible, ensures safety compliance while promoting your brand.",
    media: ["/products/Construction Sign.jpg"]
  },
  {
    name: "Election Signage",
    description: "Campaign signage designed for maximum visibility and impact. Durable materials withstand outdoor conditions throughout your campaign period.",
    media: ["/products/Election Signage.jpg"]
  },
  {
    name: "Parking Sign",
    description: "Professional parking signage that clearly communicates rules and directions. Durable, weather-resistant solution for effective parking management and traffic flow.",
    media: ["/products/Parking Sign.jpg"]
  },
  {
    name: "One Way Window Sign",
    description: "Window graphics visible from outside while maintaining interior visibility. Perfect for retail storefront advertising that doesn't compromise natural light or views.",
    media: ["/products/One Way Window Sign.jpg"]
  },
  {
    name: "Window Graphic",
    description: "Transform windows into marketing opportunities with custom graphics. Attract attention from street traffic while maintaining privacy and professional appearance.",
    media: ["/products/Window Graphic.jpg"]
  },
  {
    name: "Bollard",
    description: "Branded bollards that provide safety barriers while promoting your business. Turn functional traffic control into valuable brand visibility in parking areas and pedestrian zones.",
    media: ["/products/Bollard.jpg"]
  },

  // Point of Sale
  {
    name: "Point of Sale Standee",
    description: "Attention-grabbing retail displays that drive impulse purchases. Position products prominently at checkout to maximize sales and promote special offers.",
    media: ["/products/Point of Sale Standee.jpg"]
  },
  {
    name: "Dump Bins",
    description: "Branded bulk display bins that encourage browsing and increase sales. Perfect for clearance items, special promotions, and creating urgency with volume displays.",
    media: ["/products/Dump Bins.jpg"]
  },

  // Stickers & Labels
  {
    name: "Custom Stickers",
    description: "Versatile marketing tools that turn any surface into brand real estate. Perfect for packaging, product labeling, and guerrilla marketing campaigns.",
    media: ["/products/Custom Stickers.jpg"]
  },
  {
    name: "Outdoor Custom Sticker",
    description: "Weather-resistant stickers designed for outdoor applications. UV-resistant and waterproof, ideal for vehicles, equipment, and outdoor brand placements.",
    media: ["/products/Outdoor Custom Sticker.jpg"]
  },
  {
    name: "Large Format Sticker",
    description: "Bold, oversized stickers that make big statements on walls, windows, and vehicles. Transform spaces with vibrant graphics that capture attention.",
    media: ["/products/Large Format Sticker.jpg"]
  },
  {
    name: "Floor Sticker",
    description: "Eye-level advertising placed where customers are looking. Durable floor graphics guide traffic flow while promoting products and creating engaging brand experiences.",
    media: ["/products/Floor Sticker.jpg"]
  },
  {
    name: "Floor Sticker Cutout",
    description: "Custom-shaped floor decals that stand out from standard formats. Unique designs capture attention and create memorable brand interactions in retail spaces.",
    media: ["/products/Floor Sticker Cutout.jpg"]
  },
  {
    name: "Label Roll",
    description: "Professional product labels on rolls for efficient application. Perfect for product packaging, shipping, and brand consistency across your inventory.",
    media: ["/products/Label Roll.jpg"]
  },
  {
    name: "Sticker Sheet",
    description: "Multiple stickers on single sheets for marketing campaigns and promotions. Cost-effective way to distribute brand stickers at events, with purchases, and in mailings.",
    media: ["/products/Strickersheet.jpg"]
  },

  // Print Materials
  {
    name: "Flyer",
    description: "Cost-effective print marketing that puts your message directly in customers' hands. Ideal for promotions, events, and door-to-door campaigns.",
    media: ["/products/Flyer.jpg"]
  },
  {
    name: "A4 Folded DL Brochure",
    description: "Professional tri-fold brochures that tell your complete brand story. Perfect for trade shows, retail displays, and comprehensive product information.",
    media: ["/products/A4 Folded DL Brochure.jpeg"]
  },
  {
    name: "Postcard",
    description: "Memorable marketing pieces perfect for direct mail campaigns. High-impact graphics and concise messaging drive response rates and customer engagement.",
    media: ["/products/Postcard.jpg"]
  },
  {
    name: "Poster",
    description: "Large format prints that command attention in high-traffic areas. Perfect for retail windows, events, and indoor advertising campaigns.",
    media: ["/products/Poster.jpg"]
  },

  // Packaging
  {
    name: "Flat Mailing Boxes",
    description: "Custom branded packaging that makes unboxing an experience. Protect products while promoting your brand from warehouse to customer's door.",
    media: ["/products/Flat Mailing Boxes.jpg"]
  },
  {
    name: "Shipping Box",
    description: "Durable corrugated boxes with custom branding turn deliveries into marketing opportunities. Professional packaging enhances perceived value and brand recognition.",
    media: ["/products/Shipping Box.jpg"]
  },

  // Wall Graphics
  {
    name: "Wall Mural",
    description: "Transform spaces with large-scale wall graphics that create atmosphere and reinforce brand identity. Perfect for retail environments, offices, and event spaces.",
    media: ["/products/Wall Mural.jpg"]
  },
  {
    name: "Wall Mural Art",
    description: "Artistic wall installations that elevate spaces while communicating brand values. Create Instagram-worthy environments that customers want to share.",
    media: ["/products/Wall Mural Art.jpg"]
  },

  // Specialty
  {
    name: "Car Magnet",
    description: "Removable vehicle magnets for flexible mobile advertising. Easy to apply and remove, perfect for delivery vehicles, company cars, and temporary promotions.",
    media: ["/products/Car Magnet.jpg"]
  },
];

// Helper function to get product by name
export const getProductByName = (name: string): Product | undefined => {
  return products.find(product => product.name === name);
};

// Helper function to get product description
export const getProductDescription = (name: string): string => {
  const product = getProductByName(name);
  return product?.description || "Professional printing solution designed to elevate your brand visibility. High-quality materials and vibrant colors ensure your message stands out and leaves a lasting impression on your target audience.";
};
