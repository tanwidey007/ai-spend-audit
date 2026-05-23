// "use client";

// import { useState } from "react";

// interface AuditResult {
//   currentSpend: number;
//   optimizedSpend: number;
//   savings: number;
//   recommendation: string;
// }

// export default function AuditForm() {
//   const [teamSize, setTeamSize] = useState("");
//   const [monthlySpend, setMonthlySpend] = useState("");
  
//   const [result, setResult] = useState<AuditResult | null>(null);

//   const generateAudit = () => {
//     const spend = Number(monthlySpend);
//     const team = Number(teamSize);

//     if (!spend || !team) {
//       alert("Please enter valid values.");
//       return;
//     }

//     let optimizedSpend = spend;
//     let recommendation = "Your AI spending looks optimized.";

//     // Dynamic logic
//     if (team <= 3) {
//       optimizedSpend = spend * 0.7;

//       recommendation =
//         "Smaller teams often overpay for enterprise AI subscriptions. Downgrading plans could significantly reduce costs.";
//     } else if (team <= 10) {
//       optimizedSpend = spend * 0.8;

//       recommendation =
//         "Your team may benefit from consolidating overlapping AI subscriptions and optimizing seat allocation.";
//     } else {
//       optimizedSpend = spend * 0.9;

//       recommendation =
//         "Large teams may reduce infrastructure costs through discounted AI credits and centralized procurement.";
//     }

//     const savings = spend - optimizedSpend;

//     setResult({
//       currentSpend: spend,
//       optimizedSpend,
//       savings,
//       recommendation,
//     });
//   };
//   const saveLead = async () => {
//   try {
//     const response = await fetch("/api/leads", {
//       method: "POST",

//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify({
//         email,
//         company,
//         role,
//         team_size: Number(teamSize),
//       }),
//     });

//     const data = await response.json();

//     if (data.success) {
//       alert("Lead saved successfully!");
//     } else {
//       alert("Failed to save lead.");
//     }
//   } catch (error) {
//     console.error(error);

//     alert("Something went wrong.");
//   }
// };

//   return (
//     <div className="space-y-8">
//       {/* FORM */}
//       <div className="rounded-3xl border border-gray-800 bg-gray-950 p-8 shadow-2xl">
//         <div className="grid gap-6 md:grid-cols-2">
//           <div>
//             <label className="mb-2 block text-sm text-gray-400">
//               Team Size
//             </label>

//             <input
//               type="number"
//               placeholder="5"
//               value={teamSize}
//               onChange={(e) => setTeamSize(e.target.value)}
//               className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none"
//             />
//           </div>

//           <div>
//             <label className="mb-2 block text-sm text-gray-400">
//               Monthly AI Spend ($)
//             </label>

//             <input
//               type="number"
//               placeholder="500"
//               value={monthlySpend}
//               onChange={(e) => setMonthlySpend(e.target.value)}
//               className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none"
//             />
//           </div>
//         </div>

//         <button
//           onClick={generateAudit}
//           className="mt-8 w-full rounded-xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-[1.02]"
//         >
//           Generate Free Audit
//         </button>
//       </div>

//       {/* RESULTS */}
//       {result && (
//         <div className="space-y-6">
//           <div className="rounded-2xl bg-green-500/10 p-6 text-center">
//             <h2 className="text-5xl font-bold text-green-400">
//               ${result.savings.toFixed(0)}/mo
//             </h2>

//             <p className="mt-3 text-gray-300">
//               Potential Monthly Savings
//             </p>

//             <p className="mt-2 text-sm text-gray-500">
//               Estimated annual savings: $
//               {(result.savings * 12).toFixed(0)}
//             </p>
//           </div>

//           <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
//             <div className="flex items-center justify-between">
//               <h3 className="text-xl font-semibold">
//                 AI Spend Analysis
//               </h3>

//               <div className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
//                 Save ${result.savings.toFixed(0)}
//               </div>
//             </div>

//             <div className="mt-6 grid gap-4 md:grid-cols-2">
//               <div>
//                 <p className="text-sm text-gray-400">
//                   Current Spend
//                 </p>

