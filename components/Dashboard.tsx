import React, { useState } from 'react';
import { ChevronRight, DollarSign, Clock, FileText, BarChart3, Settings, Lightbulb } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('services');

  const tabs = [
    { id: 'services', label: 'Our Services', icon: Settings },
    { id: 'billing', label: 'Billing Models', icon: DollarSign },
    { id: 'licensing', label: 'Sync Licensing', icon: FileText },
    { id: 'budget', label: 'Budget Example', icon: BarChart3 },
    { id: 'levers', label: 'Cost Factors', icon: Clock },
    { id: 'takeaways', label: 'Key Insights', icon: Lightbulb }
  ];

  const services = [
    {
      title: "Creative Search & Curation",
      description: "Building shortlists that fit storyboards, brand-voice guidelines, budget, and clearance risk."
    },
    {
      title: "Clearance & Licensing",
      description: "Confirming ownership, negotiating fees with labels/publishers, drafting synch (& often master) licences and cue-sheets."
    },
    {
      title: "Budget Stewardship",
      description: "Splitting spend between creative fee, master fee, publishing fee, re-records, temp cues, demo/kill fees, etc."
    },
    {
      title: "Rights Risk Management",
      description: "Vetting writers, sample traces, arranging E&O insurance, advising when a buy-out or re-record is safer."
    },
    {
      title: "Sonic-Identity Work",
      description: "Building long-term brand 'music DNA' guides and maintaining a searchable catalogue for future spots."
    }
  ];

  const billingModels = [
    {
      model: "Flat Project Fee",
      usage: "Films, one-off commercials, game trailers",
      ranges: [
        "Short digital ad: $2k – $7k",
        "National TV spot: $10k – $25k",
        "Global / Super Bowl: $25k – $60k"
      ],
      notes: "Supervisor is an independent contractor paid to deliver 'all music done.'"
    },
    {
      model: "Per-Episode Fee",
      usage: "Scripted / unscripted TV",
      ranges: ["$1.5k – $5k per episode (cable/streaming)"],
      notes: "No residuals; fee covers spotting through cue-sheet delivery."
    },
    {
      model: "Hourly Consulting",
      usage: "Smaller brands, agency in-house",
      ranges: ["$100-$250/hr with ten-hour-per-month minimums"],
      notes: "Seen where the brand picks its own music and needs only clearance help."
    },
    {
      model: "Percentage Markup",
      usage: "Some advertising agencies",
      ranges: ["10 – 20% on every synch licence negotiated"],
      notes: "Billed on top of the track's actual licence cost."
    },
    {
      model: "Monthly Retainer",
      usage: "Ongoing sonic-branding partnerships",
      ranges: ["$3k – $10k+ per month"],
      notes: "Covers continuous curation, playlists, rapid clearances; licences are pass-through."
    }
  ];

  const syncCosts = [
    {
      usage: "30-sec U.S. commercial, 1-year",
      indie: "$15k – $60k all-in",
      wellKnown: "$150k – $500k+",
      factors: "Exclusivity, term, media, artist fame"
    },
    {
      usage: "Global broadcast + digital, 2 yr",
      indie: "$40k – $120k",
      wellKnown: "$250k – $1M+",
      factors: "Territory expansion multiplies cost"
    },
    {
      usage: "Social-only campaign (paid & organic)",
      indie: "$1k – $10k",
      wellKnown: "$25k – $60k",
      factors: "Often negotiated as a 'digital-only' carve-out"
    },
    {
      usage: "Super-Bowl or Olympics spot",
      indie: "$250k – $2M",
      wellKnown: "$1M – $5M+",
      factors: "Peak media buy + perpetual brand association"
    }
  ];

  const budgetExample = [
    {
      item: "Supervisor creative/clearance fee",
      low: "$12,000",
      high: "$20,000",
      notes: "Flat project"
    },
    {
      item: "Music research expenses (subscriptions, indie pitches)",
      low: "$1,500",
      high: "$3,000",
      notes: "Pass-through"
    },
    {
      item: "Licence – master (label)",
      low: "$20,000",
      high: "$75,000",
      notes: "Negotiated by supervisor"
    },
    {
      item: "Licence – publishing (publisher(s))",
      low: "$20,000",
      high: "$75,000",
      notes: "Must match master scope"
    },
    {
      item: "Post-production (edit, stems, arrange)",
      low: "$2,500",
      high: "$7,500",
      notes: "If re-edit or custom mix needed"
    },
    {
      item: "Cue-sheet filing & admin",
      low: "$1,000",
      high: "$2,000",
      notes: "Often bundled"
    }
  ];

  const negotiationLevers = [
    {
      lever: "Shorter term (6 – 12 months)",
      benefit: "Fee drops 30-50%",
      tradeoff: "Renewal fees down the line"
    },
    {
      lever: "Territory carve-outs (U.S. only, no China)",
      benefit: "10-25% lower",
      tradeoff: "Limits global re-use"
    },
    {
      lever: "Media carve-outs (TV+online, exclude cinema)",
      benefit: "5-15% lower",
      tradeoff: "Restricts future edits"
    },
    {
      lever: "Re-record/cover",
      benefit: "Keeps composition cost, avoids expensive master",
      tradeoff: "Production cost & time"
    },
    {
      lever: "Library/production music",
      benefit: "$500-$5k all-in",
      tradeoff: "Less recognisable track"
    }
  ];

  const keyTakeaways = [
    "Separate creative fee from licence spend – that keeps incentives clear.",
    "Lock scope early (media, term, territory, exclusivity) – every change spirals cost.",
    "Insist on cue-sheet delivery & E&O guidance – reduces downstream PRO or litigation headaches.",
    "Budget demo/kill fees if you're running blind compositions.",
    "Consider a rolling retainer if you'll be producing content year-round; it's cheaper than new project fees every month."
  ];

  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#121212'}}>
      {/* Header */}
      <div style={{backgroundColor: '#1A1A1A'}} className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Sync Money Supervision</h1>
          <p className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">Comprehensive pricing guide and service overview</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 mb-6 sm:mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                  activeTab === tab.id
                    ? 'bg-green-500 text-black'
                    : 'text-gray-200 hover:text-white'
                }`}
                style={{
                  backgroundColor: activeTab === tab.id ? '#4DF4B0' : '#2A2A2A',
                  borderColor: activeTab === tab.id ? '#4DF4B0' : '#404040',
                  borderWidth: '1px'
                }}
              >
                <Icon size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Content Sections */}
        {activeTab === 'services' && (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">What We Do</h2>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Comprehensive music supervision services for brands, agencies, and content creators.</p>
            </div>
            
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div key={index} style={{backgroundColor: '#1E1E1E'}} className="p-4 sm:p-6 rounded-lg border border-gray-700">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3" style={{ color: '#4DF4B0' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'billing' && (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Billing Models</h2>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">How we structure our fees based on project type and scope.</p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {billingModels.map((model, index) => (
                <div key={index} style={{backgroundColor: '#1E1E1E'}} className="p-4 sm:p-6 rounded-lg border border-gray-700">
                  <div className="space-y-3 sm:space-y-0 sm:flex sm:justify-between sm:items-start mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold" style={{ color: '#4DF4B0' }}>
                      {model.model}
                    </h3>
                    <span className="inline-block text-xs sm:text-sm text-gray-300 px-2 sm:px-3 py-1 rounded" style={{backgroundColor: '#2A2A2A'}}>
                      {model.usage}
                    </span>
                  </div>
                  <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                    {model.ranges.map((range, i) => (
                      <div key={i} className="text-sm sm:text-lg font-mono text-white">
                        • {range}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-200 text-xs sm:text-sm">{model.notes}</p>
                </div>
              ))}
            </div>

            <div style={{backgroundColor: '#1E1E1E'}} className="p-4 sm:p-6 rounded-lg border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: '#4DF4B0' }}>
                Kill/Demo Fees
              </h3>
              <p className="text-gray-200 text-sm sm:text-base">
                When multiple composers pitch, unused demos are often paid at ~10-15% of the full cue fee.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'licensing' && (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Sync Licensing Costs</h2>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">What you pay to rights-holders for music usage.</p>
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="min-w-full inline-block align-middle">
                <table className="w-full rounded-lg overflow-hidden" style={{backgroundColor: '#1E1E1E', minWidth: '600px'}}>
                  <thead style={{backgroundColor: '#2A2A2A'}}>
                    <tr>
                      <th className="text-left p-2 sm:p-4 font-semibold text-xs sm:text-sm">Usage</th>
                      <th className="text-left p-2 sm:p-4 font-semibold text-xs sm:text-sm">Indie Track</th>
                      <th className="text-left p-2 sm:p-4 font-semibold text-xs sm:text-sm">Well-Known</th>
                      <th className="text-left p-2 sm:p-4 font-semibold text-xs sm:text-sm">Factors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {syncCosts.map((cost, index) => (
                      <tr key={index} className="border-t" style={{borderColor: '#404040'}}>
                        <td className="p-2 sm:p-4 font-medium text-xs sm:text-sm">{cost.usage}</td>
                        <td className="p-2 sm:p-4 font-mono text-xs sm:text-sm" style={{ color: '#4DF4B0' }}>
                          {cost.indie}
                        </td>
                        <td className="p-2 sm:p-4 font-mono text-xs sm:text-sm" style={{ color: '#4DF4B0' }}>
                          {cost.wellKnown}
                        </td>
                        <td className="p-2 sm:p-4 text-gray-200 text-xs sm:text-sm">{cost.factors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div style={{backgroundColor: '#1E1E1E'}} className="p-4 sm:p-6 rounded-lg border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: '#4DF4B0' }}>
                Market Insights
              </h3>
              <p className="text-gray-200 mb-2 text-sm sm:text-base">
                Ari Herstand's recent market survey pegs commercial campaigns for indie artists anywhere from 
                <span className="font-mono text-white"> $20k to $550k+ </span> depending on scale.
              </p>
              <p className="text-gray-200 text-sm sm:text-base">
                Games and some global brands increasingly push full buy-outs (no backend royalties) in exchange 
                for a lump-sum, e.g., Rockstar's GTA VI offer of ~$22.5k all-in to Heaven 17 for perpetual use.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'budget' && (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Budget Breakdown</h2>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                End-to-end budget example for a 30-second national TV + digital campaign (1-year U.S.)
              </p>
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="min-w-full inline-block align-middle">
                <table className="w-full rounded-lg overflow-hidden" style={{backgroundColor: '#1E1E1E', minWidth: '600px'}}>
                  <thead style={{backgroundColor: '#2A2A2A'}}>
                    <tr>
                      <th className="text-left p-2 sm:p-4 font-semibold text-xs sm:text-sm">Line Item</th>
                      <th className="text-left p-2 sm:p-4 font-semibold text-xs sm:text-sm">Low</th>
                      <th className="text-left p-2 sm:p-4 font-semibold text-xs sm:text-sm">High</th>
                      <th className="text-left p-2 sm:p-4 font-semibold text-xs sm:text-sm">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {budgetExample.map((item, index) => (
                      <tr key={index} className="border-t" style={{borderColor: '#404040'}}>
                        <td className="p-2 sm:p-4 font-medium text-xs sm:text-sm">{item.item}</td>
                        <td className="p-2 sm:p-4 font-mono text-xs sm:text-sm" style={{ color: '#4DF4B0' }}>
                          {item.low}
                        </td>
                        <td className="p-2 sm:p-4 font-mono text-xs sm:text-sm" style={{ color: '#4DF4B0' }}>
                          {item.high}
                        </td>
                        <td className="p-2 sm:p-4 text-gray-200 text-xs sm:text-sm">{item.notes}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2" style={{borderColor: '#505050', backgroundColor: '#252525'}}>
                      <td className="p-2 sm:p-4 font-bold text-sm sm:text-lg">Total</td>
                      <td className="p-2 sm:p-4 font-mono font-bold text-sm sm:text-lg" style={{ color: '#4DF4B0' }}>
                        $57k
                      </td>
                      <td className="p-2 sm:p-4 font-mono font-bold text-sm sm:text-lg" style={{ color: '#4DF4B0' }}>
                        $182k
                      </td>
                      <td className="p-2 sm:p-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'levers' && (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Cost Negotiation Factors</h2>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Levers brands and supervisors use to adjust pricing.</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {negotiationLevers.map((lever, index) => (
                <div key={index} style={{backgroundColor: '#1E1E1E'}} className="p-4 sm:p-6 rounded-lg border border-gray-700">
                  <div className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-2" style={{ color: '#4DF4B0' }}>
                        {lever.lever}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                        <span className="text-green-400 text-sm sm:text-base">✓ Benefits:</span>
                        <span className="text-white text-sm sm:text-base">{lever.benefit}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 pt-2 sm:pt-0">
                      <span className="text-orange-400 text-sm sm:text-base">⚠ Trade-off:</span>
                      <span className="text-gray-200 text-sm sm:text-base">{lever.tradeoff}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'takeaways' && (
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Key Insights</h2>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Building effective brand-supervisor partnerships with these benchmarks.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {keyTakeaways.map((takeaway, index) => (
                <div key={index} style={{backgroundColor: '#1E1E1E'}} className="p-4 sm:p-6 rounded-lg flex items-start gap-3 sm:gap-4 border border-gray-700">
                  <div 
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-black font-bold flex-shrink-0 text-sm sm:text-base"
                    style={{ backgroundColor: '#4DF4B0' }}
                  >
                    {index + 1}
                  </div>
                  <p className="text-gray-200 text-sm sm:text-lg">{takeaway}</p>
                </div>
              ))}
            </div>

            <div style={{backgroundColor: '#1E1E1E'}} className="p-4 sm:p-6 rounded-lg border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold mb-3" style={{ color: '#4DF4B0' }}>
                Contract Architecture
              </h3>
              <div className="space-y-2 sm:space-y-3 text-gray-200 text-sm sm:text-base">
                <p><strong>1. Master Services Agreement (MSA)</strong> - Defines relationship, indemnities, confidentiality, IP ownership</p>
                <p><strong>2. Statement of Work per campaign</strong> - Scope, targets, approval process, fee caps, timeline</p>
                <p><strong>3. Payment terms</strong> - 50% on commencement, 50% on delivery or net-30</p>
                <p><strong>4. Liability & insurance</strong> - Supervisor warrants best-effort clearance; brand secures E&O</p>
                <p><strong>5. Credits & promo use</strong> - Right to list brand in supervisor's reel</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;