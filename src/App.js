import { useState, useEffect, useRef } from "react";

const lessons = [
  {
    id: "alphabet",
    title: "الحروف الأبجدية",
    emoji: "🔤",
    color: "#FF6B6B",
    bg: "#FFF0F0",
    items: [
      { letter: "A", word: "Apple", emoji: "🍎", arabic: "تفاحة" },
      { letter: "B", word: "Ball", emoji: "⚽", arabic: "كرة" },
      { letter: "C", word: "Cat", emoji: "🐱", arabic: "قطة" },
      { letter: "D", word: "Dog", emoji: "🐶", arabic: "كلب" },
      { letter: "E", word: "Elephant", emoji: "🐘", arabic: "فيل" },
      { letter: "F", word: "Fish", emoji: "🐟", arabic: "سمكة" },
      { letter: "G", word: "Grapes", emoji: "🍇", arabic: "عنب" },
      { letter: "H", word: "House", emoji: "🏠", arabic: "بيت" },
      { letter: "I", word: "Ice Cream", emoji: "🍦", arabic: "مثلجات" },
      { letter: "J", word: "Juice", emoji: "🧃", arabic: "عصير" },
      { letter: "K", word: "Key", emoji: "🔑", arabic: "مفتاح" },
      { letter: "L", word: "Lion", emoji: "🦁", arabic: "أسد" },
      { letter: "M", word: "Monkey", emoji: "🐵", arabic: "قرد" },
      { letter: "N", word: "Nest", emoji: "🪺", arabic: "عش" },
      { letter: "O", word: "Orange", emoji: "🍊", arabic: "برتقالة" },
      { letter: "P", word: "Pencil", emoji: "✏️", arabic: "قلم" },
      { letter: "Q", word: "Queen", emoji: "👑", arabic: "ملكة" },
      { letter: "R", word: "Rabbit", emoji: "🐰", arabic: "أرنب" },
      { letter: "S", word: "Sun", emoji: "☀️", arabic: "شمس" },
      { letter: "T", word: "Tiger", emoji: "🐯", arabic: "نمر" },
      { letter: "U", word: "Umbrella", emoji: "☂️", arabic: "مظلة" },
      { letter: "V", word: "Violin", emoji: "🎻", arabic: "كمان" },
      { letter: "W", word: "Watermelon", emoji: "🍉", arabic: "بطيخ" },
      { letter: "X", word: "Xylophone", emoji: "🎼", arabic: "إكسيلوفون" },
      { letter: "Y", word: "Yacht", emoji: "🛥️", arabic: "يخت" },
      { letter: "Z", word: "Zebra", emoji: "🦓", arabic: "حمار وحشي" },
    ],
  },
  {
    id: "numbers",
    title: "",
    emoji: "🔢",
    color: "#4ECDC4",
    bg: "#F0FFFE",
    items: [
      { letter: "1", word: "One", emoji: "1️⃣", arabic: "واحد" },
      { letter: "2", word: "Two", emoji: "2️⃣", arabic: "اثنان" },
      { letter: "3", word: "Three", emoji: "3️⃣", arabic: "ثلاثة" },
      { letter: "4", word: "Four", emoji: "4️⃣", arabic: "أربعة" },
      { letter: "5", word: "Five", emoji: "5️⃣", arabic: "خمسة" },
      { letter: "6", word: "Six", emoji: "6️⃣", arabic: "ستة" },
      { letter: "7", word: "Seven", emoji: "7️⃣", arabic: "سبعة" },
      { letter: "8", word: "Eight", emoji: "8️⃣", arabic: "ثمانية" },
      { letter: "9", word: "Nine", emoji: "9️⃣", arabic: "تسعة" },
      { letter: "10", word: "Ten", emoji: "🔟", arabic: "عشرة" },
    ],
  },
  {
    id: "colors",
    title: "الألوان",
    emoji: "🎨",
    color: "#A855F7",
    bg: "#FAF0FF",
    items: [
      {
        letter: "🔴",
        word: "Red",
        emoji: "🍅",
        arabic: "أحمر",
        color: "#FF4444",
      },
      {
        letter: "🔵",
        word: "Blue",
        emoji: "💧",
        arabic: "أزرق",
        color: "#4488FF",
      },
      {
        letter: "🟡",
        word: "Yellow",
        emoji: "🌟",
        arabic: "أصفر",
        color: "#FFD700",
      },
      {
        letter: "🟢",
        word: "Green",
        emoji: "🌿",
        arabic: "أخضر",
        color: "#44BB44",
      },
      {
        letter: "🟠",
        word: "Orange",
        emoji: "🍊",
        arabic: "برتقالي",
        color: "#FF8C00",
      },
      {
        letter: "🟣",
        word: "Purple",
        emoji: "🫐",
        arabic: "بنفسجي",
        color: "#8844CC",
      },
      {
        letter: "⚫",
        word: "Black",
        emoji: "🖤",
        arabic: "أسود",
        color: "#222222",
      },
      {
        letter: "⚪",
        word: "White",
        emoji: "🤍",
        arabic: "أبيض",
        color: "#DDDDDD",
      },
    ],
  },
  {
    id: "animals",
    title: "الحيوانات",
    emoji: "🐾",
    color: "#F59E0B",
    bg: "#FFFBF0",
    items: [
      { letter: "🦁", word: "Lion", emoji: "🦁", arabic: "أسد" },
      { letter: "🐘", word: "Elephant", emoji: "🐘", arabic: "فيل" },
      { letter: "🦒", word: "Giraffe", emoji: "🦒", arabic: "زرافة" },
      { letter: "🐬", word: "Dolphin", emoji: "🐬", arabic: "دلفين" },
      { letter: "🦅", word: "Eagle", emoji: "🦅", arabic: "نسر" },
      { letter: "🐸", word: "Frog", emoji: "🐸", arabic: "ضفدع" },
      { letter: "🦋", word: "Butterfly", emoji: "🦋", arabic: "فراشة" },
      { letter: "🐢", word: "Turtle", emoji: "🐢", arabic: "سلحفاة" },
    ],
  },
];

