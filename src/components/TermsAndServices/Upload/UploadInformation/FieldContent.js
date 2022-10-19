const OtherLanguages = ["Laos", "Mars", "Sun"];
const Cost = ["Pay", "Free"];
const Methods = ["NFT", "Metaverse", "Play To Earn"];
const AgeLimit = ["3", "7", "12", "16", "18"];
const ServiceCountry = ["VietNam", "Korea"];
export const FieldContent = [
  [
    {
      type: "input",
      register: "privacy_policy",
      title: "Privacy Policy (link) *",
      placeholder: "Enter The Link",
    },
    {
      type: "input",
      register: "term_policy",
      title: "Term Policy (link) *",
      placeholder: "Enter The Link",
    },
  ],
  [
    {
      type: "input",
      register: "support",
      title: "App Support (link) *",
      placeholder: "Enter The Link",
    },
    {
      type: "input",
      register: "size",
      title: "Size *",
      placeholder: "Enter The Size",
    },
  ],
  [
    {
      type: "select",
      name: "methods",
      Array: Methods,
    },
    {
      type: "select",
      name: "other_languages",
      Array: OtherLanguages,
    },
  ],

  [
    {
      type: "select",
      name: "age_limit",
      Array: AgeLimit,
    },
    {
      type: "select",
      name: "service_country",
      Array: ServiceCountry,
    },
  ],
];
