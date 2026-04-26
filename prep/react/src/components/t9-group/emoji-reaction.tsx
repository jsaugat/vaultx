export default function EmojiReactions() {
  const EMOJIS = [
    {
      emoji: "👍",
      name: "thumbs up",
      tags: ["like", "agree"],
      category: "People",
    },
    { emoji: "❤️", name: "heart", tags: ["love", "like"], category: "People" },
    {
      emoji: "😂",
      name: "laughing",
      tags: ["funny", "lol"],
      category: "People",
    },
    { emoji: "🔥", name: "fire", tags: ["hot", "lit"], category: "Objects" },
    {
      emoji: "🎉",
      name: "party",
      tags: ["celebrate", "congrats"],
      category: "Activities",
    },
    { emoji: "👏", name: "clap", tags: ["good", "agree"], category: "People" },
    {
      emoji: "😮",
      name: "wow",
      tags: ["surprised", "shock"],
      category: "People",
    },
    { emoji: "😢", name: "cry", tags: ["sad", "tear"], category: "People" },
    {
      emoji: "🚀",
      name: "rocket",
      tags: ["launch", "fast"],
      category: "Travel",
    },
    {
      emoji: "🤝",
      name: "handshake",
      tags: ["deal", "agree"],
      category: "People",
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState<Record<string, number>>({});

  const filtered = React.useMemo(() => {
    const query = search.toLowerCase().trim();

    return EMOJIS.filter((item) => {
      if (!query) return true;

      return (
        item.name.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [search]);

  const groupedByCategory = React.useMemo(() => {
    return filtered.reduce<Record<string, typeof EMOJIS>>((acc, emoji) => {
      if (!acc[emoji.category]) acc[emoji.category] = [];
      acc[emoji.category].push(emoji);
      return acc;
    }, {});
  }, [filtered]);

  const toggleReaction = (emoji: string) => {
    setSelected((prev) => {
      // toggle off if already selected
      if (prev[emoji]) {
        const next = { ...prev };
        delete next[emoji];
        return next;
      }

      return {
        ...prev,
        [emoji]: 1,
      };
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8 flex items-start justify-center">
      <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-xl relative">
        <div className="rounded-2xl border border-slate-200 p-4">
          <p className="text-slate-800 text-base leading-7">
            We finally shipped the feature. Somehow nothing exploded. Yet.
          </p>

          <div className="mt-4 flex items-center gap-3 flex-wrap">
            {Object.entries(selected).map(([emoji, count]) => (
              <button
                key={emoji}
                onClick={() => toggleReaction(emoji)}
                className="flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-3 py-1 text-sm hover:bg-blue-100"
              >
                <span>{emoji}</span>
                <span>{count}</span>
              </button>
            ))}

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium hover:bg-slate-100"
            >
              + React
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute left-0 top-full mt-3 w-full rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl z-10">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search emoji or tag..."
              className="mb-4 w-full rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
            />

            <div className="max-h-80 overflow-y-auto space-y-5 pr-1">
              {Object.entries(groupedByCategory).map(([category, emojis]) => (
                <div key={category}>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {category}
                  </h3>

                  <div className="grid grid-cols-6 gap-2">
                    {emojis.map((item) => {
                      const isSelected = Boolean(selected[item.emoji]);

                      return (
                        <button
                          key={item.emoji}
                          onClick={() => toggleReaction(item.emoji)}
                          title={`${item.name} (${item.tags.join(", ")})`}
                          className={`rounded-2xl p-3 text-2xl transition hover:bg-slate-100 ${
                            isSelected
                              ? "bg-blue-100 ring-2 ring-blue-400"
                              : "bg-white"
                          }`}
                        >
                          {item.emoji}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="py-8 text-center text-slate-500">
                  No emoji found. Either your search is bad, or humanity has not
                  invented that feeling yet.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
