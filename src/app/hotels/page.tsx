import { getAllHotels } from "@/lib/hotels";

const HotelsPage = async () => {
  const hotels = await getAllHotels();
  return (
    <div>
      {hotels.map((hotel: any) => (
        <div key={hotel.slug}>
          <h1>{hotel.title}</h1>
          {/* <p>{hotel.description}</p> */}
        </div>
      ))}
    </div>
  );
};
export default HotelsPage;
