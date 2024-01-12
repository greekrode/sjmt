export const constructionData = [
  {
    img: require("./assets/img/constructions-1.jpg"),
    title: "West Java Warehouse - Cikarang",
    delay: "100",
  },
  {
    img: require("./assets/img/constructions-2.jpg"),
    title: "Kalimantan Warehouse - Samarinda",
    delay: "200",
  },
  {
    img: require("./assets/img/constructions-3.jpg"),
    title: "Kalimantan Warehouse - Tanjung",
    delay: "300",
  },
  {
    img: require("./assets/img/constructions-4.jpg"),
    title: "Sulawesi - Kendari",
    delay: "400",
  },
  {
    img: require("./assets/img/constructions-4.jpg"),
    title: "Sulawesi - Makassar",
    delay: "500",
  },
];

export const servicesData = [
  {
    icon: "bi bi-easel",
    title: "Service Commitment",
    description:
      "For us, customer and partner satisfaction is a top priority. Established with a commitment to service excellence, we understand and proactively respond to customer needs, ensuring high-quality products and exceptional service.",
    delay: "100",
  },
  {
    icon: "bi bi-patch-check",
    title: "Sustainable and Trustworthy",
    description:
      "Sustainability and trust define our aim to lead in the automotive sector. Committed to quality and service, we build a legacy of excellence, offering value to our customers. We are dedicated to continual improvement, prioritizing top-tier quality and service.",
    delay: "200",
  },
  {
    icon: "bi bi-brightness-high",
    title: "Unmatched Service Quality",
    description:
      "At the core of our philosophy is a relentless commitment to service quality. We don't just distribute products; we deliver excellence and reliability in every interaction. Our team is dedicated to understanding and fulfilling your unique automotive needs, ensuring that every experience with us adds value and exceeds expectations.",
    delay: "300",
  },
  {
    icon: "bi bi-brightness-high",
    title: "Customer-Centric Approach",
    description:
      "Our approach is fundamentally customer-centric. We prioritize your needs and preferences, ensuring that our solutions are tailored to meet your specific requirements. This focus extends beyond mere transactions; we aim to build lasting relationships based on trust, transparency, and mutual respect. Choosing us means partnering with a team that genuinely cares about your success and satisfaction.",
    delay: "400",
  },
];

export const productData = [
  {
    img: require("./assets/img/products/giti.svg"),
    title: "GITI",
    link: "/giti",
  },
  {
    img: require("./assets/img/products/gt-radial.png"),
    title: "GT Radial",
    link: "/gtradial",
  },
  {
    img: require("./assets/img/projects/construction-1.jpg"),
    title: "GT",
    link: "/gt",
  },
];

export const testimonialData = [
  {
    img: require("./assets/img/testimonials/testimonials-1.jpg"),
    name: "Saul Goodman",
    position: "Ceo & Founder",
    quote:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    img: require("./assets/img/testimonials/testimonials-2.jpg"),
    name: "Sara Wilsson",
    position: "Designer",
    quote:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
    img: require("./assets/img/testimonials/testimonials-1.jpg"),
    name: "Saul Goodman",
    position: "Ceo & Founder",
    quote:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    img: require("./assets/img/testimonials/testimonials-2.jpg"),
    name: "Sara Wilsson",
    position: "Designer",
    quote:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
];

export const gitiProductData = [
  {
    id: 1,
    type: ["remodeling"],
    name: "Remodeling 1",
    img: require("./assets/img/projects/remodeling-1.jpg"),
  },
  {
    id: 2,
    type: ["construction"],
    name: "Construction 1",
    img: require("./assets/img/projects/construction-1.jpg"),
  },
  {
    id: 3,
    type: ["remodeling"],
    name: "Remodeling 1",
    img: require("./assets/img/projects/remodeling-1.jpg"),
  },
  {
    id: 4,
    type: ["construction"],
    name: "Construction 1",
    img: require("./assets/img/projects/construction-1.jpg"),
  },
];

export const gitiProductDataDetail = [
  {
    id: 1,
    name: "GT Traction",
    img: require("./assets/img/projects/remodeling-1.jpg"),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatum.",
    type: ["All Terrain", "All Drive"],
    overview: {
      rim_size: "16-24",
      aspect_ratio: "50-85",
      section_width: "205-315",
      speed_rating: "H",
    },
    fnb: [
      {
        features:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatum.",
        benefits:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatum.",
      },
      {
        features:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatum.",
        benefits:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatum.",
      },
    ],
    specs: [
      {
        tire_size: "10.00R20",
        pr: "18",
        load_index: "149/146",
        speed_rating: "F",
        approved_rim: "7.5",
        outer_diameter: "1054",
        tread_depth: "22.6",
        max_load: "3250/3000",
        max_pressure_kpa: "930/930",
        max_pressure_psi: "135/135",
      },
    ],
  },
];

export const gitiFilterData = [
  {
    key: "remodeling",
    name: "Remodeling",
  },
  {
    key: "construction",
    name: "Construction",
  },
];

export const teamsData = [
  {
    name: "Truck Tire Support",
    images: [
      {
        img: require("./assets/img/features-1.jpg"),
      },
      {
        img: require("./assets/img/features-2.jpg"),
      },
      {
        img: require("./assets/img/features-3.jpg"),
      },
    ],
  },
  {
    name: "Team Tire Event",
    images: [
      {
        img: require("./assets/img/features-1.jpg"),
      },
      {
        img: require("./assets/img/features-2.jpg"),
      },
    ],
  },
];
