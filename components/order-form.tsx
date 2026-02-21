'use client'

import { useState } from 'react'
import { Mail, Send, X } from 'lucide-react'

interface OrderFormProps {
  isOpen: boolean
  onClose: () => void
  products: any[]
}

export function OrderForm({ isOpen, onClose, products }: OrderFormProps) {
  const [step, setStep] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [shippingAddress, setShippingAddress] = useState('')
  const [contactMethod, setContactMethod] = useState('email')

  const paymentMethods = [
    'Cash App',
    'Zelle',
    'PayPal',
    'Venmo',
    'Apple Pay',
    'Chime',
    'Gift Card'
  ]

  const handleGenerateEmail = () => {
    const product = products.find(p => p.id === parseInt(selectedProduct))
    if (!product || !fullName || !email || !phone || !shippingAddress || !paymentMethod) {
      alert('Please fill in all fields')
      return
    }

    const emailBody = `
Product Order Request:
-----------------------
Product: ${product.name}
Dosage: ${product.dosage}
Quantity: ${quantity}
Price per unit: ${product.price}
Total: $${(parseFloat(product.price.replace('$', '')) * quantity).toFixed(2)}

Customer Information:
-----------------------
Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Shipping Address: ${shippingAddress}

Payment Method: ${paymentMethod}

Please confirm this order and send payment details.

Thank you!
    `.trim()

    const gmailLink = `https://mail.google.com/mail/?ui=2&view=cm&fs=1&to=Infopeterpeptides@gmail.com&su=Peptide%20Order%20Request&body=${encodeURIComponent(emailBody)}`
    window.open(gmailLink, '_blank')
  }

  const handleGenerateTelegram = () => {
    const product = products.find(p => p.id === parseInt(selectedProduct))
    if (!product || !fullName || !email || !phone || !shippingAddress || !paymentMethod) {
      alert('Please fill in all fields')
      return
    }

    const telegramMessage = `
📦 Product Order Request

Product: ${product.name}
Dosage: ${product.dosage}
Quantity: ${quantity}
Price: ${product.price}
Total: $${(parseFloat(product.price.replace('$', '')) * quantity).toFixed(2)}

👤 Customer Info:
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Address: ${shippingAddress}

💳 Payment: ${paymentMethod}
    `.trim()

    const telegramLink = `https://t.me/+19143251656?text=${encodeURIComponent(telegramMessage)}`
    window.open(telegramLink, '_blank')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border/40 flex justify-between items-center p-6">
          <h2 className="text-2xl font-bold text-foreground">Order Form</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Step Indicator */}
          <div className="flex justify-between items-center mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold ${
                  s <= step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`flex-1 h-1 mx-2 ${s < step ? 'bg-primary' : 'bg-muted'}`}></div>}
              </div>
            ))}
          </div>

          {/* Step 1: Product Selection */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Select Product *</label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Choose a product...</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} - {p.dosage}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Quantity *</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <button
                onClick={() => selectedProduct && setStep(2)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Customer Information */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Shipping Address *</label>
                <textarea
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-border hover:bg-muted text-foreground py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => fullName && email && phone && shippingAddress && setStep(3)}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment & Delivery */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Payment Method *</label>
                <div className="grid grid-cols-2 gap-2">
                  {paymentMethods.map((method) => (
                    <button
                      key={method}
                      onClick={() => setPaymentMethod(method)}
                      className={`p-3 rounded-lg border-2 font-medium transition-all ${
                        paymentMethod === method
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50 text-foreground'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Order Summary</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Product: {products.find(p => p.id === parseInt(selectedProduct))?.name}</p>
                  <p>Quantity: {quantity}</p>
                  <p className="text-foreground font-semibold">
                    Total: ${selectedProduct ? (parseFloat(products.find(p => p.id === parseInt(selectedProduct))?.price.replace('$', '') || 0) * quantity).toFixed(2) : '0.00'}
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">How would you like to place your order?</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setContactMethod('email')
                      handleGenerateEmail()
                    }}
                    className="flex items-center justify-center gap-2 p-3 rounded-lg border-2 border-primary/50 hover:border-primary hover:bg-primary/10 text-foreground transition-all"
                  >
                    <Mail className="h-5 w-5" />
                    Order via Gmail
                  </button>
                  <button
                    onClick={() => {
                      setContactMethod('telegram')
                      handleGenerateTelegram()
                    }}
                    className="flex items-center justify-center gap-2 p-3 rounded-lg border-2 border-primary/50 hover:border-primary hover:bg-primary/10 text-foreground transition-all"
                  >
                    <Send className="h-5 w-5" />
                    Order via Telegram
                  </button>
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full border border-border hover:bg-muted text-foreground py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
