import Card from "./Card";

const AdminDashboard = () => {

  return (
    <div className="flex flex-col p-8">
      <h1 className="text-2xl font-bold mb-8 tracking-wide text-sky-950">
        Dashboard Insights
      </h1>
      <div className="flex gap-9 ">
        <Card 
          title='Users' 
          counting='120' 
          subText='Total number of registered users on the platform.'
          className='text-sky-600 '
        />
        <Card 
          title='Properties' 
          counting='30' 
          subText='Properties listed and available for booking.'
          className='text-yellow-500'
        />
        <Card 
          title='Bookings' 
          counting='80' 
          subText='Confirmed reservations made by registered users.'
          className='text-green-500'
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
