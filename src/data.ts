export const menu = [
    {
      id: 1,
      title: "Dashboard",
      listItems: [
        {
          id: 1,
          title: "Overview",
          url: "/dashboard",
          icon: "overview.svg",
        },
        {
          id: 2,
          title: "Statistics",
          url: "/dashboard/statistics",
          icon: "statistics.svg",
        },
      ],
    },
    {
      id: 2,
      title: "Data Management",
      listItems: [
        {
          id: 1,
          title: "Addiction Cases",
          url: "/data/addiction-cases",
          icon: "addiction-cases.svg",
        },
        {
          id: 2,
          title: "Patient Details",
          url: "/users",
          icon: "user-management.svg",
        },
      ],
    },
    {
      id: 3,
      title: "Reports and Analytics",
      listItems: [
        {
          id: 1,
          title: "Generate Reports",
          url: "/analytics/generate-reports",
          icon: "generate-reports.svg",
        },
      ],
    },
    {
      id: 4,
      title: "Resource Management",
      listItems: [
        {
          id: 1,
          title: "Treatment Centers",
          url: "/resources/treatment-centers",
          icon: "treatment-centers.svg",
        },
        
      ],
    },
    {
      id: 5,
      title: "Settings",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "/settings/general",
          icon: "general-settings.svg",
        },
      ],
    },
    {
      id: 6,
      title: "Financial Overview",
      listItems: [
        {
          id: 1,
          title: "Budget Allocation",
          url: "/financial/budget-allocation",
          icon: "budget-allocation.svg",
        },
      ],
    },
    {
      id: 7,
      title: "Help and Support",
      listItems: [
        {
          id: 1,
          title: "Documentation",
          url: "/help/documentation",
          icon: "documentation.svg",
        },
      ],
    },
    {
      id: 8,
      title: "Logout",
      listItems: [
        {
          id: 1,
          title: "Log Out",
          url: "/logout",
          icon: "logout.svg",
        },
      ],
    },
  ];
  export const topDealUsers = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      username: "Center1",
      
      location: "Mumbai",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Center2",
      
      location: "Allahbad",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Center3",
      
      location: "Patna",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Center4",
      
      location: "Bangalore",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Center5",
      
      location: "Delhi",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Center6",
      
      location: "Pune",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Center7",
      
      location: "Hyderabad",
    },
  ];
  export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Patients",
    number: "111238",
    dataKey: "users",
    percentage: "45%",
    chartData: [
      { name: "Sun", users: 400 },
      { name: "Mon", users: 600 },
      { name: "Tue", users: 500 },
      { name: "Wed", users: 700 },
      { name: "Thu", users: 400 },
      { name: "Fri", users: 500 },
      { name: "Sat", users: 450 },
    ],
  };
  
  export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Centers",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
      { name: "Sun", products: 400 },
      { name: "Mon", products: 600 },
      { name: "Tue", products: 500 },
      { name: "Wed", products: 700 },
      { name: "Thu", products: 400 },
      { name: "Fri", products: 500 },
      { name: "Sat", products: 450 },
    ],
  };
  export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "States Covered",
    number: "28",
    dataKey: "revenue",
    
    
  };
  export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Successes",
    number: "5687",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
      { name: "Sun", ratio: 400 },
      { name: "Mon", ratio: 600 },
      { name: "Tue", ratio: 500 },
      { name: "Wed", ratio: 700 },
      { name: "Thu", ratio: 400 },
      { name: "Fri", ratio: 500 },
      { name: "Sat", ratio: 450 },
    ],
  };
  export const barChartBoxRevenue = {
    title: "Relapse Rates",
    color: "#8884d8",
    dataKey: "rate",
    chartData: [
      {
        name: "Sun",
        rate: 4000,
      },
      {
        name: "Mon",
        rate: 3000,
      },
      {
        name: "Tue",
        rate: 2000,
      },
      {
        name: "Wed",
        rate: 2780,
      },
      {
        name: "Thu",
        rate: 1890,
      },
      {
        name: "Fri",
        rate: 2390,
      },
      {
        name: "Sat",
        rate: 3490,
      },
    ],
  };
  
  export const barChartBoxVisit = {
    title: "Sessions Conducted",
    color: "#FF8042",
    dataKey: "sessions",
    chartData: [
      {
        name: "Sun",
        sessions: 4000,
      },
      {
        name: "Mon",
        sessions: 3000,
      },
      {
        name: "Tue",
        sessions: 2000,
      },
      {
        name: "Wed",
        sessions: 2780,
      },
      {
        name: "Thu",
        sessions: 1890,
      },
      {
        name: "Fri",
        sessions: 2390,
      },
      {
        name: "Sat",
        sessions: 3490,
      },
    ],
  };
  export const userRows = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Hubbard",
      firstName: "Eula",
      email: "kewez@@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Manning",
      firstName: "Stella",
      email: "comhuhmit@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Greer",
      firstName: "Mary",
      email: "ujudokon@hottmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williamson",
      firstName: "Mildred",
      email: "tinhavabe@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Gross",
      firstName: "Jose",
      email: "gobtagbes@yahoo.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Sharp",
      firstName: "Jeremy",
      email: "vulca.eder@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Lowe",
      firstName: "Christina",
      email: "reso.bilic@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dean",
      firstName: "Garrett",
      email: "codaic@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Parsons",
      firstName: "Leah",
      email: "uzozor@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Reid",
      firstName: "Elnora",
      email: "tuhkabapu@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dunn",
      firstName: "Gertrude",
      email: "gibo@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williams",
      firstName: "Mark",
      email: "tic.harvey@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Cruz",
      firstName: "Charlotte",
      email: "ceuc@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 14,
      img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Harper",
      firstName: "Sara",
      email: "bafuv@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 15,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Griffin",
      firstName: "Eric",
      email: "ubi@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
  ];