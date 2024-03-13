/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import erp from "./../../../../assets/images/erp.png";
// eslint-disable-next-line no-unused-vars
import acc from "./../../../../assets/images/accounts.png";
// eslint-disable-next-line no-unused-vars
import pos from "./../../../../assets/images/epos.png";
// eslint-disable-next-line no-unused-vars
import sms from "./../../../../assets/images/chem.png";

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Backend Development",
    description:
      "30+ Fully coded Backend Development Like HRM, CRM, POS , Inventory , ERP , Etch Web Application",
    items: [
      {
        image: <img src={erp} alt="ERP" />,
        name: "ERP",
        count: 4,
        // route: "/sections/attention-catchers/alerts",
        pro: true,
      },
      {
        image: `<img src={ acc } alt="Inventory" />`,
        name: "Inventory",
        count: 3,
        pro: true,
      },
      {
        image: `${imagesPrefix}/popovers.jpg`,
        name: "E-Commerce",
        count: 2,
        // route: "/sections/attention-catchers/tooltips-popovers",
        pro: true,
      },
      {
        image: `<img src={ pos } alt="Inventory" />`,
        name: "POS",
        count: 5,
        // route: "/sections/attention-catchers/modals",
        pro: true,
      },
      {
        image: `<img src={ sms } alt="SMS" />`,
        name: "SMS ERP",
        count: 5,
        // route: "/sections/attention-catchers/modals",
        pro: true,
      },
    ],
  },
  {
    title: "Design Blocks",
    description: "A selection of 8+ page sections that fit perfectly in any combination",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Page Headers",
        count: 10,
        // route: "/sections/page-sections/page-headers",
        pro: true,
      },
      {
        image: `${imagesPrefix}/features.jpg`,
        name: "Features",
        count: 14,
        // route: "/sections/page-sections/features",
        pro: true,
      },
      {
        image: `${imagesPrefix}/pricing.jpg`,
        name: "Pricing",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/faq.jpg`,
        name: "FAQ",
        count: 1,
        pro: true,
      },
      {
        image: `${imagesPrefix}/blogs.jpg`,
        name: "Blog Posts",
        count: 11,
        pro: true,
      },
      {
        image: `${imagesPrefix}/testimonials.jpg`,
        name: "Testimonials",
        count: 11,
        pro: true,
      },
      {
        image: `${imagesPrefix}/teams.jpg`,
        name: "Teams",
        count: 6,
        pro: true,
      },
      {
        image: `${imagesPrefix}/stats.jpg`,
        name: "Stats",
        count: 3,
        pro: true,
      },
      {
        image: `${imagesPrefix}/call-to-action.jpg`,
        name: "Call to Actions",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/projects.jpg`,
        name: "Applications",
        count: 6,
        pro: true,
      },
      {
        image: `${imagesPrefix}/logo-area.jpg`,
        name: "Logo Areas",
        count: 4,
        pro: true,
      },
      {
        image: `${imagesPrefix}/footers.jpg`,
        name: "Footers",
        count: 10,
        pro: true,
      },
      {
        image: `${imagesPrefix}/general-cards.jpg`,
        name: "General Cards",
        count: 9,
        pro: true,
      },
      {
        image: `${imagesPrefix}/content-sections.jpg`,
        name: "Content Sections",
        count: 8,
        pro: true,
      },
    ],
  },
  {
    title: "Navigation",
    description: "30+ components that will help go through the pages",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: "Navbars",
        count: 4,
        // route: "/sections/navigation/navbars",
        pro: true,
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        name: "Nav Tabs",
        count: 2,
        // route: "/sections/navigation/nav-tabs",
        pro: true,
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Pagination",
        count: 3,
        // route: "/sections/navigation/pagination",
        pro: true,
      },
    ],
  },
  {
    title: "Input Areas",
    description: "50+ elements that you need for text manipulation and insertion",
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        name: "Newsletters",
        count: 6,
        pro: true,
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        name: "Contact Sections",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/forms.jpg`,
        name: "Forms",
        count: 3,
        // route: "/sections/input-areas/forms",
        pro: true,
      },
      {
        image: `${imagesPrefix}/inputs.jpg`,
        name: "Inputs",
        count: 6,
        // route: "/sections/input-areas/inputs",
        pro: true,
      },
    ],
  },
  {
    title: "Attention Catchers",
    description: "30+ Fully coded components that popup from different places of the screen",
    items: [
      {
        image: `${imagesPrefix}/alerts.jpg`,
        name: "Alerts",
        count: 4,
        // route: "/sections/attention-catchers/alerts",
        pro: true,
      },
      {
        image: `${imagesPrefix}/toasts.jpg`,
        name: "Notifications",
        count: 3,
        pro: true,
      },
      {
        image: `${imagesPrefix}/popovers.jpg`,
        name: "Tooltips & Popovers",
        count: 2,
        // route: "/sections/attention-catchers/tooltips-popovers",
        pro: true,
      },
      {
        image: `${imagesPrefix}/modals.jpg`,
        name: "Modals",
        count: 5,
        // route: "/sections/attention-catchers/modals",
        pro: true,
      },
    ],
  },
  {
    title: "Elements",
    description: "40+ carefully crafted small elements that come with multiple colors and shapes",
    items: [
      {
        image: `${imagesPrefix}/buttons.jpg`,
        name: "Buttons",
        count: 6,
        // route: "/sections/elements/buttons",
        pro: true,
      },
      {
        image: `${imagesPrefix}/avatars.jpg`,
        name: "Avatars",
        count: 2,
        // route: "/sections/elements/avatars",
        pro: true,
      },
      {
        image: `${imagesPrefix}/dropdowns.jpg`,
        name: "Dropdowns",
        count: 2,
        // route: "/sections/elements/dropdowns",
        pro: true,
      },
      {
        image: `${imagesPrefix}/switch.jpg`,
        name: "Toggles",
        count: 2,
        // route: "/sections/elements/toggles",
        pro: true,
      },
      {
        image: `${imagesPrefix}/social-buttons.jpg`,
        name: "Social Buttons",
        count: 2,
        pro: true,
      },
      {
        image: `${imagesPrefix}/breadcrumbs.jpg`,
        name: "Breadcrumbs",
        count: 1,
        // route: "/sections/elements/breadcrumbs",
        pro: true,
      },
      {
        image: `${imagesPrefix}/badges.jpg`,
        name: "Badges",
        count: 3,
        // route: "/sections/elements/badges",
        pro: true,
      },
      {
        image: `${imagesPrefix}/progress.jpg`,
        name: "Progress Bars",
        count: 4,
        // route: "/sections/elements/progress-bars",
        pro: true,
      },
      {
        image: `${imagesPrefix}/tables.jpg`,
        name: "Tables",
        count: 3,
        pro: true,
      },
      {
        image: `${imagesPrefix}/typography.jpg`,
        name: "Typography",
        count: 2,
        // route: "/sections/elements/typography",
        pro: true,
      },
    ],
  },
];
