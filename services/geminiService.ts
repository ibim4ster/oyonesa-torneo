
import { GoogleGenAI } from "@google/genai";

export class TournamentAssistant {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async askQuestion(question: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Eres un asistente virtual para el Torneo de Fútbol "II Memorial Gonzalo Gómez" que se realiza en el Oion ARENA en Oion, Álava. 
        Información clave:
        - Torneo: II Memorial Gonzalo Gómez.
        - Lugar: Instalaciones Oion ARENA, Oion, Álava.
        - Categorías: 2012, 2013, 2014, 2015.
        - Ambiente: Respeto, homenaje y alta competición base.
        - Servicios: Cafetería, vestuarios modernos, parking cercano.
        Responde a la siguiente pregunta del usuario de forma amable, profesional y concisa: ${question}`,
      });
      return response.text;
    } catch (error) {
      console.error("Error asking Gemini:", error);
      return "Lo siento, no puedo responder en este momento. Por favor contacta con la organización directamente.";
    }
  }
}

export const assistant = new TournamentAssistant();
