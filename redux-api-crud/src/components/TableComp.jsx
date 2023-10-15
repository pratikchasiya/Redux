import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserData, getUserData } from '../components/redux/actions/userAction'

const TableComp = () => {
    // const [array, setarray] = useState([]);
    const state = useSelector(state => state)
    console.log(state)
    const dispatch = useDispatch()
    const [blankObj, setblankObj] = useState({ name: '', gender: '', status: '', email: '' });
    let [obj, setobj] = useState({ ...blankObj });

    let authToken = {
        headers: {
            "Authorization": "Bearer c770f151d75f0717539d114e2b2c3f3d73b77ab3f816e56a35ae4853cbd0300d"
        }
    }

    // const getApiData = () => {
    //     axios
    //         .get("https://gorest.co.in/public/v2/users", authToken)
    //         .then((res) => {
    //             console.log(res.data);

    //             // setarray([...res.data]);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    // useEffect(() => {
    //    dispatch(getUserData())
    // }, []);

    // const getData = (e) => {
    //     obj[e.target.name] = e.target.value;
    //     setobj({ ...obj });
    //     // setblankObj({...blankObj})
    // };

    // const save = () => {
    //     if (obj.id == undefined) {
    //         axios.post('https://gorest.co.in/public/v2/users',obj, authToken).then((res) => {
    //             console.log(res)
    //             getApiData()
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    //     } else {
    //         // obj.id = obj._id;
    //         // console.log(obj.id)
    //         axios.patch('https://gorest.co.in/public/v2/users/'+obj.id, obj, authToken
    //         ).then((res) => {
    //             console.log(res)
    //             getApiData()
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    //     }

    //     setobj({ ...blankObj });
    // };

    const editData = (id) => {

        let editObj = state.users.users.find(x => x.id === id);
        setobj({ ...editObj });
        console.log(editObj)
    }

    const deleteData = (id) => {
       dispatch(deleteUserData(id))
    }


    return (
        <Fragment>
            <div>TableComp</div>

            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {state.users.users?.map((x, i) => {

                        return (

                            <tr key={i}>
                                <td>{x.id}</td>
                                <td>{x.name}</td>
                                <td>{x.email}</td>
                                <td>{x.gender}</td>
                                <td>{x.status}</td>
                                <td>
                                    <button className="btn btn-success me-2" onClick={() => editData(x.id)}>EDIT</button>
                                    <button className="btn btn-danger me-2" onClick={() => deleteData(x.id)}>DELETE</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}

export default TableComp