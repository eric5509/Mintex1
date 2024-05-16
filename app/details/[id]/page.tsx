type Params = {
    params: {
        id: string
    }
}

export default function DetailsPage({params}: Params) {
  const id = params.id
  return (
    <div className="pt-24">
      <p>{id}</p>
    </div>
  )
}
