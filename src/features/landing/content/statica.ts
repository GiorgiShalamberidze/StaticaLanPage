import { deriveAccents } from "@/shared/lib/color";

export const theme = {
  accent: "#E5482E",
  density: "regular",
  palette: deriveAccents("#E5482E")
};

export const languages = ["en", "ka"] as const;
export type SiteLanguage = (typeof languages)[number];

export const defaultLanguage: SiteLanguage = "ka";
export const languageStorageKey = "statica-language";

export type SiteCopy = {
  metadata: {
    title: string;
    description: string;
  };
  brand: {
    homeLabel: string;
    versionPill: string;
  };
  header: {
    openMenu: string;
    closeMenu: string;
    navLabel: string;
    languageLabel: string;
    languageNames: Record<SiteLanguage, string>;
    navItems: Array<{ label: string; href: string }>;
    startProject: string;
  };
  hero: {
    issue: string;
    status: string;
    eyebrow: string;
    titleTop: string;
    titleEmphasis: string;
    titleAccent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    assurances: string[];
    panelKicker: string;
    panelTitle: string;
    rangePills: string[];
    chartAriaLabel: string;
    chartAxisLabels: string[];
    stats: Array<{ label: string; value: number; decimals?: number; suffix?: string; delta: string }>;
    cards: Array<{ label: string; title: string; meta: string; danger?: boolean }>;
  };
  featuresSection: {
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    description: string;
    featurePrefix: string;
    items: Array<{ number: string; title: string; description: string; preview: "ingestion" | "sync" | "analysis" | "reporting" | "comparison" | "search" }>;
    previews: {
      ingestion: Array<{ label: string; value: number; color: string }>;
      sync: { synced: string; missing: string };
      analysis: Array<{ label: string; value: string }>;
      reporting: Array<{ name: string; value: string; color: string }>;
      comparison: Array<{ label: string; value: number; color: string }>;
      search: { query: string; meta: string; note: string };
    };
  };
  dashboard: {
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    description: string;
    captionLeft: string;
    captionRight: string;
    mock: {
      ariaLabel: string;
      sidebar: string[];
      overviewToday: string;
      snapshotTitle: string;
      searchPlaceholder: string;
      live: string;
      cards: Array<{ label: string; value: string; delta: string; color: string }>;
      recordFlowLabel: string;
      recordFlowTitle: string;
      recordFlowLegend: string[];
      topReasonsLabel: string;
      topReasonsTitle: string;
      topReasons: Array<{ name: string; value: number; color: string }>;
      departmentHealthLabel: string;
      departmentHealthTitle: string;
      departmentHeaders: string[];
      departmentRows: Array<{ department: string; records: string; retention: number; status: string; color: string }>;
    };
  };
  how: {
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    description: string;
    workflowLabel: string;
    workflowValue: string;
    steps: Array<{ number: string; title: string; description: string }>;
  };
  faq: {
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    intro: string;
    linkLabel: string;
    items: Array<{ question: string; answer: string }>;
  };
  footer: {
    eyebrow: string;
    titleLines: string[];
    description: string;
    signals: string[];
    intakeLabel: string;
    intakeCopy: string;
    fields: {
      name: string;
      company: string;
      contact: string;
      project: string;
    };
    submitLabel: string;
    legalPrefix: string;
    legalTerms: string;
    legalConnector: string;
    legalPrivacy: string;
  };
};

