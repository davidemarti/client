import Navbar from '../components/Header/Navbar';
import Table from '../components/Table/Schedule';

const SchedulingTable = () => {
  return (
    <div className='relative flex flex-col md:flex-row'>
      <Navbar />
      <div className="md:ml-8 mt-8 md:mt-0">
        <Table />
      </div>
    </div>
  );
};

export default SchedulingTable;
