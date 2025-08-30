import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col items-center justify-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-lg"
      >
        🌐 My Awesome Site
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg text-gray-600 mb-8 max-w-lg text-center"
      >
        깔끔하고 애니메이션이 들어간 고퀄리티 웹사이트 예시입니다. Tailwind + Framer Motion 으로 제작되었습니다.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {["빠른 속도", "반응형 디자인", "부드러운 애니메이션"].map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.7 }}
            className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition cursor-pointer"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{text}</h2>
            <p className="text-gray-500">이 기능은 사이트를 더욱 매력적으로 만들어 줍니다.</p>
          </motion.div>
        ))}
      </div>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="#"
        className="mt-12 bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition text-lg font-medium"
      >
        시작하기
      </motion.a>
    </div>
  );
}
