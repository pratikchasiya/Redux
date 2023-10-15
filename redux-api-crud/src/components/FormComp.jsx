import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addUserData, editUserData, getUserData } from './redux/actions/userAction';

const FormComp = () => {
    const state = useSelector(state => state)
    const [blankObj, setblankObj] = useState({ name: '', gender: '', status: '', email: '' });
    let [obj, setobj] = useState({ ...blankObj });
    const dispatch = useDispatch()

    let authToken = {
        headers :{
            "Authorization":"Bearer e84d6f2c3fa754cdd0fcf1b7b616d508ef9742c5935bd4d580c459c312673323" 
        }
    }

    const getData = (e) => {
        obj[e.target.name] = e.target.value;
        setobj({ ...obj });
        // setblankObj({...blankObj})
    };

    const save = () => {
        if (obj.id == undefined) {
           dispatch(addUserData(obj))
        } else {
           dispatch(editUserData(obj))
        }
        setobj({ ...blankObj });
    };

    // const editData = (id)=>{
    //     /* AHIYA APRE AXIOS VALI METHOD THI PN DATA GET KARI SAKAY  AND AA METHOD PN USE THAY ARRAY MATHI OBJ NE FIND KRI NE OBJ NE SET KARAVI NE */
    //     /* AA METHOD USE THAY BECAUSE AMA APRE J KOI PN DATA MA CHANGE KARI SAKAY KOI PN AMA AMJ CHANGE NI KRI SKE */
    //     let editObj = array.find(x => x.id === id);
    //     setobj({ ...editObj });
    //     console.log(editObj)
    // }

    return (
        <Fragment>
            <div>FormComp</div>

            <form action="" className="w-50 mx-auto border border-1 p-4 mt-5" >
                <h3>FORM </h3>
                <label htmlFor="" className="d-block">
                    Name :
                </label>
                <input type="text" name="name" className="w-100" value={obj.name || ""}
                    onChange={getData} />

                <label htmlFor="" className="d-block">
                    Email :
                </label>
                <input type="email" name="email" className="w-100" value={obj.email || ""}
                    onChange={getData} />


                <label htmlFor="" className="d-block">
                    Gender :
                </label>

                <input type="radio" name="gender" value="male" className="me-2" checked={obj.gender == "male"}
                    onChange={getData} />
                Male

                <input type="radio" name="gender" value="female" className="mx-2" checked={obj.gender == "female"}
                    onChange={getData} />
                Female

                <label htmlFor="" className="d-block">
                    Status :
                </label>

                <input type="radio" name="status" value="active" className="me-2" checked={obj.status == "active"}
                    onChange={getData} />
                Active

                <input type="radio" name="status" value="inactive" className="mx-2" checked={obj.status == "inactive"}
                    onChange={getData} />
                InActive

                <br />

                <button type="button" className="btn btn-success mt-4" onClick={save}>
                    Save
                </button>
            </form>

        </Fragment>
    )
}

export default FormComp