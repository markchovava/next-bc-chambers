import BreadCrumbDefault from "../_components/bread-crumbs/BreadCrumbDefault"
import { _newsListAction } from "../_data/actions/NewsActions"
import NewsAddModal from "./_components/NewsAddModal"
import NewsPage from "./_components/NewsPage"



const CrumbsData = [
  { id: 1, name: 'Admin', href: '/admin' },
  { id: 2, name: 'News', href: '/admin/news' },
]


export default async function page() {
  const [newsData] = await Promise.all([_newsListAction()])

  return (
    <>
      <BreadCrumbDefault data={CrumbsData} />

      {/* PAGE */}
      <NewsPage dbData={newsData} />

      {/* MODAL */}
      <NewsAddModal />

    </>
  )
}
