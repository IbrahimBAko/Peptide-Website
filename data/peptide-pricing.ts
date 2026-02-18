export const peptidePricingList = [
  // GLP-1 Receptor Agonists
  { category: "GLP-1 Receptor Agonists", name: "Semaglutide", specs: ["2mg", "5mg", "10mg", "15mg", "20mg", "30mg"], prices: [36, 43, 65, 78, 100, 128] },
  { category: "GLP-1 Receptor Agonists", name: "Tirzepatide", specs: ["2mg", "5mg", "10mg", "15mg", "20mg", "30mg", "40mg", "50mg", "60mg"], prices: [50, 50, 69, 86, 105, 141, 170, 190, 230] },
  
  // GLP-1/GCG Agonists
  { category: "GLP-1/GCG Agonists", name: "Retarutide", specs: ["5mg", "10mg", "15mg", "20mg", "30mg", "40mg", "50mg", "60mg"], prices: [69, 110, 152, 190, 260, 265, 315, 360] },
  { category: "GLP-1/GCG Agonists", name: "Cagrilintide", specs: ["5mg", "10mg"], prices: [116, 186] },
  { category: "GLP-1/GCG Agonists", name: "Mazdutide", specs: ["5mg", "10mg"], prices: [130, 220] },
  
  // Growth Factors & Tissue Repair
  { category: "Growth Factors & Tissue Repair", name: "BPC-157", specs: ["5mg", "10mg"], prices: [42, 61] },
  { category: "Growth Factors & Tissue Repair", name: "TB-500", specs: ["5mg", "10mg"], prices: [85, 148] },
  { category: "Growth Factors & Tissue Repair", name: "MGF", specs: ["2mg"], prices: [45] },
  { category: "Growth Factors & Tissue Repair", name: "PEG-MGF", specs: ["2mg"], prices: [98] },
  { category: "Growth Factors & Tissue Repair", name: "Follistatin", specs: ["1mg"], prices: [310] },
  { category: "Growth Factors & Tissue Repair", name: "IGF-1 LR3", specs: ["1mg"], prices: [210] },
  { category: "Growth Factors & Tissue Repair", name: "IGF-1 DES", specs: ["2mg"], prices: [60] },
  
  // Growth Hormone Secretagogues
  { category: "Growth Hormone Secretagogues", name: "Ipamorelin", specs: ["2mg", "5mg", "10mg"], prices: [27, 45, 80] },
  { category: "Growth Hormone Secretagogues", name: "GHRP-2", specs: ["5mg", "10mg"], prices: [30, 50] },
  { category: "Growth Hormone Secretagogues", name: "GHRP-6", specs: ["5mg", "10mg"], prices: [30, 33] },
  { category: "Growth Hormone Secretagogues", name: "Hexarelin", specs: ["2mg", "5mg"], prices: [45, 95] },
  
  // GHRH Agonists
  { category: "GHRH Agonists", name: "CJC-1295 Without DAC", specs: ["5mg"], prices: [83] },
  { category: "GHRH Agonists", name: "CJC-1295 With DAC", specs: ["5mg"], prices: [160] },
  { category: "GHRH Agonists", name: "Sermorelin", specs: ["5mg", "10mg"], prices: [75, 116] },
  { category: "GHRH Agonists", name: "Tesamorelin", specs: ["2mg", "5mg", "10mg"], prices: [60, 116, 200] },
  
  // Peptide Combinations
  { category: "Peptide Combinations", name: "CJC-1295 + Ipamorelin", specs: ["5mg + 10mg"], prices: [115] },
  { category: "Peptide Combinations", name: "BPC-157 + TB-500", specs: ["10mg + 10mg"], prices: [110] },
  { category: "Peptide Combinations", name: "BPC-157 + TB-500 + GHK-CU + KPV", specs: ["80mg"], prices: [260] },
  { category: "Peptide Combinations", name: "Cagrilintide + Semaglutide", specs: ["5mg + 5mg"], prices: [270] },
  { category: "Peptide Combinations", name: "BPC-157 + GHK-CU + TB-500", specs: ["70mg"], prices: [220] },
  
  // Metabolic & Fat Loss
  { category: "Metabolic & Fat Loss", name: "AOD-9604", specs: ["2mg", "5mg"], prices: [58, 115] },
  { category: "Metabolic & Fat Loss", name: "Adipotide", specs: ["2mg", "5mg"], prices: [85, 186] },
  { category: "Metabolic & Fat Loss", name: "AICAR", specs: ["50mg"], prices: [70] },
  
  // Skin & Pigmentation
  { category: "Skin & Pigmentation", name: "MT-2 (Melanotan 2)", specs: ["10mg"], prices: [50] },
  { category: "Skin & Pigmentation", name: "Copper Peptide (GHK-CU)", specs: ["50mg", "100mg"], prices: [35, 42] },
  
  // Cognitive & Neurological
  { category: "Cognitive & Neurological", name: "Selank", specs: ["5mg"], prices: [45] },
  { category: "Cognitive & Neurological", name: "Semax", specs: ["5mg"], prices: [48] },
  { category: "Cognitive & Neurological", name: "Pinealon", specs: ["5mg", "10mg", "20mg"], prices: [55, 76, 105] },
  { category: "Cognitive & Neurological", name: "DSIP", specs: ["2mg", "5mg"], prices: [28, 47] },
  
  // Immune & Thymic
  { category: "Immune & Thymic", name: "Thymosin Alpha-1", specs: ["2mg", "5mg", "10mg"], prices: [55, 95, 170] },
  { category: "Immune & Thymic", name: "Epithalon", specs: ["10mg"], prices: [52] },
  { category: "Immune & Thymic", name: "Thymalin", specs: ["10mg"], prices: [66] },
  
  // Other Peptides
  { category: "Other Peptides", name: "Oxytocin", specs: ["2mg"], prices: [63] },
  { category: "Other Peptides", name: "ACE-031", specs: ["1mg"], prices: [270] },
  { category: "Other Peptides", name: "SS-31", specs: ["10mg", "50mg"], prices: [100, 440] },
  { category: "Other Peptides", name: "KissPeptin-10", specs: ["5mg", "10mg"], prices: [69, 116] },
  { category: "Other Peptides", name: "MOTS-c", specs: ["10mg", "40mg"], prices: [70, 210] },
  { category: "Other Peptides", name: "Gonadorelin", specs: ["2mg"], prices: [35] },
  { category: "Other Peptides", name: "PNC-27", specs: ["5mg", "10mg"], prices: [110, 180] },
  { category: "Other Peptides", name: "Ara-290", specs: ["10mg"], prices: [68] },
  { category: "Other Peptides", name: "SNAP-8", specs: ["10mg"], prices: [49] },
  { category: "Other Peptides", name: "Survodutide", specs: ["10mg"], prices: [340] },
  { category: "Other Peptides", name: "5-Amino-1MQ", specs: ["5mg"], prices: [80] },
  { category: "Other Peptides", name: "NAD (100mg)", specs: ["100mg", "500mg"], prices: [45, 90] },
  { category: "Other Peptides", name: "Dermorph", specs: ["5mg"], prices: [60] },
  
  // Hormones & Support
  { category: "Hormones & Support", name: "HCG", specs: ["5000 IU", "10000 IU"], prices: [90, 160] },
  { category: "Hormones & Support", name: "HMG", specs: ["75 IU"], prices: [69, 76] },
  { category: "Hormones & Support", name: "EPO", specs: ["3000 IU", "5000 IU"], prices: [130, 146] },
  
  // Support Products
  { category: "Support Products", name: "Lipo-C", specs: ["10ml"], prices: [85] },
  { category: "Support Products", name: "Hyaluronic Acid", specs: ["5mg"], prices: [30] },
  { category: "Support Products", name: "Glutathione", specs: ["1500mg"], prices: [85] },
  { category: "Support Products", name: "Cerebrolysin", specs: ["60mg"], prices: [58] },
  { category: "Support Products", name: "Alprostadil", specs: ["20mcg"], prices: [140] },
  { category: "Support Products", name: "Botox", specs: ["100 IU"], prices: [166] },
  { category: "Support Products", name: "Insulin", specs: ["1 vial"], prices: [333] },
  { category: "Support Products", name: "Bacteriostatic Water", specs: ["3ml", "10ml"], prices: [8, 10] },
];
