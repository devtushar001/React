import { useEffect, useState } from "react";
import './Api.css'

const Api = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes').then((res) => {
      return res.json()
    }).then((data) => {
      SetData(data.recipes);
      // console.log(data.recipes)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      {
        data.map((a, b, c) => {
          // console.log(a);
          // console.log(a.name)
          return (
            <>
              <div id="api-version">
                <img width="120px" src={a.image} alt="" />
                <p>{a.name}</p>
                <div className="button">
                  <button>y</button>
                  <button>x</button>
                </div>

              </div>
            </>
          )
        })
      }
    </>
  )
}

export default Api;