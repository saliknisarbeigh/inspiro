import React, { useEffect } from 'react';

// SEO configuration
const SEO_CONFIG = {
  siteName: 'Inspiro',
  siteUrl: 'https://inspiro.app',
  defaultTitle: 'Inspiro - Stories of Prophets, Sahabas & Islamic Wisdom',
  defaultDescription: 'Discover inspiring stories of Prophets, Sahabas, and Islamic wisdom. Inspiro brings to life the timeless teachings and courage from Islamic history.',
  defaultImage: '/src/assets/logo.png',
  twitterUsername: '@inspiro',
};

// Function to update meta tags dynamically
export const updateMetaTags = ({ 
  title, 
  description, 
  image, 
  url, 
  type = 'website',
  keywords = '',
  noIndex = false 
}) => {
  const fullTitle = title ? `${title} | ${SEO_CONFIG.siteName}` : SEO_CONFIG.defaultTitle;
  const fullDescription = description || SEO_CONFIG.defaultDescription;
  const fullImage = image ? `${SEO_CONFIG.siteUrl}${image}` : `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`;
  const fullUrl = url ? `${SEO_CONFIG.siteUrl}${url}` : SEO_CONFIG.siteUrl;

  // Update title
  document.title = fullTitle;

  // Update or create meta tags
  const updateMetaTag = (name, content, attribute = 'name') => {
    let metaTag = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attribute, name);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  };

  // Update canonical URL
  const updateCanonical = (href) => {
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', href);
  };

  // Basic Meta Tags
  updateMetaTag('description', fullDescription);
  if (keywords) updateMetaTag('keywords', keywords);
  updateMetaTag('author', SEO_CONFIG.siteName);
  updateMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow');
  updateCanonical(fullUrl);

  // Open Graph Meta Tags
  updateMetaTag('og:type', type, 'property');
  updateMetaTag('og:title', fullTitle, 'property');
  updateMetaTag('og:description', fullDescription, 'property');
  updateMetaTag('og:image', fullImage, 'property');
  updateMetaTag('og:url', fullUrl, 'property');
  updateMetaTag('og:site_name', SEO_CONFIG.siteName, 'property');
  updateMetaTag('og:locale', 'en_US', 'property');

  // Twitter Card Meta Tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', fullTitle);
  updateMetaTag('twitter:description', fullDescription);
  updateMetaTag('twitter:image', fullImage);
  updateMetaTag('twitter:site', SEO_CONFIG.twitterUsername);

  // Additional Meta Tags
  updateMetaTag('theme-color', '#F6EFD7');
  updateMetaTag('msapplication-TileColor', '#F6EFD7');

  // Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : 'WebPage',
    "name": title || SEO_CONFIG.siteName,
    "description": fullDescription,
    "url": fullUrl,
    "image": fullImage,
    "publisher": {
      "@type": "Organization",
      "name": SEO_CONFIG.siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`
      }
    },
    "inLanguage": "en",
    "isAccessibleForFree": true
  };

  if (type === 'article') {
    structuredData.articleSection = 'Islamic Stories';
    structuredData.author = {
      "@type": "Organization",
      "name": SEO_CONFIG.siteName
    };
  }

  // Update or create structured data script
  let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
  if (!structuredDataScript) {
    structuredDataScript = document.createElement('script');
    structuredDataScript.setAttribute('type', 'application/ld+json');
    document.head.appendChild(structuredDataScript);
  }
  structuredDataScript.textContent = JSON.stringify(structuredData);
};

// SEO Component for React
export const SEO = ({ 
  title, 
  description, 
  image, 
  url, 
  type = 'website',
  keywords = '',
  noIndex = false 
}) => {
  useEffect(() => {
    updateMetaTags({ title, description, image, url, type, keywords, noIndex });
    
    // Cleanup function to reset to default when component unmounts
    return () => {
      updateMetaTags({});
    };
  }, [title, description, image, url, type, keywords, noIndex]);

  return null; // This component doesn't render anything
};

// Hook for updating page title dynamically
export const usePageTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} | ${SEO_CONFIG.siteName}`;
    } else {
      document.title = SEO_CONFIG.defaultTitle;
    }
    
    return () => {
      document.title = SEO_CONFIG.defaultTitle;
    };
  }, [title]);
};

// SEO data for different pages
export const PAGE_SEO = {
  home: {
    title: 'Inspiro - Stories of Prophets, Sahabas & Islamic Wisdom',
    description: 'Discover inspiring stories of Prophets, Sahabas, and Islamic wisdom. Inspiro brings to life the timeless teachings and courage from Islamic history.',
    keywords: 'Islamic stories, Prophets stories, Sahabas stories, Islamic wisdom, Quranic stories, Muhammad, Musa, Isa, Abu Bakr, Umar, Ali, Khadija, Islamic inspiration, Muslim stories',
  },
  about: {
    title: 'About Inspiro',
    description: 'Learn about Inspiro, your source for inspiring stories that bring to life the wisdom, courage, and faith of the Prophets, Sahabas, and important figures in Islam.',
    keywords: 'about Inspiro, Islamic stories app, Prophets stories, Sahabas stories, Islamic wisdom, Muslim education',
  },
  stories: {
    title: 'Islamic Stories - Prophets & Sahabas',
    description: 'Explore our comprehensive collection of inspiring stories about Prophets, Sahabas, and important figures in Islamic history.',
    keywords: 'Islamic stories, Prophets stories, Sahabas stories, Muhammad stories, Musa stories, Isa stories, Abu Bakr stories, Umar stories, Ali stories, Khadija stories',
  },
  inspire: {
    title: 'Wisdom & Inspiration - Islamic Quotes',
    description: 'Discover timeless wisdom and inspiration from Inspiro\'s collection of Islamic teachings and quotes from Prophets, Sahabas, and scholars.',
    keywords: 'Islamic quotes, wisdom, inspiration, Quranic verses, Hadith, Prophetic sayings, Islamic teachings, Muslim motivation',
  },
};

// Function to generate SEO for person pages
export const getPersonSEO = (person, category) => {
  const categoryTitle = category === 'Prophet' ? 'Prophet' : 'Sahaba';
  return {
    title: `Stories of ${person} - ${categoryTitle}`,
    description: `Discover inspiring stories and teachings of ${person} ${category === 'Prophet' ? '(peace be upon him)' : ''}. Learn about their life, wisdom, and contributions to Islamic history.`,
    keywords: `${person} stories, ${person.toLowerCase()} ${category.toLowerCase()}, Islamic ${category.toLowerCase()} stories, ${person} teachings, ${person} life, Islamic history`,
  };
};
