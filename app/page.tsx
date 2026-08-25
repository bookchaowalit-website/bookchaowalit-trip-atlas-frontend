"use client";

import { useState } from "react";

type RoutePlan = { id: string; code: string; name: string; mood: string; nights: string; budget: number; stops: { city: string; time: string; note: string }[] };
const routes: RoutePlan[] = [
  { id: "north", code: "N / 01", name: "Northbound light", mood: "slow / mountain / first train", nights: "3 nights", budget: 7800, stops: [{ city: "Chiang Mai", time: "DAY 01", note: "Arrive before noon; keep the first afternoon unclaimed." }, { city: "Mae Hong Son", time: "DAY 02", note: "Take the long road west and keep one view stop open." }, { city: "Pai", time: "DAY 03", note: "Leave room for a market walk before the return." }] },
  { id: "coast", code: "C / 02", name: "Coastal interval", mood: "salt / shade / one good swim", nights: "4 nights", budget: 10400, stops: [{ city: "Chumphon", time: "DAY 01", note: "Use the pier as the first landmark, not the hotel lobby." }, { city: "Koh Tao", time: "DAY 02", note: "Cross early; keep the afternoon for water and shade." }, { city: "Koh Phangan", time: "DAY 03", note: "Choose one beach, then stay long enough to notice it." }] },
  { id: "city", code: "U / 03", name: "City as archive", mood: "museum / tram / late supper", nights: "2 nights", budget: 6200, stops: [{ city: "Singapore", time: "DAY 01", note: "Start at the old port and let the street grid do the work." }, { city: "Bras Basah", time: "DAY 02", note: "Pair one collection with one unscheduled coffee." }, { city: "Tiong Bahru", time: "DAY 03", note: "End with a neighborhood loop before the airport." }] },
];

export default function Home() {
  const [routeId, setRouteId] = useState("north");
  const [day, setDay] = useState(0);
  const route = routes.find((item) => item.id === routeId) ?? routes[0];
  const stop = route.stops[day] ?? route.stops[0];
  const nextDay = () => setDay((value) => Math.min(value + 1, route.stops.length - 1));

  return (
    <main className="atlas-page"><div className="atlas-shell">
      <header className="atlas-header"><div className="atlas-brand"><span className="atlas-mark">TA</span><span>TRIP / ATLAS</span></div><span>ROUTE PLANNING DESK</span><span className="atlas-status">STUDY DATA / 01</span></header>
      <section className="atlas-hero"><div><p className="atlas-kicker">route before reservation</p><h1>Leave room<br /><em>for the next stop.</em></h1><p className="atlas-deck">An itinerary desk for choosing a route, balancing a day, and keeping the cost visible before anything is booked.</p></div><div className="atlas-stamp"><span>SELECTED ROUTE</span><strong>{route.code}</strong><small>{route.nights}<br />synthetic plan</small></div></section>
      <section className="atlas-workspace"><aside className="route-index"><div className="section-label"><span>ROUTE INDEX</span><span>{routes.length} PLANS</span></div>{routes.map((item) => <button key={item.id} type="button" className={item.id === route.id ? "route-row is-active" : "route-row"} onClick={() => { setRouteId(item.id); setDay(0); }}><span>{item.code}</span><strong>{item.name}</strong><small>{item.mood}</small><b>THB {item.budget.toLocaleString()}</b></button>)}</aside>
        <div className="route-sheet"><div className="sheet-head"><div><span>THE ROUTE / {route.code}</span><h2>{route.name}</h2><p>{route.mood}</p></div><strong>THB {route.budget.toLocaleString()}</strong></div><div className="day-rail">{route.stops.map((item, index) => <button key={item.city} type="button" className={index === day ? "day-tab is-active" : "day-tab"} onClick={() => setDay(index)}><span>{item.time}</span><b>{item.city}</b></button>)}</div><div className="stop-note"><span>NOW READING / {stop.time}</span><h3>{stop.city}</h3><p>{stop.note}</p><button type="button" onClick={nextDay} disabled={day === route.stops.length - 1}>{day === route.stops.length - 1 ? "Route complete" : "Mark next stop →"}</button></div></div>
      </section>
      <footer className="atlas-footer"><span>BOOKCHAOWALIT / TRIP ATLAS</span><span>ILLUSTRATIVE ROUTES · NOT LIVE TRAVEL DATA</span></footer>
    </div></main>
  );
}
