import { useState } from 'react';
import { Sparkles, Coffee, Moon, Briefcase, Star, Snowflake } from 'lucide-react';

function App() {
  const [techStack, setTechStack] = useState('');
  const [sleep, setSleep] = useState('');
  const [caffeine, setCaffeine] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [delulu, setDelulu] = useState(false);
  const [results, setResults] = useState({
    luck: '',
    burnout: '',
    internship: '',
    affirmation: ''
  });

  const generateHoroscope = () => {
    const luckMessages = {
      high: [
        "Your code will compile on the first try??? WHAT IS THIS SORCERY 🎉 (fake news but manifesting it anyway)",
        "Babe, a recruiter just slid into your DMs... it's a bot but we're counting it 📧",
        "You're about to manifest an offer so hard LinkedIn will need therapy 💫",
        "The tech gods woke up and chose YOU (they usually choose chaos but today's your day ✨)"
      ],
      mid: [
        "Career vibes: ✨ Existing but make it professional ✨ 💅",
        "Your trajectory is giving 'Stack Overflow thread with no answers' energy 📖",
        "You're mid, fam. Not great, not terrible, just vibing like a Node.js app on life support ✌️",
        "The universe: 'Let me just... see what happens if I do THIS' 🤷‍♀️"
      ],
      chaotic: [
        "Your career looks like someone's first GitHub commit... absolutely unhinged 😅",
        "Mercury retrograde: Hold my beer (your beer, actually, you drank it while debugging) 🪐",
        "Your resume made the universe laugh so hard it spilled coffee on it 💀",
        "You're in season 47 of 'Debugging My Life' and the plot is LOST 🎭"
      ]
    };

    const burnoutMessages = {
      danger: [
        "BESTIE. S.L.E.E.P. Rn. Your bugs will still be there, sadder, tomorrow 😭",
        "You're not a machine (spoiler: machines need maintenance too lmaooo) 🚨",
        "Burnout entered the call and brought its whole friend group. EMERGENCY STATUS 💀",
        "Your future self is writing a strongly-worded email to your past self 🛑"
      ],
      warning: [
        "You're on a coffee-fueled tightrope while spite does backflips (gravity exists bestie) ⚠️",
        "NAP. NOW. Fight a recruiter if you have to, they owe you 💭",
        "Your work-life balance threw a 404 error and dipped 🔧",
        "Burnout said 'main character energy' and you're like 'okay but can I sleep tho?' 👀"
      ],
      good: [
        "OKAY LEGEND??? You're sleeping????? I'm taking notes 👑",
        "Your self-care is so immaculate we're all just... crying in the code 💕",
        "You're thriving AND well-rested??? Teach us your ancient magic 🧙‍♀️ ✨",
        "Bestie, the vibes are SENDING. The rest? UNMATCHED. The energy? RENEWABLE 🌸"
      ]
    };

    const internshipMessages = [
      "Startup: 'We offer exposure + equity!' You: 'Can I eat exposure?' (no) 🏃‍♀️",
      "You'll accidentally ghost a recruiter and THEN SPIRAL about it for 2 weeks 👻",
      "Your dream company will reply! Only took 847 days 📧",
      "Entry level: 'we want someone with 0 experience' = actually wants 7 years + your firstborn 🤡",
      "You'll demolish that interview then CHOKE on the LeetCode like a amateur 💔",
      "Your random side project gets 10k stars meanwhile your actual job gets 404'd 📱",
      "Rejection email subject line: 'We're keeping your resume for... *never*' 🗑️",
      "LinkedIn is now your personality, your diary, and your therapist combined 💼",
      "One recruiter won't ghost you and you'll mention it FOREVER (certified legend status 🎉)",
      "Your portfolio crashes EXACTLY when they click the link (the algorithm hates women in tech 💻)"
    ];

    const delululInternshipMessages = [
      "Sundar Pichai is personally BEGGING. On knees. Crying. Check ur phone 📞✨",
      "5M followers overnight bc the algorithm fell in love w u (it's giving obsessed) 🌟",
      "MOMA wants your code. Side by side with the Mona Lisa. (Louvre called they're mad) 🎨",
      "You accidentally invent AGI and retire with your cat at 22 💰",
      "FAANG CEOs are literally FIGHTING over you (Octagon match vibes 🪓)",
      "You walk into your first day, fix EVERYTHING, and they make you CEO 🦸‍♀️",
      "Your LinkedIn post breaks Twitter (yes it's still called that in this reality) 🚀",
      "A startup materializes from thin air just to hire you (you're THAT good 🔮)"
    ];

    const affirmations = [
      "You're doing better than you think (your imposter brain is broke, don't believe her 💕)",
      "Imposter syndrome is a LIAR. Punch her in the face (metaphorically) 💅",
      "Your code is a beautiful hot mess and THAT'S called artistic expression bestie 🎨",
      "You belong in tech, full stop, no debates, no 'well actually's ✨",
      "Every senior dev is also googling 'how to center a div' at 3am, they're just cocky 🌈",
      "Bad code days are just your brain collecting data for the glow-up 💝",
      "Your GitHub is not your vibe, your PERSONALITY is (and it slaps 🌟)",
      "Resting is a FEATURE not a BUG get that in ur head queen 🛌"
    ];

    let luckLevel = 'mid';

    const sleepHours = sleep === '8+' ? 10 : sleep === '6-8' ? 7 : sleep === '4-6' ? 5 : 3;
    const caffeineLevel = caffeine === 'Coffee is my personality' ? 4 : caffeine === 'Running on coffee' ? 3 : caffeine === '1-2 cups' ? 2 : 1;

    const luckScore = sleepHours * 2 - caffeineLevel;

    if (luckScore >= 10) luckLevel = 'high';
    else if (luckScore <= 4) luckLevel = 'chaotic';

    let burnoutLevel = 'good';
    if (sleepHours < 5 && caffeineLevel > 2) burnoutLevel = 'danger';
    else if (sleepHours < 6 || caffeineLevel > 2) burnoutLevel = 'warning';

    const randomLuck = luckMessages[luckLevel][Math.floor(Math.random() * luckMessages[luckLevel].length)];
    const randomBurnout = burnoutMessages[burnoutLevel][Math.floor(Math.random() * burnoutMessages[burnoutLevel].length)];
    const randomInternship = delulu
      ? delululInternshipMessages[Math.floor(Math.random() * delululInternshipMessages.length)]
      : internshipMessages[Math.floor(Math.random() * internshipMessages.length)];
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];

    setResults({
      luck: randomLuck,
      burnout: randomBurnout,
      internship: randomInternship,
      affirmation: randomAffirmation
    });

    setShowResults(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (techStack && sleep && caffeine) {
      generateHoroscope();
    }
  };

  const reset = () => {
    setShowResults(false);
    setTechStack('');
    setSleep('');
    setCaffeine('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 relative overflow-hidden">
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <header className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-pink-500 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
              Career Horoscope
            </h1>
            <Sparkles className="w-8 h-8 text-blue-500 animate-pulse" />
          </div>
          <p className="text-lg md:text-xl text-purple-600 font-medium">
            ✨ for Girls in Tech 🔮
          </p>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            Discover your tech destiny this holiday season! 🎄
          </p>
        </header>

        {!showResults ? (
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="card">
              <div className="space-y-6">
                <div className="input-group">
                  <label className="label">
                    <Briefcase className="w-5 h-5 text-purple-500" />
                    <span>Your Tech Stack Vibe</span>
                  </label>
                  <select
                    value={techStack}
                    onChange={(e) => setTechStack(e.target.value)}
                    className="select"
                    required
                  >
                    <option value="">Choose your path...</option>
                    <option value="frontend">Frontend (making things pretty ✨)</option>
                    <option value="backend">Backend (the behind-the-scenes queen 👑)</option>
                    <option value="data">Data/AI (living in the future 🤖)</option>
                    <option value="mobile">Mobile (apps apps apps 📱)</option>
                    <option value="fullstack">Full Stack (doing it all 💪)</option>
                    <option value="confused">I'm confused 😭</option>
                  </select>
                </div>

                <div className="input-group">
                  <label className="label">
                    <Moon className="w-5 h-5 text-indigo-500" />
                    <span>Sleep Schedule (be honest bestie)</span>
                  </label>
                  <select
                    value={sleep}
                    onChange={(e) => setSleep(e.target.value)}
                    className="select"
                    required
                  >
                    <option value="">How much sleep?</option>
                    <option value="2-4">2-4 hours (please rest 😭)</option>
                    <option value="4-6">4-6 hours (not great, not terrible)</option>
                    <option value="6-8">6-8 hours (healthy queen!)</option>
                    <option value="8+">8+ hours (living the dream ✨)</option>
                  </select>
                </div>

                <div className="input-group">
                  <label className="label">
                    <Coffee className="w-5 h-5 text-amber-600" />
                    <span>Caffeine Dependency Level</span>
                  </label>
                  <select
                    value={caffeine}
                    onChange={(e) => setCaffeine(e.target.value)}
                    className="select"
                    required
                  >
                    <option value="">What's your coffee situation?</option>
                    <option value="none">None (how do you function? 😮)</option>
                    <option value="1-2">1-2 cups (casual sipper ☕)</option>
                    <option value="running">Running on coffee (it's a lifestyle ☕☕)</option>
                    <option value="personality">Coffee is my personality ☕☕☕</option>
                  </select>
                </div>

                <div className="flex items-center justify-center gap-2 p-4 bg-pink-50 rounded-2xl border-2 border-dashed border-pink-300">
                  <input
                    type="checkbox"
                    id="delulu"
                    checked={delulu}
                    onChange={(e) => setDelulu(e.target.checked)}
                    className="w-5 h-5 text-pink-500 rounded focus:ring-pink-500"
                  />
                  <label htmlFor="delulu" className="text-sm font-medium text-pink-700 cursor-pointer">
                    Delulu Mode ✨ (for extra dramatic predictions)
                  </label>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                >
                  <Star className="w-5 h-5" />
                  <span>✨ Get My Career Horoscope ✨</span>
                  <Star className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <div className="result-card">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-yellow-500 animate-spin-slow" />
                <h2 className="text-2xl font-bold text-purple-700">Career Luck 🌟</h2>
              </div>
              <p className="text-lg text-gray-700">{results.luck}</p>
            </div>

            <div className="result-card">
              <div className="flex items-center gap-3 mb-4">
                <Snowflake className="w-6 h-6 text-red-500 animate-pulse" />
                <h2 className="text-2xl font-bold text-red-600">Burnout Warning 🚨</h2>
              </div>
              <p className="text-lg text-gray-700">{results.burnout}</p>
            </div>

            <div className="result-card">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-blue-500 animate-bounce-slow" />
                <h2 className="text-2xl font-bold text-blue-700">Internship Prophecy 💼</h2>
              </div>
              <p className="text-lg text-gray-700">{results.internship}</p>
            </div>

            <div className="affirmation-card">
              <Sparkles className="w-5 h-5 text-pink-400 mb-2" />
              <p className="text-base md:text-lg font-medium text-pink-700 italic">
                "{results.affirmation}"
              </p>
            </div>

            <button
              onClick={reset}
              className="reset-btn"
            >
              🔮 Get Another Reading
            </button>
          </div>
        )}
      </div>

      <footer className="text-center pb-8 relative z-10">
        <p className="text-sm text-gray-600">
          Made with 💕 for all the girls hustling in tech
        </p>
        <p className="text-xs text-gray-500 mt-1">
          (This is for fun, not actual career advice lol)
        </p>
      </footer>
    </div>
  );
}

export default App;
