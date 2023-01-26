import { useState } from 'react'
import { useEffect } from 'react'
import { tw } from 'twind'
import { Link, Route } from "wouter";

const AllPosts = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://lorem-ipsum-tau.vercel.app/api/lorem')
      .then(res => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  return (
    <div className={tw`bg-white`}>
      <div className={tw`mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:py-40 lg:px-8`}>
        <h2 className={tw`text-2xl font-bold leading-10 tracking-tight text-gray-900`}>Client side rendered page</h2>
        <dl className={tw`mt-10 space-y-8 divide-y divide-gray-900/10`}>
          {data.map((each, index) => (
            <div key={index.toString()} className={tw`pt-8 lg:grid lg:grid-cols-12 lg:gap-8`}>
              <dt className={tw`text-base font-semibold leading-7 text-gray-900 lg:col-span-5`}>{`Post - ${(index).toString()}`}</dt>
              <dd className={tw`mt-4 lg:col-span-7 lg:mt-0`}>
                <p className={tw`text-base leading-7 text-gray-600`}>{each}</p>
                <Link href={`/${index}`}>
                  {/* rome-ignore lint/a11y/useValidAnchor: link used from wouter */}
                  <a className={tw`text-base font-semibold text-blue-600 hover:text-blue-900`}>Read More</a>
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

const IndividualPost = ({ id }) => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch(`https://lorem-ipsum-tau.vercel.app/api/lorem/${id}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  return (
    <div className={tw`pt-8 lg:grid lg:grid-cols-12 lg:gap-8`}>
      <dt className={tw`text-base font-semibold leading-7 text-gray-900 lg:col-span-5`}>{`Post - ${(parseInt(id)).toString()}`}</dt>
      <dd className={tw`mt-4 lg:col-span-7 lg:mt-0`}>
        <p className={tw`text-base leading-7 text-gray-600`}>{data?.data ?? ""}</p>
      </dd>
    </div>
  )
}


function App() {
  return(
    <>
      <Route path="/" component={AllPosts}/>
      <Route path="/:id">{(params) => <IndividualPost id={params.id} />}</Route>
    </>
  )
}

export default App
