import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const res = await fetch('https://lorem-ipsum-tau.vercel.app/api/lorem',  { next: { revalidate: 10000 } })
  const data = await res.json()

  return (
    <main>
      <div className={"bg-white"}>
      <div className={"mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:py-40 lg:px-8"}>
          <h2 className={"text-2xl font-bold leading-10 tracking-tight text-gray-900"}>Edge rendered page</h2>
          <dl className={"mt-10 space-y-8 divide-y divide-gray-900/10"}>
            {data.map((each, index) => (
              <div key={index.toString()} className={"pt-8 lg:grid lg:grid-cols-12 lg:gap-8"}>
                <dt className={"text-base font-semibold leading-7 text-gray-900 lg:col-span-5"}>{`Post - ${(index).toString()}`}</dt>
                <dd className={"mt-4 lg:col-span-7 lg:mt-0"}>
                  <p className={"text-base leading-7 text-gray-600"}>{each}</p>
                  <Link href={`/${index}`} className={"text-base font-semibold text-blue-600 hover:text-blue-900"}>
                    Read More
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  )
}
