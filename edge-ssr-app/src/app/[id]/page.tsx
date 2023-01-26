import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default async function Home({ params }) {
  const { id } = params
  const res = await fetch(`https://lorem-ipsum-tau.vercel.app/api/lorem/${id}`,  { next: { revalidate: 10000 } })
  const data = await res.json()

  return (
    <main>
      <div className={"pt-8 lg:grid lg:grid-cols-12 lg:gap-8"}>
        <dt className={"text-base font-semibold leading-7 text-gray-900 lg:col-span-5"}>{`Post - ${(parseInt(id)).toString()}`}</dt>
        <dd className={"mt-4 lg:col-span-7 lg:mt-0"}>
          <p className={"text-base leading-7 text-gray-600"}>{data?.data ?? ""}</p>
        </dd>
        </div>
    </main>
  )
}