//                 <p className="mt-1 text-3xl font-bold">
//                   ${result.currentSpend}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-sm text-gray-400">
//                   Optimized Spend
//                 </p>

//                 <p className="mt-1 text-3xl font-bold text-green-400">
//                   ${result.optimizedSpend.toFixed(0)}
//                 </p>
//               </div>
//             </div>

//             <p className="mt-6 text-gray-300">
//               {result.recommendation}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useState } from "react";

interface AuditResult {
  currentSpend: number;
  optimizedSpend: number;
  savings: number;
  recommendation: string;
}

export default function AuditForm() {
  // FORM STATES
  const [teamSize, setTeamSize] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");

  // LEAD STATES
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  // RESULT STATE
  const [result, setResult] = useState<AuditResult | null>(null);

  // GENERATE AUDIT
  const generateAudit = () => {
    const spend = Number(monthlySpend);
    const team = Number(teamSize);

    if (!spend || !team) {
      alert("Please enter valid values.");
      return;
    }

    let optimizedSpend = spend;
    let recommendation = "Your AI spending looks optimized.";

    // Dynamic logic
    if (team <= 3) {
      optimizedSpend = spend * 0.7;

      recommendation =
        "Smaller teams often overpay for enterprise AI subscriptions. Downgrading plans could significantly reduce costs.";
    } else if (team <= 10) {
      optimizedSpend = spend * 0.8;

      recommendation =
        "Your team may benefit from consolidating overlapping AI subscriptions and optimizing seat allocation.";
    } else {
      optimizedSpend = spend * 0.9;

      recommendation =
        "Large teams may reduce infrastructure costs through discounted AI credits and centralized procurement.";
    }

    const savings = spend - optimizedSpend;

    setResult({
      currentSpend: spend,
      optimizedSpend,
      savings,
      recommendation,
    });
  };

  // SAVE LEAD TO DATABASE
  const saveLead = async () => {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          company,
          role,
          team_size: Number(teamSize),
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Lead saved successfully!");
      } else {
        alert("Failed to save lead.");
      }
    } catch (error) {
      console.error(error);

      alert("Something went wrong.");
    }
  };

  return (
    <div className="space-y-8">
      {/* FORM */}
      <div className="rounded-3xl border border-gray-800 bg-gray-950 p-8 shadow-2xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* TEAM SIZE */}
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Team Size
            </label>

            <input
              type="number"
              placeholder="5"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none"
            />
          </div>

          {/* MONTHLY SPEND */}
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Monthly AI Spend ($)
            </label>

            <input
              type="number"
              placeholder="500"
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(e.target.value)}
              className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none"
            />
          </div>
        </div>

        {/* LEAD FORM */}
        <div className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none"
          />

          <input
            type="text"
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none"
          />

          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 outline-none"
          />
        </div>

        {/* BUTTONS */}
        <div className="mt-8 space-y-4">
          <button
            onClick={generateAudit}
            className="w-full rounded-xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-[1.02]"
          >
            Generate Free Audit
          </button>

          <button
            onClick={saveLead}
            className="w-full rounded-xl border border-gray-700 px-6 py-4 font-semibold text-white transition hover:bg-gray-800"
          >
            Save Audit Report
          </button>
        </div>
      </div>

      {/* RESULTS */}
      {result && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-green-500/10 p-6 text-center">
            <h2 className="text-5xl font-bold text-green-400">
              ${result.savings.toFixed(0)}/mo
            </h2>

            <p className="mt-3 text-gray-300">
              Potential Monthly Savings
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Estimated annual savings: $
              {(result.savings * 12).toFixed(0)}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                AI Spend Analysis
              </h3>

              <div className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                Save ${result.savings.toFixed(0)}
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-gray-400">
                  Current Spend
                </p>

                <p className="mt-1 text-3xl font-bold">
                  ${result.currentSpend}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Optimized Spend
                </p>

                <p className="mt-1 text-3xl font-bold text-green-400">
                  ${result.optimizedSpend.toFixed(0)}
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-300">
              {result.recommendation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}