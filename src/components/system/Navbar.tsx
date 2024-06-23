import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
    // Function to toggle bookmark state
    const toggleBookmark = () => {
        const newBookmarkState = !isBookmarked;
        setIsBookmarked(newBookmarkState);

        // Update localStorage with bookmarked state
        if (newBookmarkState) {
            localStorage.setItem('isBookmarked', 'true');
            alert('Website bookmarked!');
        } else {
            localStorage.removeItem('isBookmarked');
            alert('Bookmark removed.');
        }
    };

    const handleShare = () => {
        // Basic share functionality using Web Share API if available
        if (navigator.share) {
            const shareData = {
                title: 'Check out my prediction!',
                text: 'You will become a viral Instagram star!',
                url: window.location.href
            };
            navigator.share(shareData)
                .then(() => console.log('Shared successfully'))
                .catch((error) => console.error('Error sharing:', error));
        } else {
            alert('Share functionality is not supported in your browser.');
        }
    };

    return (
        <header className="z-50">
            <div className="container mx-auto flex justify-between items-center bg-gradient-to-r from-[rgba(6,95,70)] to-[rgba(0,0,0,0.9)] text-slate-50 fixed bottom-2 left-0 right-0 px-3 py-2 rounded-full" style={{ zIndex: '9999' }}>
                <Link
                    to="/"
                    className="h-8 w-auto whitespace-nowrap flex gap-2 justify-start items-center p-1 rounded-full hover:bg-[rgba(225,225,225,0.05)]"
                >
                    <img
                        src="/logo.png"
                        alt="Future Self Predictor Logo"
                        width={500}
                        height={500}
                        className="h-full w-auto"
                    />
                    <span>Future Self Predictor</span>
                </Link>
                <div className="w-full md:flex hidden justify-center items-center gap-2">
                    <Link
                        to="/"
                        className="px-4 py-2 rounded-xl border border-[rgba(225,225,225,0.1)] bg-[rgba(225,225,225,0.01)] hover:bg-[rgba(225,225,225,0.1)] text-slate-50 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        to="/how-it-works"
                        className="px-4 py-2 rounded-xl border border-[rgba(225,225,225,0.1)] bg-[rgba(225,225,225,0.01)] hover:bg-[rgba(225,225,225,0.1)] text-slate-50 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
                    >
                        How it Works?
                    </Link>
                    <a
                        href="mailto:webrizen@gmail.com"
                        className="px-4 py-2 rounded-xl border border-[rgba(225,225,225,0.1)] bg-[rgba(225,225,225,0.01)] hover:bg-[rgba(225,225,225,0.1)] text-slate-50 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
                    >
                        Contact
                    </a>
                </div>
                <div className="w-min whitespace-nowrap flex justify-end items-center gap-2">
                    <div
                        onClick={toggleBookmark}
                        title="Save"
                        className="w-[35px] h-[35px] flex justify-center items-center rounded-2xl bg-[rgba(225,225,225,0.01)] hover:bg-[rgba(225,225,225,0.1)] cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                    </div>
                    <div
                        onClick={handleShare}
                        title="Share"
                        className="w-[35px] h-[35px] flex justify-center items-center rounded-2xl bg-[rgba(225,225,225,0.01)] hover:bg-[rgba(225,225,225,0.1)] cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                        </svg>
                    </div>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://webrizen.vercel.app"
                        className="px-4 py-2 rounded-full border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
                    >
                        Hire Us
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;