import { useLocation, useRoute } from "wouter";
import { getIslandById } from "@/data/lessons";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Island() {
  const [match, params] = useRoute("/island/:id");
  const [, setLocation] = useLocation();
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);

  if (!match) return null;

  const islandId = parseInt(params?.id || "0");
  const island = getIslandById(islandId);

  if (!island) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-300 to-cyan-300 px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg mb-4">Island Not Found</h1>
          <Button onClick={() => setLocation("/archipelago")} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
            Back to Archipelago
          </Button>
        </div>
      </div>
    );
  }

  // Group lessons by phase
  const lessonsByPhase = island.lessons.reduce((acc, lesson) => {
    if (!acc[lesson.phase]) {
      acc[lesson.phase] = [];
    }
    acc[lesson.phase].push(lesson);
    return acc;
  }, {} as Record<string, typeof island.lessons>);

  const phases = Object.keys(lessonsByPhase);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-200 to-cyan-300 relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-20 right-10 w-32 h-16 bg-white rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-24 h-12 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Navigation Header */}
      <nav className="relative z-50 border-b-4 border-yellow-400 bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-2">
          <button
            onClick={() => setLocation("/archipelago")}
            className="flex items-center gap-2 sm:gap-3 hover:scale-110 transition-transform flex-shrink-0"
          >
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <span className="text-xl sm:text-2xl">🎮</span>
            </div>
            <span className="text-xl sm:text-3xl font-black text-white drop-shadow-lg hidden xs:inline">Dao-Yu-101</span>
          </button>
          <Button
            onClick={() => setLocation("/archipelago")}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold border-2 border-white shadow-lg text-xs sm:text-sm px-2 sm:px-4 py-2"
          >
            ← Back
          </Button>
        </div>
      </nav>

      {/* Island Header */}
      <section className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8 md:mb-12 text-center animate-fadeInUp">
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="text-7xl sm:text-8xl md:text-9xl drop-shadow-lg animate-bounce">{island.icon}</div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white drop-shadow-lg mb-3 sm:mb-4">
            {island.name.split(":")[1].trim()}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white font-bold drop-shadow-md max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            {island.description}
          </p>

          {/* Island Stats */}
          <div className="flex justify-center gap-2 sm:gap-4 flex-wrap mb-6 sm:mb-8 px-2">
            <div className="px-3 sm:px-6 py-2 sm:py-3 bg-yellow-300 rounded-full font-bold text-xs sm:text-lg text-gray-900 shadow-lg border-4 border-white">
              ⚔️ {island.lessons.length} Quests
            </div>
            <div className="px-3 sm:px-6 py-2 sm:py-3 bg-green-400 rounded-full font-bold text-xs sm:text-lg text-white shadow-lg border-4 border-white">
              ⏱️ {island.lessons.length * 60}m
            </div>
            <div className="px-3 sm:px-6 py-2 sm:py-3 bg-purple-400 rounded-full font-bold text-xs sm:text-lg text-white shadow-lg border-4 border-white">
              🎯 {phases.length} Phases
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto px-2">
            <div className="w-full bg-white rounded-full h-5 sm:h-6 border-4 border-yellow-400 shadow-lg overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
                style={{ width: "0%" }}
              ></div>
            </div>
            <p className="text-white font-bold drop-shadow-md mt-2 text-sm sm:text-base">0 / {island.lessons.length} Quests Completed</p>
          </div>
        </div>

        {/* Lessons by Phase */}
        <div className="space-y-4 sm:space-y-6 mb-8 md:mb-12">
          {phases.map((phase, phaseIdx) => (
            <div key={phase} className="animate-fadeInUp" style={{ animationDelay: `${phaseIdx * 0.1}s` }}>
              {/* Phase Header */}
              <button
                onClick={() => setExpandedPhase(expandedPhase === phase ? null : phase)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between transition-all transform hover:scale-105 rounded-xl sm:rounded-2xl border-4 sm:border-4 border-white shadow-lg"
              >
                <div className="text-left">
                  <h2 className="text-2xl sm:text-3xl font-black text-white drop-shadow-lg">
                    {phase}
                  </h2>
                  <p className="text-sm sm:text-lg text-white font-bold drop-shadow-md mt-1">
                    {lessonsByPhase[phase].length} Quests
                  </p>
                </div>
                <ChevronDown
                  className={`w-6 sm:w-8 h-6 sm:h-8 text-white drop-shadow-lg transition-transform flex-shrink-0 ${
                    expandedPhase === phase ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Lessons List */}
              {expandedPhase === phase && (
                <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                  {lessonsByPhase[phase].map((lesson, lessonIdx) => (
                    <div
                      key={lesson.id}
                      onClick={() => setLocation(`/island/${islandId}/lesson/${lesson.id}`)}
                      className="group cursor-pointer transform hover:scale-105 transition-all duration-200 animate-fadeInUp"
                      style={{ animationDelay: `${lessonIdx * 0.05}s` }}
                    >
                      <div className="bg-gradient-to-r from-yellow-300 to-orange-300 hover:from-yellow-400 hover:to-orange-400 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-4 border-white shadow-lg">
                        <div className="flex items-center justify-between gap-3 sm:gap-4">
                          {/* Level Badge and Title */}
                          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                            <div className="flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white font-black text-lg sm:text-2xl flex items-center justify-center border-4 border-white shadow-lg drop-shadow-lg">
                              {lesson.number}
                            </div>
                            <div className="min-w-0">
                              <h3 className="text-base sm:text-xl font-black text-gray-900 group-hover:text-blue-600 transition-colors drop-shadow-md line-clamp-2">
                                {lesson.title}
                              </h3>
                              <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-1 sm:mt-2 text-xs sm:text-sm font-bold">
                                <span className="px-2 sm:px-3 py-1 bg-white rounded-full text-gray-900 shadow-md">
                                  ⏱️ {lesson.duration}m
                                </span>
                                <span className="px-2 sm:px-3 py-1 bg-blue-500 text-white rounded-full shadow-md hidden xs:inline-block">
                                  {lesson.phase}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* CTA Arrow */}
                          <div className="flex-shrink-0 text-2xl sm:text-4xl group-hover:translate-x-2 transition-transform">
                            ▶️
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Learning Path Info */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-6 sm:border-8 border-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white drop-shadow-lg mb-4 sm:mb-6 text-center">
            🗺️ Your Learning Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-4 border-yellow-300 shadow-lg">
              <h4 className="text-lg sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4">🎯 What You'll Master:</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Block-based coding",
                  "Loops and control",
                  "Conditional logic",
                  "Functions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 sm:gap-3 font-bold text-gray-700 text-sm sm:text-base">
                    <span className="text-xl sm:text-2xl">✨</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-4 border-green-400 shadow-lg">
              <h4 className="text-lg sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4">🏗️ Epic Projects:</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Build structures",
                  "Navigate mazes",
                  "Design village",
                  "Solve challenges"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 sm:gap-3 font-bold text-gray-700 text-sm sm:text-base">
                    <span className="text-xl sm:text-2xl">🚀</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
