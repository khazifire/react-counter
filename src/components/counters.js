import Counter from './counter'
const Counters = () => {

return (
  <div className=''>
    <div className="flex justify-center gap-8 flex-wrap p-8">
      <Counter type={"Green Gas "} initial={20}/>
      <Counter type={"Carbon Dioxide"} initial={80} />
      <Counter type={"Water Vapor"} initial={50}/>
      <Counter type={"Oxygen"} initial={10}/>
    </div>

  </div>
  );
}
export default Counters;