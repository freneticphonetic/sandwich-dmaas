import { 
  CalendarDays, 
  Layers, 
  Zap, 
  CheckCircle2,
  Lock,
  ShieldCheck,
  Info,
  Star,
  Check,
  X,
  Wand2,
  Beaker,
  CircleDashed,
  Cpu,
  Loader2
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function App() {
  const [hamStatus, setHamStatus] = useState<'idle' | 'deploying' | 'deployed'>('idle');

  useEffect(() => {
    console.log("%c🥪 Sandwich™ Logistics v2.4", "font-weight: bold; font-size: 20px; color: #f2ca50; background: #131313; padding: 4px 8px; border-radius: 4px; border: 1px solid #d4af37;");
    console.log("%c[SYSTEM] Deli Node initialized. Establishing cold-chain...", "color: #93c5fd");
    console.log("%c[INFO] Routing mustard clusters... OK", "color: #86efac");
    console.log("%c[WARNING] Local state mutated. Unallocated ham detected in node 4. Initiating predictive refrigeration.", "color: #fde047");
    console.log("%c[LEGAL] By reading this console, you legally forfeit all rollover rights to unused sandwiches.", "color: #fda4af");
    console.log("%c[MEMO] Re: DMaaS Phonetics. Please remind stakeholders that sounding like 'DUM-ass' does not impact meat integrity.", "color: #94a3b8; font-style: italic;");
  }, []);

  const handleDeployHam = () => {
    if (hamStatus !== 'idle') return;
    
    setHamStatus('deploying');
    console.log("%c[ACTION] Ham deployment initiated. Allocating bread resources...", "color: #f2ca50");
    
    setTimeout(() => {
      setHamStatus('deployed');
      console.log("%c[SUCCESS] Ham deployed successfully to US-East-Deli-1.", "color: #86efac");
      
      setTimeout(() => {
        setHamStatus('idle');
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-surface font-body overflow-hidden flex flex-col">
      {/* Navigation */}
      <nav className="bg-surface/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <a href="#" className="font-display text-2xl text-primary font-black uppercase tracking-tight hover:opacity-80 transition-opacity">
              Sandwich™
            </a>
            <div className="hidden md:flex gap-6">
              <a href="#" className="text-on-surface-variant font-medium hover:text-primary transition-colors">Meat Status</a>
              <a href="#" className="text-on-surface-variant font-medium hover:text-primary transition-colors">Condiment API</a>
              <a href="#" className="text-primary font-semibold border-b-2 border-primary pb-1">Infrastructure</a>
              <a href="#" className="text-on-surface-variant font-medium hover:text-primary transition-colors">Logistics</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-on-surface-variant hover:text-primary font-medium px-4 py-2 transition-colors">
              Login
            </button>
            <button 
              onClick={handleDeployHam}
              disabled={hamStatus !== 'idle'}
              className="bg-primary text-on-primary font-semibold px-6 py-2 rounded-md hover:bg-primary-fixed transition-colors focus:scale-95 transform disabled:opacity-80 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
            >
              {hamStatus === 'idle' && "Deploy Ham"}
              {hamStatus === 'deploying' && (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Slicing...
                </>
              )}
              {hamStatus === 'deployed' && (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Deployed
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 px-6 flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface-variant/40 via-surface to-surface -z-10 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              DMaaS Pricing Engine V2.4
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white pb-2 leading-tight">
              Scale your lunch. <br />
              <span className="bg-pro-gradient text-transparent bg-clip-text">Not your waistline.</span>
            </h1>
            
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
              The world's first refrigerated SaaS model with deep mustard integration. Provision enterprise-grade deli meat with sub-millisecond latency.
            </p>

            {/* Sandwich Aesthetic Element */}
            <div className="mt-16 w-full max-w-3xl mx-auto relative rounded-2xl border border-white/10 bg-surface-container-low shadow-2xl overflow-hidden aspect-video">
              <img 
                src={`${import.meta.env.BASE_URL}sandwich-pro-promo.png`}
                alt="High-resolution, appetizing sandwich imagery reflecting premium DMaaS offering"
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 opacity-80"
              />
              <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
            </div>
          </div>
        </section>

        {/* 4-Tier Pricing Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Basic Tier */}
            <div className="bg-surface-container-low border border-white/10 rounded-xl p-8 flex flex-col hover:border-white/20 transition-colors">
              <div className="mb-8">
                <h3 className="font-display text-2xl font-medium text-white mb-2">Sandwich™ Basic</h3>
                <p className="text-on-surface-variant/80 min-h-[48px]">White bread only. Lettuce latency may vary.</p>
              </div>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-white">$0.99</span>
                <span className="text-on-surface-variant">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-on-surface-variant">
                  <CheckCircle2 className="w-5 h-5 text-on-surface-variant/50 shrink-0" />
                  <span>1 sandwich per day</span>
                </li>
                <li className="flex items-start gap-3 text-on-surface-variant">
                  <CheckCircle2 className="w-5 h-5 text-on-surface-variant/50 shrink-0" />
                  <span>Standard mustard routing</span>
                </li>
              </ul>
              <button className="w-full bg-transparent border border-outline text-white font-semibold py-3 rounded-md hover:bg-surface-container transition-colors">
                Deploy Basic
              </button>
            </div>

            {/* Pro Tier (Highlighted) */}
            <div className="bg-surface-container border border-primary/30 rounded-xl p-8 flex flex-col relative shadow-[0_0_50px_rgba(242,202,80,0.1)] lg:-translate-y-4 lg:scale-[1.02]">
              <div className="absolute top-0 inset-x-0 h-1 bg-pro-gradient" />
              <div className="absolute top-4 right-4 bg-primary text-on-primary font-mono text-[10px] px-2 py-1 rounded-sm uppercase font-bold tracking-wider">
                Best Value
              </div>
              <div className="mb-8">
                <h3 className="font-display text-2xl font-medium text-primary mb-2 flex items-center gap-2">
                  Sandwich™ Pro <Star className="w-5 h-5 fill-primary" />
                </h3>
                <p className="text-on-surface-variant/80 min-h-[48px]">Priority pickle queue. No rollover.</p>
              </div>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold text-white">$4.99</span>
                <span className="text-primary font-medium">/month</span>
              </div>
              <ul className="space-y-6 mb-8 flex-grow">
                <li className="flex items-start gap-4">
                  <CalendarDays className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Lifetime Supply</h4>
                    <p className="font-mono text-xs text-on-surface-variant mt-1">2 sandwiches per day.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Layers className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Premium Ingredients</h4>
                    <p className="font-mono text-xs text-on-surface-variant mt-1">Unlock exclusive flavor packs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Faster Performance</h4>
                    <p className="font-mono text-xs text-on-surface-variant mt-1">Priority processing & zero wait.</p>
                  </div>
                </li>
              </ul>
              <button className="w-full bg-primary text-on-primary font-bold py-4 rounded-md shadow-[0_0_20px_rgba(242,202,80,0.2)] hover:bg-primary-fixed transition-colors active:scale-95 transform">
                Start Pro
              </button>
              <p className="text-center font-mono text-xs mt-4 text-on-surface-variant">7-day free trial</p>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-surface-container-low border border-white/10 rounded-xl p-8 flex flex-col hover:border-white/20 transition-colors">
              <div className="mb-8">
                <h3 className="font-display text-2xl font-medium text-white mb-2">Sandwich™ Enterprise</h3>
                <p className="text-on-surface-variant/80 min-h-[48px]">Custom deli stack architecture. SSO: Single Sandwich Onboarding.</p>
              </div>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-white">$49</span>
                <span className="text-on-surface-variant">/mo/user</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-on-surface-variant">
                  <ShieldCheck className="w-5 h-5 text-on-surface-variant/50 shrink-0" />
                  <span>Dedicated Meat Success Manager</span>
                </li>
                <li className="flex items-start gap-3 text-on-surface-variant">
                  <Lock className="w-5 h-5 text-on-surface-variant/50 shrink-0" />
                  <span>SAML/SSO Integration</span>
                </li>
              </ul>
              <button className="w-full bg-surface-variant text-white font-semibold py-3 rounded-md hover:bg-surface-bright transition-colors border border-white/5">
                Contact Sales
              </button>
            </div>

            {/* Ultra Tier */}
            <div className="bg-surface-container-low border border-white/10 rounded-xl p-8 flex flex-col hover:border-white/20 transition-colors relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="mb-8 relative z-10">
                <h3 className="font-display text-2xl font-medium text-white mb-2">Sandwich™ Ultra</h3>
                <p className="text-on-surface-variant/80 min-h-[48px]">Predictive ham allocation. Turkey Sandbox access.</p>
              </div>
              <div className="mb-8 flex items-baseline gap-1 relative z-10">
                <span className="font-display text-4xl font-bold text-white">Custom</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow relative z-10">
                <li className="flex items-start gap-3 text-on-surface-variant">
                  <Wand2 className="w-5 h-5 text-primary shrink-0" />
                  <span>AI-powered condiment optimization</span>
                </li>
                <li className="flex items-start gap-3 text-on-surface-variant">
                  <Beaker className="w-5 h-5 text-primary shrink-0" />
                  <span>Unlimited Turkey Sandbox</span>
                </li>
              </ul>
              <button className="w-full bg-transparent border border-primary text-primary font-semibold py-3 rounded-md hover:bg-primary/10 transition-colors relative z-10">
                Request Invite
              </button>
            </div>
            
          </div>
          
          <p className="text-center font-mono text-xs text-on-surface-variant/60 mt-12 flex items-center justify-center gap-2">
            <Info className="w-4 h-4" />
            Lifetime supply capped at 2 sandwiches per day. No rollover sandwiches.
          </p>
        </section>

        {/* Technical Comparison Table */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
          <h2 className="font-display text-4xl font-medium text-center mb-16 text-white">Architectural Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 px-6 font-mono text-xs text-on-surface-variant uppercase tracking-widest w-1/3">Feature Metric</th>
                  <th className="py-6 px-6 text-center font-display text-xl text-white w-1/6">Basic</th>
                  <th className="py-6 px-6 text-center font-display text-xl text-primary w-1/6 relative">
                    Pro
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />
                  </th>
                  <th className="py-6 px-6 text-center font-display text-xl text-white w-1/6">Enterprise</th>
                  <th className="py-6 px-6 text-center font-display text-xl text-white w-1/6">Ultra</th>
                </tr>
              </thead>
              <tbody className="font-body text-on-surface-variant">
                <tr className="border-b border-white/5 hover:bg-surface-container-low transition-colors">
                  <td className="py-5 px-6">Meat Latency p99</td>
                  <td className="py-5 px-6 text-center font-mono text-sm">450ms</td>
                  <td className="py-5 px-6 text-center font-mono text-sm text-primary font-bold">12ms</td>
                  <td className="py-5 px-6 text-center font-mono text-sm">2ms</td>
                  <td className="py-5 px-6 text-center font-mono text-sm">Sub-ms</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-surface-container-low transition-colors">
                  <td className="py-5 px-6">Bread Uptime SLA</td>
                  <td className="py-5 px-6 text-center font-mono text-sm">99.9%</td>
                  <td className="py-5 px-6 text-center font-mono text-sm text-primary font-bold">99.99%</td>
                  <td className="py-5 px-6 text-center font-mono text-sm">99.999%</td>
                  <td className="py-5 px-6 text-center font-mono text-sm">100% Guaranteed</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-surface-container-low transition-colors">
                  <td className="py-5 px-6">Condiment API Calls/sec</td>
                  <td className="py-5 px-6 text-center font-mono text-sm">10</td>
                  <td className="py-5 px-6 text-center font-mono text-sm text-primary font-bold">100</td>
                  <td className="py-5 px-6 text-center font-mono text-sm">10,000</td>
                  <td className="py-5 px-6 text-center font-mono text-sm">Unlimited</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-surface-container-low transition-colors">
                  <td className="py-5 px-6">Pickle Encryption</td>
                  <td className="py-5 px-6 text-center"><X className="w-5 h-5 mx-auto text-on-surface-variant/30" /></td>
                  <td className="py-5 px-6 text-center"><Check className="w-5 h-5 mx-auto text-primary" /></td>
                  <td className="py-5 px-6 text-center"><Check className="w-5 h-5 mx-auto text-white/70" /></td>
                  <td className="py-5 px-6 text-center"><Check className="w-5 h-5 mx-auto text-white" /></td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-surface-container-low transition-colors">
                  <td className="py-5 px-6">Turkey Sandbox</td>
                  <td className="py-5 px-6 text-center"><X className="w-5 h-5 mx-auto text-on-surface-variant/30" /></td>
                  <td className="py-5 px-6 text-center"><X className="w-5 h-5 mx-auto text-on-surface-variant/30" /></td>
                  <td className="py-5 px-6 text-center"><CircleDashed className="w-5 h-5 mx-auto text-white/70" /></td>
                  <td className="py-5 px-6 text-center"><Check className="w-5 h-5 mx-auto text-white" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* DMaaS Dictionary Definition */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
          <div className="bg-surface-container-lowest border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            
            <h2 className="font-display text-3xl font-medium text-white mb-2 flex items-baseline gap-4 relative z-10">
              Deli Meat-as-a-Service
              <span className="font-mono text-sm text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded">DMaaS</span>
            </h2>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <span className="font-mono text-sm text-on-surface-variant/60">/ˈdəmˌas/ • noun</span>
            </div>

            <div className="space-y-6 font-body text-on-surface-variant leading-relaxed relative z-10">
              <p>
                A refrigerated enterprise subscription model in which sandwich access is abstracted into a scalable, cloud-adjacent entitlement architecture, allowing users to provision deli meat through tiers, dashboards, compliance language, and legally non-rollover lunch credits.
              </p>
              <p>
                Despite its premium branding, DMaaS does not guarantee unlimited sandwiches. A "lifetime supply" is contractually defined as up to two sandwiches per day, subject to daily expiration, regional cold-chain availability, and the subscriber's continued acceptance of silent console-based legal forfeiture.
              </p>
              <p>
                Common features include mustard routing, bread uptime SLAs, pickle encryption, predictive ham allocation, and the highly coveted Turkey Sandbox.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 space-y-6 relative z-10">
              <div>
                <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-3">Example:</h4>
                <p className="font-body text-sm italic border-l-2 border-primary/30 pl-4 py-1 text-on-surface-variant/80">
                  "After upgrading to Sandwich™ Pro, I discovered that DMaaS gave me excellent ham observability but no rollover sandwich rights."
                </p>
              </div>
              <div>
                <h4 className="font-mono text-xs text-white uppercase tracking-widest mb-3">Usage Note & Legal Addendum:</h4>
                <p className="font-body text-sm text-on-surface-variant/80 mb-6">
                  The acronym is officially said aloud as <strong className="text-primary font-medium">DUM-ass</strong>.
                </p>
                <div className="bg-[#1a1a1a] border border-[#ffb4ab]/20 p-4 rounded-md relative shadow-inner">
                  <div className="absolute top-0 left-0 w-[4px] h-full bg-[#ffb4ab]/50 rounded-l-md" />
                  <p className="font-mono text-[10px] text-[#ffb4ab]/80 uppercase tracking-widest mb-3 border-b border-[#ffb4ab]/10 pb-2">Interoffice Memo — Legal Dept</p>
                  <p className="font-body text-sm italic text-on-surface-variant/90 leading-relaxed">
                    "While DMaaS may be read phonetically as 'DUM-ass,' stakeholders should emphasize that this is not reflective of platform quality, meat integrity, or sandwich entitlement outcomes."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Logistics Footer */}
      <footer className="bg-[#0e0e0e] border-t border-white/5 pb-12 pt-20 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="max-w-md">
            <h4 className="font-display text-xl text-on-surface-variant mb-6">Sandwich™ Logistics</h4>
            <p className="font-body text-sm text-on-surface-variant/60 mb-4 leading-relaxed">
              © 2026 Sandwich Logistics Corp. DMaaS is a registered trademark of the Meat Integration Bureau. Unused ham does not roll over. Subject to refrigerated terms.
            </p>
            <p className="font-mono text-[10px] text-on-surface-variant/40 leading-relaxed uppercase tracking-widest border-t border-white/5 pt-4 mt-4">
              Legal: "Lifetime supply" refers to the projected lifetime of the sandwich entitlement architecture, not the subscriber's biological lifespan.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-white uppercase tracking-widest mb-3">Infrastructure</span>
            <a href="#" className="font-body text-sm text-on-surface-variant/60 hover:text-primary transition-colors">Meat Latency API</a>
            <a href="#" className="font-body text-sm text-on-surface-variant/60 hover:text-primary transition-colors">Bread Ethics</a>
            <a href="#" className="font-body text-sm text-on-surface-variant/60 hover:text-primary transition-colors">Cursed TOS</a>
            <a href="#" className="font-body text-sm text-on-surface-variant/60 hover:text-primary transition-colors">Refrigeration Status</a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-white uppercase tracking-widest mb-3">System Status</span>
            <div className="flex items-center gap-3 bg-surface-container-low px-4 py-2 border border-white/5 rounded-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">Deli Node Active</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 mt-2 border border-white/5 rounded-md">
              <Cpu className="w-4 h-4 text-white/50" />
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest">Load: 0.04 Hams/s</span>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
}

