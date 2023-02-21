import * as React from 'react'
import Head from 'next/head'

function calculateTime() {
  const difference = +new Date(`2023-03-22`) - +new Date()
  let timeLeft = []

  console.log(difference)
  if (difference > 0) {
    timeLeft['days'] = Math.floor(difference / (1000 * 60 * 60 * 24))
    timeLeft['hours'] = Math.floor((difference / (1000 * 60 * 60)) % 24)
    timeLeft['minutes'] = Math.floor((difference / 1000 / 60) % 60)
    timeLeft['seconds'] = Math.floor((difference / 1000) % 60)
  }

  return timeLeft
}

export default function Home() {
  const [timeLeft, setTimeLeft] = React.useState(calculateTime())

  React.useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTime())
    }, 1000)
    return () => clearTimeout(id)
  })

  const timerComponents = Object.keys(timeLeft).map(interval => {
    if (!timeLeft[interval]) {
      return null
    }

    return true
  })

  return (
    <div className="bg-gray-900">
      <Head>
        <title>
          {timerComponents.length ? "Soon!" : "Ramadan Kareem!"}
        </title>
      </Head>

      <main className="relative flex flex-col justify-center max-w-4xl min-h-screen px-10 py-20 mx-auto">
        {timerComponents.length ?
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-4 p-10 text-center bg-blue-400 rounded-md shadow-md lg:col-span-1">
              <span className="text-7xl">{timeLeft['days']}</span>
              <span className="block text-sm">Days</span>
            </div>

            <div className="col-span-4 p-10 text-center bg-blue-400 rounded-md shadow-md lg:col-span-1">
              <span className="text-7xl">{timeLeft['hours']}</span>
              <span className="block text-sm">Hours</span>
            </div>

            <div className="col-span-4 p-10 text-center bg-blue-400 rounded-md shadow-md lg:col-span-1">
              <span className="text-7xl">{timeLeft['minutes']}</span>
              <span className="block text-sm">Minutes</span>
            </div>

            <div className="col-span-4 p-10 text-center bg-blue-400 shadow-md bg unded-md lg:col-span-1">
              <span className="text-7xl">{timeLeft['seconds']}</span>
              <span className="block text-sm">econds</span>
            </div>
          </div>
          : <h2 className="text-4xl italic text-white">Ramadan Kareem!</h2>}
      </main>
    </div>
  )
}
