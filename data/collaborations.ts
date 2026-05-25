type Collaboration = {
  brand: string;
  campaign: string;
  status: "Active" | "Pending" | "Completed";
  budget: string;
  dueDate: string;
};

const collaborations: Collaboration[] = [
  {
    brand: "Nike",
    campaign: "Summer Collection Launch",
    status: "Active",
    budget: "₹1,20,000",
    dueDate: "28 May 2026",
  },
  {
    brand: "Samsung",
    campaign: "Galaxy Creator Campaign",
    status: "Pending",
    budget: "₹85,000",
    dueDate: "04 Jun 2026",
  },
  {
    brand: "Spotify",
    campaign: "Music Lifestyle Promotion",
    status: "Completed",
    budget: "₹65,000",
    dueDate: "12 Apr 2026",
  },
  {
    brand: "Adobe",
    campaign: "Creative Workflow Reel",
    status: "Active",
    budget: "₹95,000",
    dueDate: "10 Jun 2026",
  },
];
export default collaborations;