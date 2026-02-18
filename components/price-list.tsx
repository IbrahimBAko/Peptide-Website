'use client'

import { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { peptidePricingList } from '@/data/peptide-pricing'

export function PriceList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())

  const categories = ['All', ...Array.from(new Set(peptidePricingList.map(item => item.category)))]
  
  const filteredList = peptidePricingList.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleExpand = (index: number) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <div className="w-full space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search peptides..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price List Table */}
      <div className="overflow-x-auto border border-border rounded-lg bg-card">
        <table className="w-full">
          <thead className="bg-muted border-b border-border">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Peptide Name</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">Specifications</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">Price (10 vials)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredList.map((item, index) => (
              <tr 
                key={index}
                className="hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <td className="px-4 py-3 font-medium text-foreground">{item.name}</td>
                <td className="px-4 py-3 text-center text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <span>{item.specs.length > 1 ? `${item.specs.length} options` : item.specs[0]}</span>
                    {item.specs.length > 1 && (
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform ${expandedItems.has(index) ? 'rotate-180' : ''}`}
                      />
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 text-right text-sm font-semibold text-accent">
                  ${item.prices[0]}{item.specs.length > 1 && ` - $${Math.max(...item.prices)}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Expanded Details */}
      {expandedItems.size > 0 && (
        <div className="space-y-3">
          {Array.from(expandedItems).map((index) => {
            const item = filteredList[filteredList.findIndex((_, i) => peptidePricingList.indexOf(peptidePricingList[peptidePricingList.findIndex(p => p.name === filteredList[index]?.name && p.category === filteredList[index]?.category)]) === index)]
            const actualItem = peptidePricingList.find(p => p.name === item?.name && p.category === item?.category)
            
            if (!actualItem) return null
            
            return (
              <div key={index} className="bg-secondary/20 border border-secondary/30 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-3">{actualItem.name} - Dosage Options:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {actualItem.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="bg-background border border-border rounded p-2">
                      <p className="text-sm text-muted-foreground">{spec}</p>
                      <p className="font-semibold text-accent">${actualItem.prices[specIndex]}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {filteredList.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No peptides found matching your search.</p>
        </div>
      )}
    </div>
  )
}
