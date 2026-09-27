import React, { useState } from 'react';
import { ORTHOPEDIC_RECOVERY_STEPS, createWhatsAppUrl } from '../data/hospitalData';
import { Activity, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

export const OrthopedicRecovery: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeTab, setActiveTab] = useState<'knee' | 'fracture' | 'spine'>('knee');

  const recoveryScenarios = {
    knee: {
      title: 'Severe Osteoarthritis & Knee Joint Pain',
      before: {
        stage: 'Pre-Treatment Condition',
        mobility: 'Pain score 8/10, unable to climb stairs without assistance, disturbed sleep.',
        findings: 'Severe cartilage erosion and bone spurs in medial compartment.',
        action: 'Chronic reliance on painkillers with restricted daily living.'
      },
      after: {
        stage: 'Post-Care Outcome (6 Weeks)',
        mobility: 'Pain score 1/10, independent walking up to 4 km daily, pain-free squatting.',
        findings: 'Joint alignment restored, active range of motion 125° degrees.',
        action: 'Returned to daily farm/work routine in Jagtial without medication.'
      }
    },
    fracture: {
      title: 'Compound Tibial Bone Fracture (Road Accident)',
      before: {
        stage: 'Emergency Admission',
        mobility: 'Non-weight bearing, severe soft-tissue trauma and displaced bone fragment.',
        findings: 'Open fracture requiring immediate surgical stabilization.',
        action: 'Emergency trauma admission at KVR midnight team.'
      },
      after: {
        stage: 'Full Consolidation (8 Weeks)',
        mobility: 'Full weight-bearing gait, symmetric strength, zero limp or deformity.',
        findings: 'Complete radiological union with anatomical bone alignment.',
        action: 'Fully back to work and driving two-wheelers safely.'
      }
    },
    spine: {
      title: 'Lumbar Disc Herniation & Sciatic Nerve Pain',
      before: {
        stage: 'Pre-Treatment Condition',
        mobility: 'Sharp shooting pain down right leg, unable to sit for >15 minutes.',
        findings: 'L4-L5 disc protrusion compressing right exiting nerve root.',
        action: 'Severely limited work capacity and constant burning numbness.'
      },
      after: {
        stage: 'Targeted Rehabilitation (4 Weeks)',
        mobility: 'Nerve inflammation eliminated, normal sensation and core strength restored.',
        findings: 'Decompressed nerve pathway with strengthened paraspinal musculature.',
        action: 'Comfortable sitting and pain-free workday without surgery.'
      }
    }
  };

  const current = recoveryScenarios[activeTab];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
            <Activity className="w-4 h-4 text-emerald-600" />
            <span>Mobility Restored</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Orthopedic Recovery Journeys
          </h2>
          <p className="text-base text-slate-600">
            Real clinical progressions showing how modern surgery and targeted physiotherapy help patients regain complete freedom of movement.
          </p>

          {/* Condition Selector */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            <button
              onClick={() => setActiveTab('knee')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'knee'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Knee Joint Care
            </button>
            <button
              onClick={() => setActiveTab('fracture')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'fracture'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Trauma & Fracture
            </button>
            <button
              onClick={() => setActiveTab('spine')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'spine'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Spine & Sciatica
            </button>
          </div>
        </div>

        {/* Before / After Comparison Showcase */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-emerald-600">Case Milestone</span>
              <h3 className="text-xl font-bold text-slate-900">{current.title}</h3>
            </div>
            <a
              href={createWhatsAppUrl(`Hello KVR Hospital, I would like to consult about ${current.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors self-start sm:self-auto"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-600" />
              <span>Discuss Your Case</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Before Column */}
            <div className="p-6 sm:p-8 bg-rose-50/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                  {current.before.stage}
                </span>
                <span className="text-xs text-rose-500 font-semibold">Pre-Care</span>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Mobility & Pain Level</p>
                  <p className="text-slate-800 font-medium mt-1">{current.before.mobility}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Diagnostic Evaluation</p>
                  <p className="text-slate-600 mt-1">{current.before.findings}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Patient Status</p>
                  <p className="text-slate-600 mt-1">{current.before.action}</p>
                </div>
              </div>
            </div>

            {/* After Column */}
            <div className="p-6 sm:p-8 bg-emerald-50/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  {current.after.stage}
                </span>
                <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Restored
                </span>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Mobility & Pain Level</p>
                  <p className="text-slate-800 font-semibold text-emerald-900 mt-1">{current.after.mobility}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Diagnostic Evaluation</p>
                  <p className="text-slate-600 mt-1">{current.after.findings}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Functional Status</p>
                  <p className="text-slate-600 mt-1">{current.after.action}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recovery Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ORTHOPEDIC_RECOVERY_STEPS.map((step, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between text-xs text-emerald-700 font-semibold mb-2">
                <span>Phase 0{idx + 1}</span>
                <span className="text-slate-400 font-normal">{step.timeline}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">{step.stage}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
