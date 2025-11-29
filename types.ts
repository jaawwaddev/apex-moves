/**
 * Navigation item structure for the site's navigation menu
 */
export interface NavItem {
  label: string;
  href: string;
}

/**
 * Service offering representation
 */
export interface Service {
  id: string;
  title: string;
  description: string;
  /** Icon name from lucide-react library */
  iconName: string;
}

/**
 * Customer testimonial data structure
 */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  /** URL to avatar/profile image */
  avatar: string;
}

/**
 * AI-generated moving estimate result
 * Contains comprehensive moving logistics and pricing information
 */
export interface EstimateResult {
  /** Total volume of items in cubic feet */
  estimatedCubicFeet: number;
  /** Recommended crew size for the move */
  recommendedMovers: number;
  /** Estimated time to load and unload (hours) */
  estimatedHours: number;
  /** Price range in USD */
  priceRange: {
    min: number;
    max: number;
  };
  /** AI-generated explanation and recommendations */
  summary: string;
}

/**
 * Quote form input values
 * User-provided information for generating a moving estimate
 */
export interface QuoteFormValues {
  /** Detailed description of inventory to be moved */
  inventoryDescription: string;
  /** Moving distance in miles */
  distance: number;
  /** Type of origin location */
  fromType: 'apartment' | 'house' | 'storage';
  /** Type of destination location */
  toType: 'apartment' | 'house' | 'storage';
}