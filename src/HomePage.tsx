import { useState } from 'react';

/**
 * Main Homepage
 * * The key starting point to the website.
 * * Key Features:
 * - **Responsive:** Links are hidden on mobile (`hidden`) and visible on desktop (`md:flex`).
 * - **Interactivity:** Links feature a smooth scale-up animation on hover.
 * - **Visuals:** Uses a white text palette with a drop shadow for readability against bright backgrounds.
 * * @returns {} The rendered navigation bar.
 */
function HomePage() {
  return (
    <div className="relative min-h-screen w-full bg-neutral-900">
      <img
        src="/boracay.jpg"
        alt="background img"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex flex-col h-screen">
        <div className="w-full max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
          <NavBar />
        </div>
        <div className="-mt-24 flex-1 flex flex-col justify-center items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchRoutesRibbon />
        </div>

      </div>
    </div>
  )
}


/**
 * NavBar Component
 * * A transparent, responsive navigation header designed to overlay the Hero image.
 * * Key Features:
 * - **Responsive:** Links are hidden on mobile (`hidden`) and visible on desktop (`md:flex`).
 * - **Interactivity:** Links feature a smooth scale-up animation on hover.
 * - **Visuals:** Uses a white text palette with a drop shadow for readability against bright backgrounds.
 * * @returns {JSX.Element} The rendered navigation bar.
 */

function NavBar() {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-8 text-white drop-shadow-lg">
      <div className="font-bold text-2xl tracking-wide select-none">ROUTIFY</div>
      <div className="hidden md:flex gap-16 text-sm font-medium select-none">
        <a href="#" className="hover:text-gray-200 hover:scale-110 transition-transform duration-200">Manage Booking</a>
        <a href="#" className="hover:text-gray-200 hover:scale-110 transition-transform duration-200">Travel Guides</a>
        <a href="#" className="hover:text-gray-200 hover:scale-110 transition-transform duration-200">Bus Reviews</a>
        <a href="#" className="hover:text-gray-200 hover:scale-110 transition-transform duration-200">Help</a>
      </div>

      <button className="select-none px-5 py-1.5 border border-white rounded-full hover:bg-white hover:text-black transition font-semibold text-sm">Sign In</button>

    </nav>
  )
}

/**
 * SearchRoutesRibbon
 * * The primary search interface allowing users to select Origin and Destination.
 * * Uses Glassmorphism (white/20 + blur) to blend with the background.
 */
function SearchRoutesRibbon() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const checkIfValid = () => {
    if (origin.toLowerCase() === destination.toLowerCase() && (origin !=='' || destination !== '')) {
      alert("You cannot go to the place you are already at!");
      return false;
    } 
    return true;
  };
  const handleSwapping = () => {
    let temp = origin
    setOrigin(destination);
    setDestination(temp);
  };

  return (
    <div className="w-full flex flex-col items-center text-center">

      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] select-none">
        Where do you want to go?
      </h1>

      <div className="w-full max-w-5xl bg-white/25 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-md shadow-black/50 flex flex-col gap-4">

        <div className="flex items-center gap-3">

          <span className="hidden md:block text-white text-xs font-semibold tracking-wider rounded-full bg-indigo-600 px-5 py-1 select-none">
            Top Picks for You
          </span>

          <div className="
                flex gap-2
                [&>button]:px-5 
                [&>button]:py-1  
                [&>button]:rounded-full 
                [&>button]:bg-white/15
                [&>button]:backdrop-blur-md
                [&>button]:shadow-sm
                [&>button]:shadow-black/25
                [&>button]:font-semibold 
                [&>button]:text-xs 
                [&>button]:text-white
                [&>button]:transition
                hover:[&>button]:bg-white
                hover:[&>button]:text-black
              ">
            <button onClick={() => setDestination("Maasin")}>Maasin</button>
            <button onClick={() => setDestination("Sogod")}>Sogod</button>
            <button onClick={() => setDestination("Baguio")}>Baguio</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 items-center">
          <div className="relative w-full group ">
            <input
              onChange={(e) => setOrigin(e.target.value)}
              type="text"
              placeholder="Origin"
              value={origin}
              className="select-none w-full h-12 bg-white/90 rounded-xl px-4 text-gray-800 text-s font-medium focus:outline-none focus:ring-2 focus-ring-indigo-500 placeholder:text-gray-400"
              />
          </div>

          <div className="text-white opacity-80 rotate-90 md:rotate-0 select-non hover:scale-125 transition">
            <button onClick={handleSwapping}>⇄</button>
          </div>

          <div className="relative w-full group">
            <input
              onChange={(e) => setDestination(e.target.value)}
              type="text"
              placeholder="Destination"
              value={destination}
              className={`
              select-none w-full h-12 bg-white/90 rounded-xl px-4 text-gray-800 text-s font-medium focus:outline-none focus:ring-2 focus-ring-indigo-500 placeholder:text-gray-400
              ${!checkIfValid() ? "border-red-500 text-red-600 focus:ring-red-200" : "border-transparent focus:ring-indigo-500"}
              `}
              //className="select-none w-full h-12 bg-white/90 rounded-xl px-4 text-gray-800 text-s font-medium focus:outline-none focus:ring-2 focus-ring-indigo-500 placeholder:text-gray-400"
            />
          </div>

          <div className="px-5">
            <button className="select-none px-5 py-1.5 border-[0.5px] text-white border-white rounded-full hover:bg-white hover:text-black transition font-semibold text-sm text-nowrap">
              Search Buses
            </button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default HomePage