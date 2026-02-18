'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Search, Shield, X, ZoomIn } from 'lucide-react'
import { Navbar } from '@/components/navbar'

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
    ]
  },
  {
    id: 5,
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
    ]
  },
  {
    id: 6,
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
      document: '/coa/test-report-100915-new.jpg'
    }
  },
  {
    id: 7,
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
    id: 8,
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
    ]
  },
  {
    id: 9,
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
    ]
  },
  {
    id: 10,
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
    ]
  },
  {
    id: 11,
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
    ]
  },
  {
    id: 12,
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
      document: '/coa/test-report-100903-ace031.jpg'
    }
  },
  {
    id: 13,
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
    ]
  },
  {
    id: 14,
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
      document: '/coa/test-report-88476-ghkcu.jpg'
    }
  },
  {
    id: 15,
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
    ]
  },
  {
    id: 16,
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
    ]
  },
  {
    id: 17,
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
    ]
  },
  {
    id: 18,
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
    ]
  },
  {
    id: 19,
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
      verified: 'WFAGLVDHYL6X',
      document: '/coa/test-report-83234.jpg'
    }
  },
  {
    id: 20,
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
    id: 21,
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

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [zoomedCOA, setZoomedCOA] = useState(null)

  const filteredProducts = peptideProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddToCart = (product) => {
    alert(`Added ${quantity} x ${product.name} to cart!\n\nEmail: info@janoshik.com\nTelegram: @ruo_bio`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Complete Product Shop</h1>
          <p className="text-lg text-muted-foreground">Browse all premium research peptides and chemicals</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-xl border border-border overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Card Header - Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{product.dosage}</p>
                <p className="text-3xl font-bold text-accent mb-4">{product.price}</p>
                <Button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

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
                      onClick={() => handleAddToCart(selectedProduct)}
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
                        These products are intended for <strong>laboratory research purposes only</strong>, and are <strong>not for human or animal consumption</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="border-t border-border pt-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Description</h2>
                <p className="text-foreground leading-relaxed mb-6">{selectedProduct.description}</p>

                {/* Lab Result Section */}
                {selectedProduct.coaData && (
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Lab Result (COA)
                    </h3>

                    {/* COA Document Image */}
                    {selectedProduct.coaData.document && (
                      <div className="mb-6 relative w-full h-64 bg-muted rounded-lg overflow-hidden border border-border group cursor-pointer">
                        <Image
                          src={selectedProduct.coaData.document}
                          alt={`COA for ${selectedProduct.name}`}
                          width={300}
                          height={400}
                          className="w-auto h-full mx-auto"
                        />
                        <button
                          onClick={() => setZoomedCOA(selectedProduct.coaData.document)}
                          className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors"
                        >
                          <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </div>
                    )}

                    {/* Analysis Info Table */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 py-4 border-b border-border">
                        <div>
                          <p className="text-muted-foreground text-sm">Task Number:</p>
                          <p className="font-mono font-semibold text-foreground">{selectedProduct.coaData.taskNumber}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-sm">Verification Code:</p>
                          <p className="font-mono font-semibold text-foreground">{selectedProduct.coaData.verified}</p>
                        </div>
                      </div>
                      {selectedProduct.coaData.purity && (
                        <div className="grid grid-cols-2 gap-4 py-4 border-b border-border">
                          <div>
                            <p className="text-muted-foreground text-sm">Purity:</p>
                            <p className="font-semibold text-foreground">{selectedProduct.coaData.purity}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">Content:</p>
                            <p className="font-semibold text-foreground">{selectedProduct.coaData.content}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Key Benefits */}
              <div className="border-t border-border pt-8">
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

      {/* COA Zoom Modal */}
      {zoomedCOA && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-w-3xl w-full max-h-[90vh] overflow-auto">
            <button
              onClick={() => setZoomedCOA(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-foreground/10 hover:bg-foreground/20 transition-colors"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>
            <Image
              src={zoomedCOA}
              alt="COA Zoomed"
              width={1200}
              height={1600}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  )
}
