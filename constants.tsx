
import { CategoryInfo, NavItem } from './types';

// Versión del proyecto: 1.0.2 - Actualización de archivos PDF y rutas
export const CATEGORIES: CategoryInfo[] = [
  {
    year: "2014",
    label: "Benjamín Segundo Año",
    pdfUrl: "2014.pdf",
    color: "bg-blue-600",
    description: "Cuadrante de competición y reglamento para nacidos en 2014. Fútbol 8 formativo."
  },
  {
    year: "2015",
    label: "Benjamín Primer Año",
    pdfUrl: "2015.pdf",
    color: "bg-emerald-600",
    description: "Calendario de partidos y bases técnicas para la generación de 2015."
  },
  {
    year: "2016",
    label: "Prebenjamín Segundo Año",
    pdfUrl: "2016.pdf",
    color: "bg-amber-600",
    description: "Horarios de juego y normativa específica para nacidos en 2016."
  },
  {
    year: "2017",
    label: "Prebenjamín Primer Año",
    pdfUrl: "2017.pdf",
    color: "bg-rose-600",
    description: "Guía de bienvenida y calendario de competición para los más pequeños (2017)."
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#home" },
  { label: "El ARENA", href: "#arena" },
  { label: "Categorías", href: "#categories" },
  { label: "Descargas", href: "#downloads" },
  { label: "Ubicación", href: "#location" }
];
