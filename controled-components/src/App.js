import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from 'react';
import { Table } from 'react-bootstrap';

function App() {
  const [fromdata, setFormdata] = useState({
    uname: '',
    uemail: '',
    uphone: '',
    umessage: '',
    index: ''
  });

  const [userData, setUserData] = useState([]);

  const getvalues = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    const oldData = { ...fromdata };
    oldData[inputName] = inputValue;
    setFormdata(oldData);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newData = {
      uname: fromdata.uname,
      uemail: fromdata.uemail,
      uphone: fromdata.uphone,
      umessage: fromdata.umessage,
    };

    if (fromdata.index === '') {
      const check = userData.some(value => value.uemail === fromdata.uemail || value.uphone === fromdata.uphone);

      if (check) {
        alert("Phone or email already exists");
      } else {
        setUserData([...userData, newData]);
        setFormdata({
          uname: '',
          uemail: '',
          uphone: '',
          umessage: '',
          index: ''
        });
      }
    } else {
      const editIndex = fromdata.index;
      const oldData = [...userData];
      oldData[editIndex] = newData;

      setUserData(oldData);
      setFormdata({
        uname: '',
        uemail: '',
        uphone: '',
        umessage: '',
        index: ''
      });
    }
  }

  const btnClick = (index) => {
    const afterDelete = userData.filter((value, idx) => idx !== index);
    setUserData(afterDelete);
  }

  const editData = (index) => {
    const dataForEdit = userData[index];
    if (dataForEdit) {
      setFormdata({
        ...dataForEdit,
        index: index
      });
    }
  }

  return (
    <div className="App">
      <div className='outer'>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input onChange={getvalues} value={fromdata.uname} type="text" className="form-control" name="uname" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input onChange={getvalues} value={fromdata.uemail} type="email" className="form-control" name="uemail" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input onChange={getvalues} value={fromdata.uphone} type="tel" className="form-control" name="uphone" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea onChange={getvalues} value={fromdata.umessage} className="form-control" name="umessage" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">{fromdata.index === '' ? 'Submit' : 'Update'}</button>
        </form>
      </div>

      <div className='ctable'>
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.length >= 1 ? (
              userData.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.uname}</td>
                  <td>{data.uemail}</td>
                  <td>{data.uphone}</td>
                  <td>{data.umessage}</td>
                  <td>
                    <button onClick={() => editData(index)}>Update</button> <button onClick={() => btnClick(index)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No Data Found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
