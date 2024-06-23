import Navbar from '../components/system/Navbar';
import { cn } from '../lib/utils';
import AnimatedGridPattern from '../components/system/animated-grid-pattern';
import { User, Star, Share2 } from 'lucide-react';

export default function Howitworks() {
  return (
    <div className='relative w-full min-h-screen overflow-hidden'>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-bl from-slate-900 via-emerald-900 to-slate-900 text-white p-6">
        <div className="w-full max-w-3xl p-6 rounded-lg border border-[rgba(255,255,255,0.2)] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
          <h1 className="text-4xl font-bold mb-8 text-center">How It Works</h1>
          <div className="space-y-10">
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <User className="w-8 h-8 text-yellow-300" />
                <h2 className="text-2xl font-semibold">Step 1: Enter Your Details</h2>
              </div>
              <p className="ml-12">
                Fill in your name, age, and location. This helps us personalize your prediction and make it more fun!
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <Star className="w-8 h-8 text-yellow-300" />
                <h2 className="text-2xl font-semibold">Step 2: Get Your Prediction</h2>
              </div>
              <p className="ml-12">
                Click on "Predict My Future" and our system will generate a unique and quirky prediction about your future.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <Share2 className="w-8 h-8 text-yellow-300" />
                <h2 className="text-2xl font-semibold">Step 3: Share with Friends</h2>
              </div>
              <p className="ml-12">
                After receiving your prediction, you can download the prediction card and share it on your Instagram story or any other social media platform. Let everyone know what the future holds for you!
              </p>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
              <p>Made with ❤️ by <a href="https://webrizen.vercel.app" className="underline">webrizen</a>, a Full Stack Agency</p>
            </div>
        </div>
      </div>
      <AnimatedGridPattern
        numSquares={300}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}