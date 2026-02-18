'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Search, ChevronRight, ChevronLeft, ShoppingCart, Shield, Zap, Award, Truck, X } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { PriceList } from '@/components/price-list'
import { useCart } from '@/context/cart-context'

const peptideProducts = [
  {
    id: 1,
    name: 'SERMORELIN',
    dosage: '10 Vials / 2mg',
    price: '$18.99',
    casePrice: 'Case of 10 - $189.99',
    image: '/products/sermorelin.jpg',
    description: 'Growth hormone-releasing hormone that stimulates the pituitary gland to increase HGH levels naturally. Ideal for research on anti-aging and muscle growth.',
    benefits: ['HGH stimulation', 'Anti-aging research', 'Muscle development', 'Recovery enhancement'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ]
  },
  {
    id: 2,
    name: 'SEMAX',
    dosage: '10 Vials / 10mg',
    price: '$22.50',
    casePrice: 'Case of 10 - $225.00',
    image: '/products/semax.jpg',
    description: 'Synthetic peptide with neuroprotective and cognitive-enhancing properties. Used in research for brain health and neural protection.',
    benefits: ['Neuroprotection', 'Cognitive enhancement', 'Mental clarity', 'Brain health'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ]
  },
  {
    id: 3,
    name: 'BPC-157',
    dosage: '10 Vials / 10mg',
    price: '$25.99',
    casePrice: 'Case of 10 - $259.90',
    image: '/products/bpc157.jpg',
    description: 'Body Protection Compound known for tissue repair and healing properties. Excellent for research on muscle and joint recovery.',
    benefits: ['Tissue repair', 'Injury healing', 'Joint support', 'Recovery acceleration'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ]
  },
  {
    id: 4,
    name: 'THYMOSIN BETA 4',
    dosage: '10 Vials / 5mg',
    price: '$28.50',
    casePrice: 'Case of 10 - $285.00',
    image: '/products/thymosin-beta4.jpg',
    description: 'Immune-modulating peptide that supports cellular repair and recovery. Research shows promise in various therapeutic applications.',
    benefits: ['Cellular repair', 'Immune support', 'Wound healing', 'Recovery'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ]
  },
  {
    id: 5,
    name: 'IPAMORELIN',
    dosage: '10 Vials / 5mg',
    price: '$21.99',
    casePrice: 'Case of 10 - $219.90',
    image: '/products/ipamorelin.jpg',
    description: 'Selective growth hormone secretagogue used in research for muscle development and fat loss without affecting cortisol levels.',
    benefits: ['Muscle growth', 'Fat loss', 'HGH stimulation', 'Appetite regulation'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ]
  },
  {
    id: 6,
    name: 'CJC 1295 + DAC',
    dosage: '10 Vials / 2mg',
    price: '$26.99',
    casePrice: 'Case of 10 - $269.90',
    image: '/products/cjc1295.jpg',
    description: 'Long-acting growth hormone-releasing hormone with drug affinity complex. Extended release formulation for research purposes.',
    benefits: ['Extended HGH release', 'Muscle growth', 'Anti-aging', 'Recovery'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ]
  },
  {
    id: 7,
    name: 'GHRP-6',
    dosage: '10 Vials / 5mg',
    price: '$19.99',
    casePrice: 'Case of 10 - $199.90',
    image: '/products/ghrp6.jpg',
    description: 'Growth hormone-releasing peptide that stimulates appetite and promotes HGH release. Popular in research for body composition.',
    benefits: ['HGH stimulation', 'Appetite support', 'Muscle growth', 'Recovery'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Ghrp6',
      taskNumber: '#87511',
      purity: '99.476%',
      content: '4.63 mg',
      verified: 'GMGY7HF4SU5L',
      document: '/coa/test-report-87511.jpg'
    }
  },
  {
    id: 8,
    name: 'GHRP-2',
    dosage: '10 Vials / 5mg',
    price: '$20.50',
    casePrice: 'Case of 10 - $205.00',
    image: '/products/ghrp2.jpg',
    description: 'Potent growth hormone secretagogue with enhanced bioactivity. Used in research for metabolic and body composition studies.',
    benefits: ['Strong HGH response', 'Metabolic support', 'Muscle development', 'Recovery'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Ghrp2',
      taskNumber: '#87509',
      purity: '99.283%',
      content: '4.79 mg',
      verified: '52E6RTSBMHZ1',
      document: '/coa/test-report-87509.jpg'
    }
  },
  {
    id: 9,
    name: 'TB-500',
    dosage: '10 Vials / 5mg',
    price: '$29.99',
    casePrice: 'Case of 10 - $299.90',
    image: '/products/tb500.jpg',
    description: 'Thymosin Beta-500 analog for tissue repair and recovery research. Supports inflammation management and healing.',
    benefits: ['Tissue repair', 'Inflammation support', 'Healing', 'Recovery'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'NAD001',
      taskNumber: '#83249',
      purity: '99.036%',
      content: 'N/A',
      verified: '4U6R5CZMN2TN',
      document: '/coa/nad-83249.jpg'
    }
  },
  {
    id: 10,
    name: 'MELANOTAN II',
    dosage: '10 Vials / 10mg',
    price: '$27.99',
    casePrice: 'Case of 10 - $279.90',
    image: '/products/melanotan2.jpg',
    description: 'Melanocyte-stimulating hormone for skin pigmentation and tanning research. High purity research-grade formulation.',
    benefits: ['Skin pigmentation', 'Tanning effects', 'Libido enhancement', 'Research grade'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'MT2001',
      taskNumber: '#83245',
      purity: '99.431%',
      content: '10.90 mg',
      verified: 'J4KEL7H6EP28',
      document: '/coa/melanotan2-83245.jpg'
    }
  },
  {
    id: 11,
    name: 'AOD-9604',
    dosage: '10 Vials / 5mg',
    price: '$46.99',
    casePrice: 'Case of 10 - $469.90',
    image: '/products/aod9604.jpg',
    description: 'Fragment of human growth hormone for fat loss and weight management research. HPLC verified purity.',
    benefits: ['Fat loss', 'Weight management', 'Metabolic support', 'HGH fragment'],
    testResults: [
      { test: 'LCMS + CHNS', passed: true },
      { test: 'HPLC Verified Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Aod-9604 5mg',
      taskNumber: '#100915',
      purity: '99.770%',
      content: '4.20 mg',
      verified: 'BJX32LQSPTCH',
      document: '/coa/test-report-100915.jpg'
    }
  },
  {
    id: 12,
    name: 'ARA-290',
    dosage: '10 Vials / 5mg',
    price: '$37.99',
    casePrice: 'Case of 10 - $379.90',
    image: '/products/ara290.jpg',
    description: 'Erythropoietin receptor agonist for neuroprotection and tissue repair research. Premium research-grade quality.',
    benefits: ['Neuroprotection', 'Tissue repair', 'Anti-inflammatory', 'Research grade'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'ARA-290',
      taskNumber: '#64291',
      purity: '99.716%',
      content: '9.32 mg',
      verified: 'YPZ9FZX9KM3Z',
      document: '/coa/test-report-64291.jpg'
    }
  },
  {
    id: 13,
    name: 'IGF-1 LR3',
    dosage: '10 Vials / 5mg',
    price: '$36.50',
    casePrice: 'Case of 10 - $365.00',
    image: '/products/igf1-lr3.jpg',
    description: 'Long-acting insulin-like growth factor-1. Premier research peptide for muscle growth, recovery, and anti-aging.',
    benefits: ['Muscle growth', 'Recovery', 'Anti-aging', 'Cellular health'],
    testResults: [
      { test: 'TAMC Test', passed: true },
      { test: 'TYMC Test', passed: true }
    ],
    coaData: {
      sampleName: 'IGF001',
      taskNumber: '#83240',
      testsRequested: 'TAMC+TYMC',
      verified: '7B93SYRAS6G11',
      document: '/coa/test-report-83240.jpg'
    }
  },
  {
    id: 14,
    name: 'OXYTOCIN',
    dosage: '10 Vials / 5mg',
    price: '$47.99',
    casePrice: 'Case of 10 - $479.90',
    image: '/products/oxytocin.jpg',
    description: 'Love and bonding hormone peptide for social behavior and emotional well-being research. Research grade.',
    benefits: ['Social behavior', 'Bonding support', 'Emotional well-being', 'Trust research'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Oxytocin 5mg',
      taskNumber: '#100911',
      purity: '99.010%',
      content: '4.38 mg',
      verified: 'RTKL2J3IZV5W',
      document: '/coa/oxytocin-100911.jpg'
    }
  },
  {
    id: 15,
    name: 'SELANK',
    dosage: '10 Vials / 5mg',
    price: '$36.99',
    casePrice: 'Case of 10 - $369.90',
    image: '/products/selank.jpg',
    description: 'Anxiolytic peptide derived from tuftsin for mood support and stress management research. High purity.',
    benefits: ['Mood support', 'Stress management', 'Cognitive function', 'Neuroprotection'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Selank 5mg',
      taskNumber: '#100900',
      purity: '99.720%',
      content: '5.36 mg',
      verified: 'QZDUCE88T5IG',
      document: '/coa/test-report-100900.jpg'
    }
  },
  {
    id: 16,
    name: 'VIP (Vasoactive Intestinal Peptide)',
    dosage: '10 Vials / 5mg',
    price: '$38.99',
    casePrice: 'Case of 10 - $389.90',
    image: '/products/vip.jpg',
    description: 'Neurotransmitter peptide for circulation and inflammation research. Premium research grade formulation.',
    benefits: ['Circulation support', 'Inflammation management', 'Neuroprotection', 'Immune support'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'VIP',
      taskNumber: '#87529',
      purity: '99.022%',
      content: '4.85 mg',
      verified: '6F6EQ55X99YB',
      document: '/coa/test-report-87529.jpg'
    }
  },
  {
    id: 17,
    name: 'ACE-031',
    dosage: '10 Vials / 1mg',
    price: '$41.99',
    casePrice: 'Case of 10 - $419.90',
    image: '/products/ace031.jpg',
    description: 'Myostatin inhibitor peptide for muscle growth and development research. Premium purity formulation.',
    benefits: ['Muscle growth', 'Myostatin inhibition', 'Strength support', 'Development research'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Ace-031 1mg',
      taskNumber: '#100903',
      purity: '99.505%',
      content: '1.28 mg',
      verified: '8QRY9A9IPQMD',
      document: '/coa/test-report-100903.jpg'
    }
  },
  {
    id: 18,
    name: 'PT-141 (Bremelanotide)',
    dosage: '10 Vials / 10mg',
    price: '$39.99',
    casePrice: 'Case of 10 - $399.90',
    image: '/products/pt141.jpg',
    description: 'Melanocortin receptor agonist peptide for sexual function and arousal research. Premium purity formulation.',
    benefits: ['Sexual function research', 'Arousal studies', 'High purity', 'Research grade'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Pt141 10mg',
      taskNumber: '#87513',
      purity: '99.892%',
      content: '9.25 mg',
      verified: 'R5DWA1AC47JI',
      document: '/coa/test-report-87513.jpg'
    }
  },
  {
    id: 19,
    name: 'GHK-Cu (Copper Tripeptide)',
    dosage: '10 Vials / 10mg',
    price: '$35.99',
    casePrice: 'Case of 10 - $359.90',
    image: '/products/ghkcu.jpg',
    description: 'Copper-bound tripeptide for skin rejuvenation and collagen production research. Excellent stability and purity.',
    benefits: ['Skin rejuvenation', 'Collagen support', 'Anti-aging', 'Healing support'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Ghk',
      taskNumber: '#88476',
      purity: '99.879%',
      content: '91.47 mg',
      verified: 'D6YNB2TY67YU',
      document: '/coa/test-report-88476.jpg'
    }
  },
  {
    id: 20,
    name: 'IPAMORELIN (Extended)',
    dosage: '10 Vials / 5mg',
    price: '$28.99',
    casePrice: 'Case of 10 - $289.90',
    image: '/products/ipamorelin-ext.jpg',
    description: 'Growth hormone secretagogue for HGH stimulation and muscle development research. High purity formulation.',
    benefits: ['HGH stimulation', 'Muscle growth', 'Recovery support', 'Research grade'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Ipam',
      taskNumber: '#87531',
      purity: '99.877%',
      content: '5.07 mg',
      verified: 'IQB6QUWXDUG3',
      document: '/coa/test-report-87531.jpg'
    }
  },
  {
    id: 21,
    name: 'GLOW (Peptide Complex)',
    dosage: '10 Vials / 10mg',
    price: '$42.99',
    casePrice: 'Case of 10 - $429.90',
    image: '/products/glow.jpg',
    description: 'Advanced multi-peptide complex combining GHK-Cu, BPC-157, and TB-500 for comprehensive cellular support.',
    benefits: ['Multi-peptide synergy', 'Complete cellular support', 'Tissue repair', 'Healing acceleration'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Glow',
      taskNumber: '#87535',
      components: 'GHK-Cu (61.39mg), BPC-157 (11.99mg), TB-500 (10.56mg)',
      verified: 'SKSNW7JXDHX7',
      document: '/coa/test-report-87535.jpg'
    }
  },
  {
    id: 22,
    name: 'SS-31 (Szeto-Schiller Peptide)',
    dosage: '10 Vials / 10mg',
    price: '$40.99',
    casePrice: 'Case of 10 - $409.90',
    image: '/products/ss31.jpg',
    description: 'Mitochondrial-targeted peptide for cellular energy optimization and anti-aging research. Premium quality.',
    benefits: ['Mitochondrial support', 'Energy optimization', 'Anti-aging', 'Cellular health'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'SS-31 10mg',
      taskNumber: '#87527',
      purity: '99.811%',
      content: '11.74 mg',
      verified: 'YV9166WG4FD9',
      document: '/coa/ss31-87527.jpg'
    }
  },
  {
    id: 23,
    name: 'DSIP (Delta Sleep Inducing Peptide)',
    dosage: '10 Vials / 5mg',
    price: '$32.99',
    casePrice: 'Case of 10 - $329.90',
    image: '/products/dsip.jpg',
    description: 'Sleep and recovery support peptide for circadian rhythm and sleep quality research. Research grade purity.',
    benefits: ['Sleep support', 'Recovery enhancement', 'Circadian rhythm', 'Relaxation'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Dsip 5mg',
      taskNumber: '#87533',
      purity: '99.116%',
      content: '5.06 mg',
      verified: '7UNH16KJT6QX',
      document: '/coa/test-report-87533.jpg'
    }
  },
  {
    id: 24,
    name: 'BT-001 (Biotropin)',
    dosage: '10 Vials / 5mg',
    price: '$30.99',
    casePrice: 'Case of 10 - $309.90',
    image: '/products/bt001.jpg',
    description: 'Advanced bioactive peptide complex for comprehensive research applications. Multiple functionality support system.',
    benefits: ['Tissue repair', 'Multi-functional', 'Research grade', 'Stable formula'],
    testResults: [
      { test: 'TAMC Test', passed: true },
      { test: 'TYMC Test', passed: true }
    ],
    coaData: {
      sampleName: 'BT001',
      taskNumber: '#83234',
      testsRequested: 'TAMC+TYMC',
      verified: 'WFAGLVDHYL6X',
      document: '/coa/test-report-83234.jpg'
    }
  },
  {
    id: 25,
    name: 'PW-001 (Peptide Watson)',
    dosage: '10 Vials / 5mg',
    price: '$24.99',
    casePrice: 'Case of 10 - $249.90',
    image: '/products/pw001.jpg',
    description: 'Research-grade peptide with verified TAMC and TYMC compliance. Suitable for comprehensive peptide research applications.',
    benefits: ['Research grade', 'Sterile formula', 'Quality verified', 'Stable'],
    testResults: [
      { test: 'TAMC Test', passed: true },
      { test: 'TYMC Test', passed: true }
    ],
    coaData: {
      sampleName: 'PW001',
      taskNumber: '#83276',
      testsRequested: 'TAMC+TYMC',
      verified: '2WZ5UE6X64DJ',
      document: '/coa/test-report-83276.jpg'
    }
  },
  {
    id: 26,
    name: 'SX-001',
    dosage: '10 Vials / 5mg',
    price: '$25.99',
    casePrice: 'Case of 10 - $259.90',
    image: '/products/sx001.jpg',
    description: 'Advanced research peptide with complete TAMC and TYMC test verification. Research-grade purity and stability.',
    benefits: ['Research grade', 'Verified testing', 'Quality assured', 'Clinical grade'],
    testResults: [
      { test: 'TAMC Test', passed: true },
      { test: 'TYMC Test', passed: true }
    ],
    coaData: {
      sampleName: 'SX001',
      taskNumber: '#83270',
      testsRequested: 'TAMC+TYMC',
      verified: 'DWK2JRBM1LCP',
      document: '/coa/test-report-83270.jpg'
    }
  },
  {
    id: 27,
    name: 'SURVODUTIDE',
    dosage: '10 Vials / 10mg',
    price: '$32.99',
    casePrice: 'Case of 10 - $329.90',
    image: '/products/survodutide.jpg',
    description: 'GLP-1/GCG receptor agonist peptide for advanced metabolic research. Demonstrates excellent purity and stability.',
    benefits: ['Metabolic research', 'High purity', 'Stable formula', 'Research grade'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Survodutide 10mg',
      taskNumber: '#87510',
      purity: '99.880%',
      content: '10.45 mg',
      verified: 'V9N1C42DUBAE',
      document: '/coa/test-report-87510.jpg'
    }
  },
  {
    id: 28,
    name: 'MAZDUTIDE',
    dosage: '10 Vials / 10mg',
    price: '$33.99',
    casePrice: 'Case of 10 - $339.90',
    image: '/products/mazdutide.jpg',
    description: 'GLP-1 receptor agonist with advanced metabolic effects. High purity formulation ideal for metabolic research.',
    benefits: ['Metabolic support', 'High purity', 'Research grade', 'Advanced effects'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Mazdutide 10mg',
      taskNumber: '#87512',
      purity: '99.826%',
      content: '10.46 mg',
      verified: '9HHCL1IGEVNM',
      document: '/coa/mazdutide-87512.jpg'
    }
  },
  {
    id: 29,
    name: 'CAGRILINTIDE',
    dosage: '10 Vials / 10mg',
    price: '$34.99',
    casePrice: 'Case of 10 - $349.90',
    image: '/products/cagrilintide.jpg',
    description: 'Amylin receptor agonist peptide for metabolic and appetite research. Premium purity and stability.',
    benefits: ['Metabolic research', 'Appetite modulation', 'High purity', 'Stable'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Cagrilintide 10mg',
      taskNumber: '#87500',
      purity: '99.817%',
      content: '10.45 mg',
      verified: 'CWHVKLPI9VPA',
      document: '/coa/test-report-87500.jpg'
    }
  },
  {
    id: 30,
    name: 'FOX04 (Forkhead Box O4)',
    dosage: '10 Vials / 10mg',
    price: '$37.99',
    casePrice: 'Case of 10 - $379.90',
    image: '/products/fox04.jpg',
    description: 'Senolytic peptide for cellular senescence research. High purity formulation for advanced aging research.',
    benefits: ['Senolytic action', 'Cellular health', 'Aging research', 'High purity'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Fox04',
      taskNumber: '#64292',
      purity: '99.232%',
      content: '10.56 mg',
      verified: 'LE4GYNL817X1',
      document: '/coa/test-report-64292.jpg'
    }
  },
  {
    id: 31,
    name: 'NAD+ (Nicotinamide Adenine Dinucleotide)',
    dosage: '10 Vials / 10mg',
    price: '$38.99',
    casePrice: 'Case of 10 - $389.90',
    image: '/products/nad.jpg',
    description: 'NAD+ precursor peptide for metabolic and cellular energy research. Premium quality for advanced biohacking studies.',
    benefits: ['Cellular energy', 'Metabolic support', 'Anti-aging research', 'High purity'],
    testResults: [
      { test: 'TAMC Test', passed: true },
      { test: 'TYMC Test', passed: true }
    ],
    coaData: {
      sampleName: 'NAD001',
      taskNumber: '#83249',
      testsRequested: 'TAMC+TYMC',
      verified: '4U6R5CZMN2TN',
      document: '/coa/test-report-83249.jpg'
    }
  },
  {
    id: 32,
    name: 'HUMANIN',
    dosage: '10 Vials / 10mg',
    price: '$43.99',
    casePrice: 'Case of 10 - $439.90',
    image: '/products/humanin.jpg',
    description: 'Neuroprotective and cytoprotective peptide for cellular survival and anti-aging research. Exceptional purity.',
    benefits: ['Neuroprotection', 'Anti-aging', 'Cellular survival', 'Mitochondrial health'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Humanin 10mg',
      taskNumber: '#100909',
      purity: '98.477%',
      content: '8.22 mg',
      verified: 'FGWJV2UINANK',
      document: '/coa/test-report-100909.jpg'
    }
  },
  {
    id: 33,
    name: 'PEG-MGF (Mechano Growth Factor)',
    dosage: '10 Vials / 2mg',
    price: '$44.99',
    casePrice: 'Case of 10 - $449.90',
    image: '/products/pegmgf.jpg',
    description: 'PEGylated mechano growth factor for muscle growth and repair research. Extended half-life formulation.',
    benefits: ['Muscle growth', 'Repair acceleration', 'IGF-1 pathway', 'Extended duration'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'PEG-MGF',
      taskNumber: '#107263',
      purity: '99.223%',
      content: '1.48 mg',
      verified: 'KL7X9PDZ64V6',
      document: '/coa/pegmgf-107263.jpg'
    }
  },
  {
    id: 34,
    name: 'PNC-27 (Penetratin-Conjugated p53)',
    dosage: '10 Vials / 5mg',
    price: '$45.99',
    casePrice: 'Case of 10 - $459.90',
    image: '/products/pnc27.jpg',
    description: 'Cell-penetrating peptide conjugate for advanced research applications. High purity formulation.',
    benefits: ['Cell penetration', 'Research applications', 'High purity', 'Stable formula'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'PNC-27 5mg',
      taskNumber: '#100914',
      purity: '99.220%',
      content: '4.27 mg',
      verified: '64GUJW81CLTM',
      document: '/coa/pnc27-100914.jpg'
    }
  },
  {
    id: 35,
    name: 'TESAMORELIN',
    dosage: '10 Vials / 5mg',
    price: '$39.99',
    casePrice: 'Case of 10 - $399.90',
    image: '/products/tesamorelin.jpg',
    description: 'Growth hormone-releasing hormone analog for body composition research. FDA-researched peptide.',
    benefits: ['HGH stimulation', 'Body composition', 'Fat reduction', 'Research grade'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'Tesamorelin 5mg',
      taskNumber: '#100918',
      purity: '99.151%',
      content: '4.63 mg',
      verified: 'Q6NJ849PPEC6',
      document: '/coa/test-report-100918.jpg'
    }
  },
  {
    id: 36,
    name: 'LL-37 (Cathelicidin)',
    dosage: '10 Vials / 5mg',
    price: '$42.99',
    casePrice: 'Case of 10 - $429.90',
    image: '/products/ll37.jpg',
    description: 'Antimicrobial and immunomodulatory peptide for immune support and wound healing research.',
    benefits: ['Immune support', 'Antimicrobial', 'Wound healing', 'Immunomodulation'],
    testResults: [
      { test: 'Sterility & Endotoxins', passed: true },
      { test: 'Net Content & Purity', passed: true }
    ],
    coaData: {
      sampleName: 'LL-37 5mg',
      taskNumber: '#100910',
      purity: '99.036%',
      content: '4.86 mg',
      verified: 'YDXPMPCMJTIF',
      document: '/coa/test-report-100910.jpg'
    }
  },
  {
    id: 37,
    name: '5-Amino-1MQ',
    dosage: '50 Capsules / 50mg',
    price: '$48.99',
    casePrice: 'Case of 10 - $489.90',
    image: '/products/5amino1mq.jpg',
    description: 'Advanced research chemical compound for metabolic and cellular research. Chromate-certified purity and identity verification.',
    benefits: ['Metabolic research', 'High purity', 'Certified quality', 'Advanced analysis'],
    testResults: [
      { test: 'Identity (RP-HPLC)', passed: true },
      { test: 'Purity (RP-HPLC)', passed: true }
    ],
    coaData: {
      sampleName: '5-Amino-1MQ Cl',
      taskNumber: '#30530',
      purity: '99.551%-99.558%',
      content: '48.01-49.38 mg',
      verified: 'RUO52ZWMY681',
      document: '/coa/chromate-5amino1mq.jpg'
    }
  },
]

export default function Home() {
  const { addToCart } = useCart()
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(peptideProducts)
  const [quantity, setQuantity] = useState(1)

  // Auto-rotate carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % peptideProducts.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  // Handle search
  useEffect(() => {
    const results = peptideProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredProducts(results)
  }, [searchQuery])

  const nextProduct = () => {
    setCarouselIndex((prev) => (prev + 1) % peptideProducts.length)
  }

  const prevProduct = () => {
    setCarouselIndex((prev) => (prev - 1 + peptideProducts.length) % peptideProducts.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Premium Research <span className="text-primary">Peptides</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              High-purity, laboratory-verified peptides for research. Each product includes complete Certificate of Analysis from Janoshik.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search peptides by name or benefits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold text-foreground mb-8">Featured Product</h3>
        <div className="relative">
          <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              {/* Image Section */}
              <div 
                className="flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 min-h-96 relative overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedProduct(peptideProducts[carouselIndex])}
              >
                <Image
                  src={peptideProducts[carouselIndex].image}
                  alt={peptideProducts[carouselIndex].name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-sm text-muted-foreground">#{peptideProducts[carouselIndex].id}</span>
                  </div>
                  <h4 className="text-3xl font-bold text-foreground mb-3">{peptideProducts[carouselIndex].name}</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {peptideProducts[carouselIndex].description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-foreground mb-3">Key Benefits</h5>
                    <div className="flex flex-wrap gap-2">
                      {peptideProducts[carouselIndex].benefits.map((benefit, idx) => (
                        <span key={idx} className="px-3 py-1.5 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Starting at</p>
                    <p className="text-2xl font-bold text-foreground">{peptideProducts[carouselIndex].price}</p>
                    <p className="text-xs text-muted-foreground">{peptideProducts[carouselIndex].casePrice}</p>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  onClick={() => setSelectedProduct(peptideProducts[carouselIndex])}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                >
                  View Details & COA
                </Button>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevProduct}
              className="p-2 rounded-full bg-card border border-border hover:bg-muted transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {peptideProducts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === carouselIndex ? 'bg-primary w-8' : 'bg-border w-2'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextProduct}
              className="p-2 rounded-full bg-card border border-border hover:bg-muted transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-2">Featured Products</h3>
          <p className="text-muted-foreground">
            Explore our curated selection of premium research peptides
          </p>
        </div>

        {filteredProducts.slice(0, 6).length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.slice(0, 6).map((product) => (
              <div
                key={product.id}
                className="group rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Card Header */}
                <div 
                  className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 border-b border-border overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">{product.dosage}</p>
                    </div>
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Benefits Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.benefits.slice(0, 2).map((benefit, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-full bg-secondary/30 text-secondary-foreground text-xs font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                    {product.benefits.length > 2 && (
                      <span className="px-2 py-1 rounded-full text-muted-foreground text-xs">
                        +{product.benefits.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* COA Badge */}
                  {product.coaData && (
                    <div className="mb-4 p-2.5 rounded-lg bg-primary/5 border border-primary/20 text-xs">
                      <p className="text-primary font-semibold mb-1">✓ COA Verified</p>
                      <p className="text-muted-foreground text-xs">{product.coaData.purity} Purity</p>
                    </div>
                  )}

                  {/* Action Button */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full px-4 py-2.5 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground font-semibold transition-all duration-200 border border-primary/20 hover:border-primary"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">No products found matching "{searchQuery}"</p>
          </div>
        )}

        {/* View All Products Button */}
        <div className="mt-12 text-center">
          <Link href="/shop">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3 text-lg h-auto">
              Browse Complete Shop ({`${peptideProducts.length} Products`})
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-y border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-3" />
              <h5 className="font-semibold text-foreground mb-1">Lab Verified</h5>
              <p className="text-sm text-muted-foreground">Complete COA from Janoshik</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h5 className="font-semibold text-foreground mb-1">Research Grade</h5>
              <p className="text-sm text-muted-foreground">Premium quality products</p>
            </div>
            <div className="text-center">
              <Truck className="h-8 w-8 text-primary mx-auto mb-3" />
              <h5 className="font-semibold text-foreground mb-1">Fast Shipping</h5>
              <p className="text-sm text-muted-foreground">Discreet & reliable delivery</p>
            </div>
            <div className="text-center">
              <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
              <h5 className="font-semibold text-foreground mb-1">24/7 Support</h5>
              <p className="text-sm text-muted-foreground">Expert customer service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Peptide Price List Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border/40">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Complete Peptide Pricing</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Browse our complete inventory of research peptides and hormones. All prices are per 10-vial box with pharmaceutical-grade specifications.
          </p>
        </div>
        <PriceList />
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/20 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
              <div className="text-muted-foreground text-sm space-y-2">
                <p>Email: info@janoshik.com</p>
                <p>Telegram: @ruo_bio</p>
                <p>Web: www.ruo.bio</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Research Only</h3>
              <p className="text-muted-foreground text-sm">
                All peptides are for laboratory research purposes only and are not intended for human or animal consumption.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Quality Assured</h3>
              <p className="text-muted-foreground text-sm">
                All products are tested by certified laboratories and come with Certificates of Analysis.
              </p>
            </div>
          </div>
          <div className="border-t border-border/40 pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2026 RUO.BIO - Premium Research Peptides. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-background">
          <div className="min-h-screen">
            {/* Header with Close Button */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-card/95 backdrop-blur-sm z-10">
              <h1 className="text-3xl font-bold text-foreground">{selectedProduct.name}</h1>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="max-w-4xl mx-auto p-6 space-y-8">
              {/* Product Image and Main Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Large Product Image */}
                <div className="flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 min-h-96 relative overflow-hidden">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  {/* Stock Status */}
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-green-600 font-semibold">In Stock</span>
                  </div>

                  {/* Pricing */}
                  <div>
                    <p className="text-5xl font-bold text-accent mb-2">{selectedProduct.price}</p>
                    <p className="text-sm text-muted-foreground">{selectedProduct.casePrice}</p>
                  </div>

                  {/* Quantity Selector */}
                  <div className="flex items-center gap-6">
                    <div className="flex items-center border border-border rounded-lg overflow-hidden bg-muted/30">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 hover:bg-muted transition-colors text-lg font-semibold"
                      >
                        −
                      </button>
                      <span className="px-6 py-2 font-semibold text-foreground">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 hover:bg-muted transition-colors text-lg font-semibold"
                      >
                        +
                      </button>
                    </div>
                    <Button 
                      onClick={() => {
                        addToCart({
                          id: selectedProduct.id,
                          name: selectedProduct.name,
                          price: selectedProduct.price,
                          quantity,
                          image: selectedProduct.image
                        })
                        setQuantity(1)
                        setSelectedProduct(null)
                        alert(`${quantity} ${selectedProduct.name} added to cart!\n\nTo order, contact us:\nEmail: info@janoshik.com\nTelegram: @ruo_bio`)
                      }}
                      className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 rounded-lg text-lg h-auto"
                    >
                      Add To Cart
                    </Button>
                  </div>

                  {/* Test Results - Passed Badges */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    {selectedProduct.testResults.map((result, idx) => (
                      <div key={idx} className="text-center p-4 rounded-lg bg-muted/30 border border-border">
                        <div className="text-3xl text-green-500 mb-2">✓</div>
                        <p className="font-bold text-foreground text-sm">PASSED</p>
                        <p className="text-xs text-muted-foreground">{result.test}</p>
                      </div>
                    ))}
                  </div>

                  {/* Research Disclaimer */}
                  <div className="p-4 rounded-lg bg-orange-50/50 border border-orange-200 space-y-2">
                    <div className="flex gap-3">
                      <span className="text-2xl">⚠</span>
                      <p className="text-sm text-foreground leading-relaxed">
                        These products are intended for <strong>laboratory research purposes only</strong>, and are <strong>not for human or animal consumption</strong>. The products are <strong>not</strong> intended to diagnose, treat, cure, or prevent any disease. The products should <strong>not</strong> be used as a food, drug, cosmetic, or other household use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="border-t border-border pt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Description</h2>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Lab Result</h3>
                  
                  {/* COA Document Image */}
                  {selectedProduct.coaData?.document && (
                    <div className="mb-6 relative w-full h-64 bg-muted rounded-lg overflow-hidden border border-border">
                      <Image
                        src={selectedProduct.coaData.document}
                        alt={`COA for ${selectedProduct.name}`}
                        width={300}
                        height={400}
                        className="w-auto h-full mx-auto"
                      />
                    </div>
                  )}

                  {/* Analysis Info Table */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 py-4 border-b border-border">
                      <div>
                        <p className="text-muted-foreground text-sm">Analysis Date:</p>
                        <p className="font-semibold text-foreground">21 JAN 2026</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">Lot Number:</p>
                        <p className="font-mono font-semibold text-foreground">{selectedProduct.coaData?.taskNumber}</p>
                      </div>
                    </div>

                    {/* View Buttons */}
                    <div className="flex gap-4">
                      <button className="flex-1 px-6 py-3 border-2 border-accent rounded-lg font-semibold text-accent hover:bg-accent/5 transition-colors">
                        View Historical
                      </button>
                      <button className="flex-1 px-6 py-3 border-2 border-accent rounded-lg font-semibold text-accent hover:bg-accent/5 transition-colors flex items-center justify-center gap-2">
                        <Shield className="h-5 w-5" />
                        Full Report
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Properties Section */}
              <div className="border-t border-border pt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Properties</h2>
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                  <div className="divide-y divide-border">
                    <div className="grid grid-cols-2 gap-4 p-6">
                      <p className="text-muted-foreground font-semibold">Product Name</p>
                      <p className="font-semibold text-foreground">{selectedProduct.name}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-6">
                      <p className="text-muted-foreground font-semibold">Dosage</p>
                      <p className="font-semibold text-foreground">{selectedProduct.dosage}</p>
                    </div>
                    {selectedProduct.coaData?.purity && (
                      <div className="grid grid-cols-2 gap-4 p-6">
                        <p className="text-muted-foreground font-semibold">Purity</p>
                        <p className="font-semibold text-foreground">{selectedProduct.coaData.purity}</p>
                      </div>
                    )}
                    {selectedProduct.coaData?.content && (
                      <div className="grid grid-cols-2 gap-4 p-6">
                        <p className="text-muted-foreground font-semibold">Content</p>
                        <p className="font-semibold text-foreground">{selectedProduct.coaData.content}</p>
                      </div>
                    )}
                    <div className="grid grid-cols-2 gap-4 p-6">
                      <p className="text-muted-foreground font-semibold">Verification Code</p>
                      <p className="font-mono font-semibold text-foreground">{selectedProduct.coaData?.verified}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="border-t border-border pt-8 pb-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Key Benefits</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedProduct.benefits.map((benefit, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                      <p className="font-semibold text-foreground text-center text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
