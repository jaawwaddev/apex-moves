import { EstimateResult } from "../types";

/**
 * Calculates moving estimate using frontend algorithm
 * 
 * This function analyzes inventory descriptions and calculates comprehensive moving estimates
 * using industry-standard formulas and heuristics.
 * 
 * @param inventoryDescription - Detailed text description of items to be moved
 * @param distance - Moving distance in miles
 * @returns Promise resolving to a structured estimate with pricing and logistics details
 * 
 * @example
 * ```typescript
 * const estimate = await generateMovingEstimate(
 *   "2 bedroom apartment with king bed, sofa, dining table...",
 *   50
 * );
 * console.log(estimate.priceRange); // { min: 1200, max: 1500 }
 * ```
 */
export const generateMovingEstimate = async (
  inventoryDescription: string,
  distance: number
): Promise<EstimateResult> => {
  // Simulate API delay for better UX
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Parse inventory description to estimate volume
  const description = inventoryDescription.toLowerCase();
  
  // Base cubic feet estimation
  let cubicFeet = 200; // Base amount
  
  // Room-based estimation
  if (description.includes('studio')) cubicFeet += 300;
  if (description.includes('1 bed') || description.includes('one bed')) cubicFeet += 500;
  if (description.includes('2 bed') || description.includes('two bed')) cubicFeet += 800;
  if (description.includes('3 bed') || description.includes('three bed')) cubicFeet += 1200;
  if (description.includes('4 bed') || description.includes('four bed')) cubicFeet += 1600;
  
  // Furniture items (add cubic feet per item)
  const furnitureItems = {
    'sofa': 80,
    'couch': 80,
    'bed': 100,
    'king bed': 120,
    'queen bed': 100,
    'mattress': 70,
    'dresser': 50,
    'desk': 40,
    'dining table': 60,
    'table': 40,
    'chair': 10,
    'bookshelf': 35,
    'tv': 20,
    'piano': 150,
    'washer': 30,
    'dryer': 30,
    'refrigerator': 60,
    'fridge': 60,
  };
  
  Object.entries(furnitureItems).forEach(([item, volume]) => {
    const regex = new RegExp(item, 'g');
    const matches = description.match(regex);
    if (matches) {
      cubicFeet += volume * matches.length;
    }
  });
  
  // Box estimation
  if (description.includes('boxes')) {
    const boxMatch = description.match(/(\d+)\s*box/);
    if (boxMatch) {
      cubicFeet += parseInt(boxMatch[1]) * 3;
    }
  }
  
  // Calculate movers needed (1 mover per 400 cubic feet, minimum 2)
  const recommendedMovers = Math.max(2, Math.ceil(cubicFeet / 400));
  
  // Calculate hours (1 hour per 150 cubic feet for loading/unloading)
  const estimatedHours = Math.max(2, Math.ceil(cubicFeet / 150));
  
  // Calculate price
  // Base rate: $150/hour for crew
  const laborCost = estimatedHours * 150 * recommendedMovers;
  
  // Distance cost: $2/mile
  const distanceCost = distance * 2;
  
  // Materials and overhead: 15-25% of labor
  const materialsMin = laborCost * 0.15;
  const materialsMax = laborCost * 0.25;
  
  const minPrice = Math.round(laborCost + distanceCost + materialsMin);
  const maxPrice = Math.round(laborCost + distanceCost + materialsMax);
  
  // Generate summary based on complexity
  let summary = `Based on your inventory description, we estimate approximately ${cubicFeet} cubic feet of belongings. `;
  
  if (recommendedMovers === 2) {
    summary += `A crew of 2 movers should be sufficient for this move. `;
  } else {
    summary += `We recommend a crew of ${recommendedMovers} movers for efficient handling. `;
  }
  
  summary += `The estimated time for loading and unloading is ${estimatedHours} hours. `;
  
  if (distance < 50) {
    summary += `This is considered a local move (${distance} miles). `;
  } else if (distance < 300) {
    summary += `This is a medium-distance move (${distance} miles). `;
  } else {
    summary += `This is a long-distance move (${distance} miles). `;
  }
  
  summary += `The total cost includes labor, transportation, materials, and insurance.`;

  return {
    estimatedCubicFeet: cubicFeet,
    recommendedMovers,
    estimatedHours,
    priceRange: {
      min: minPrice,
      max: maxPrice,
    },
    summary,
  };
};