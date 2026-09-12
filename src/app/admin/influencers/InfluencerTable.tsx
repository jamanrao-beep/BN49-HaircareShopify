"use client";

import { useState } from "react";

type InfluencerCode = {
  id: string;
  code: string;
  commissionRate: number | null;
  isActive: boolean;
  attributions: Array<{ id: string; subtotalAmount: any }>;
};

type Influencer = {
  id: string;
  name: string;
  email: string | null;
  createdAt: string | Date;
  codes: InfluencerCode[];
};

export default function InfluencerTable({ initialInfluencers }: { initialInfluencers: Influencer[] }) {
  const [influencers, setInfluencers] = useState<Influencer[]>(initialInfluencers);
  const [showAddInfluencerModal, setShowAddInfluencerModal] = useState(false);
  const [showAddCodeModal, setShowAddCodeModal] = useState<string | null>(null);

  // New Influencer Form State
  const [newInfluencerName, setNewInfluencerName] = useState("");
  const [newInfluencerEmail, setNewInfluencerEmail] = useState("");
  const [newInfluencerCode, setNewInfluencerCode] = useState("");
  const [newInfluencerCommission, setNewInfluencerCommission] = useState("15");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // New Code Form State
  const [additionalCode, setAdditionalCode] = useState("");
  const [additionalCommission, setAdditionalCommission] = useState("15");

  const handleCreateInfluencer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newInfluencerName || !newInfluencerCode) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/influencers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newInfluencerName,
          email: newInfluencerEmail || undefined,
          code: newInfluencerCode,
          commissionRate: parseFloat(newInfluencerCommission) || 15,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.influencer) {
          setInfluencers([
            {
              ...data.influencer,
              codes: data.influencer.codes.map((c: any) => ({ ...c, attributions: [] })),
            },
            ...influencers,
          ]);
        }
        setShowAddInfluencerModal(false);
        setNewInfluencerName("");
        setNewInfluencerEmail("");
        setNewInfluencerCode("");
      } else {
        const err = await res.json();
        alert(err.error || "Failed to create influencer");
      }
    } catch (e) {
      alert("Network error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddCodeToInfluencer = async (influencerId: string) => {
    if (!additionalCode.trim()) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/influencers/codes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          influencerId,
          code: additionalCode.trim().toUpperCase(),
          commissionRate: parseFloat(additionalCommission) || 15,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setInfluencers((prev) =>
          prev.map((inf) => {
            if (inf.id === influencerId) {
              return {
                ...inf,
                codes: [...inf.codes, { ...data.code, attributions: [] }],
              };
            }
            return inf;
          })
        );
        setShowAddCodeModal(null);
        setAdditionalCode("");
      } else {
        const err = await res.json();
        alert(err.error || "Failed to assign code");
      }
    } catch (e) {
      alert("Network error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Influencer Partner Analytics</h1>
          <p className="text-sm text-gray-500 mt-1">Manage influencers and assign multiple promo codes per partner</p>
        </div>
        <button
          onClick={() => setShowAddInfluencerModal(true)}
          className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center gap-2 shadow-sm"
        >
          <span>+ Add Influencer Partner</span>
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-amber-50/50 text-gray-700 border-b border-gray-200">
            <tr>
              <th className="px-5 py-3.5 font-semibold">Influencer Partner</th>
              <th className="px-5 py-3.5 font-semibold">Assigned Promo Code(s)</th>
              <th className="px-5 py-3.5 font-semibold">Total Orders</th>
              <th className="px-5 py-3.5 font-semibold">Attributed Revenue</th>
              <th className="px-5 py-3.5 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {influencers.map((influencer) => {
              const totalOrders = influencer.codes.reduce(
                (acc, code) => acc + (code.attributions ? code.attributions.length : 0),
                0
              );

              const totalRevenue = influencer.codes.reduce(
                (acc, code) =>
                  acc +
                  (code.attributions
                    ? code.attributions.reduce((sum, attr) => sum + Number(attr.subtotalAmount || 0), 0)
                    : 0),
                0
              );

              return (
                <tr key={influencer.id} className="hover:bg-amber-50/20 transition-colors">
                  <td className="px-5 py-4">
                    <div className="font-semibold text-gray-900">{influencer.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{influencer.email || "No email"}</div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-1.5 items-center">
                      {influencer.codes.map((c) => (
                        <span
                          key={c.id}
                          className="inline-flex items-center gap-1 bg-amber-100/80 text-amber-900 font-mono text-xs px-2.5 py-1 rounded-md border border-amber-200/60"
                        >
                          <span className="font-bold">{c.code}</span>
                          <span className="text-[10px] text-amber-700">({Number(c.commissionRate || 15)}%)</span>
                        </span>
                      ))}
                      {influencer.codes.length === 0 && (
                        <span className="text-gray-400 italic text-xs">No codes assigned</span>
                      )}
                    </div>
                  </td>
                  <td className="px-5 py-4 font-medium text-gray-700">{totalOrders}</td>
                  <td className="px-5 py-4 font-semibold text-green-700">£{totalRevenue.toFixed(2)}</td>
                  <td className="px-5 py-4 text-right">
                    <button
                      onClick={() => {
                        setShowAddCodeModal(influencer.id);
                        setAdditionalCode("");
                      }}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1.5 px-3 rounded-md transition-colors inline-flex items-center gap-1 border border-gray-300"
                    >
                      + Assign Code
                    </button>
                  </td>
                </tr>
              );
            })}
            {influencers.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-12 text-center text-gray-500">
                  <div className="max-w-sm mx-auto">
                    <p className="text-base font-medium text-gray-700">No Influencers added yet</p>
                    <p className="text-xs text-gray-400 mt-1">Click "+ Add Influencer Partner" to create your first partner and code.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Influencer Modal */}
      {showAddInfluencerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Add Influencer Partner</h2>
            <form onSubmit={handleCreateInfluencer} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Influencer Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={newInfluencerName}
                  onChange={(e) => setNewInfluencerName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="e.g. priya@instagram.com"
                  value={newInfluencerEmail}
                  onChange={(e) => setNewInfluencerEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">First Promo Code</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. PRIYA10"
                    value={newInfluencerCode}
                    onChange={(e) => setNewInfluencerCode(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 border rounded-lg text-sm uppercase font-mono focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Commission Rate (%)</label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={newInfluencerCommission}
                    onChange={(e) => setNewInfluencerCommission(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddInfluencerModal(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 text-sm bg-amber-700 hover:bg-amber-800 text-white rounded-lg transition-colors font-medium"
                >
                  {isSubmitting ? "Creating..." : "Create Influencer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Assign Extra Code Modal */}
      {showAddCodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6 border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Assign Extra Promo Code</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">New Promo Code</label>
                <input
                  type="text"
                  placeholder="e.g. PRIYA_YT or PRIYA_FESTIVE"
                  value={additionalCode}
                  onChange={(e) => setAdditionalCode(e.target.value.toUpperCase())}
                  className="w-full px-3 py-2 border rounded-lg text-sm uppercase font-mono focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Commission Rate (%)</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={additionalCommission}
                  onChange={(e) => setAdditionalCommission(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddCodeModal(null)}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={isSubmitting || !additionalCode.trim()}
                  onClick={() => handleAddCodeToInfluencer(showAddCodeModal)}
                  className="px-4 py-2 text-sm bg-amber-700 hover:bg-amber-800 text-white rounded-lg transition-colors font-medium"
                >
                  {isSubmitting ? "Assigning..." : "Assign Code"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
