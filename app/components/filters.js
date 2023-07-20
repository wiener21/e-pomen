function Filters() {
    return (
        <div className='grid lg:grid-cols-4 grid-cols-1 lg:gap-4 p-4'>
          <select className="select select-bordered w-full mt-2">
            <option disabled selected>Izaberi mesto</option>
            <option>Beograd</option>
            <option>Novi Sad</option>
          </select>
          {/* <select className="select select-bordered w-full mt-2">
            <option disabled selected>Who shot first?</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select select-bordered w-full mt-2">
            <option disabled selected>Who shot first?</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select> */}
          <button className="btn w-full mt-2">Pretraži</button>
        </div>
    )
}

export default Filters;