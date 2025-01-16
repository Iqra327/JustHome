import Card from "./Card";
import growth from "../../../assets/imgs/growth1.png";

const Dashboard = () => {

  return (
    <div className="flex flex-col p-8">
      <h1 className="text-2xl font-bold mb-8 tracking-wide text-sky-950">
        Track Your Bookings
      </h1>
      <div className="flex gap-7">
        <Card 
          booking='Total Bookings' 
          counting='120' 
          subText='Total bookings till now.'
          className='text-sky-600'
        />
        <Card 
          booking='Pending Bookings' 
          counting='30' 
          subText='Bookings awaiting approval.'
          className='text-yellow-500'
        />
        <Card 
          booking='Approved Bookings' 
          counting='80' 
          subText='Bookings that have been approved.'
          className='text-green-500'
        />
      </div>
    </div>
  );
};

export default Dashboard;