export const siteCopy: Record<SiteLanguage, SiteCopy> = {
  en: {
    metadata: {
      title: "Statica | Operations Analytics and Structured Reporting",
      description: "Statica turns records, recordings, and operational activity into searchable dashboards, structured analysis, and department-level reporting."
    },
    brand: {
      homeLabel: "Statica home",
      versionPill: ""
    },
    header: {
      openMenu: "Open navigation",
      closeMenu: "Close navigation",
      navLabel: "Primary navigation",
      languageLabel: "Language",
      languageNames: { en: "EN", ka: "KA" },
      navItems: [
        { label: "Features", href: "#features" },
        { label: "Dashboard", href: "#dashboard" },
        { label: "How it works", href: "#how" },
        { label: "FAQ", href: "#faq" }
      ],
      startProject: "Start project"
    },
    hero: {
      issue: "",
      status: "",
      eyebrow: "For teams that need clearer operational visibility",
      titleTop: "Make operations",
      titleEmphasis: "measurable",
      titleAccent: "every day.",
      description:
        "Statica turns incoming records, recordings, and workflow activity into searchable dashboards, structured analysis, and department-level reporting your team can act on.",
      primaryCta: "Start project",
      secondaryCta: "Review the workflow",
      assurances: ["OTP email access", "Searchable records and recordings", "Department-level visibility"],
      panelKicker: "STATICA - OVERVIEW",
      panelTitle: "Operational signal, in one place",
      rangePills: ["Today", "7D", "30D", "Quarter"],
      chartAriaLabel: "Live active user area chart",
      chartAxisLabels: ["08:00", "10:00", "12:00", "14:00", "NOW"],
      stats: [
        { label: "Records today", value: 12408, delta: "+6.4%" },
        { label: "Analyzed", value: 84, decimals: 0, suffix: "%", delta: "+9 pts" },
        { label: "Audio synced", value: 76, decimals: 0, suffix: "%", delta: "steady" }
      ],
      cards: [
        { label: "TOP REASON - 24H", title: "Billing questions", meta: "highest tagged theme across teams" },
        { label: "REVIEW QUEUE", title: "18 pending records", meta: "flagged for follow-up", danger: true }
      ]
    },
    featuresSection: {
      eyebrow: "02 - Capabilities",
      titleTop: "Six capabilities,",
      titleBottom: "one operating picture.",
      description:
        "Statica is built to turn raw operational inputs into structured analysis, searchable history, and reporting that teams can review without stitching together multiple tools.",
      featurePrefix: "FEATURE",
      items: [
        {
          number: "01",
          title: "Data ingestion",
          description: "Bring in operational records from the systems your teams already use so reporting starts from live activity, not manual exports.",
          preview: "ingestion"
        },
        {
          number: "02",
          title: "Audio and record syncing",
          description: "Keep records, recordings, and their processing state connected so teams can see what is available, missing, or still in flight.",
          preview: "sync"
        },
        {
          number: "03",
          title: "Transcription and structured analysis",
          description: "Convert raw conversations and record data into searchable fields like department, reason, sentiment, priority, and status.",
          preview: "analysis"
        },
        {
          number: "04",
          title: "Dashboards and KPI monitoring",
          description: "Track operational performance through overview metrics, trend lines, queue health, and service-quality indicators in one place.",
          preview: "reporting"
        },
        {
          number: "05",
          title: "Department comparison",
          description: "Compare teams side by side to spot shifts in satisfaction, volume, priority mix, and follow-up needs without digging through raw records.",
          preview: "comparison"
        },
        {
          number: "06",
          title: "Search and record inspection",
          description: "Filter by department, status, transcript availability, priority, or keyword to find the exact records that need attention.",
          preview: "search"
        }
      ],
      previews: {
        ingestion: [
          { label: "crm_records", value: 168, color: "var(--accent)" },
          { label: "phone_logs", value: 132, color: "var(--accent-3)" },
          { label: "helpdesk", value: 94, color: "var(--accent-2)" },
          { label: "uploads", value: 48, color: "var(--ink-3)" }
        ],
        sync: {
          synced: "SYNCED",
          missing: "MISSING"
        },
        analysis: [
          { label: "department", value: "support" },
          { label: "reason", value: "billing_question" },
          { label: "sentiment", value: "mixed" },
          { label: "priority", value: "high" },
          { label: "status", value: "review-ready" }
        ],
        reporting: [
          { name: "Processing health", value: "84% analyzed", color: "var(--accent)" },
          { name: "Priority queue", value: "18 pending", color: "var(--accent-2)" },
          { name: "Department mix", value: "4 active teams", color: "var(--danger)" }
        ],
        comparison: [
          { label: "Support", value: 88, color: "var(--accent)" },
          { label: "Sales", value: 74, color: "var(--accent-3)" },
          { label: "Retention", value: 61, color: "var(--accent-2)" },
          { label: "Ops", value: 52, color: "var(--ink-3)" }
        ],
        search: {
          query: "billing / negative / pending",
          meta: "12 matches - transcript available - high priority",
          note: "Support queue - filtered by department and status"
        }
      }
    },
    dashboard: {
      eyebrow: "03 - The interface",
      titleTop: "One dashboard,",
      titleBottom: "multiple operating signals.",
      description: "Overview metrics, department comparison, queue health, and searchable records all live in the same review surface.",
      captionLeft: "FIG. 01 - STATICA OVERVIEW",
      captionRight: "OPERATIONS REPORTING SURFACE",
      mock: {
        ariaLabel: "Statica overview dashboard mockup",
        sidebar: ["Overview", "Departments", "Records", "Reasons", "Search", "Filters", "Audio", "Access"],
        overviewToday: "OVERVIEW / TODAY",
        snapshotTitle: "Operational snapshot",
        searchPlaceholder: "Search records, reasons, departments...",
        live: "Live",
        cards: [
          { label: "Total records", value: "12,408", delta: "+6.4%", color: "var(--accent)" },
          { label: "Analyzed", value: "84%", delta: "+9 pts", color: "var(--accent-3)" },
          { label: "Audio coverage", value: "76%", delta: "synced", color: "var(--accent-2)" },
          { label: "Pending review", value: "18", delta: "-5", color: "var(--danger)" }
        ],
        recordFlowLabel: "RECORD FLOW",
        recordFlowTitle: "Volume and analysis progress",
        recordFlowLegend: ["Total", "Analyzed", "Coverage"],
        topReasonsLabel: "TOP REASONS",
        topReasonsTitle: "What teams are hearing",
        topReasons: [
          { name: "billing_question", value: 168, color: "var(--accent)" },
          { name: "account_access", value: 124, color: "var(--accent-3)" },
          { name: "delivery_update", value: 96, color: "var(--accent-2)" },
          { name: "escalation_risk", value: 71, color: "var(--danger)" },
          { name: "general_inquiry", value: 44, color: "var(--ink-3)" }
        ],
        departmentHealthLabel: "DEPARTMENT HEALTH",
        departmentHealthTitle: "By team, this week",
        departmentHeaders: ["Department", "Records", "Satisfaction", "Priority", "Status"],
        departmentRows: [
          { department: "Support", records: "4,832", retention: 0.74, status: "Stable", color: "var(--accent)" },
          { department: "Sales", records: "3,218", retention: 0.45, status: "Watch", color: "var(--accent-2)" },
          { department: "Retention", records: "2,406", retention: 0.18, status: "Escalated", color: "var(--danger)" },
          { department: "Operations", records: "1,952", retention: 0.62, status: "Stable", color: "var(--accent-3)" }
        ]
      }
    },
    how: {
      eyebrow: "04 - How it works",
      titleTop: "Four steps,",
      titleBottom: "from intake to insight.",
      description: "Statica is designed to move teams from incoming operational activity to structured reporting without manual stitching between systems.",
      workflowLabel: "WORKFLOW",
      workflowValue: "Ingest - Analyze - Review",
      steps: [
        {
          number: "I.",
          title: "Ingest source data",
          description: "Receive operational records from the tools and systems your team already depends on."
        },
        {
          number: "II.",
          title: "Sync records and recordings",
          description: "Store the available record context, audio, and processing references so everything stays tied to the same activity."
        },
        {
          number: "III.",
          title: "Analyze and structure",
          description: "Run transcription and analysis so raw inputs become searchable fields, categories, and review-ready signals."
        },
        {
          number: "IV.",
          title: "Review, compare, and report",
          description: "Use dashboards, filters, and record-level views to monitor trends, compare departments, and investigate what changed."
        }
      ]
    },
    faq: {
      eyebrow: "08 - FAQ",
      titleTop: "Honest answers,",
      titleBottom: "kept short.",
      intro: "Need a quick recap before reviewing the platform flow? Start with the answers here, then jump to the",
      linkLabel: "project form",
      items: [
        {
          question: "How do users access Statica?",
          answer: "The current product flow supports OTP-based email login, giving teams protected access to the dashboard without exposing the reporting interface publicly."
        },
        {
          question: "What kind of information can Statica analyze?",
          answer: "Statica is designed for operational records, recordings, and workflow activity. Calls and transcripts can be part of that picture, but the reporting model is broader than a single call-center view."
        },
        {
          question: "Can teams inspect individual records?",
          answer: "Yes. The current feature set supports searching, filtering, and drilling into individual records with transcript, audio, status, and analysis context."
        },
        {
          question: "What does the dashboard focus on?",
          answer: "The strongest current use cases are performance visibility, processing health, department comparison, top reasons, sentiment or quality signals, and searchable reporting across incoming records."
        },
        {
          question: "Does Statica promise fully automated decisions?",
          answer: "No. The public positioning should stay grounded in structured analysis and operational visibility rather than overpromising perfect interpretation or autonomous decision-making."
        }
      ]
    },
    footer: {
      eyebrow: "10 - Start a project",
      titleLines: ["YOU HAVE A PROJECT.", "WE HAVE HARD SKILLS", "AND EXPERIENCE."],
      description: "Statica is designed for teams that need structured reporting, searchable records, and a clearer operating picture across daily workflows.",
      signals: ["SEARCHABLE RECORDS", "STRUCTURED REPORTING", "OTP EMAIL ACCESS"],
      intakeLabel: "PROJECT INTAKE",
      intakeCopy: "Share the basics and we’ll have a clear starting point for the next conversation.",
      fields: {
        name: "[ YOUR_NAME: ]",
        company: "[ THE_COMPANY: ]",
        contact: "[ PHONE_NUMBER_OR_EMAIL: ]",
        project: ""
      },
      submitLabel: "LEAVE_A_REQUEST",
      legalPrefix: "BY CLICKING THE \"LEAVE_A_REQUEST\" BUTTON, YOU AGREE WITH THE",
      legalTerms: "TERMS AND CONDITIONS",
      legalConnector: "AND",
      legalPrivacy: "PRIVACY POLICY."
    }
  },
  ka: {
    metadata: {
      title: "Statica | ოპერაციული ანალიტიკა და სტრუქტურირებული ანგარიშგება",
      description: "Statica ჩანაწერებს, აუდიოფაილებსა და ოპერაციულ აქტივობებს საძიებო დეშბორდებად, სტრუქტურირებულ ანალიტიკად და დეპარტამენტების ანგარიშგებად გარდაქმნის."
    },
    brand: {
      homeLabel: "Statica-ს მთავარი გვერდი",
      versionPill: ""
    },
    header: {
      openMenu: "ნავიგაციის გახსნა",
      closeMenu: "ნავიგაციის დახურვა",
      navLabel: "მთავარი ნავიგაცია",
      languageLabel: "ენა",
      languageNames: { en: "EN", ka: "KA" },
      navItems: [
        { label: "ფუნქციონალი", href: "#features" },
        { label: "დეშბორდი", href: "#dashboard" },
        { label: "როგორ მუშაობს", href: "#how" },
        { label: "ხშირად დასმული კითხვები", href: "#faq" }
      ],
      startProject: "პროექტის დაწყება"
    },
    hero: {
      issue: "",
      status: "",
      eyebrow: "გუნდებისთვის, რომლებსაც ოპერაციების მკაფიო სურათი სჭირდებათ",
      titleTop: "გახადეთ ოპერაციები",
      titleEmphasis: "გაზომვადი",
      titleAccent: "ყოველდღიურად.",
      description:
        "Statica შემოსულ ჩანაწერებს, აუდიოფაილებს და სამუშაო პროცესებს საძიებო დეშბორდებად, სტრუქტურირებულ ანალიტიკად და დეპარტამენტულ ანგარიშებად გარდაქმნის — ყველაფერს, რაც გუნდს სწრაფი რეაგირებისთვის სჭირდება.",
      primaryCta: "დაიწყეთ პროექტი",
      secondaryCta: "იხილეთ პროცესი",
      assurances: ["OTP ავტორიზაცია ელფოსტით", "საძიებო ჩანაწერები და აუდიოფაილები", "დეტალური ხედვა დეპარტამენტების მიხედვით"],
      panelKicker: "STATICA - მიმოხილვა",
      panelTitle: "ყველა ოპერაციული სიგნალი ერთ სივრცეში",
      rangePills: ["დღეს", "7 დღე", "30 დღე", "კვარტალი"],
      chartAriaLabel: "აქტივობის დინამიკის გრაფიკი",
      chartAxisLabels: ["08:00", "10:00", "12:00", "14:00", "ახლა"],
      stats: [
        { label: "დღევანდელი ჩანაწერები", value: 12408, delta: "+6.4%" },
        { label: "გაანალიზებულია", value: 84, decimals: 0, suffix: "%", delta: "+9 პუნქტი" },
        { label: "აუდიო დაფარვა", value: 76, decimals: 0, suffix: "%", delta: "სტაბილურია" }
      ],
      cards: [
        { label: "მთავარი მიზეზი - 24 სთ", title: "ანგარიშსწორებასთან დაკავშირებული კითხვები", meta: "ყველაზე ხშირი თემა გუნდების მასშტაბით" },
        { label: "განსახილველი ჩანაწერები", title: "18 ჩანაწერი განხილვის მოლოდინშია", meta: "საჭიროებს რეაგირებას", danger: true }
      ]
    },
    featuresSection: {
      eyebrow: "02 - შესაძლებლობები",
      titleTop: "6 ძირითადი ფუნქცია",
      titleBottom: "სრულყოფილი ოპერაციული სურათისთვის.",
      description:
        "Statica შექმნილია იმისთვის, რომ დაუმუშავებელი ოპერაციული მონაცემები სტრუქტურირებულ ანალიტიკად, მარტივად საძიებო ისტორიად და მზა ანგარიშებად აქციოს, რომელსაც გუნდი დამატებითი ინსტრუმენტების გარეშე გამოიყენებს.",
      featurePrefix: "შესაძლებლობა",
      items: [
        {
          number: "01",
          title: "მონაცემების შეგროვება",
          description: "დააკავშირეთ ის სისტემები, რომლებსაც თქვენი გუნდები უკვე იყენებენ. დაეყრდენით რეალური დროის მონაცემებს და დაივიწყეთ მონაცემების ხელით ექსპორტირება.",
          preview: "ingestion"
        },
        {
          number: "02",
          title: "ჩანაწერებისა და აუდიოს სინქრონიზაცია",
          description: "ავტომატურად დააკავშირეთ ტექსტური ჩანაწერები აუდიოფაილებთან და მათ სტატუსებთან. ზუსტად აკონტროლეთ რა არის მზად, რა აკლია ან რა მუშავდება ამჟამად.",
          preview: "sync"
        },
        {
          number: "03",
          title: "ტრანსკრიფცია და სტრუქტურირებული ანალიტიკა",
          description: "აქციეთ დაუმუშავებელი საუბრები და მონაცემები სტრუქტურირებულ ველებად: დეპარტამენტი, მიზეზი, სენტიმენტი (ტონი), პრიორიტეტი და სტატუსი.",
          preview: "analysis"
        },
        {
          number: "04",
          title: "დეშბორდები და KPI-ების მონიტორინგი",
          description: "ადევნეთ თვალი ოპერაციულ შედეგებს, ტრენდებს, მიმდინარე დავალებებსა და ხარისხის ინდიკატორებს ერთ, მოსახერხებელ სივრცეში.",
          preview: "reporting"
        },
        {
          number: "05",
          title: "დეპარტამენტების შედარება",
          description: "შეადარეთ გუნდების მუშაობა ერთმანეთს, რათა დროულად აღმოაჩინოთ ცვლილებები მომხმარებელთა კმაყოფილებაში, სამუშაოს მოცულობაში და პრიორიტეტებში.",
          preview: "comparison"
        },
        {
          number: "06",
          title: "ძებნა და ჩანაწერების ინსპექტირება",
          description: "გაფილტრეთ მონაცემები დეპარტამენტის, სტატუსის, ტრანსკრიპტის, პრიორიტეტის ან საკვანძო სიტყვების მიხედვით და მარტივად იპოვეთ საჭირო ჩანაწერი.",
          preview: "search"
        }
      ],
      previews: {
        ingestion: [
          { label: "CRM ჩანაწერები", value: 168, color: "var(--accent)" },
          { label: "ზარების ლოგები", value: 132, color: "var(--accent-3)" },
          { label: "Helpdesk", value: 94, color: "var(--accent-2)" },
          { label: "ატვირთვები", value: 48, color: "var(--ink-3)" }
        ],
        sync: {
          synced: "მზადაა",
          missing: "აკლია"
        },
        analysis: [
          { label: "დეპარტამენტი", value: "მხარდაჭერა" },
          { label: "მიზეზი", value: "ანგარიშსწორება" },
          { label: "ტონი", value: "შერეული" },
          { label: "პრიორიტეტი", value: "მაღალი" },
          { label: "სტატუსი", value: "განხილვისთვის მზად" }
        ],
        reporting: [
          { name: "დამუშავების პროგრესი", value: "84% გაანალიზებულია", color: "var(--accent)" },
          { name: "პრიორიტეტული რიგი", value: "18 ელოდება", color: "var(--accent-2)" },
          { name: "დეპარტამენტების ჭრილი", value: "4 აქტიური გუნდი", color: "var(--danger)" }
        ],
        comparison: [
          { label: "მხარდაჭერა", value: 88, color: "var(--accent)" },
          { label: "გაყიდვები", value: 74, color: "var(--accent-3)" },
          { label: "შენარჩუნება", value: 61, color: "var(--accent-2)" },
          { label: "ოპერაციები", value: 52, color: "var(--ink-3)" }
        ],
        search: {
          query: "ანგარიშსწორება / უარყოფითი ტონი / მოლოდინში",
          meta: "12 დამთხვევა - ტრანსკრიპტი მზადაა - მაღალი პრიორიტეტი",
          note: "მხარდაჭერის რიგი - გაფილტრული დეპარტამენტისა და სტატუსის მიხედვით"
        }
      }
    },
    dashboard: {
      eyebrow: "03 - ინტერფეისი",
      titleTop: "ერთი დეშბორდი,",
      titleBottom: "ყველა ოპერაციული სიგნალი ერთად.",
      description: "ყველა ძირითადი მეტრიკა, დეპარტამენტების შედარება, მიმდინარე ამოცანები და საძიებო სისტემა გაერთიანებულია ერთ სამუშაო სივრცეში.",
      captionLeft: "სურ. 01 - STATICA მიმოხილვა",
      captionRight: "ოპერაციული ანგარიშგების სივრცე",
      mock: {
        ariaLabel: "Statica-ს მიმოხილვის დეშბორდის მაკეტი",
        sidebar: ["მიმოხილვა", "დეპარტამენტები", "ჩანაწერები", "მიზეზები", "ძებნა", "ფილტრები", "აუდიო", "წვდომა"],
        overviewToday: "მიმოხილვა / დღეს",
        snapshotTitle: "ოპერაციული მიმოხილვა",
        searchPlaceholder: "ჩანაწერების, მიზეზების ძებნა...",
        live: "მიმდინარე",
        cards: [
          { label: "ჩანაწერები სულ", value: "12,408", delta: "+6.4%", color: "var(--accent)" },
          { label: "ანალიზი დასრულდა", value: "84%", delta: "+9 პუნქტი", color: "var(--accent-3)" },
          { label: "აუდიო დაფარვა", value: "76%", delta: "მზადაა", color: "var(--accent-2)" },
          { label: "მოლოდინში", value: "18", delta: "-5", color: "var(--danger)" }
        ],
        recordFlowLabel: "ჩანაწერების ნაკადი",
        recordFlowTitle: "მოცულობა და ანალიზის პროგრესი",
        recordFlowLegend: ["ჯამი", "ანალიზი", "დაფარვა"],
        topReasonsLabel: "მთავარი მიზეზები",
        topReasonsTitle: "რას აფიქსირებენ გუნდები",
        topReasons: [
          { name: "ანგარიშსწორების კითხვა", value: 168, color: "var(--accent)" },
          { name: "ანგარიშზე წვდომა", value: 124, color: "var(--accent-3)" },
          { name: "მიწოდების განახლება", value: 96, color: "var(--accent-2)" },
          { name: "ესკალაციის რისკი", value: 71, color: "var(--danger)" },
          { name: "ზოგადი მიმართვა", value: 44, color: "var(--ink-3)" }
        ],
        departmentHealthLabel: "დეპარტამენტების მდგომარეობა",
        departmentHealthTitle: "გუნდების ჭრილში ამ კვირაში",
        departmentHeaders: ["დეპარტამენტი", "ჩანაწერები", "კმაყოფილება", "პრიორიტეტი", "სტატუსი"],
        departmentRows: [
          { department: "მხარდაჭერა", records: "4,832", retention: 0.74, status: "სტაბილური", color: "var(--accent)" },
          { department: "გაყიდვები", records: "3,218", retention: 0.45, status: "საყურადღებო", color: "var(--accent-2)" },
          { department: "შენარჩუნება", records: "2,406", retention: 0.18, status: "ესკალირებულია", color: "var(--danger)" },
          { department: "ოპერაციები", records: "1,952", retention: 0.62, status: "სტაბილური", color: "var(--accent-3)" }
        ]
      }
    },
    how: {
      eyebrow: "04 - როგორ მუშაობს",
      titleTop: "4 მარტივი ნაბიჯი,",
      titleBottom: "მონაცემების მიღებიდან ანალიტიკამდე.",
      description: "Statica ეხმარება გუნდებს, შემოსული ოპერაციული მონაცემები სტრუქტურირებულ ანგარიშებად აქციონ დამატებითი ძალისხმევის გარეშე.",
      workflowLabel: "პროცესი",
      workflowValue: "შეგროვება - სტრუქტურირება - ანალიზი",
      steps: [
        {
          number: "I.",
          title: "მონაცემების შეგროვება",
          description: "დააკავშირეთ ის ინსტრუმენტები და სისტემები, რომლებსაც თქვენი გუნდი უკვე იყენებს ყოველდღიურ მუშაობაში."
        },
        {
          number: "II.",
          title: "მონაცემების სინქრონიზაცია",
          description: "შეინახეთ ჩანაწერების კონტექსტი, აუდიოფაილები და დამუშავების სტატუსები ისე, რომ ყველაფერი ერთმანეთთან იყოს დაკავშირებული."
        },
        {
          number: "III.",
          title: "ანალიზი და სტრუქტურირება",
          description: "გამოიყენეთ ავტომატური ტრანსკრიფცია და ანალიტიკა დაუმუშავებელი მონაცემების მზა სიგნალებად და კატეგორიებად გარდასაქმნელად."
        },
        {
          number: "IV.",
          title: "განხილვა, შედარება და ანგარიშგება",
          description: "გამოიყენეთ დეშბორდები და დეტალური ფილტრები ტრენდების გასაკონტროლებლად, დეპარტამენტების შესადარებლად და ცვლილებების აღმოსაჩენად."
        }
      ]
    },
    faq: {
      eyebrow: "08 - ხშირად დასმული კითხვები",
      titleTop: "მოკლე და კონკრეტული",
      titleBottom: "პასუხები მთავარ კითხვებზე.",
      intro: "თუ პლატფორმის შესახებ სწრაფი მიმოხილვა გჭირდებათ, გაეცანით ხშირად დასმულ კითხვებს ან პირდაპირ გადადით",
      linkLabel: "პროექტის ფორმაზე",
      items: [
        {
          question: "როგორ იღებს გუნდი Statica-ზე წვდომას?",
          answer: "წვდომა ხორციელდება ელფოსტაზე გამოგზავნილი ერთჯერადი პაროლით (OTP). ეს უზრუნველყოფს გუნდის უსაფრთხო წვდომას დეშბორდზე და იცავს თქვენს მონაცემებს საჯარო წვდომისგან."
        },
        {
          question: "რა ტიპის მონაცემებს ამუშავებს Statica?",
          answer: "Statica შექმნილია ოპერაციული ჩანაწერების, აუდიოფაილების და სამუშაო პროცესების გასაანალიზებლად. ის ბევრად უფრო ფართო შესაძლებლობებს გვთავაზობს, ვიდრე უბრალოდ სატელეფონო ზარების მონიტორინგი."
        },
        {
          question: "შესაძლებელია თუ არა ცალკეული ჩანაწერების დეტალურად ნახვა?",
          answer: "დიახ. პლატფორმაში მარტივად შეგიძლიათ იპოვოთ და გაფილტროთ კონკრეტული ჩანაწერები, მოუსმინოთ აუდიოს, გაეცნოთ ტრანსკრიპტს და ნახოთ დეტალური ანალიტიკა."
        },
        {
          question: "რაზეა ფოკუსირებული მთავარი დეშბორდი?",
          answer: "მთავარი აქცენტი კეთდება კომპანიის საერთო შედეგებზე, დამუშავების პროგრესზე, დეპარტამენტების შედარებაზე, ხარისხის კონტროლსა და შემოსული ჩანაწერების ეფექტურ ანგარიშგებაზე."
        },
        {
          question: "იღებს თუ არა სისტემა გადაწყვეტილებებს ავტომატურად?",
          answer: "არა. Statica-ს მთავარი მიზანია მოგაწოდოთ სტრუქტურირებული მონაცემები და ოპერაციული ხილვადობა, რათა თქვენმა გუნდმა შეძლოს სწორი გადაწყვეტილებების დროულად მიღება."
        }
      ]
    },
    footer: {
      eyebrow: "10 - პროექტის დაწყება",
      titleLines: ["თქვენ გაქვთ პროექტი.", "ჩვენ გვაქვს ცოდნა", "და გამოცდილება."],
      description: "Statica შექმნილია გუნდებისთვის, რომლებსაც სჭირდებათ სტრუქტურირებული ანგარიშგება, საძიებო ჩანაწერები და ყოველდღიური ოპერაციების ნათელი სურათი.",
      signals:[],
      intakeLabel: "პროექტის ბრიფი",
      intakeCopy: "გაგვიზიარეთ ძირითადი დეტალები, რათა შემდგომი კომუნიკაცია უფრო ეფექტური იყოს.",
      fields: {
        name: "[ თქვენი სახელი: ]",
        company: "[ კომპანია: ]",
        contact: "[ ტელეფონი ან ელფოსტა: ]",
        project: ""
      },
      submitLabel: "გაგზავნა",
      legalPrefix: "„გაგზავნაზე“ დაჭერით ეთანხმებით",
      legalTerms: "წესებსა და პირობებს",
      legalConnector: "და",
      legalPrivacy: "კონფიდენციალურობის პოლიტიკას."
    }
  }
};
