import React from 'react'
import SmallMap from '@images/map-2.png'
import BigMap from '@images/map.png'

const Map = () => {
  return (
    <section className="map">
        <div>
            <a href="https://www.google.com/maps/place/Sveav%C3%A4gen+31,+111+34+Stockholm/@59.336637,18.0620105,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9d6799554e87:0x6562d2c842903003!8m2!3d59.336637!4d18.0620105!16s%2Fg%2F11c0rp4jyr?entry=ttu" target="_blank">
                <img className="small-map" src={SmallMap} alt="Location of the company on a map" />
                <img className="big-map" src={BigMap} alt="Location of the company on a map" />
            </a>
        </div>
    </section>
  )
}

export default Map