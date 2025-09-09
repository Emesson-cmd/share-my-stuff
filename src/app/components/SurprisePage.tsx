'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Song {
  title: string;
  artist: string;
  spotifyUrl?: string;
  audioUrl?: string;
}

interface SurprisePageProps {
  letterTitle?: string;
  letterText?: string;
  songs?: Song[];
  cuteEmojis?: string[];
  backgroundGradient?: string;
}

const DEFAULT_SONGS: Song[] = [
  {
    title: 'Until I Found You',
    artist: 'Stephen Sanchez',
    spotifyUrl: 'https://open.spotify.com/embed/track/5uEYRdEIh9Bo4fpjDd4Na9',
  },
  {
    title: 'All of Me',
    artist: 'John Legend',
    spotifyUrl: 'https://open.spotify.com/embed/track/3U4isOIWM3VvDubwSI3y7a',
  },
  {
    title: 'Perfect',
    artist: 'Ed Sheeran',
    spotifyUrl: 'https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v',
  },
];

const DEFAULT_LETTER = `
  Minha vida,

Preparei este cantinho com todo carinho só pra você. Quis juntar palavras, músicas e um pouco de magia para lembrar o quanto você é especial pra mim.

Que esta página te abrace, te faça sorrir e te lembre: eu te amo. Hoje, amanhã e sempre.

Com amor,
Seu mozão 💌
`;

const DEFAULT_EMOJIS = [
  '🐻',
  '🐰',
  '🧸',
  '🌸',
  '💖',
  '✨',
  '🫶',
  '🌙',
  '🎀',
  '🍓',
];

export default function SurprisePage({
  letterTitle = 'Uma cartinha pra você',
  letterText = DEFAULT_LETTER,
  songs = DEFAULT_SONGS,
  cuteEmojis = DEFAULT_EMOJIS,
  backgroundGradient = 'from-pink-100 via-rose-100 to-purple-100',
}: SurprisePageProps) {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setTypedText('');
    setIsTyping(true);
    const chars = letterText.split('');
    let i = 0;
    const id = setInterval(() => {
      setTypedText((prev) => prev + chars[i]);
      i++;
      if (i >= chars.length) {
        clearInterval(id);
        setIsTyping(false);
      }
    }, 18);
    return () => clearInterval(id);
  }, [letterText]);

  const filteredSongs = useMemo(() => {
    const f = filter.toLowerCase();
    return songs.filter(
      (s) =>
        s.title.toLowerCase().includes(f) || s.artist.toLowerCase().includes(f)
    );
  }, [songs, filter]);

  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-br ${backgroundGradient} relative overflow-hidden`}
    >
      <BackgroundSparkles />
      <FloatingHearts count={8} />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-10 sm:py-14">
        {/* Carta */}
        <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-xl mb-8">
          <h1 className="text-2xl font-bold mb-4">{letterTitle}</h1>
          <p className="whitespace-pre-wrap font-serif leading-7 text-gray-800">
            {typedText}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            {isTyping ? 'digitando…' : 'prontinha ✨'}
          </p>
        </div>

        {/* Emojis fofos + músicas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Emojis */}
          <div className="bg-white/80 p-5 rounded-2xl shadow-xl">
            <h2 className="text-lg font-semibold mb-4">✨ Emojis fofos</h2>
            <CuteEmojiWall emojis={cuteEmojis} />
          </div>

          {/* Músicas */}
          <div className="bg-white/80 p-5 rounded-2xl shadow-xl md:col-span-2">
            <h2 className="text-lg font-semibold mb-4">🎶 Músicas favoritas</h2>
            <input
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="Pesquisar música ou artista…"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredSongs.map((song, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-xl p-3 bg-white border shadow"
                >
                  <div className="font-semibold">{song.title}</div>
                  <div className="text-sm text-gray-500">{song.artist}</div>
                  <div className="mt-3 rounded-lg overflow-hidden">
                    {song.spotifyUrl ? (
                      <iframe
                        src={song.spotifyUrl}
                        width="100%"
                        height="80"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                      />
                    ) : song.audioUrl ? (
                      <audio controls className="w-full">
                        <source src={song.audioUrl} />
                      </audio>
                    ) : (
                      <p className="text-sm text-gray-400 text-center">
                        Sem link disponível 🎧
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundSparkles() {
  const dots = new Array(30).fill(null).map((_, i) => i);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {dots.map((i) => (
        <motion.span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-white/70 shadow"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], y: [0, -10, 0] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

function FloatingHearts({ count = 6 }: { count?: number }) {
  if (typeof window === 'undefined') return null;

  const hearts = new Array(count).fill(null).map((_, i) => i);
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <AnimatePresence>
        {hearts.map((i) => (
          <motion.div
            key={i}
            className="absolute text-2xl select-none"
            style={{ left: `${Math.random() * 100}%`, bottom: -20 }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: -window.innerHeight * (0.7 + Math.random() * 0.4),
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          >
            {i % 3 === 0 ? '💖' : i % 3 === 1 ? '💗' : '💓'}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function CuteEmojiWall({ emojis }: { emojis: string[] }) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
      {emojis.map((e, i) => (
        <motion.div
          key={i}
          className="aspect-square rounded-xl bg-white border flex items-center justify-center text-2xl shadow"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            delay: i * 0.03,
          }}
        >
          {e}
        </motion.div>
      ))}
    </div>
  );
}
