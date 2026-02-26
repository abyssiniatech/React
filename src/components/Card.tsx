  type Props = {
    imgSrc: string;
    title: string;
    description: string;
    contact: string;
  }
const Card = (props: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
        {/* please create amazing card components */}
        <section className="card w-full max-w-sm mx-auto bg-white rounded-lg shadow-md p-4 text-center ">
        <img src={props.imgSrc} alt="Card Image" className=" h-48 object-cover rounded-md mb-4 rounded mx-auto " />
        <h2 className="text-xl font-bold mb-2">{props.title}</h2>
        <p className="text-gray-600 mb-4">{props.description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">{props.contact}</button>
      </section>
    </div>
  )
}

export default Card
