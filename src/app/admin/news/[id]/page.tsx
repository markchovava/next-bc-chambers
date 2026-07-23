import BreadCrumbDefault from "../../_components/bread-crumbs/BreadCrumbDefault"
import { _newsViewAction } from "../../_data/actions/NewsActions";
import NewsEditModal from "./_components/NewsEditPage";
import NewsViewPage from "./_components/NewsViewPage";




interface Props {
  params: Promise<{
    id: string
  }>
}

export default async function page({ params }: Props) {
  const { id } = await params;
  const [newsData] = await Promise.all([
    _newsViewAction(id)
  ])

  const CrumbsData = [
    { id: 1, name: 'Admin', href: '/admin' },
    { id: 2, name: 'News', href: '/admin/news' },
    { id: 3, name: 'View News', href: `/admin/news/${id}` },
  ]

  return (
    <>
      <BreadCrumbDefault data={CrumbsData} />

      {/* PAGE */}
      <NewsViewPage dbData={newsData} />

      {/* MODAL */}
      <NewsEditModal id={id} />

    </>
  )
}
