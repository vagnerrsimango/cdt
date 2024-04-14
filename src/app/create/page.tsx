"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { playlists } from "../data/playlists";

export default function MusicUploadForm() {
  const [formData, setFormData] = useState({
    artist: "",
    album: "",
    releaseDate: "",
    lyrics: "",
  });

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <div className="grid lg:grid-cols-5">
      <Sidebar playlists={playlists} className="hidden lg:block" />
      <div className="col-span-3 lg:col-span-4 lg:border-l p-4">
        <h2 className="text-xl font-semibold mb-4">Adicionar Nova Música</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Título da Música
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="album"
              className="block text-sm font-medium text-gray-700"
            >
              Álbum
            </label>
            <input
              type="text"
              id="album"
              name="album"
              value={formData.album}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="releaseDate"
              className="block text-sm font-medium text-gray-700"
            >
              Data de Lançamento
            </label>
            <input
              type="date"
              id="releaseDate"
              name="releaseDate"
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700"
            >
              Gênero Musical
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="albumCover"
              className="block text-sm font-medium text-gray-700"
            >
              Capa do Álbum (Imagem)
            </label>
            <input
              type="file"
              id="albumCover"
              name="albumCover"
              accept="image/*"
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="audioFile"
              className="block text-sm font-medium text-gray-700"
            >
              Arquivo de Áudio da Música
            </label>
            <input
              type="file"
              id="audioFile"
              name="audioFile"
              accept="audio/*"
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="composers"
              className="block text-sm font-medium text-gray-700"
            >
              Compositores
            </label>
            <input
              type="text"
              id="composers"
              name="composers"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="producers"
              className="block text-sm font-medium text-gray-700"
            >
              Produtores Musicais
            </label>
            <input
              type="text"
              id="producers"
              name="producers"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-700"
            >
              Tags ou Palavras-chave
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="featuring"
              className="block text-sm font-medium text-gray-700"
            >
              Participações
            </label>
            <input
              type="text"
              id="featuring"
              name="featuring"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lyrics"
              className="block text-sm font-medium text-gray-700"
            >
              Letra da Música
            </label>
            <textarea
              id="lyrics"
              name="lyrics"
              value={formData.lyrics}
              onChange={handleChange}
              rows={4}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {/* Adicione mais campos conforme necessário */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
