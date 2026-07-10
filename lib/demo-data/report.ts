export const conditionSurveyReport = {
  title: "Demo Electrical Condition Survey",
  site: "Demo Community Healthcare Building",
  date: "July 2026",
  summary:
    "Demonstration report showing how NEXA can present electrical survey findings as structured, browser-based project intelligence.",
  limitations: [
    "Visual survey only unless noted otherwise.",
    "No intrusive inspection of concealed routes included in demonstration scope.",
    "Findings are demonstration data and not a substitute for project-specific verification.",
  ],
  findings: [
    { item: "Main LV switchboard approaching end of serviceable life", priority: "High", budget: "GBP 75k-150k" },
    { item: "Limited spare capacity on selected distribution boards", priority: "Medium", budget: "GBP 15k-40k" },
    { item: "Distribution-board labelling incomplete", priority: "Medium", budget: "GBP 5k-15k" },
    { item: "Emergency-lighting records unavailable", priority: "Medium", budget: "GBP 10k-25k" },
    { item: "Potential fire-separation concerns at cable penetrations", priority: "High", budget: "Further survey" },
  ],
};
