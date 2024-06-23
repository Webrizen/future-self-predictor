import React, { useState, useEffect } from 'react';
import Navbar from '../components/system/Navbar';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useLocation } from 'react-router-dom';

type Prediction = {
  name: string;
  age: number;
  location: string;
  text: string;
};

export default function Playground() {
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get('name');
    const age = params.get('age');
    const locationParam = params.get('location');
    const text = params.get('text');

    if (name && age && locationParam && text) {
      setPrediction({
        name,
        age: parseInt(age),
        location: locationParam,
        text
      });
    }
  }, [location]);

  const generatePrediction = (name: string, age: number, location: string) => {
    const predictions = [
      "You will become a viral TikTok star!",
      "You will discover a new meme format that takes over the internet.",
      "You will invent a dance craze that everyone will copy.",
      "You will win a lifetime supply of avocado toast.",
      "You will travel to a new country and make lifelong friends.",
      "You will get featured in a popular YouTuber's vlog.",
      "You will create an app that everyone will use.",
      "You will start a trend that goes viral on Instagram.",
      "You will get a surprise shoutout from your favorite celebrity.",
      "You will find a hidden talent and become famous for it.",
      "You will design a fashion line that gets featured in Vogue.",
      "You will be invited to a secret underground party with A-listers.",
      "You will discover a new hobby that turns into a profitable side hustle.",
      "You will be cast as an extra in a blockbuster movie.",
      "You will win a huge giveaway on social media.",
      "You will get a chance to meet your idol and take an epic selfie.",
      "You will make a groundbreaking scientific discovery.",
      "You will get invited to a major influencer's birthday party.",
      "You will create a viral hashtag that everyone uses.",
      "You will have a cameo in a popular Netflix series."
    ];

    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    const newPrediction = { name, age, location, text: randomPrediction };
    setPrediction(newPrediction);

    const queryParams = new URLSearchParams(newPrediction as any).toString();
    window.history.replaceState(null, '', `?${queryParams}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const age = parseInt(formData.get('age') as string);
    const location = formData.get('location') as string;
    generatePrediction(name, age, location);
  };

  const handleShare = () => {
    if (prediction) {
      const shareData = {
        title: 'Future Prediction',
        text: `Based on the information you provided, our system predicts that ${prediction.text}`,
        url: window.location.href
      };

      if (navigator.share) {
        navigator.share(shareData)
          .then(() => console.log('Share successful'))
          .catch((error) => console.log('Error sharing:', error));
      } else {
        console.log('Share API not supported');
      }
    }
  };

  return (
    <div className='relative w-full min-h-screen overflow-hidden'>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-bl from-slate-900 via-emerald-900 to-slate-900  text-slate-50">
        <div className="w-full max-w-md p-6 rounded-lg border border-[rgba(0,0,0,0.1)] backdrop-blur-3xl">
          <h1 className="text-3xl font-bold mb-4 text-center">Predict Your Future</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className='space-y-2'>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="text" placeholder="Enter your name" required />
            </div>
            <div className='space-y-2'>
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" type="number" placeholder="Enter your age" required />
            </div>
            <div className='space-y-2'>
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" type="text" placeholder="Enter your location" required />
            </div>
            <Button type="submit" className="w-full">
              Predict My Future
            </Button>
          </form>
          {prediction && (
            <div className="mt-6 bg-[rgba(225,225,225,0.2)] backdrop-blur-3xl p-4 rounded-md">
              <h2 className="text-xl font-bold mb-2">Your Future Prediction</h2>
              <div className="prose text-muted-foreground">
                <p>
                  Based on the information you provided, our system predicts that {prediction.text}
                </p>
              </div>
              <Button onClick={handleShare} className="mt-4 w-full bg-blue-500 text-white">
                Share Prediction
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}