
import React from 'react';
import { CategoryInfo, NavItem } from './types';

export const CATEGORIES: CategoryInfo[] = [
  {
    year: "2012",
    label: "Alevín Segundo Año",
    pdfUrl: "./2012.pdf",
    color: "bg-blue-600",
    description: "Cuadrante de competición y reglamento para nacidos en 2012. Fútbol 8 formativo."
  },
  {
    year: "2013",
    label: "Alevín Primer Año",
    pdfUrl: "./2013.pdf",
    color: "bg-emerald-600",
    description: "Calendario de partidos y bases técnicas para la generación de 2013."
  },
  {
    year: "2014",
    label: "Benjamín Segundo Año",
    pdfUrl: "./2014.pdf",
    color: "bg-amber-600",
    description: "Horarios de juego y normativa específica para benjamines de segundo año."
  },
  {
    year: "2015",
    label: "Benjamín Primer Año",
    pdfUrl: "./2015.pdf",
    color: "bg-rose-600",
    description: "Guía de bienvenida y calendario de competición para los más pequeños."
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#home" },
  { label: "El ARENA", href: "#arena" },
  { label: "Categorías", href: "#categories" },
  { label: "Descargas", href: "#downloads" },
  { label: "Ubicación", href: "#location" }
];
