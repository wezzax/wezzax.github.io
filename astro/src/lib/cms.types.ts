export interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  siteName: string;
  header: {
    links: {
      id: string;
      label: string;
      class: string;
    }[];
  };
  footer: {
    copyright: string;
    links: {
      id: string;
      label: string;
    }[];
  }
}

export interface Services {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    features: string[];
  }[];
}

export interface Stats {
  title: string;
  items: {
    number: string;
    label: string;
    color: string;
  }[];
}

export interface CaseStudies {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    color: string;
  }[];
}

export interface Technologies {
  title: string;
  items: {
    label: string;
    color: string;
  }[];
}

export interface Testimonials {
  title: string;
  items: {
    text: string;
    author: string;
    role: string;
    color: string;
  }[];
}

export interface StartProjects {
  title: string;
  description: string;
  actions: {
    id: string;
    class: string;
    label: string;
  }[];
}

export interface ContactUs {
  title: string;
  description: string;
  form: {
    nameLabel: string;
    emailLabel: string;
    companyLabel: string;
    projectLabel: string;
    sendButtonLabel: string;
    confirmationMessage: string;
  }[];
}
