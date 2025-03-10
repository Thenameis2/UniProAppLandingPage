import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "UniPro",
  seo: {
    title: "UniPro",
    description: "App landing page for UniPro",
  },
  // Draws grid behind main container
  backgroundGrid: false,
  logo: "/MainLogonobg.png",
  theme: "corporate",
  // Forces theme to be chosen above, no matter what user prefers
  forceTheme: false,
  // Shows switch to toggle between dark and light modes
  showThemeSwitch: true,
  appStoreLink: "https://www.apple.com/app-store/",
  googlePlayLink:
    "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox",
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: true,
      privacyPolicy: true,
    },
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://x.com",
    },
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      // { href: "/#pricing", title: "Pricing" },
      // { href: "/#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "Get the app",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      // { href: "/#pricing", title: "Pricing" },
      // { href: "/#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Download Our Mobile App Today!",
    subtitle:
      "",
      screenshots: [
        "/screenshots/services.PNG",
        "/screenshots/network.PNG",
        "/screenshots/provider.PNG",
      
      ],
  },
  home: {
    seo: {
      title: "UniPro App Landing Page",
      description: "UniPro App Landing Page",
    },
    // testimonials: {
    //   id: "testimonials",
    //   title: "Testimonials",
    //   subtitle: "Check out a few of our customer stories",
    //   cards: [
    //     {
    //       name: "Alice Johnson",
    //       comment:
    //         "The service was fantastic! Highly recommended. The team was very professional and attentive to our needs. They went above and beyond to ensure we were satisfied with the results. I will definitely be using their services again in the future.",
    //     },
    //     {
    //       name: "Bob Smith",
    //       comment:
    //         "Great value for the price. Very satisfied with the overall experience. The product quality is top-notch and the customer service is excellent. I appreciate the prompt responses to my inquiries and the helpful advice provided. Highly recommend.",
    //     },
    //     {
    //       name: "Charlie Brown",
    //       comment:
    //         "An excellent experience from start to finish. The onboarding process was smooth and the support team was very responsive. I felt valued as a customer and the results exceeded my expectations. I am impressed with the level of detail and care put into their work.",
    //     },
    //     {
    //       name: "Dana White",
    //       comment:
    //         "Superb customer service and high-quality products. The team demonstrated great expertise and patience throughout the project. They addressed all my concerns and provided valuable insights. The end product was delivered on time and surpassed my expectations.",
    //     },
    //     {
    //       name: "Eve Adams",
    //       comment:
    //         "I couldn't be happier with the results! The attention to detail and the level of customization provided was outstanding. The team was friendly and professional, making the entire process enjoyable. I highly recommend their services to anyone looking for top-quality work.",
    //     },
    //   ],
    // },
    // partners: {
    //   title: "As seen on",
    //   logos: [
    //     "/misc/companies/apple.svg",
    //     "/misc/companies/aws.svg",
    //     "/misc/companies/google.svg",
    //     "/misc/companies/tumblr.svg",
    //   ],
    // },
    howItWorks: {
      id: "how-it-works",
      title: "How it works",
      // subtitle:
      //   "Explore our comprehensive step-by-step guide to understand how our process ensures seamless and effective results",
      steps: [
        {
          title: "Install the App",
          subtitle:
            "Download and install the app on your device to get started quickly and easily.",
          image: "stock/dowload.jpeg",
        },
        {
          title: "Create an Account",
          subtitle:
            "Sign up by entering your personal details and verifying your University email to create a new account in just a few minutes.",
          image: "/stock/register.PNG",
        },
        {
          title: "Set Up Your Profile",
          subtitle:
            "Complete your profile by adding necessary information and preferences to personalize your experience on the platform.",
          image: "/stock/profile.PNG",
        },
        {
          title: "Explore Service Providers",
          subtitle:
            "Navigate through the app to discover various service providers.",
          image: "/stock/explore.PNG",
        },
        {
          title: "Connect with Others",
          subtitle:
            "Start connecting with friends, colleagues, and like-minded individuals to expand your network and collaborate efficiently.",
          image: "/stock/chat.PNG",
        },
      ],
    },
    // features: {
    //   id: "features",
    //   title: "Transform Your Daily Routine",
    //   subtitle:
    //     "Elevate your lifestyle with our innovative mobile app, designed for seamless living",
    //   cards: [
    //     {
    //       title: "Seamless Integration",
    //       subtitle:
    //         "Connect effortlessly with all your devices, ensuring smooth and efficient workflows across different platforms and applications without any disruptions",
    //       icon: "/3D/link-front-color.webp",
    //     },
    //     {
    //       title: "24/7 Customer Support",
    //       subtitle:
    //         "Get assistance whenever you need it with our dedicated customer support team, available around the clock to help resolve any issues you may encounter",
    //       icon: "/3D/clock-front-color.webp",
    //     },
    //     {
    //       title: "Intuitive Design",
    //       subtitle:
    //         "Navigate through our intuitive and easy-to-use interface designed to enhance user experience, making it accessible for users of all skill levels",
    //       icon: "/3D/roll-brush-front-color.webp",
    //     },
    //     {
    //       title: "Top-Notch Security",
    //       subtitle:
    //         "Protect your data with our top-notch security protocols, offering robust encryption and real-time monitoring to keep your information safe and secure",
    //       icon: "/3D/sheild-front-color.webp",
    //     },
    //   ],
    // },
    // faq: {
    //   id: "faq",
    //   title: "Frequently Asked Questions",
    //   qa: [
    //     {
    //       question: "How can I create an account on your website?",
    //       answer:
    //         "To create an account, click on the 'Sign Up' button located at the top right corner of our homepage. Fill in the required information, including your name, email address, and password. Once you submit the form, you will receive a confirmation email. Click the link in the email to verify your account, and you're all set!",
    //     },
    //     {
    //       question: "What payment methods do you accept?",
    //       answer:
    //         "We accept a variety of payment methods to ensure convenience for our customers. These include major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. For more details, visit our Payments page.",
    //     },
    //     {
    //       question: "How can I track my order?",
    //       answer:
    //         "Once your order is shipped, you will receive an email with a tracking number. You can use this tracking number on our website under the 'Track Order' section to see the current status and estimated delivery date of your package.",
    //     },
    //     {
    //       question: "What is your return policy?",
    //       answer:
    //         "We offer a 30-day return policy for unused and unopened items. If you are not satisfied with your purchase, please contact our customer support team to initiate a return. Refunds will be processed within 7-10 business days after we receive the returned item.",
    //     },
    //     {
    //       question: "How can I contact customer support?",
    //       answer:
    //         "You can contact our customer support team through the 'Contact Us' page on our website. We are available via email, phone, and live chat. Our support hours are Monday to Friday, 9 AM to 5 PM.",
    //     },
    //   ],
    // },
    header: {
      headline: "Network. Earn. Discover.",
      subtitle:
        "Connect with fellow students, offer your services, discover campus events, and build your professional network – all in one platform.",
      screenshots: [
        "/screenshots/provider.PNG",
        "/screenshots/network.PNG",
        "/screenshots/services.PNG",
      ],
      // rewards: ["App of the year \n 1st", "Product of the day"],
      // usersDescription: "100+ people already using the app",
      headlineMark: [1, 3],
    },
    // pricing: {
    //   id: "pricing",
    //   title: "Pricing",
    //   subtitle: "Flexible costs to meet your budget",
    //   actionText: "Download the app",
    //   plans: [
    //     {
    //       title: "Basic Plan",
    //       price: "$9.99/month",
    //       rows: ["Access to basic features", "Email support", "1 GB storage"],
    //     },
    //     {
    //       title: "Standard Plan",
    //       price: "$19.99/month",
    //       featured: true,
    //       rows: [
    //         "Access to all basic features",
    //         "Priority email support",
    //         "10 GB storage",
    //         "Monthly webinars",
    //       ],
    //     },
    //     {
    //       title: "Premium Plan",
    //       price: "$29.99/month",
    //       rows: [
    //         "Access to all features",
    //         "24/7 support",
    //         "100 GB storage",
    //         "Weekly webinars",
    //         "Exclusive content",
    //       ],
    //     },
    //   ],
    // },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy - UniPro Mobile App Landing",
      description: "Privacy Policy",
    },
    content: `# Privacy Policy



`,
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - UniPro Mobile App Landing",
      description: "Cookies Policy",
    },
    content: `# Cookies Policy

`,
  },
  termsAndConditions: {
    seo: {
      title: "Terms and conditions - UniPro Mobile App Landing",
      description: "Terms and conditions",
    },
    content: `# Terms and Conditions


`,
  },
};

export default templateConfig;
