// lib/cards.tsx
import React from "react";

export type CardVariant =
  | "integrations"
  | "stat-green"
  | "stat-neutral"
  | "person"
  | "team"
  | "map";

export interface BentoCard {
  id: string;
  variant: CardVariant;
  title: string;
  description: string;
}

// ─── Inline SVG icons for integrations card ──────────────────────────────────
export const integrationIcons = [
  {
    bg: "#5865F2",
    label: "Discord",
    svg: (
      <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
  },
  {
    bg: "#4A154B",
    label: "Slack",
    svg: (
      <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
      </svg>
    ),
  },
  {
    bg: "#EA4335",
    label: "Calendar",
    svg: (
      <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.89 4 3 4.9 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V9h14v11zM7 11h5v5H7z" />
      </svg>
    ),
  },
];

export const teamAvatars = [
  { initials: "A", color: "#f472b6" },
  { initials: "B", color: "#60a5fa" },
  { initials: "C", color: "#34d399" },
];

// ─── Card data array (6 uniform cards) ───────────────────────────────────────
export const BENTO_CARDS: BentoCard[] = [
  {
    id: "integrations",
    variant: "integrations",
    title: "Integrations",
    description: "Connect Discord, Slack, Calendar and more — out of the box.",
  },
  {
    id: "stat-83",
    variant: "stat-green",
    title: "83%",
    description: "Of conversations autonomously resolved without human input.",
  },
  {
    id: "person",
    variant: "person",
    title: "Always On",
    description: "AI agents available 24/7 across every channel.",
  },
  {
    id: "stat-5b",
    variant: "stat-neutral",
    title: "5.5B",
    description: "More efficient than human representatives at scale.",
  },
  {
    id: "team",
    variant: "team",
    title: "Automated CS Quality",
    description: "Consistent, high-quality support for every customer.",
  },
  {
    id: "map",
    variant: "map",
    title: "Global Network",
    description: "Reach customers wherever they are in the world.",
  },
];
