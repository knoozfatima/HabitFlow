import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const streakData = [
  { name: "Daily", streak: 12 },
  { name: "Weekly", streak: 5 },
  { name: "Monthly", streak: 2 },
];

const progressData = [
  { name: "Daily", done: 20, notDone: 8 },
  { name: "Weekly", done: 7, notDone: 3 },
  { name: "Monthly", done: 2, notDone: 1 },
];

const barColors = {
  streak: "url(#streakGradient)",
  done: "url(#doneGradient)",
  notDone: "url(#notDoneGradient)"
};

const StreakChart = () => (
  <div className="bg-white rounded-xl border border-gray-200 shadow transition-transform duration-200 hover:scale-105 hover:shadow-2xl flex flex-col items-center w-full max-w-5xl mx-auto mt-6 p-8">
    <div className="w-full flex flex-col lg:flex-row gap-10 items-stretch justify-center">
      <div className="flex-1 flex flex-col items-center min-w-0">
        <h3 className="text-2xl font-bold text-gray-700 mb-4 tracking-tight">Habit Streaks</h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={streakData} margin={{ top: 20, right: 40, left: 0, bottom: 20 }} barCategoryGap={40}>
            <defs>
              <linearGradient id="streakGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 16, fontWeight: 600, fill: '#6366f1' }} axisLine={false} tickLine={false} />
            <YAxis allowDecimals={false} tick={{ fontSize: 14, fill: '#a1a1aa' }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: 12, background: '#f3f4f6', color: '#22223b', fontWeight: 500 }} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: 16, fontWeight: 500, color: '#22223b' }} />
            <Bar dataKey="streak" name="Streak" fill={barColors.streak} radius={[12, 12, 8, 8]} isAnimationActive barSize={48} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex-1 flex flex-col items-center min-w-0">
        <h3 className="text-2xl font-bold text-gray-700 mb-4 tracking-tight">Habit Progress</h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={progressData} margin={{ top: 20, right: 40, left: 0, bottom: 20 }} barCategoryGap={30}>
            <defs>
              <linearGradient id="doneGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
              <linearGradient id="notDoneGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 16, fontWeight: 600, fill: '#6366f1' }} axisLine={false} tickLine={false} />
            <YAxis allowDecimals={false} tick={{ fontSize: 14, fill: '#a1a1aa' }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: 12, background: '#f3f4f6', color: '#22223b', fontWeight: 500 }} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: 16, fontWeight: 500, color: '#22223b' }} />
            <Bar dataKey="done" name="Done" fill={barColors.done} radius={[12, 12, 8, 8]} isAnimationActive barSize={32} />
            <Bar dataKey="notDone" name="Not Done" fill={barColors.notDone} radius={[12, 12, 8, 8]} isAnimationActive barSize={32} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default StreakChart; 