const quizQuestions = [
  {
    question: "What is this? 🍎",
    answer: "Apple",
    options: ["Apple", "Orange", "Banana", "Grape"],
  },
  {
    question: "What color is 🌿?",
    answer: "Green",
    options: ["Red", "Blue", "Green", "Yellow"],
  },
  {
    question: "How do you say 'كلب'?",
    answer: "Dog",
    options: ["Cat", "Dog", "Bird", "Fish"],
  },
  {
    question: "What number is 'Five'?",
    answer: "5",
    options: ["3", "4", "5", "6"],
  },
  {
    question: "What is this animal? 🦁",
    answer: "Lion",
    options: ["Tiger", "Lion", "Bear", "Wolf"],
  },
  {
    question: "Which word means 'فراشة'?",
    answer: "Butterfly",
    options: ["Dragonfly", "Bee", "Butterfly", "Ant"],
  },
];

const stars = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 8 + 4,
  delay: Math.random() * 3,
}));

export default function App() {
  const [screen, setScreen] = useState("home");
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [stars2, setStars2] = useState([]);
  const [xp, setXp] = useState(0);
  const [flipped, setFlipped] = useState({});

  useEffect(() => {
    const s = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 2,
    }));
    setStars2(s);
  }, []);
  const speak = (letter, word) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();

      const letterUtterance = new SpeechSynthesisUtterance(letter);
      letterUtterance.lang = "en-US";
      letterUtterance.rate = 0.8;

      const wordUtterance = new SpeechSynthesisUtterance(word);
      wordUtterance.lang = "en-US";
      wordUtterance.rate = 0.8;

      letterUtterance.onend = () => {
        window.speechSynthesis.speak(wordUtterance);
      };

      window.speechSynthesis.speak(letterUtterance);
    }
  };
  const handleAnswer = (option) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(option);
    const correct = option === quizQuestions[quizIndex].answer;
    setIsCorrect(correct);
    if (correct) {
      setQuizScore((s) => s + 1);
      setXp((x) => x + 10);
    }
    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
      if (quizIndex + 1 >= quizQuestions.length) {
        setQuizDone(true);
      } else {
        setQuizIndex((i) => i + 1);
      }
    }, 1200);
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setQuizDone(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={styles.root}>
      {/* Animated background */}
      <div style={styles.bgGradient} />
      {stars2.map((s) => (
        <div
          key={s.id}
          style={{
            ...styles.bgStar,
            left: " ${s.x}%",
            top: " ${s.y}% ",
            width: s.size,
            height: s.size,
            animationDelay: " ${s.delay}s ",
            animationDuration: " ${s.duration}s ",
          }}
        />
      ))}

      {/* XP bar */}
      <div style={styles.xpBar}>
        <span style={styles.xpLabel}>⭐ {xp} XP</span>
        <div style={styles.xpTrack}>
          <div style={{ ...styles.xpFill, width: " ${Math.min(xp, 100)}% " }} />
        </div>
      </div>

      {/* HOME */}
      {screen === "home" && (
        <div style={styles.homeContainer}>
          <div style={styles.mascot}>🦉</div>
          <h1 style={styles.homeTitle}>
            <span style={{ color: "#FFD700" }}>Learn</span>{" "}
            <span style={{ color: "#FF6B9D" }}>English</span>
          </h1>
          <p style={styles.homeSubtitle}>تعلّم الإنجليزية بطريقة ممتعة! 🚀</p>

          <div style={styles.menuGrid}>
            {lessons.map((lesson) => (
              <button
                key={lesson.id}
                style={{
                  ...styles.menuCard,
                  background: lesson.bg,
                  borderColor: lesson.color,
                }}
                onClick={() => {
                  setActiveLesson(lesson);
                  setScreen("lesson");
                  setFlipped({});
                }}
              >
                <span style={styles.menuEmoji}>{lesson.emoji}</span>
                <span style={{ ...styles.menuLabel, color: lesson.color }}>
                  {lesson.title}
                </span>
              </button>
            ))}

            <button
              style={{
                ...styles.menuCard,
                background: "#F0FFF4",
                borderColor: "#22C55E",
                gridColumn: "span 2",
              }}
              onClick={() => {
                resetQuiz();
                setScreen("quiz");
              }}
            >
              <span style={styles.menuEmoji}>🧠</span>
              <span style={{ ...styles.menuLabel, color: "#22C55E" }}>
                اختبر نفسك!
              </span>
            </button>
          </div>
        </div>
      )}

      {/* LESSON */}
      {screen === "lesson" && activeLesson && (
        <div style={styles.lessonContainer}>
          <button style={styles.backBtn} onClick={() => setScreen("home")}>
            ← رجوع
          </button>
          <h2 style={{ ...styles.lessonTitle, color: activeLesson.color }}>
            {activeLesson.emoji} {activeLesson.title}
          </h2>
          <div style={styles.cardsGrid}>
            {activeLesson.items.map((item, i) => (
              <div
                key={i}
                style={styles.flipCard}
                onClick={() => {
                  toggleFlip(i);
                  speak(item.letter, item.word);
                }}
              >
                <div
                  style={{
                    ...styles.flipInner,
                    transform: flipped[i] ? "rotateY(180deg)" : "rotateY(0)",
                  }}
                >
                  {/* Front */}
                  <div
                    style={{
                      ...styles.cardFront,
                      background: activeLesson.bg,
                      borderColor: activeLesson.color,
                    }}
                  >
                    <span style={styles.cardEmoji}>{item.emoji}</span>
                    <span
                      style={{
                        ...styles.cardLetter,
                        color: activeLesson.color,
                      }}
                    >
                      {item.letter}
                    </span>
                  </div>
                  {/* Back */}
                  <div
                    style={{
                      ...styles.cardBack,
                      background: activeLesson.color,
                    }}
                  >
                    <span style={styles.cardWordBack}>{item.word}</span>
                    <span style={styles.cardArabicBack}>{item.arabic}</span>
                    <span style={styles.speakerIcon}>🔊</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={styles.hintText}>انقر على البطاقة لمعرفة الكلمة 👆</p>
        </div>
      )}

      {/* QUIZ */}
      {screen === "quiz" && (
        <div style={styles.quizContainer}>
          <button style={styles.backBtn} onClick={() => setScreen("home")}>
            ← رجوع
          </button>

          {!quizDone ? (
            <>
              <div style={styles.quizProgress}>
                {quizQuestions.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      ...styles.quizDot,
                      background:
                        i < quizIndex
                          ? "#22C55E"
                          : i === quizIndex
                          ? "#FFD700"
                          : "#DDD",
                    }}
                  />
                ))}
              </div>
              <div style={styles.quizCard}>
                <p style={styles.quizNum}>
                  سؤال {quizIndex + 1} / {quizQuestions.length}
                </p>
                <p style={styles.quizQuestion}>
                  {quizQuestions[quizIndex].question}
                </p>
              </div>
              <div style={styles.optionsGrid}>
                {quizQuestions[quizIndex].options.map((opt) => {
                  let bg = "#fff";
                  let border = "#DDD";
                  let color = "#333";
                  if (selectedAnswer === opt) {
                    bg = isCorrect ? "#DCFCE7" : "#FEE2E2";
                    border = isCorrect ? "#22C55E" : "#EF4444";
                    color = isCorrect ? "#16A34A" : "#DC2626";
                  }
                  return (
                    <button
                      key={opt}
                      style={{
                        ...styles.optionBtn,
                        background: bg,
                        borderColor: border,
                        color,
                      }}
                      onClick={() => handleAnswer(opt)}
                    >
                      {selectedAnswer === opt && (isCorrect ? "✅ " : "❌ ")}
                      {opt}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <div style={styles.resultBox}>
              <div style={styles.resultEmoji}>
                {quizScore >= 5 ? "🏆" : quizScore >= 3 ? "🌟" : "💪"}
              </div>
              <h2 style={styles.resultTitle}>
                {quizScore >= 5
                  ? "ممتاز!"
                  : quizScore >= 3
                  ? "جيد جداً!"
                  : "استمر في التدرب!"}
              </h2>
              <p style={styles.resultScore}>
                {quizScore} / {quizQuestions.length} إجابات صحيحة
              </p>
              <div style={styles.resultXP}>+{quizScore * 10} XP 🌟</div>
              <button style={styles.retryBtn} onClick={resetQuiz}>
                حاول مرة أخرى 🔄
              </button>
              <button
                style={{
                  ...styles.retryBtn,
                  background: "#4ECDC4",
                  marginTop: 10,
                }}
                onClick={() => setScreen("home")}
              >
                الصفحة الرئيسية 🏠
              </button>
            </div>
          )}
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700;800&family=Tajawal:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Baloo 2', 'Tajawal', sans-serif; }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes pop {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes xpGlow {
          0%, 100% { box-shadow: 0 0 8px #FFD70066; }
          50% { box-shadow: 0 0 20px #FFD700AA; }
        }
        .flip-card:hover .flip-inner { transform: rotateY(180deg) !important; }
      `}</style>
    </div>
  );
}

const styles = {
  root: {
    minHeight: "100vh",
    background: "#0F0C29",
    fontFamily: "'Baloo 2', 'Tajawal', sans-serif",
    position: "relative",
    overflowX: "hidden",
    direction: "rtl",
    paddingBottom: 40,
  },
  bgGradient: {
    position: "fixed",
    inset: 0,
    background:
      "linear-gradient(135deg, #0F0C29 0%, #302B63 50%, #24243E 100%)",
    zIndex: 0,
  },
  bgStar: {
    position: "fixed",
    borderRadius: "50%",
    background: "#fff",
    animation: "twinkle 3s ease-in-out infinite",
    zIndex: 0,
    opacity: 0.4,
  },
  xpBar: {
    position: "fixed",
    top: 12,
    right: 16,
    display: "flex",
    alignItems: "center",
    gap: 8,
    zIndex: 100,
    background: "rgba(255,255,255,0.1)",
    padding: "6px 14px",
    borderRadius: 30,
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,215,0,0.3)",
    animation: "xpGlow 2s ease-in-out infinite",
  },
  xpLabel: {
    color: "#FFD700",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "'Baloo 2'",
  },
  xpTrack: {
    width: 60,
    height: 6,
    background: "rgba(255,255,255,0.2)",
    borderRadius: 10,
    overflow: "hidden",
  },
  xpFill: {
    height: "100%",
    background: "linear-gradient(90deg, #FFD700, #FF8C00)",
    borderRadius: 10,
    transition: "width 0.5s ease",
  },

  homeContainer: {
    position: "relative",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 50,
    padding: "50px 20px 20px",
  },
  mascot: {
    fontSize: 80,
    animation: "float 3s ease-in-out infinite",
    filter: "drop-shadow(0 10px 20px rgba(255,215,0,0.4))",
    marginBottom: 10,
  },
  homeTitle: {
    fontSize: 42,
    fontWeight: 800,
    fontFamily: "'Baloo 2'",
    textAlign: "center",
    lineHeight: 1.1,
    textShadow: "0 4px 20px rgba(0,0,0,0.5)",
    marginBottom: 6,
  },
  homeSubtitle: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 18,
    marginBottom: 30,
    fontFamily: "'Tajawal'",
  },
  menuGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
    width: "100%",
    maxWidth: 420,
  },
  menuCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    padding: "22px 16px",
    borderRadius: 20,
    border: "2px solid",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    animation: "pop 0.5s ease-out",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  },
  menuEmoji: { fontSize: 40 },
  menuLabel: { fontWeight: 700, fontSize: 16, fontFamily: "'Tajawal'" },

  // LESSON
  lessonContainer: {
    position: "relative",
    zIndex: 10,
    padding: "70px 16px 20px",
    maxWidth: 500,
    margin: "0 auto",
  },
  lessonTitle: {
    fontSize: 26,
    fontWeight: 800,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "'Tajawal'",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
  },
  flipCard: {
    height: 140,
    cursor: "pointer",
    perspective: 600,
  },
  flipInner: {
    width: "100%",
    height: "100%",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.5s ease",
  },
  cardFront: {
    position: "absolute",
    inset: 0,
    borderRadius: 18,
    border: "2px solid",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backfaceVisibility: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
  },
  cardEmoji: { fontSize: 36 },
  cardLetter: { fontSize: 22, fontWeight: 800, fontFamily: "'Baloo 2'" },
  cardBack: {
    position: "absolute",
    inset: 0,
    borderRadius: 18,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  },
  cardWordBack: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 800,
    fontFamily: "'Baloo 2'",
  },
  cardArabicBack: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 14,
    fontFamily: "'Tajawal'",
  },
  speakerIcon: { fontSize: 20, marginTop: 4 },
  hintText: {
    textAlign: "center",
    color: "rgba(255,255,255,0.5)",
    marginTop: 16,
    fontSize: 14,
    fontFamily: "'Tajawal'",
  },

  // QUIZ
  quizContainer: {
    position: "relative",
    zIndex: 10,
    padding: "70px 16px 20px",
    maxWidth: 460,
    margin: "0 auto",
  },
  quizProgress: {
    display: "flex",
    gap: 8,
    justifyContent: "center",
    marginBottom: 20,
  },
  quizDot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    transition: "background 0.3s",
  },
  quizCard: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: 24,
    padding: "28px 20px",
    textAlign: "center",
    marginBottom: 20,
    animation: "slideUp 0.4s ease",
  },
  quizNum: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 13,
    marginBottom: 10,
    fontFamily: "'Tajawal'",
  },
  quizQuestion: {
    color: "#fff",
    fontSize: 26,
    fontWeight: 700,
    fontFamily: "'Baloo 2'",
  },
  optionsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },
  optionBtn: {
    padding: "16px 12px",
    borderRadius: 16,
    border: "2px solid",
    fontSize: 17,
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.2s",
    fontFamily: "'Baloo 2'",
    boxShadow: "0 3px 12px rgba(0,0,0,0.1)",
  },

  // RESULT
  resultBox: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 28,
    padding: "40px 24px",
    textAlign: "center",
    animation: "pop 0.5s ease",
  },
  resultEmoji: { fontSize: 80, marginBottom: 12 },
  resultTitle: {
    color: "#FFD700",
    fontSize: 30,
    fontWeight: 800,
    marginBottom: 10,
    fontFamily: "'Tajawal'",
  },
  resultScore: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 14,
    fontFamily: "'Tajawal'",
  },
  resultXP: {
    display: "inline-block",
    background: "linear-gradient(90deg, #FFD700, #FF8C00)",
    color: "#fff",
    padding: "8px 22px",
    borderRadius: 30,
    fontWeight: 700,
    fontSize: 18,
    marginBottom: 20,
    fontFamily: "'Baloo 2'",
  },
  retryBtn: {
    display: "block",
    width: "100%",
    padding: "14px",
    background: "#A855F7",
    color: "#fff",
    border: "none",
    borderRadius: 16,
    fontSize: 18,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "'Tajawal'",
  },

  backBtn: {
    position: "fixed",
    top: 14,
    left: 16,
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.3)",
    color: "#fff",
    borderRadius: 20,
    padding: "6px 16px",
    cursor: "pointer",
    fontFamily: "'Tajawal'",
    fontSize: 14,
    zIndex: 200,
    backdropFilter: "blur(8px)",
  },
};
