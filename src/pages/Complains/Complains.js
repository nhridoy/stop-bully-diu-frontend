import React from "react";
import { Link } from "react-router-dom";
import myAxios from '../../utils/myAxios';
import { getAccessToken } from '../../utils/localstorage';

const Complains = () => {
  const [ complains, setcomplains ] = React.useState([]);
  const [ admin, setAdmin ] = React.useState(false);

  const getComplains = () => {
    myAxios.get('/api/complain_list/').then(res => {
      setcomplains(res.data);
    }).catch(err => {
      console.log(err.response.data);
    })
  }

  const isAdmin = () => {
    const token = getAccessToken();
    if (!token) {
      return false;
    }
    var base64Url = token.split('.')[ 1 ];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    setAdmin(JSON.parse(jsonPayload)?.is_staff);
    console.log(JSON.parse(jsonPayload)?.is_staff);
  }

  React.useEffect(() => {
    getComplains();
    isAdmin();
  }, [])

  const handleStatusUpdate = (id, status) => {
    const payload = {
      status
    }
    myAxios.patch(`/api/complain_status/${id}/`, payload).then(res => {
      getComplains();
      console.log(res);
    })
      .catch(err => {
        console.log(err.response.data);
      })
  }

  return (<div className="">
    <Link to='/new-complain' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create Complains</Link>
    <table className="table-auto w-full text-center">
      <thead>
        <tr>
          <th className="px-4 py-2">Complains</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          !!complains.length && complains.map(item => {
            return <tr key={item.id}>
              <td className="border px-4 py-2">
                <Link to={`/complain/${item.id}`} className="text-blue-700 hover:text-blue-800">{item.title}</Link>
              </td>
              <td className="border px-4 py-2">
                <span className="text-red-500 flex justify-center">
                  {
                    item.status === "new" ? <span className="bg-red-500 text-white rounded-full px-2.5 py-1.5">New</span> :
                      item.status === "processing" ? <span className="bg-orange-500 text-white rounded-full px-2.5 py-1.5">Proccessing</span> : <span className="bg-green-500 text-white rounded-full px-2.5 py-1.5">Closed</span>
                  }
                </span>
              </td>
              <td className="border px-4 py-2">
                <button type="button" onClick={() => handleStatusUpdate(item.id, item.status === "new" ? "processing" : "closed")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" disabled={item.status === "closed" || !admin}>
                  {
                    item.status === "new" ? "Set to Processing" :
                      item.status === "processing" ? "Set to Closed" : "Closed"
                  }
                </button>
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
  </div>);
};

export default Complains;
