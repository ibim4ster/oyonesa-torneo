
import React from 'react';
import { CategoryInfo, NavItem } from './types';

export const CATEGORIES: CategoryInfo[] = [
  {
    year: "2012",
    label: "Alevín Segundo Año",
    pdfUrl: "/2012.pdf",
    color: "bg-blue-600",
    description: "Competencia de alto nivel para nacidos en 2012. Fútbol 8 competitivo."
  },
  {
    year: "2013",
    label: "Alevín Primer Año",
    pdfUrl: "/2013.pdf",
    color: "bg-emerald-600",
    description: "Talento en estado puro. La transición al fútbol competitivo de alto rendimiento."
  },
  {
    year: "2014",
    label: "Benjamín Segundo Año",
    pdfUrl: "/2014.pdf",
    color: "bg-amber-600",
    description: "Velocidad y técnica individual para los nacidos en 2014."
  },
  {
    year: "2015",
    label: "Benjamín Primer Año",
    pdfUrl: "/2015.pdf",
    color: "bg-rose-600",
    description: "Habilidades fundamentales y espíritu de equipo en el Memorial."
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#home" },
  { label: "El ARENA", href: "#arena" },
  { label: "Categorías", href: "#categories" },
  { label: "Descargas", href: "#downloads" },
  { label: "Ubicación", href: "#location" }
];
