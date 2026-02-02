export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar: string;
  };
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export const config: SiteConfig = {
  title: "Łukasz Rej",
  description: "Written by a human",
  author: {
    name: "Łukasz Rej",
    bio: "Frontend developer",
    avatar: "/blog/lukasz-avatar.png",
  },
  social: {
    github: "https://github.com/lukaszrej",
    linkedin: "https://www.linkedin.com/in/lukasz-rej/",
    email: "rejlukasz@gmail.com",
  },
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;
