'use client'

import { useState, useEffect } from 'react'
import { Package, Download, Printer } from 'lucide-react'

export default function InventoryReportPage() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setProducts(data.data)
        }
      })
      .finally(() => setLoading(false))
  }, [])

  const downloadCSV = () => {
    const headers = ['Product ID', 'Name', 'Barcode', 'Price (SAR)', 'Weight', 'Stock Quantity']
    const rows = products.map(p => [
      p._id || p.id,
      `"${p.name?.en || p.name}"`,
      p.barcode || 'N/A',
      p.price,
      p.weight || '1kg',
      p.stockQuantity || 0
    ])

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `haya_full_inventory_report_${Date.now()}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const totalStockCount = products.reduce((sum, p) => sum + (p.stockQuantity || 0), 0)
  const totalInventoryValue = products.reduce((sum, p) => sum + (p.price * (p.stockQuantity || 0)), 0)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center print:hidden">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Package className="text-emerald-700" size={26} />
            Full Inventory Valuation Report
          </h1>
          <p className="text-sm text-gray-500">Real-time tracking of all products, stock counts, and total asset valuation</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded-lg shadow-sm transition"
          >
            <Printer size={18} />
            Print Audit Sheet
          </button>
          <button
            onClick={downloadCSV}
            disabled={products.length === 0}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#1e4620] hover:bg-[#143016] text-white text-sm font-semibold rounded-lg shadow-sm transition disabled:opacity-50"
          >
            <Download size={18} />
            Download CSV Report
          </button>
        </div>
      </div>

      {/* Printable Letterhead Inventory Sheet */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden print:shadow-none print:border-none print:rounded-none">
        {/* Official Letterhead Header */}
        <div className="w-full bg-[#1e4620] text-[#fdfbf7] p-8 flex justify-between items-center border-b-4 border-[#c59b27]">
          <div>
            <h2 className="text-2xl font-bold tracking-wide font-serif text-[#fdfbf7]">HAYA AYURVEDICS</h2>
            <p className="text-xs text-[#c59b27] font-semibold mt-1">Kerala Ayurvedic Hospital & Wellness Center</p>
          </div>
          <div className="text-right text-xs text-gray-200/90 font-medium">
            <p>Wayanad, Kerala, India</p>
            <p>Contact: +91 99614 00633</p>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#1e4620]">FULL INVENTORY AUDIT REPORT / تقرير جرد المخزون الشامل</h2>
              <p className="text-xs text-gray-500 font-mono">NABH Approved Facility • Traditional Ayurvedic Center</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Audit Date: {new Date().toLocaleDateString()}</p>
              <p className="text-xs font-bold text-emerald-700">{totalStockCount} Units Stocked</p>
            </div>
          </div>

          {/* Stats Summary Box */}
          <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase">Total Stock Quantity:</span>
              <p className="text-xl font-black text-gray-900 mt-0.5">{totalStockCount} units</p>
            </div>
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase">Total Inventory Valuation:</span>
              <p className="text-xl font-black text-[#1e4620] mt-0.5">{totalInventoryValue.toFixed(2)} SAR</p>
            </div>
          </div>

          <table className="w-full text-left text-sm text-gray-600 border-collapse mb-6">
            <thead className="bg-gray-100 text-xs font-bold text-gray-700 uppercase border-y border-gray-300">
              <tr>
                <th className="px-4 py-3">Product Name</th>
                <th className="px-4 py-3">Barcode</th>
                <th className="px-4 py-3">Unit Price</th>
                <th className="px-4 py-3 text-center">Stock Units</th>
                <th className="px-4 py-3 text-right">Total Valuation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr><td colSpan={5} className="px-4 py-8 text-center text-gray-400">Loading inventory data...</td></tr>
              ) : products.length === 0 ? (
                <tr><td colSpan={5} className="px-4 py-8 text-center text-gray-400">No products found.</td></tr>
              ) : (
                products.map((p) => (
                  <tr key={p._id || p.slug}>
                    <td className="px-4 py-3 font-bold text-gray-900">
                      {typeof p.name === 'object' && p.name !== null ? (p.name.en || p.name.ar || '') : String(p.name || '')}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">{p.barcode || 'N/A'}</td>
                    <td className="px-4 py-3 text-xs font-semibold text-gray-700">{p.price} SAR</td>
                    <td className="px-4 py-3 text-center font-bold text-gray-900">{p.stockQuantity || 0}</td>
                    <td className="px-4 py-3 text-right font-extrabold text-[#1e4620]">{((p.price || 0) * (p.stockQuantity || 0)).toFixed(2)} SAR</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Official Signature & Seal */}
          <div className="flex justify-between items-end border-t border-gray-300 pt-6">
            <div>
              <p className="text-xs font-bold text-gray-800">Haya Ayurvedics Hospital</p>
              <p className="text-[10px] text-gray-500 font-mono">Central Warehouse Logistics Division</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-xs text-gray-400 font-semibold mb-1">Chief Logistics Officer</p>
                <div className="w-32 border-b border-gray-400 h-8"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Official Letterhead Footer */}
        <div className="w-full bg-[#1e4620] text-center text-[#fdfbf7]/80 text-[10px] py-4 border-t-2 border-[#c59b27]">
          <p>© {new Date().getFullYear()} Haya Ayurvedics. All rights reserved. Wayanad, Kerala, India.</p>
        </div>
      </div>
    </div>
  )
}
