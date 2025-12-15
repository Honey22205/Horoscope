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
        "Congrats, your code will compile on the first try (probably not but we can dream 🎉)",
        "A recruiter will finally slide into your DMs... to sell you crypto 📧",
        "You're manifesting that offer so hard the universe is getting embarrassed 💫",
        "The tech gods are smiling upon you! (They're usually crying but today's your day ✨)"
      ],
      mid: [
        "It's giving... 'was that the job interview or am I still in the waiting room?' energy 💅",
        "Your career path is basically a choose-your-own-adventure book written by someone having a breakdown 📖",
        "You're doing fine! By fine I mean existing. That's something! ✌️",
        "The universe is like 'yeah sure, let's see where this goes' 🤷‍♀️"
      ],
      chaotic: [
        "Your career path looks like your git history... and that's not a compliment 😅",
        "Mercury retrograde heard you had a plan and said 'not on my watch' 🪐",
        "The universe took one look at your resume and decided you needed character development 💀",
        "You're the main character in a debugging arc (season 47, still no resolution 🎭)"
      ]
    };

    const burnoutMessages = {
      danger: [
        "BESTIE. S.L.E.E.P. Your code will still be broken tomorrow and that's fine 😭",
        "Your body isn't a machine, but you're speedrunning the Burnout% world record 🚨",
        "The burnout has entered the chat and brought friends. This is an emergency 💀",
        "Your future self is not just begging you to rest, she's threatening legal action 🛑"
      ],
      warning: [
        "You're walking a tightrope made of coffee and spite (not sustainable) ⚠️",
        "Consider a nap. No, actually, DEMAND a nap. Fight people for it 💭",
        "Your work-life balance has a 404 error. It's not found anywhere 🔧",
        "Burnout is the main character now and you're the side plot. Reclaim your narrative! 👀"
      ],
      good: [
        "You're actually sleeping? Legend behavior, honestly respect 👑",
        "Your self-care routine has us all shook (and weeping with jealousy) 💕",
        "You're thriving AND resting? In THIS economy?? Teach us your ways ✨",
        "The vibes? Immaculate. The rest schedule? Unmatched. The serotonin levels? High 🌸"
      ]
    };

    const internshipMessages = [
      "A startup will offer you 'exposure and equity' (cool, you can pay rent with vibes now 🏃‍♀️)",
      "You'll ghost a recruiter by accident and then stalk their LinkedIn for weeks 👻",
      "Your dream company will finally respond! In 2027, but who's counting 📧",
      "Plot twist: The entry-level role requires your life story, your soul, AND 7 years of experience 🤡",
      "You'll ace the interview and immediately bomb the 'reverse string' question 💔",
      "Your random side project will blow up while your professional work gets crickets 📱",
      "They'll reject you but keep your resume in the 'maybe never' pile 🗑️",
      "LinkedIn will become your personality (send help and better algorithms) 💼",
      "You'll make ONE networking connection that works out and tell that story forever 🎉",
      "Your portfolio site will have a critical error the DAY of your interview (Murphy's Law is real) 💻"
    ];

    const delululInternshipMessages = [
      "Sundar Pichai will personally beg you to join Google (he's on his knees rn 📞✨)",
      "You'll have 5M followers by next week because the algorithm has a crush on you 🌟",
      "MoMA will display your code next to the Mona Lisa (it's just that beautiful 🎨)",
      "You'll accidentally invent something that changes humanity and retire before your first day 💰",
      "Every FAANG will have a bidding war for you (bullets flying, it's chaotic 🪓)",
      "You'll fix the entire company's infrastructure solo and they'll make you VP 🦸‍♀️",
      "Your LinkedIn post will go so viral Elon will buy your tweet for millions 🚀",
      "A company will invent itself just to hire you (that's how good you are 🔮)"
    ];

    const affirmations = [
      "You're doing better than you think (and way better than your imposter brain says 💕)",
      "Imposter syndrome is a liar and you should fight her 💅",
      "Your code might be a hot mess but it's YOUR hot mess (and that's valid 🎨)",
      "You belong in tech, full stop, no asterisks, no 'but actually's ✨",
      "Everyone's faking it too, they're just better at hiding the chaos 🌈",
      "Bad code days are just data collection for good code days (trust the process 💝)",
      "Your GitHub is not your personality (shocking but true 🌟)",
      "Rest is literally a feature, not a bug in your career 🛌"
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
